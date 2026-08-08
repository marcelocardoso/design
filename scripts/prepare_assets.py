#!/usr/bin/env python3
"""
Recorta as fotografias reais nos enquadramentos que o deck usa.

As fotos de origem são de baixa resolução (o PDF original foi comprimido para
caber em poucos MB). Duas consequências no design:

  * nenhum slide usa foto sangrada em 16:9 — não há pixels para isso;
  * cada recorte é ampliado 2x com LANCZOS, o que não cria detalhe, mas evita
    o serrilhado de escalonar no PowerPoint.

Duas fotos são de festas de 16 anos e traziam letreiro visível ("16" em
marquise, neon "Sweet 16"). O parâmetro `pre` corta essa região antes do
enquadramento, para não contradizer um deck sobre 15 anos.

Uso:  python3 scripts/prepare_assets.py
"""
import pathlib

from PIL import Image, ImageEnhance

ROOT = pathlib.Path(__file__).resolve().parent.parent
PHOTOS = ROOT / "source" / "photos"
ASSETS = ROOT / "assets"

# Fotografias reais extraídas da página 7 do original.
A = "x270.png"  # retrato, vestido azul, fundo de paetês dourados
B = "x279.png"  # equipe da Elegant Society com a debutante
C = "x275.png"  # salão montado, mesa principal
D = "x273.png"  # retrato externo, vestido pink
E = "x277.png"  # painel "15" em marquise e mesa de doces
F = "x281.png"  # debutante e amigas ao microfone
G = "x283.png"  # debutante com buquê, hall do salão

# (origem, saída, proporção alvo, âncora do recorte, pré-corte opcional)
# âncora: 0.0 = topo/esquerda, 1.0 = base/direita
CROPS = [
    (A, "capa.jpg",            0.68, (0.5, 0.02), None),
    (E, "missao_sq.jpg",       1.00, (0.5, 0.50), None),
    (B, "equipe.jpg",          0.55, (0.5, 0.45), None),
    (D, "debutante_sq.jpg",    1.00, (0.5, 0.50), None),
    (C, "salao.jpg",           1.42, (0.0, 0.50), (0, 0, 0.66, 1)),      # sem o "16"
    (G, "pkg_essencial.jpg",   1.55, (0.55, 0.30), None),
    (F, "pkg_signature.jpg",   1.55, (1.0, 0.45), (0.46, 0, 1, 1)),      # sem o neon
    (A, "momento.jpg",         0.72, (0.5, 0.05), None),
    (E, "contato.jpg",         1.35, (0.5, 0.45), None),
    # galeria do slide 6
    (G, "gal1.jpg",            1.50, (0.55, 0.35), None),
    (C, "gal2.jpg",            1.50, (0.0, 0.50), (0, 0, 0.66, 1)),
    (D, "gal3.jpg",            1.00, (0.5, 0.50), None),
    (F, "gal4.jpg",            1.50, (1.0, 0.45), (0.46, 0, 1, 1)),
    (E, "gal5.jpg",            1.00, (0.5, 0.50), None),
    (B, "gal6.jpg",            0.72, (0.5, 0.45), None),
]

UPSCALE = 2.0
# Tratamento sóbrio: tira o excesso de saturação das fotos de celular e
# devolve um pouco de contraste e definição depois da ampliação.
SATURATION, CONTRAST, SHARPNESS = 0.94, 1.05, 1.25


def crop(source, out_name, ratio, anchor, pre=None):
    im = Image.open(PHOTOS / source).convert("RGB")

    if pre:
        left, top, right, bottom = pre
        im = im.crop((int(left * im.width), int(top * im.height),
                      int(right * im.width), int(bottom * im.height)))

    w, h = im.size
    if w / h > ratio:                 # origem mais larga que o alvo: corta a largura
        tw, th = int(h * ratio), h
    else:                             # origem mais alta: corta a altura
        tw, th = w, int(w / ratio)

    x = int((w - tw) * anchor[0])
    y = int((h - th) * anchor[1])
    im = im.crop((x, y, x + tw, y + th))
    im = im.resize((int(tw * UPSCALE), int(th * UPSCALE)), Image.LANCZOS)

    im = ImageEnhance.Color(im).enhance(SATURATION)
    im = ImageEnhance.Contrast(im).enhance(CONTRAST)
    im = ImageEnhance.Sharpness(im).enhance(SHARPNESS)

    ASSETS.mkdir(parents=True, exist_ok=True)
    im.save(ASSETS / out_name, quality=93)
    print(f"  {out_name:22s} {im.width}x{im.height}  ({im.width / im.height:.2f}:1)")


def main():
    if not PHOTOS.exists():
        raise SystemExit("Rode scripts/extract_source.py primeiro.")
    print("Recortes:")
    for spec in CROPS:
        crop(*spec)


if __name__ == "__main__":
    main()
