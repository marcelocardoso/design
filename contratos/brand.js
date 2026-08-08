// Sistema de design dos documentos jurídicos da Elegant Society.
// Paleta e tipografia herdadas do deck da marca (marcelocardoso/design, build.js).

const {
  Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType,
  BorderStyle, AlignmentType, VerticalAlign, Header, Footer, PageNumber,
  TabStopType, Document, Packer, LevelFormat, PageBreak,
} = require("docx");

// ---------- tokens ----------
const BURG = "421325";
const BURG_D = "2C0C18";
const GOLD = "C0A17A";
const GOLD_L = "DCC6A8";
const GOLD_XL = "EEE3D4";
const IVORY = "F7F2EC";
const IVORY_2 = "EFE6DA";
const INK = "3A2B31";
const MUTED = "7C6772";
const WHITE = "FFFFFF";

const HEAD = "Cambria";
const BODY = "Calibri";

// US Letter, em DXA (1440 = 1")
const PAGE_W = 12240;
const MARGIN_X = 1296; // 0,9"
const CONTENT_W = PAGE_W - 2 * MARGIN_X; // 9648

const NONE = { style: BorderStyle.NONE, size: 0, color: "auto" };
const noBorders = { top: NONE, bottom: NONE, left: NONE, right: NONE };
const hair = (color = GOLD_L, size = 4) => ({ style: BorderStyle.SINGLE, size, color });

// ---------- primitivas de texto ----------

/** Filete horizontal — regra de ouro fina, usada como respiro entre blocos. */
function rule({ color = GOLD_L, size = 6, before = 0, after = 0 } = {}) {
  return new Paragraph({
    spacing: { before, after },
    border: { bottom: { style: BorderStyle.SINGLE, size, color, space: 1 } },
    children: [new TextRun({ text: "", size: 2 })],
  });
}

function spacer(pts = 8) {
  return new Paragraph({ spacing: { after: pts * 20 }, children: [new TextRun({ text: "", size: 2 })] });
}

/** Rótulo miúdo, versalete espaçado — o "eyebrow" do deck. */
function eyebrow(text, { color = GOLD, align = AlignmentType.LEFT, after = 120, before = 0, size = 15 } = {}) {
  return new Paragraph({
    alignment: align,
    spacing: { before, after },
    children: [new TextRun({
      text: text.toUpperCase(), font: BODY, size, color, bold: true, characterSpacing: 60,
    })],
  });
}

/** Corpo de texto justificado. */
function body(text, opts = {}) {
  const runs = Array.isArray(text) ? text : [new TextRun({ text, font: BODY, size: 20, color: INK })];
  return new Paragraph({
    alignment: opts.align || AlignmentType.JUSTIFIED,
    spacing: { after: opts.after ?? 140, line: opts.line ?? 264 },
    indent: opts.indent,
    children: runs,
  });
}

const t = (text, o = {}) => new TextRun({
  text, font: o.font || BODY, size: o.size || 20, color: o.color || INK,
  bold: o.bold, italics: o.italics, characterSpacing: o.cs,
});

/** Parágrafo com lide em negrito burgundy: "50.1 Acordo Integral. …" */
function lead(label, text, opts = {}) {
  return body([
    t(label + " ", { bold: true, color: BURG }),
    t(text),
  ], opts);
}

/** Título de seção numerado, com número em champanhe e filete inferior. */
function section(num, title) {
  return new Paragraph({
    keepNext: true,
    spacing: { before: 380, after: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: GOLD, space: 6 } },
    children: [
      new TextRun({ text: num ? num + "  " : "", font: HEAD, size: 24, color: GOLD, bold: true }),
      new TextRun({ text: title.toUpperCase(), font: HEAD, size: 22, color: BURG, bold: true, characterSpacing: 20 }),
    ],
  });
}

/** Título de bloco maior (Anexos, Assinaturas) — centralizado entre dois filetes. */
function banner(text, { size, cs } = {}) {
  const long = text.length > 34;
  const r = (before, after) => new Paragraph({
    keepNext: true,
    spacing: { before, after },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: GOLD, space: 1 } },
    children: [new TextRun({ text: "", size: 2 })],
  });
  return [
    r(420, 0),
    new Paragraph({
      keepNext: true,
      alignment: AlignmentType.CENTER,
      spacing: { before: 180, after: 180, line: 320 },
      children: [new TextRun({
        text: text.toUpperCase(), font: HEAD, bold: true, color: BURG,
        size: size || (long ? 21 : 24),
        characterSpacing: cs ?? (long ? 30 : 60),
      })],
    }),
    r(0, 260),
  ];
}

/** Item de lista com marcador losango champanhe. */
function bullet(text) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 110, line: 264 },
    indent: { left: 460, hanging: 240 },
    children: [
      t("◆  ", { color: GOLD, size: 16 }),
      ...(Array.isArray(text) ? text : [t(text)]),
    ],
  });
}

/** Caixa de aviso: fundo marfim, barra champanhe à esquerda. */
function callout(title, text, { accent = GOLD, fill = IVORY } = {}) {
  const kids = [];
  if (title) {
    kids.push(new Paragraph({
      spacing: { after: 90 },
      children: [t(title.toUpperCase(), { bold: true, color: BURG, size: 17, cs: 40 })],
    }));
  }
  const paras = Array.isArray(text) ? text : [text];
  paras.forEach((p, i) => kids.push(new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: i === paras.length - 1 ? 0 : 120, line: 252 },
    children: [t(p, { size: 19, color: INK })],
  })));

  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    borders: noBorders,
    rows: [new TableRow({
      children: [new TableCell({
        width: { size: CONTENT_W, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill, color: "auto" },
        margins: { top: 220, bottom: 220, left: 300, right: 300 },
        borders: { top: NONE, bottom: NONE, right: NONE, left: { style: BorderStyle.SINGLE, size: 18, color: accent } },
        children: kids,
      })],
    })],
  });
}

/** Tabela rótulo/valor das capas — faixas marfim alternadas. */
function infoTable(rows, { labelW = 3200 } = {}) {
  const valueW = CONTENT_W - labelW;
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [labelW, valueW],
    borders: noBorders,
    rows: rows.map(([label, value], i) => new TableRow({
      cantSplit: true,
      children: [
        new TableCell({
          width: { size: labelW, type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill: i % 2 ? IVORY_2 : IVORY, color: "auto" },
          margins: { top: 130, bottom: 130, left: 260, right: 200 },
          borders: { ...noBorders, bottom: hair(WHITE, 8) },
          verticalAlign: VerticalAlign.CENTER,
          children: [new Paragraph({ children: [t(label.toUpperCase(), { size: 15, bold: true, color: BURG, cs: 40 })] })],
        }),
        new TableCell({
          width: { size: valueW, type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill: i % 2 ? IVORY_2 : IVORY, color: "auto" },
          margins: { top: 130, bottom: 130, left: 260, right: 260 },
          borders: { ...noBorders, bottom: hair(WHITE, 8) },
          verticalAlign: VerticalAlign.CENTER,
          children: [new Paragraph({ children: [t(value, { size: 20, color: value.startsWith("[") ? MUTED : INK, italics: value.startsWith("[") })] })],
        }),
      ],
    })),
  });
}

/** Tabela de definições: termo em burgundy, definição ao lado. */
function defTable(rows) {
  const termW = 2900;
  const defW = CONTENT_W - termW;
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [termW, defW],
    borders: noBorders,
    rows: rows.map(([term, def]) => new TableRow({
      cantSplit: true,
      children: [
        new TableCell({
          width: { size: termW, type: WidthType.DXA },
          margins: { top: 120, bottom: 120, left: 0, right: 240 },
          borders: { ...noBorders, bottom: hair(GOLD_XL, 4) },
          children: [new Paragraph({ children: [t(term, { bold: true, color: BURG, size: 19 })] })],
        }),
        new TableCell({
          width: { size: defW, type: WidthType.DXA },
          margins: { top: 120, bottom: 120, left: 0, right: 0 },
          borders: { ...noBorders, bottom: hair(GOLD_XL, 4) },
          children: [new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: { line: 252 },
            children: [t(def, { size: 19 })],
          })],
        }),
      ],
    })),
  });
}

/** Campo de preenchimento: rótulo sobre linha champanhe. */
function fieldCell(label, width, { minH = 0 } = {}) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    margins: { top: 200, bottom: 60, left: 0, right: 300 },
    borders: noBorders,
    children: [
      new Paragraph({
        spacing: { before: minH, after: 40 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: GOLD, space: 2 } },
        children: [t("", { size: 20 })],
      }),
      new Paragraph({ children: [t(label.toUpperCase(), { size: 14, color: MUTED, bold: true, cs: 40 })] }),
    ],
  });
}

/** Grade de campos de preenchimento em N colunas. */
function fieldGrid(labels, cols = 2, opts = {}) {
  const w = Math.floor(CONTENT_W / cols);
  const rows = [];
  for (let i = 0; i < labels.length; i += cols) {
    const slice = labels.slice(i, i + cols);
    while (slice.length < cols) slice.push(null);
    rows.push(new TableRow({
      cantSplit: true,
      children: slice.map((l) => (l === null
        ? new TableCell({ width: { size: w, type: WidthType.DXA }, borders: noBorders, children: [new Paragraph({ children: [t("", { size: 20 })] })] })
        : fieldCell(l, w, opts))),
    }));
  }
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: new Array(cols).fill(w),
    borders: noBorders,
    rows,
  });
}

/**
 * Bloco de assinatura, uma coluna por parte. Cada coluna é uma única célula
 * (faixa burgundy aninhada + campos), para que `cantSplit` mantenha a parte
 * inteira na mesma página em vez de órfã do seu cabeçalho.
 */
function signatureBlock(parties) {
  const w = Math.floor(CONTENT_W / parties.length);
  const gut = 200;            // respiro entre colunas
  const inner = w - gut;      // largura útil da faixa e dos campos

  const bar = (title) => new Table({
    width: { size: inner, type: WidthType.DXA },
    columnWidths: [inner],
    borders: noBorders,
    rows: [new TableRow({
      cantSplit: true,
      children: [new TableCell({
        width: { size: inner, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: BURG, color: "auto" },
        margins: { top: 130, bottom: 130, left: 220, right: 220 },
        borders: noBorders,
        children: [new Paragraph({ children: [t(title.toUpperCase(), { color: GOLD_L, bold: true, size: 16, cs: 50 })] })],
      })],
    })],
  });

  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: new Array(parties.length).fill(w),
    borders: noBorders,
    rows: [new TableRow({
      cantSplit: true,
      children: parties.map((p) => (!p ? new TableCell({
        width: { size: w, type: WidthType.DXA },
        borders: noBorders,
        children: [new Paragraph({ children: [t("", { size: 2 })] })],
      }) : new TableCell({
        width: { size: w, type: WidthType.DXA },
        margins: { top: 0, bottom: 200, left: 0, right: gut },
        borders: noBorders,
        children: [
          bar(p.title),
          ...p.fields.flatMap((f) => {
            const [label, value] = Array.isArray(f) ? f : [f, null];
            return [
              new Paragraph({
                spacing: { before: 300, after: 40 },
                border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: GOLD, space: 2 } },
                children: [t(value || "", { size: 20, color: INK })],
              }),
              new Paragraph({ children: [t(label.toUpperCase(), { size: 14, color: MUTED, bold: true, cs: 40 })] }),
            ];
          }),
        ],
      }))),
    })],
  });
}

/** Item com caixa de seleção. */
function checkbox(text, { checked = false, bold = false } = {}) {
  return new Paragraph({
    // à esquerda de propósito: justificar esticaria o espaço após o glifo ☐
    alignment: AlignmentType.LEFT,
    spacing: { after: 130, line: 264 },
    indent: { left: 460, hanging: 340 },
    children: [
      t(checked ? "☒" : "☐", { size: 24, color: checked ? BURG : GOLD, font: BODY }),
      t("  "),
      ...(Array.isArray(text) ? text : [t(text, { bold })]),
    ],
  });
}

/** Capa: filete, wordmark, título, subtítulo. */
function cover({ wordmark, title, subtitle, kicker }) {
  const out = [
    new Paragraph({
      spacing: { before: 0, after: 0 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 18, color: BURG, space: 1 } },
      children: [t("", { size: 2 })],
    }),
    spacer(14),
    eyebrow(wordmark, { after: 320, size: 17 }),
  ];
  title.split("\n").forEach((line, i) => out.push(new Paragraph({
    spacing: { before: 0, after: i === title.split("\n").length - 1 ? 200 : 0, line: 560 },
    children: [t(line, { font: HEAD, size: 48, color: BURG, cs: 10 })],
  })));
  if (subtitle) {
    out.push(new Paragraph({
      spacing: { after: 240 },
      children: [t(subtitle, { size: 21, color: MUTED, italics: true })],
    }));
  }
  out.push(rule({ color: GOLD, size: 10, after: 0 }));
  if (kicker) {
    out.push(spacer(10));
    out.push(new Paragraph({
      spacing: { after: 260 },
      alignment: AlignmentType.JUSTIFIED,
      children: [t(kicker, { size: 19, color: INK })],
    }));
  } else {
    out.push(spacer(16));
  }
  return out;
}

// ---------- documento ----------

function buildDocument({ title, docLabel, children }) {
  return new Document({
    title,
    creator: "Elegant Society Inc.",
    description: title,
    styles: {
      default: {
        document: { run: { font: BODY, size: 20, color: INK } },
      },
    },
    sections: [{
      properties: {
        page: {
          size: { width: PAGE_W, height: 15840 },
          margin: { top: 1180, right: MARGIN_X, bottom: 1180, left: MARGIN_X, header: 620, footer: 620 },
        },
        titlePage: true, // a capa não leva cabeçalho/rodapé
      },
      headers: {
        first: new Header({ children: [new Paragraph({ children: [t("", { size: 2 })] })] }),
        default: new Header({
          children: [new Paragraph({
            spacing: { after: 0 },
            border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD_L, space: 6 } },
            tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
            children: [
              t("ELEGANT SOCIETY", { size: 14, bold: true, color: BURG, cs: 60 }),
              t("\t"),
              t(docLabel.toUpperCase(), { size: 14, color: MUTED, cs: 40 }),
            ],
          })],
        }),
      },
      footers: {
        first: new Footer({ children: [new Paragraph({ children: [t("", { size: 2 })] })] }),
        default: new Footer({
          children: [new Paragraph({
            spacing: { before: 0 },
            border: { top: { style: BorderStyle.SINGLE, size: 4, color: GOLD_L, space: 6 } },
            tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
            children: [
              t("Elegant Society Inc.  ·  20 Washington Street, Floor 2, Reading, MA 01867", { size: 14, color: MUTED }),
              t("\t"),
              t("", { size: 14, color: MUTED }),
              new TextRun({ children: [PageNumber.CURRENT], font: BODY, size: 14, color: BURG, bold: true }),
              t(" / ", { size: 14, color: MUTED }),
              new TextRun({ children: [PageNumber.TOTAL_PAGES], font: BODY, size: 14, color: MUTED }),
            ],
          })],
        }),
      },
      children,
    }],
  });
}

module.exports = {
  BURG, BURG_D, GOLD, GOLD_L, GOLD_XL, IVORY, IVORY_2, INK, MUTED, WHITE,
  HEAD, BODY, CONTENT_W, noBorders, hair, NONE,
  rule, spacer, eyebrow, body, t, lead, section, banner, bullet, callout,
  infoTable, defTable, fieldCell, fieldGrid, signatureBlock, checkbox, cover,
  buildDocument, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, AlignmentType, VerticalAlign, PageBreak,
};
