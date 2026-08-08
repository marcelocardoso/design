#!/usr/bin/env python3
"""
Extrai do PDF original os únicos ativos aproveitáveis:

  * o logo da Elegant Society, em alta resolução e com transparência
  * as 7 fotografias reais de eventos (página 7 do original)

Todo o resto do PDF era imagem gerada por IA — noivas adultas em vestido de
casamento — e foi descartado por não representar o produto (festa de 15 anos).

Uso:  python3 scripts/extract_source.py [caminho/do/original.pdf]
Saída: source/photos/*.png  e  assets/logo_*.png
"""
import sys
import pathlib

import numpy as np
import pymupdf
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "source" / "apresentacao-original.pdf"
PHOTOS = ROOT / "source" / "photos"
ASSETS = ROOT / "assets"

# Cor de fundo do slide original, usada para separar o logo dourado do fundo.
BURGUNDY = np.array([66, 19, 37], dtype=np.float32)
GOLD_PEAK = np.array([210, 180, 144], dtype=np.float32)

# Paletas de saída do logo (mesma silhueta, cores diferentes).
LOGO_VARIANTS = {
    "logo_gold.png": (192, 161, 122),
    "logo_burgundy.png": (66, 19, 37),
    "logo_ivory.png": (247, 242, 236),
}

# As 7 fotos reais estão todas na página 7 (índice 6).
PHOTO_PAGE = 6


def extract_logo(doc):
    """Renderiza a área do logo a 400 dpi e converte o fundo vinho em alpha.

    Extrair o XObject embutido não serve: o wordmark está gravado a 288x48 px,
    que fica visivelmente mole em qualquer tamanho de tela. Rasterizar a página
    e remover o fundo por distância de cor preserva o traço original.
    """
    pix = doc[0].get_pixmap(dpi=400, clip=pymupdf.Rect(200, 295, 545, 515))
    rgb = np.asarray(Image.frombytes("RGB", (pix.width, pix.height), pix.samples)).astype(np.float32)

    alpha = np.clip(
        np.linalg.norm(rgb - BURGUNDY, axis=2) / np.linalg.norm(GOLD_PEAK - BURGUNDY),
        0, 1,
    )
    stencil = np.zeros((*alpha.shape, 4), dtype=np.uint8)
    stencil[..., 3] = (alpha * 255).astype(np.uint8)

    trimmed = Image.fromarray(stencil, "RGBA")
    trimmed = trimmed.crop(trimmed.getbbox())
    base = np.asarray(trimmed)

    ASSETS.mkdir(parents=True, exist_ok=True)
    for name, colour in LOGO_VARIANTS.items():
        out = base.copy()
        out[..., 0], out[..., 1], out[..., 2] = colour
        Image.fromarray(out, "RGBA").save(ASSETS / name)
        print(f"  {name}  {trimmed.width}x{trimmed.height}")


def extract_photos(doc):
    """Salva as fotografias reais embutidas na página do portfólio."""
    PHOTOS.mkdir(parents=True, exist_ok=True)
    page = doc[PHOTO_PAGE]
    for img in page.get_images(full=True):
        xref = img[0]
        pix = pymupdf.Pixmap(doc, xref)
        if pix.n > 4:
            pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
        path = PHOTOS / f"x{xref}.png"
        pix.save(path)
        print(f"  {path.name}  {pix.width}x{pix.height}")


def main():
    if not SRC.exists():
        sys.exit(f"PDF original não encontrado: {SRC}")

    doc = pymupdf.open(SRC)
    print(f"Origem: {SRC.name} ({doc.page_count} páginas)")

    print("Logo:")
    extract_logo(doc)

    print(f"Fotografias reais (página {PHOTO_PAGE + 1}):")
    extract_photos(doc)


if __name__ == "__main__":
    main()
