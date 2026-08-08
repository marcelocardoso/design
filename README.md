# design

Materiais de design da **Elegant Society**. Hoje contém a apresentação comercial
de coordenação de festas de 15 anos, gerada por código a partir de um único
script — o deck é reconstruível e versionável, não um arquivo binário editado à mão.

## O deck

`out/Elegant Society - 15 Anos.pdf` — versão para enviar ao cliente
`out/Elegant Society - 15 Anos.pptx` — versão editável (16:9, 13.333" × 7.5")

13 slides: capa, o momento, o desafio, missão, processo, portfólio, os três
pacotes, comparativo, serviços adicionais, fechamento e contato.

## O que mudou em relação ao original

O PDF original (`source/apresentacao-original.pdf`, 15 páginas) usava **imagens
geradas por IA em 8 das 15 páginas**, todas retratando noivas adultas em vestido
de casamento — visivelmente sintéticas e representando o produto errado, já que o
deck vende coordenação de festa de 15 anos.

As 7 fotografias reais de eventos coordenados pela empresa estavam espremidas em
uma única colagem na página 7. A reconstrução inverteu essa lógica: **as imagens
de IA foram descartadas e o deck inteiro foi remontado sobre as fotos reais.**

Outras mudanças:

- paleta extraída da própria marca, por amostragem do logo original —
  vinho `#421325` e champanhe `#C0A17A`, em vez de cores arbitradas
- logo re-rasterizado a 400 dpi com transparência (o embutido no PDF tinha o
  wordmark a 288×48 px, mole em qualquer tamanho de tela)
- tipografia serifada nos títulos (Cambria) com corpo em Calibri
- moldura dourada como motivo recorrente das fotos
- corrigidos os erros de digitação do original: *Organizaçao*, *funcionario*
- acrescentado um slide comparativo dos três pacotes, que não existia

## Pontos em aberto

Dois itens dependem de confirmação de quem conhece a operação:

1. **Preços dos serviços adicionais se contradizem no original.** A página 11 traz
   "$45/h por funcionário"; a página 12 traz "$200/h por funcionário" — mesmo
   rótulo, valores diferentes. E os valores da página 12 não correspondem aos
   serviços listados nela (Ensaio Geral, Organização da Corte). Os números foram
   reproduzidos como estavam, sem arbitrar correção.

2. **Duas fotos são de festas de 16 anos**, com letreiro visível ("16" em marquise
   e neon "Sweet 16"). Os letreiros foram cortados para fora do enquadramento.
   Substituir por fotos de 15 anos seria preferível.

Há ainda um limite técnico: **as fotos de origem são de baixa resolução**, porque
o PDF foi comprimido. Por isso nenhum slide usa foto sangrada em tela cheia — não
há pixels para isso. Com os arquivos originais das fotografias, o deck ganharia
bastante impacto com enquadramentos maiores.

## Reconstruindo

```bash
npm install                             # pptxgenjs
python3 -m pip install pymupdf Pillow   # extração e recorte

python3 scripts/extract_source.py       # logo + fotos reais do PDF original
python3 scripts/prepare_assets.py       # recortes nos enquadramentos do deck
node build.js                           # gera o .pptx
```

Para exportar o PDF é preciso o LibreOffice Impress:

```bash
soffice --headless --convert-to pdf --outdir out "out/Elegant Society - 15 Anos.pptx"
```

## Estrutura

```
build.js                    gerador do deck — layout, textos e sistema visual
scripts/extract_source.py   extrai logo e fotografias reais do PDF original
scripts/prepare_assets.py   recorta as fotos nos enquadramentos usados
assets/                     logo e recortes prontos (versionados)
source/                     PDF original e fotografias extraídas
out/                        deck final em .pptx e .pdf
```

O sistema visual vive no topo de `build.js`: cores, fontes, margens e os
utilitários de composição (`framed`, `eyebrow`, `title`, `checklist`,
`priceBlock`). Ajustar a marca é mudar as constantes, não cada slide.
