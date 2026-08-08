const pptxgen = require("pptxgenjs");
const A = "assets/";

const BURG = "421325";      // vinho da marca
const BURG_D = "2C0C18";    // vinho profundo
const GOLD = "C0A17A";      // champanhe da marca
const GOLD_L = "DCC6A8";
const IVORY = "F7F2EC";
const IVORY_2 = "EFE6DA";
const INK = "3A2B31";
const MUTED = "7C6772";

const HEAD = "Cambria";
const BODY = "Calibri";

const W = 13.333, H = 7.5;
const M = 0.85;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "Elegant Society";
pres.title = "Elegant Society — Coordenação de 15 Anos";

// ---------- helpers ----------
function bg(slide, color) { slide.background = { color }; }

// moldura dourada sólida atrás da foto (motivo recorrente do deck)
function framed(slide, path, x, y, w, h, b = 0.045, frameColor = GOLD) {
  slide.addShape(pres.ShapeType.rect, {
    x: x - b, y: y - b, w: w + 2 * b, h: h + 2 * b,
    fill: { color: frameColor }, line: { color: frameColor, width: 0.5 },
  });
  slide.addImage({ path: A + path, x, y, w, h, sizing: { type: "cover", w, h } });
}

function eyebrow(slide, text, x, y, color = GOLD, w = 6) {
  slide.addText(text.toUpperCase(), {
    x, y, w, h: 0.28, margin: 0,
    fontFace: BODY, fontSize: 10.5, color, charSpacing: 4, bold: true,
    align: "left", valign: "middle",
  });
}

function title(slide, text, x, y, w, opts = {}) {
  slide.addText(text, {
    x, y, w, h: opts.h || 1.5, margin: 0,
    fontFace: HEAD, fontSize: opts.size || 44, color: opts.color || BURG,
    lineSpacing: opts.lineSpacing || (opts.size || 44) * 1.12,
    align: "left", valign: "top",
  });
}

function body(slide, text, x, y, w, h, opts = {}) {
  slide.addText(text, {
    x, y, w, h, margin: 0,
    fontFace: BODY, fontSize: opts.size || 14.5, color: opts.color || INK,
    lineSpacing: opts.lineSpacing || (opts.size || 14.5) * 1.55,
    align: "left", valign: "top",
  });
}

function monogram(slide, x, y, w, variant = "logo_gold.png", transparency = 0) {
  slide.addImage({ path: A + variant, x, y, w, h: w / 1.3029, transparency });
}

function pageNo(slide, n, color = MUTED, rightEdge = W - M) {
  slide.addText(String(n).padStart(2, "0"), {
    x: rightEdge - 0.8, y: H - 0.72, w: 0.8, h: 0.3, margin: 0,
    fontFace: BODY, fontSize: 10, color, charSpacing: 2, align: "right", valign: "middle",
  });
}

function footer(slide, color = MUTED) {
  slide.addText("ELEGANT SOCIETY", {
    x: M, y: H - 0.72, w: 4, h: 0.3, margin: 0,
    fontFace: BODY, fontSize: 9.5, color, charSpacing: 3, align: "left", valign: "middle",
  });
}

// lista de inclusões com marcador losango dourado
function checklist(slide, items, x, y, w, opts = {}) {
  const size = opts.size || 13.5;
  const rowH = opts.rowH || 0.335;
  items.forEach((it, i) => {
    slide.addText("◆", {
      x, y: y + i * rowH, w: 0.2, h: rowH, margin: 0,
      fontFace: BODY, fontSize: size - 5.5, color: opts.markColor || GOLD,
      align: "left", valign: "middle",
    });
    slide.addText(it, {
      x: x + 0.26, y: y + i * rowH, w: w - 0.26, h: rowH, margin: 0,
      fontFace: BODY, fontSize: size, color: opts.color || INK,
      align: "left", valign: "middle",
    });
  });
  return y + items.length * rowH;
}

function priceBlock(slide, label, value, x, y, w, opts = {}) {
  slide.addText(label.toUpperCase(), {
    x, y, w, h: 0.26, margin: 0,
    fontFace: BODY, fontSize: 9.5, color: opts.labelColor || MUTED,
    charSpacing: 3.5, align: "left", valign: "middle",
  });
  slide.addText(value, {
    x, y: y + 0.28, w, h: 0.78, margin: 0,
    fontFace: HEAD, fontSize: opts.size || 40, color: opts.color || BURG,
    align: "left", valign: "middle",
  });
}

// =====================================================================
// 01 — CAPA
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BURG);
  const pw = 5.7;
  s.addImage({ path: A + "capa.jpg", x: W - pw, y: 0, w: pw, h: H, sizing: { type: "cover", w: pw, h: H } });

  monogram(s, 1.05, 1.05, 1.9);

  eyebrow(s, "Elegant Society  ·  Cerimonial", 1.05, 3.02, GOLD, 5);
  title(s, "Aniversário\nde 15 Anos", 1.05, 3.42, 5.6, { size: 52, color: IVORY, h: 2.0 });
  s.addText("Coordenação e cerimonial para uma noite impecável.", {
    x: 1.05, y: 5.5, w: 5.2, h: 0.4, margin: 0,
    fontFace: BODY, fontSize: 14.5, color: GOLD_L, italic: true, valign: "middle",
  });
  s.addText("APRESENTAÇÃO DE SERVIÇOS", {
    x: 1.05, y: 6.5, w: 5, h: 0.3, margin: 0,
    fontFace: BODY, fontSize: 9.5, color: GOLD, charSpacing: 3.5, valign: "middle",
  });
  s.addNotes("Capa. Fotografia real de evento coordenado pela Elegant Society.");
}

// =====================================================================
// 02 — O MOMENTO
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, IVORY);
  eyebrow(s, "O momento", M, 1.15);
  title(s, "Uma noite\ninesquecível", M, 1.6, 6, { size: 44, h: 2.1 });
  body(s,
    "O aniversário de 15 anos é um marco na vida de uma jovem. É a celebração " +
    "que reúne a família, marca uma passagem e gera memórias que atravessam décadas.\n\n" +
    "Nosso trabalho é cuidar de tudo o que acontece nos bastidores — para que a " +
    "família viva a festa como convidada, e não como produção.",
    M, 3.85, 5.7, 2.3);

  framed(s, "missao_sq.jpg", 7.75, 1.15, 4.73, 4.73);
  s.addText("Mesa de doces e painel de 15 anos — evento real coordenado pela Elegant Society.", {
    x: 7.75, y: 6.05, w: 4.73, h: 0.5, margin: 0,
    fontFace: BODY, fontSize: 9.5, color: MUTED, italic: true, valign: "top",
  });
  footer(s); pageNo(s, 2);
}

// =====================================================================
// 03 — O DESAFIO
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BURG);
  const pw = 3.95;
  s.addImage({ path: A + "equipe.jpg", x: W - pw, y: 0, w: pw, h: H, sizing: { type: "cover", w: pw, h: H } });

  eyebrow(s, "O desafio", M, 1.0);
  title(s, "O que costuma\nsair do lugar", M, 1.45, 6, { size: 42, color: IVORY, h: 2.0 });

  const items = [
    ["I", "Atrasos no cronograma", "Um roteiro mal dimensionado empurra a noite inteira. Cada atraso encurta o tempo de festa."],
    ["II", "Entrada sem ensaio", "A entrada da debutante e a valsa são o ápice da noite — e o que mais sofre sem coordenação."],
    ["III", "Fornecedores desalinhados", "DJ, buffet, foto e salão trabalham em ritmos diferentes quando ninguém rege o conjunto."],
  ];
  let y = 3.1;
  items.forEach(([num, h, d]) => {
    s.addText(num, {
      x: M, y, w: 0.62, h: 0.42, margin: 0,
      fontFace: HEAD, fontSize: 20, color: GOLD, align: "left", valign: "middle",
    });
    s.addText(h, {
      x: M + 0.66, y, w: 5.4, h: 0.42, margin: 0,
      fontFace: BODY, fontSize: 15, bold: true, color: GOLD_L, valign: "middle",
    });
    s.addText(d, {
      x: M + 0.66, y: y + 0.42, w: 5.5, h: 0.72, margin: 0,
      fontFace: BODY, fontSize: 12.5, color: "D8C9CF", lineSpacing: 18, valign: "top",
    });
    y += 1.13;
  });
  footer(s, GOLD); pageNo(s, 3, GOLD, W - pw - 0.5);
}

// =====================================================================
// 04 — NOSSA MISSÃO
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, IVORY);
  framed(s, "debutante_sq.jpg", M, 1.15, 4.9, 4.9);

  eyebrow(s, "Nossa missão", 6.55, 1.5);
  title(s, "Transformar\nsonhos em roteiro", 6.55, 1.95, 6.1, { size: 40, h: 1.9 });
  body(s,
    "Na Elegant Society, o compromisso é traduzir a personalidade de cada jovem " +
    "em um evento que corre no horário, respira e emociona.\n\n" +
    "Planejamos o roteiro, alinhamos os fornecedores e conduzimos a noite do primeiro " +
    "convidado ao último brinde.",
    6.55, 3.95, 5.9, 2.0);
  footer(s); pageNo(s, 4);
}

// =====================================================================
// 05 — PROCESSO
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, IVORY_2);
  eyebrow(s, "Como trabalhamos", M, 0.95);
  title(s, "Três etapas, do primeiro café à última música", M, 1.4, 8.2, { size: 36, h: 1.5 });

  framed(s, "salao.jpg", M, 3.05, 4.95, 3.49);

  const steps = [
    ["01", "Planejamento", "Reuniões para entender estilo, expectativas e o roteiro que a família imagina para a noite."],
    ["02", "Organização", "Alinhamento com todos os fornecedores, montagem do cronograma e checagem do salão."],
    ["03", "Coordenação", "Execução no dia: entrada, valsa, apresentações e o suporte aos convidados do início ao fim."],
  ];
  let y = 3.05;
  steps.forEach(([n, h, d]) => {
    s.addText(n, {
      x: 6.7, y, w: 0.8, h: 0.5, margin: 0,
      fontFace: HEAD, fontSize: 26, color: GOLD, valign: "middle",
    });
    s.addText(h, {
      x: 7.5, y, w: 5, h: 0.5, margin: 0,
      fontFace: HEAD, fontSize: 20, color: BURG, valign: "middle",
    });
    s.addText(d, {
      x: 7.5, y: y + 0.5, w: 4.95, h: 0.72, margin: 0,
      fontFace: BODY, fontSize: 12.5, color: INK, lineSpacing: 18, valign: "top",
    });
    y += 1.32;
  });
  footer(s); pageNo(s, 5);
}

// =====================================================================
// 06 — PORTFÓLIO
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, IVORY);
  eyebrow(s, "Portfólio", M, 0.8);
  title(s, "Festas que já coordenamos", M, 1.22, 8, { size: 34, h: 0.7 });

  const cw = 3.15, ch = 2.10, gap = 0.24;
  const x0 = (W - (3 * cw + 2 * gap)) / 2, y0 = 2.00;
  const shots = ["gal1.jpg", "gal2.jpg", "gal3.jpg", "gal6.jpg", "gal4.jpg", "gal5.jpg"];
  shots.forEach((f, i) => {
    const x = x0 + (i % 3) * (cw + gap);
    const y = y0 + Math.floor(i / 3) * (ch + gap);
    framed(s, f, x, y, cw, ch, 0.035);
  });
  footer(s); pageNo(s, 6);
}

// =====================================================================
// 07 / 08 — PACOTES COM FOTO
// =====================================================================
function packageSlide({ n, num, name, kicker, blurb, photo, price, items, mirror }) {
  const s = pres.addSlide();
  bg(s, mirror ? IVORY_2 : IVORY);

  const textX = mirror ? 7.05 : M;
  const artX = mirror ? M : 7.55;
  const artW = 5.35, artH = artW / 1.55;

  eyebrow(s, `Pacote ${num}`, textX, 0.95);
  title(s, name, textX, 1.35, 5.6, { size: 46, h: 0.95 });
  s.addText(kicker, {
    x: textX, y: 2.32, w: 5.5, h: 0.34, margin: 0,
    fontFace: BODY, fontSize: 14, color: BURG, bold: true, valign: "middle",
  });
  s.addText(blurb, {
    x: textX, y: 2.72, w: 5.4, h: 0.8, margin: 0,
    fontFace: BODY, fontSize: 12.5, color: MUTED, lineSpacing: 18, italic: true, valign: "top",
  });

  s.addText("O QUE ESTÁ INCLUÍDO", {
    x: textX, y: 3.66, w: 5.4, h: 0.28, margin: 0,
    fontFace: BODY, fontSize: 9.5, color: MUTED, charSpacing: 3.5, valign: "middle",
  });
  checklist(s, items, textX, 4.0, 5.5, { size: 12.5, rowH: 0.305 });

  framed(s, photo, artX, 1.35, artW, artH);
  priceBlock(s, "Investimento sugerido", price, artX, artH + 1.95, artW, { size: 40 });

  footer(s); pageNo(s, n);
  return s;
}

packageSlide({
  n: 7, num: "01", name: "Essencial", kicker: "Coordenação do dia do evento",
  blurb: "Para quem já organizou a festa e precisa de uma equipe profissional para conduzi-la.",
  photo: "pkg_essencial.jpg", price: "$1,500",
  items: [
    "Reunião de alinhamento",
    "Cronograma da festa",
    "Contato com fornecedores na semana do evento",
    "Coordenação da entrada da debutante",
    "Organização das apresentações especiais",
    "Coordenação do evento por até 6 horas",
    "Suporte aos convidados",
  ],
});

packageSlide({
  n: 8, num: "02", name: "Signature", kicker: "Coordenação completa da festa",
  blurb: "Para famílias que desejam acompanhamento também na fase de planejamento.",
  photo: "pkg_signature.jpg", price: "$2,400", mirror: true,
  items: [
    "2 reuniões de planejamento",
    "Roteiro detalhado da festa",
    "Alinhamento com DJ ou banda",
    "Contato com fornecedores 2 semanas antes",
    "Acompanhamento da montagem do salão",
    "Organização da corte",
    "Coordenação do evento por até 6 horas",
    "1 assistente de cerimonial",
  ],
});

// =====================================================================
// 09 — PACOTE ELITE (destaque, fundo escuro)
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BURG_D);
  monogram(s, 9.9, 0.75, 2.9, "logo_gold.png", 82);

  eyebrow(s, "Pacote 03", M, 0.95);
  title(s, "Elite", M, 1.35, 5, { size: 52, color: IVORY, h: 1.05 });
  s.addText("Planejamento e coordenação completos", {
    x: M, y: 2.42, w: 6, h: 0.34, margin: 0,
    fontFace: BODY, fontSize: 15, color: GOLD_L, bold: true, valign: "middle",
  });
  s.addText("Nossa entrega mais completa: acompanhamos a família da escolha dos fornecedores ao último presente da noite.", {
    x: M, y: 2.85, w: 6.4, h: 0.75, margin: 0,
    fontFace: BODY, fontSize: 12.5, color: "D8C9CF", lineSpacing: 18, italic: true, valign: "top",
  });

  s.addText("O QUE ESTÁ INCLUÍDO", {
    x: M, y: 3.70, w: 6, h: 0.28, margin: 0,
    fontFace: BODY, fontSize: 9.5, color: GOLD, charSpacing: 3.5, valign: "middle",
  });
  const colA = [
    "Reuniões ilimitadas",
    "Roteiro completo do evento",
    "Orientação na escolha dos fornecedores",
    "Visita técnica ao local",
    "Coordenação do ensaio da valsa",
  ];
  const colB = [
    "Organização da corte",
    "Coordenação do evento por até 8 horas",
    "Equipe com 2 cerimonialistas",
    "Organização final dos presentes",
  ];
  checklist(s, colA, M, 4.05, 5.3, { size: 12.5, rowH: 0.315, color: IVORY });
  checklist(s, colB, 6.35, 4.05, 5.3, { size: 12.5, rowH: 0.315, color: IVORY });

  priceBlock(s, "Investimento sugerido", "$3,100", 6.35, 5.75, 5, {
    size: 40, color: GOLD, labelColor: GOLD_L,
  });
  footer(s, GOLD); pageNo(s, 9, GOLD);
}

// =====================================================================
// 10 — COMPARATIVO
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, IVORY);
  eyebrow(s, "Comparativo", M, 0.8);
  title(s, "Qual pacote combina com a sua festa", M, 1.22, 9, { size: 34, h: 0.7 });

  const rows = [
    ["Reuniões", "1 alinhamento", "2 de planejamento", "Ilimitadas"],
    ["Roteiro da festa", "Cronograma", "Roteiro detalhado", "Roteiro completo"],
    ["Contato com fornecedores", "Semana do evento", "2 semanas antes", "Da escolha ao evento"],
    ["Visita técnica ao local", "—", "—", "Incluída"],
    ["Ensaio da valsa", "—", "—", "Incluído"],
    ["Organização da corte", "—", "Incluída", "Incluída"],
    ["Horas de coordenação", "Até 6h", "Até 6h", "Até 8h"],
    ["Equipe no dia", "Cerimonialista", "+ 1 assistente", "2 cerimonialistas"],
    ["Investimento sugerido", "$1,500", "$2,400", "$3,100"],
  ];

  const cx = [M, 5.15, 7.85, 10.55];
  const cw = [4.1, 2.6, 2.6, 1.95];
  const headY = 2.25, rowH = 0.40;

  ["", "Essencial", "Signature", "Elite"].forEach((h, i) => {
    if (!h) return;
    s.addText(h, {
      x: cx[i], y: headY, w: cw[i], h: 0.4, margin: 0,
      fontFace: HEAD, fontSize: 17, color: BURG, align: "left", valign: "middle",
    });
  });

  rows.forEach((r, ri) => {
    const y = headY + 0.55 + ri * rowH;
    const last = ri === rows.length - 1;
    if (ri % 2 === 0) {
      s.addShape(pres.ShapeType.rect, {
        x: M - 0.18, y: y - 0.02, w: W - 2 * M + 0.36, h: rowH,
        fill: { color: IVORY_2 }, line: { color: IVORY_2, width: 0.25 },
      });
    }
    r.forEach((cell, ci) => {
      s.addText(cell, {
        x: cx[ci], y, w: cw[ci], h: rowH, margin: 0,
        fontFace: BODY, fontSize: last ? 13.5 : 12.5,
        bold: ci === 0 || last,
        color: last ? BURG : (ci === 0 ? INK : MUTED),
        align: "left", valign: "middle",
      });
    });
  });
  footer(s); pageNo(s, 10);
}

// =====================================================================
// 11 — SERVIÇOS ADICIONAIS
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, IVORY_2);
  eyebrow(s, "Complementos", M, 0.95);
  title(s, "Serviços adicionais", M, 1.38, 6, { size: 38, h: 0.85 });
  s.addText("Contratáveis junto a qualquer um dos três pacotes.", {
    x: M, y: 2.3, w: 5.6, h: 0.34, margin: 0,
    fontFace: BODY, fontSize: 13, color: MUTED, italic: true, valign: "middle",
  });

  const svc = [
    ["Hora extra", "Mais tempo de coordenação para aproveitar cada momento da noite.", "$45/h por funcionário"],
    ["Assistente adicional", "Um profissional extra no apoio à organização durante o evento.", "$250/h por assistente extra"],
    ["Ensaio geral", "Coordenação do ensaio para que cada entrada saia no tempo certo.", "$200/h"],
    ["Organização da corte", "Cada integrante da corte sabendo seu papel e seu momento.", "$200/h"],
  ];
  let y = 2.95;
  svc.forEach(([t, d, p]) => {
    s.addText(t, {
      x: M, y, w: 3.5, h: 0.36, margin: 0,
      fontFace: HEAD, fontSize: 17, color: BURG, valign: "middle",
    });
    s.addText(p, {
      x: M + 3.5, y, w: 2.6, h: 0.36, margin: 0,
      fontFace: BODY, fontSize: 12.5, color: GOLD, bold: true, align: "right", valign: "middle",
    });
    s.addText(d, {
      x: M, y: y + 0.36, w: 6.1, h: 0.36, margin: 0,
      fontFace: BODY, fontSize: 12, color: MUTED, valign: "middle",
    });
    y += 0.94;
  });

  framed(s, "contato.jpg", 7.75, 1.95, 4.73, 3.5);
  s.addText("Painel de 15 anos e mesa de doces — montagem acompanhada pela nossa equipe.", {
    x: 7.75, y: 5.62, w: 4.73, h: 0.5, margin: 0,
    fontFace: BODY, fontSize: 9.5, color: MUTED, italic: true, valign: "top",
  });
  footer(s); pageNo(s, 11);
}

// =====================================================================
// 12 — IMAGINE O MOMENTO
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BURG);
  framed(s, "momento.jpg", 8.05, 0.95, 4.15, 5.6);

  eyebrow(s, "Imagine", M, 1.75);
  title(s, "A música começa,\nas luzes baixam", M, 2.2, 6.6, { size: 40, color: IVORY, h: 2.0 });
  s.addText(
    "E a debutante entra — exatamente no tempo que ensaiamos, exatamente como ela imaginou. " +
    "É esse instante que a família vai lembrar por vinte anos.",
    {
      x: M, y: 4.35, w: 6.3, h: 1.2, margin: 0,
      fontFace: BODY, fontSize: 15, color: GOLD_L, lineSpacing: 25, italic: true, valign: "top",
    }
  );
  footer(s, GOLD); pageNo(s, 12, GOLD);
}

// =====================================================================
// 13 — CONTATO
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BURG_D);
  const pw = 4.6;
  s.addImage({ path: A + "gal6.jpg", x: W - pw, y: 0, w: pw, h: H, sizing: { type: "cover", w: pw, h: H } });

  monogram(s, M, 0.95, 1.7);

  eyebrow(s, "Vamos conversar", M, 2.72, GOLD, 5);
  title(s, "Obrigada por\nconsiderar a nossa equipe", M, 3.15, 6.6, { size: 34, color: IVORY, h: 1.9 });
  s.addText("Fale com a gente para montar um pacote sob medida para a sua festa.", {
    x: M, y: 4.72, w: 6.2, h: 0.4, margin: 0,
    fontFace: BODY, fontSize: 13.5, color: "D8C9CF", italic: true, valign: "top",
  });

  const contact = [
    ["Telefone", "978 206-8629"],
    ["E-mail", "hello@elegantsociety.us"],
    ["Site", "www.elegantsociety.us"],
  ];
  let x = M;
  contact.forEach(([l, v], i) => {
    const cw = i === 0 ? 2.0 : 3.0;
    s.addText(l.toUpperCase(), {
      x, y: 5.55, w: cw, h: 0.26, margin: 0,
      fontFace: BODY, fontSize: 9, color: GOLD, charSpacing: 3, valign: "middle",
    });
    s.addText(v, {
      x, y: 5.82, w: cw, h: 0.34, margin: 0,
      fontFace: BODY, fontSize: 13.5, color: IVORY, valign: "middle",
    });
    x += cw + 0.25;
  });
  footer(s, GOLD);
}

pres.writeFile({ fileName: "Elegant_Society_15_Anos.pptx" }).then(() => console.log("deck gerado"));
