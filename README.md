# design

Materiais de design da **Elegant Society**, gerados por código — reconstruíveis e
versionáveis, não arquivos binários editados à mão. Hoje são dois conjuntos: a
apresentação comercial de coordenação de festas de 15 anos e os contratos
jurídicos em português.

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

## Os contratos

Três documentos jurídicos da empresa, traduzidos do inglês para o português e
rediagramados sobre a mesma identidade do deck:

`contratos/out/Elegant Society - Termos e Condicoes Gerais.docx` — 17 páginas, 51 seções
`contratos/out/Elegant Society - Contrato de Prestacao de Servicos Autonomos.docx` — 11 páginas, 32 seções + Anexo A
`contratos/out/Elegant Society - Contrato de Cessao de Privacidade.docx` — 11 páginas, 19 seções + Anexos A e B

Cada um acompanha um `.pdf` para envio. Os originais em inglês eram documentos
de texto corrido, sem hierarquia visual além dos títulos em maiúsculas.

O sistema de diagramação vive em `contratos/brand.js` e reaproveita a paleta e a
tipografia do deck — vinho `#421325`, champanhe `#C0A17A`, marfim `#F7F2EC`,
Cambria nos títulos e Calibri no corpo. O que ele define:

- capa sem cabeçalho, com filete vinho, wordmark em versalete espaçado, título
  serifado e tabela de dados em faixas marfim alternadas
- títulos de seção com número em champanhe e filete inferior; anexos e
  assinaturas em faixa centralizada entre dois filetes
- caixas de aviso com fundo marfim e barra champanhe à esquerda
- blocos de assinatura em faixa vinho com linhas douradas, montados como célula
  única para não se separarem do cabeçalho na quebra de página
- cabeçalho e rodapé correntes com endereço e paginação

Ajustar a marca nos três documentos é mudar as constantes no topo de `brand.js`.

### Ponto em aberto

**Idioma de prevalência.** Os contratos são regidos pela lei de Massachusetts,
com foro em Middlesex County. A versão em português não traz cláusula dizendo
qual texto prevalece em caso de divergência — o usual é manter o inglês como
versão controladora e o português como cortesia. A cláusula não foi acrescentada
porque altera o conteúdo jurídico, e não a diagramação.

## Reconstruindo

```bash
npm install                             # pptxgenjs
node contratos/build.js                 # gera os três .docx
python3 -m pip install pymupdf Pillow   # extração e recorte

python3 scripts/extract_source.py       # logo + fotos reais do PDF original
python3 scripts/prepare_assets.py       # recortes nos enquadramentos do deck
node build.js                           # gera o .pptx
```

Para exportar os PDFs é preciso o LibreOffice (`libreoffice-impress` para o deck,
`libreoffice-writer` para os contratos):

```bash
soffice --headless --convert-to pdf --outdir out "out/Elegant Society - 15 Anos.pptx"
soffice --headless --convert-to pdf --outdir contratos/out contratos/out/*.docx
```

## Estrutura

```
build.js                    gerador do deck — layout, textos e sistema visual
scripts/extract_source.py   extrai logo e fotografias reais do PDF original
scripts/prepare_assets.py   recorta as fotos nos enquadramentos usados
assets/                     logo e recortes prontos (versionados)
source/                     PDF original e fotografias extraídas
out/                        deck final em .pptx e .pdf
contratos/brand.js          sistema de diagramação dos documentos jurídicos
contratos/0*.js             um script por contrato — só conteúdo, sem estilo
contratos/build.js          gera os três de uma vez
contratos/out/              contratos finais em .docx e .pdf
```

O sistema visual vive no topo de `build.js`: cores, fontes, margens e os
utilitários de composição (`framed`, `eyebrow`, `title`, `checklist`,
`priceBlock`). Ajustar a marca é mudar as constantes, não cada slide.
