const B = require("./brand");
const fs = require("fs");
const path = require("path");
const { section, body, lead, bullet, callout, infoTable, banner, cover, spacer,
        signatureBlock, checkbox, fieldGrid, buildDocument, Packer, Paragraph,
        PageBreak, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
        AlignmentType, VerticalAlign, CONTENT_W, noBorders, hair, t, rule, eyebrow } = B;

const P = (...a) => body(...a);

// Tabela de preços do buyout — três faixas, a última destacada para preenchimento.
const priceTable = () => {
  const c1 = 5600, c2 = CONTENT_W - c1;
  const row = (a, b, { fill, strong } = {}) => new TableRow({
    cantSplit: true,
    children: [
      new TableCell({
        width: { size: c1, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: fill || B.IVORY, color: "auto" },
        margins: { top: 160, bottom: 160, left: 300, right: 200 },
        borders: { ...noBorders, bottom: hair(B.WHITE, 8) },
        verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({ children: [t(a, { size: 19, color: B.INK })] })],
      }),
      new TableCell({
        width: { size: c2, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: fill || B.IVORY, color: "auto" },
        margins: { top: 160, bottom: 160, left: 300, right: 300 },
        borders: { ...noBorders, bottom: hair(B.WHITE, 8) },
        verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({ children: [t(b, { size: strong ? 21 : 19, color: strong ? B.BURG : B.INK, bold: true })] })],
      }),
    ],
  });
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [c1, c2],
    borders: noBorders,
    rows: [
      row("Valor de contrato de até US$ 15.000,00", "US$ 1.000,00 — valor mínimo"),
      row("Valor de contrato superior a US$ 15.000,00", "10% do valor total do contrato", { fill: B.IVORY_2 }),
      row("Valor acordado da Cessão de Privacidade para este evento", "US$ ______________", { fill: B.GOLD_XL, strong: true }),
    ],
  });
};

// Exibit B — grade de Pessoas Cobertas.
const coveredPersons = (n = 5) => {
  const ws = [3400, 1500, 2900, 1848];
  const head = ["Nome completo", "Adulto / Menor", "Relação / Responsável", "Assinatura exigida?"];
  const hRow = new TableRow({
    tableHeader: true,
    cantSplit: true,
    children: head.map((h, i) => new TableCell({
      width: { size: ws[i], type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: B.BURG, color: "auto" },
      margins: { top: 130, bottom: 130, left: 200, right: 160 },
      borders: { ...noBorders, right: hair(B.WHITE, 8) },
      children: [new Paragraph({ children: [t(h.toUpperCase(), { size: 14, bold: true, color: B.GOLD_L, cs: 30 })] })],
    })),
  });
  const rows = [hRow];
  for (let r = 0; r < n; r++) {
    rows.push(new TableRow({
      cantSplit: true,
      children: ws.map((w, i) => new TableCell({
        width: { size: w, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: r % 2 ? B.IVORY_2 : B.IVORY, color: "auto" },
        margins: { top: 220, bottom: 220, left: 200, right: 160 },
        borders: { ...noBorders, right: hair(B.WHITE, 8), bottom: hair(B.WHITE, 8) },
        children: [new Paragraph({ children: [t("", { size: 20 })] })],
      })),
    }));
  }
  return new Table({ width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: ws, borders: noBorders, rows });
};

const children = [
  ...cover({
    wordmark: "Elegant Society Inc.",
    title: "Contrato de Cessão\nde Privacidade",
    subtitle: "Aditivo de confidencialidade de mídia do evento",
    kicker: "Este Contrato limita o uso contratual, para portfólio e promoção, da Mídia do Evento Coberto pela Elegant Society, nos termos abaixo.",
  }),

  infoTable([
    ["Nome(s) do(s) Cliente(s)", "[NOME]"],
    ["Tipo de evento", "[TIPO]"],
    ["Data do evento", "[DATA]"],
    ["Local / Endereço", "[LOCAL E ENDEREÇO]"],
    ["Data do Contrato de Serviço", "[DATA]"],
    ["Valor do contrato", "[VALOR]"],
    ["Vigência da Cessão de Privacidade", "[DATA]"],
  ], { labelW: 3900 }),

  spacer(14),

  callout("Importante",
    "Este Contrato aplica-se somente após ser assinado por todas as partes exigidas e após a compensação do pagamento da Taxa de Cessão de Privacidade. Ele não altera os serviços, o preço, as condições de cancelamento ou as demais obrigações do Contrato de Serviço subjacente, salvo no que aqui estiver expressamente previsto."),

  section("1.", "Finalidade e relação com o Contrato de Serviço"),
  lead("1.1", "Este Contrato de Cessão de Privacidade (“Contrato de Privacidade”) é celebrado pela Elegant Society Inc., sociedade constituída em Massachusetts (“Elegant Society”, “Empresa”, “nós” ou “nosso”), e pelo cliente ou clientes identificados acima (“Cliente”, “você” ou “seu”)."),
  lead("1.2", "Este Contrato de Privacidade complementa o contrato de planejamento de eventos, design, decoração, coordenação, pedido de casamento, evento social, evento corporativo ou outro contrato de serviço celebrado entre as partes (o “Contrato de Serviço”), juntamente com quaisquer Termos e Condições Gerais nele incorporados."),
  lead("1.3", "A finalidade deste Contrato de Privacidade é substituir ou limitar a permissão contratual da Elegant Society para utilizar a Mídia do Evento Coberto para fins de portfólio, publicidade, promoção, educação, editorial ou redes sociais, em contrapartida à Taxa de Cessão de Privacidade descrita adiante."),
  lead("1.4", "Salvo quando este Contrato de Privacidade expressamente conflitar com o Contrato de Serviço, o Contrato de Serviço permanece inalterado e em pleno vigor. Havendo conflito direto exclusivamente quanto ao uso da Mídia do Evento Coberto pela Elegant Society, prevalece este Contrato de Privacidade."),

  section("2.", "Definições"),
  lead("2.1", "“Evento Coberto” significa o evento identificado na primeira página, incluindo ensaios, visitas técnicas, montagens, preparação, desmontagem, atividades de bastidores e demais atividades expressamente listadas no Anexo A."),
  lead("2.2", "“Mídia do Evento Coberto” significa fotografias, gravações de vídeo, gravações de áudio, entrevistas, depoimentos, imagens digitais, filmagens de bastidores, gravações de transmissão ao vivo e mídias substancialmente semelhantes captadas pela Elegant Society ou a ela entregues em conexão com o Evento Coberto."),
  lead("2.3", "“Pessoas Cobertas” significa o Cliente e qualquer pessoa adicional expressamente identificada no Anexo B. Um adulto não se torna Pessoa Coberta pelo simples fato de comparecer ao Evento Coberto."),
  lead("2.4", "“Uso para Portfólio ou Promoção” significa a publicação ou exibição no site, no portfólio, nos canais de redes sociais, em publicidade paga ou não paga, em material impresso, em inscrições para premiações, em mostras de fornecedores, em apresentações, em materiais educativos, em contatos com a imprensa, em posts de blog, em propostas, em materiais de venda e em finalidades substancialmente semelhantes de desenvolvimento comercial da Elegant Society."),
  lead("2.5", "“Uso Interno de Negócio” significa o armazenamento seguro e o uso razoavelmente necessário à administração do projeto, ao controle de qualidade, ao treinamento de pessoal sujeito a obrigações de confidencialidade, a seguros, à contabilidade, à conformidade legal, à solução de controvérsias, à guarda de registros ou à execução dos contratos entre as partes."),

  section("3.", "Escolha de privacidade"),
  P("O Cliente selecionará uma única opção abaixo. Somente uma opção pode ser selecionada. Caso nenhuma seja selecionada, aplicar-se-á a Restrição Total de Portfólio após o pagamento da taxa correspondente."),

  checkbox([
    t("RESTRIÇÃO TOTAL DE PORTFÓLIO. ", { bold: true, color: B.BURG }),
    t("A Elegant Society não publicará intencionalmente a Mídia do Evento Coberto para Uso de Portfólio ou Promoção após a Data de Vigência, observadas as exclusões deste Contrato."),
  ], { checked: true }),
  checkbox([
    t("PUBLICAÇÃO LIMITADA. ", { bold: true, color: B.BURG }),
    t("A Elegant Society poderá publicar somente as categorias ou os detalhes expressamente aprovados no Anexo A. Toda a demais Mídia do Evento Coberto permanece restrita."),
  ]),
  checkbox([
    t("EMBARGO TEMPORÁRIO. ", { bold: true, color: B.BURG }),
    t("A Elegant Society poderá publicar a Mídia do Evento Coberto aprovada somente após: ________________________________. Esta opção aplica-se apenas se precificada separadamente e aceita por escrito."),
  ]),

  lead("3.1", "A Escolha de Privacidade é uma restrição contratual imposta à Elegant Society. Não constitui transferência de direitos autorais, de titularidade ou de controle exclusivo sobre mídia criada por fotógrafos, videomakers, locais, convidados, fornecedores ou terceiros."),
  lead("3.2", "A Escolha de Privacidade não obriga a Elegant Society a obter, adquirir, editar, destruir ou entregar mídia que não esteja de outro modo em sua posse ou sob seu controle."),

  section("4.", "Taxa de cessão de privacidade e pagamento"),
  lead("4.1", "A Taxa de Cessão de Privacidade padrão é calculada por Evento Coberto, conforme abaixo:"),
  spacer(4),
  priceTable(),
  spacer(12),
  lead("4.2", "Salvo disposição diversa em aditivo assinado, a Taxa de Cessão de Privacidade é devida integralmente até quatorze (14) dias corridos antes do Evento Coberto. Para contratos assinados com menos de quatorze dias de antecedência do Evento Coberto, o pagamento é devido imediatamente na assinatura."),
  lead("4.3", "A Escolha de Privacidade somente produz efeitos após o recebimento, em fundos compensados, da Taxa de Cessão de Privacidade e de todos os tributos ou encargos de processamento aplicáveis. Até então, permanecem eficazes as disposições sobre mídia do Contrato de Serviço."),
  lead("4.4", "A Taxa de Cessão de Privacidade remunera a Elegant Society pela renúncia a um benefício contratado de portfólio e promoção, pela implementação administrativa, pelas comunicações com fornecedores, pela segregação de conteúdo e pela guarda de registros correlata. Salvo exigência legal ou disposição expressa neste Contrato, a taxa é não reembolsável uma vez que a Escolha de Privacidade produza efeitos."),
  lead("4.5", "Cancelamento, adiamento, mudança de local, redução do número de convidados ou redução do escopo de serviços não transferem automaticamente a Taxa de Cessão de Privacidade para outro evento. Qualquer transferência depende de aprovação escrita da Elegant Society."),

  section("5.", "Obrigações da Elegant Society"),
  P("Após a Escolha de Privacidade produzir efeitos, a Elegant Society adotará medidas comercialmente razoáveis para:"),
  bullet("sinalizar o Evento Coberto em seus registros internos de projeto como sujeito a este Contrato de Privacidade;"),
  bullet("instruir empregados e prestadores sob sua direção direta a não publicarem, em seu nome, Mídia do Evento Coberto restrita;"),
  bullet("evitar o envio intencional de Mídia do Evento Coberto restrita a publicações, premiações, blogs, plataformas de publicidade ou galerias de portfólio;"),
  bullet("remover a Mídia do Evento Coberto restrita de publicações futuras já agendadas sob seu controle direto, quando razoavelmente identificável antes da publicação; e"),
  bullet("responder, em prazo comercialmente razoável, a aviso escrito que identifique publicação específica da Elegant Society aparentemente incompatível com este Contrato."),
  lead("5.1", "A Elegant Society não é obrigada a monitorar toda a internet, plataformas de redes sociais, caches de mecanismos de busca, arquivos, republicações, capturas de tela ou contas de terceiros."),
  lead("5.2", "A Elegant Society não garante que sistemas técnicos, prévias automatizadas, caches de plataformas, backups ou índices de busca removerão o conteúdo imediatamente após a exclusão de conta sob seu controle."),

  section("6.", "Conteúdo publicado antes da data de vigência"),
  lead("6.1", "Salvo se a “Remoção Retroativa” for selecionada e aceita separadamente abaixo, este Contrato de Privacidade aplica-se somente prospectivamente. O conteúdo licitamente publicado antes da Data de Vigência poderá permanecer publicado."),
  checkbox([
    t("REMOÇÃO RETROATIVA SOLICITADA. ", { bold: true, color: B.BURG }),
    t("A Elegant Society empregará esforços comercialmente razoáveis para remover a Mídia do Evento Coberto especificamente identificada de contas e páginas sob seu controle direto. Taxa adicional, se houver: US$ ______________."),
  ]),
  lead("6.2", "A Remoção Retroativa não obriga ao recolhimento de material impresso, à destruição de registros arquivados, à remoção de publicações de terceiros, à eliminação de republicações ou capturas de tela, à exclusão de backups ou à remoção de sistemas não controlados pela Elegant Society."),
  lead("6.3", "O Cliente deverá fornecer URLs, capturas de tela, datas ou outras informações razoavelmente suficientes para identificar o conteúdo cuja remoção é solicitada."),

  section("7.", "Mídia de terceiros e publicações de fornecedores"),
  lead("7.1", "Este Contrato de Privacidade vincula apenas a Elegant Society e as pessoas que atuem sob sua autoridade. Não vincula fotógrafos, videomakers, locais, buffets, artistas, floristas, locadoras, convidados, participantes, veículos de imprensa, plataformas ou demais terceiros independentes, salvo se estes anuírem separadamente por escrito."),
  lead("7.2", "Cabe ao Cliente negociar restrições de privacidade diretamente com os fornecedores terceirizados cujos contratos ou serviços incluam fotografia, videografia, publicidade, uso de portfólio ou direitos de redes sociais."),
  lead("7.3", "A pedido escrito do Cliente, a Elegant Society poderá comunicar a existência deste Contrato de Privacidade aos fornecedores indicados, a título de cortesia administrativa. Tal comunicação não cria garantia, relação de mandato, dever de fiscalizar terceiros ou responsabilidade por sua conduta."),
  lead("7.4", "A Elegant Society não responde por conteúdo captado ou publicado por convidados, participantes, equipe do local, fornecedores, drones operados por terceiros, participantes de transmissões ao vivo ou membros do público."),

  section("8.", "Responsabilidades e poderes do Cliente"),
  lead("8.1", "O Cliente declara que cada signatário deste Contrato tem poderes para celebrá-lo e que as informações prestadas são exatas."),
  lead("8.2", "O Cliente não poderá conceder ou revogar direitos pertencentes a outro adulto capaz sem autorização escrita dessa pessoa. Cabe ao Cliente obter as autorizações, oposições ou contratos de privacidade separados necessários em relação a outros participantes adultos."),
  lead("8.3", "Quanto a menor listado como Pessoa Coberta, o pai, a mãe ou o responsável legal signatário declara ter poderes legais para atuar em nome desse menor. A Elegant Society poderá solicitar documentação ou assinatura em separado do responsável."),
  lead("8.4", "O Cliente deverá identificar, no Anexo A e antes do Evento Coberto, locais sensíveis à privacidade, indivíduos, atividades, práticas culturais, materiais proprietários, preocupações de segurança ou datas de embargo."),
  lead("8.5", "O Cliente deverá comunicar prontamente à Elegant Society, por escrito, qualquer alteração no plano do evento que afete materialmente a implementação da privacidade, incluindo mudança de local, eventos adicionais, novas áreas de filmagem, transmissão ao vivo, presença de celebridades ou figuras públicas e acesso da imprensa."),

  section("9.", "Usos internos, jurídicos e operacionais permitidos"),
  P("Não obstante a Escolha de Privacidade, a Elegant Society poderá reter e utilizar a Mídia do Evento Coberto para Uso Interno de Negócio, inclusive para:"),
  bullet("execução do Contrato de Serviço e comunicação com o Cliente e com fornecedores contratados;"),
  bullet("registros seguros de projeto, garantia de qualidade, documentação de incidentes, sinistros, contabilidade, finalidades fiscais, jurídicas, de conformidade e de guarda de registros;"),
  bullet("defesa, propositura ou resolução de reclamações, controvérsias, estornos, investigações, intimações ou processos, efetivos ou razoavelmente previsíveis;"),
  bullet("treinamento ou revisão privados envolvendo pessoal e assessores profissionais sujeitos a obrigações de confidencialidade; e"),
  bullet("cumprimento de lei, ordem judicial, requisição governamental, exigência de seguradora ou orientação profissional."),
  lead("9.1", "O Uso Interno de Negócio não autoriza publicidade pública nem publicação em portfólio público de forma incompatível com a Escolha de Privacidade selecionada."),

  section("10.", "Direitos autorais e titularidade"),
  lead("10.1", "Este Contrato de Privacidade não transfere direitos autorais ou titularidade sobre fotografias, vídeos, projetos, desenhos, cronogramas, layouts, painéis de referência, renderizações, materiais escritos ou demais bens de propriedade intelectual."),
  lead("10.2", "A Elegant Society mantém a titularidade de seus materiais preexistentes, métodos, conceitos de design, documentos, templates, processos e produto do trabalho, na forma prevista no Contrato de Serviço. A Escolha de Privacidade limita o uso público da Mídia do Evento Coberto, mas não cede ao Cliente a propriedade intelectual da Elegant Society."),
  lead("10.3", "Os direitos sobre mídia criada por fotógrafos ou videomakers terceirizados são regidos por seus contratos específicos e pela legislação aplicável."),

  section("11.", "Confidencialidade e segurança"),
  lead("11.1", "A Elegant Society empregará práticas administrativas razoáveis para identificar e segregar o Evento Coberto em seus sistemas empresariais habituais. O Cliente reconhece que nenhum método de armazenamento ou transmissão eletrônica pode ser garantido como completamente seguro."),
  lead("11.2", "A confidencialidade não se aplica à informação que: (a) seja ou se torne pública sem violação pela Elegant Society; (b) já fosse licitamente conhecida sem restrição; (c) seja licitamente recebida de terceiro sem dever de sigilo; (d) seja desenvolvida de forma independente, sem uso de informação confidencial do Cliente; ou (e) deva ser divulgada por força de lei ou de processo legal."),
  lead("11.3", "Quando legalmente permitido e comercialmente razoável, a Elegant Society limitará a divulgação compelida à informação estritamente exigida e poderá notificar o Cliente para que este busque tutela protetiva, a expensas próprias."),

  section("12.", "Inteligência artificial e ferramentas automatizadas"),
  lead("12.1", "A Elegant Society não utilizará intencionalmente Mídia do Evento Coberto restrita e identificável para criar conteúdo publicitário ou promocional gerado por IA e voltado ao público, após a Escolha de Privacidade produzir efeitos."),
  lead("12.2", "A Elegant Society poderá utilizar softwares comuns e ferramentas de armazenamento em nuvem, busca, edição, transcrição, gestão de projetos, prevenção a fraudes, segurança cibernética e administração automatizada em conexão com o Uso Interno de Negócio, desde que tal uso não constitua uso promocional público dissimulado."),
  lead("12.3", "Esta seção não regula as práticas tecnológicas de fornecedores independentes. O Cliente deve analisar separadamente os contratos e as políticas de privacidade desses fornecedores."),

  section("13.", "Aviso de descumprimento e oportunidade de correção"),
  lead("13.1", "O Cliente deverá enviar aviso escrito descrevendo qualquer alegado descumprimento com detalhamento suficiente para permitir a investigação, incluindo a localização ou URL do conteúdo, captura de tela quando disponível e a data em que foi identificado."),
  lead("13.2", "Ressalvadas as hipóteses que exijam tutela de urgência ou cautelar nos termos da legislação aplicável, a Elegant Society terá dez (10) dias úteis, contados do recebimento de aviso suficientemente detalhado, para investigar e iniciar as medidas corretivas comercialmente razoáveis."),
  lead("13.3", "A publicação inadvertida que seja removida ou desativada em prazo comercialmente razoável após aviso regular não será tratada como recusa dolosa em cumprir este Contrato."),
  lead("13.4", "Nada nesta seção suprime direitos ou remédios que não possam ser licitamente renunciados."),

  section("14.", "Remédios e limitação de responsabilidade"),
  lead("14.1", "O Cliente reconhece que o uso público não autorizado de mídia identificável pode causar dano de difícil quantificação. Observada a legislação aplicável, qualquer das partes poderá requerer a tutela específica cabível diante de descumprimento material, efetivo ou iminente."),
  lead("14.2", "Na máxima extensão permitida em lei, a Elegant Society não responderá por atos ou omissões de terceiros, republicações em plataformas, capturas de tela, caches de busca, acessos não autorizados que não decorram de sua falta de cuidado razoável, ou mídia fora de sua posse ou controle."),
  lead("14.3", "Ressalvada a responsabilidade que não possa ser legalmente limitada, a responsabilidade pecuniária agregada da Elegant Society decorrente exclusivamente de descumprimento deste Contrato de Privacidade não excederá o maior entre: (a) a Taxa de Cessão de Privacidade efetivamente paga pelo Evento Coberto; ou (b) o valor recuperável sob apólice de seguro aplicável ao sinistro específico."),
  lead("14.4", "Nenhuma das partes responderá, sob este Contrato de Privacidade, por danos indiretos, incidentais, especiais, exemplares ou consequenciais, salvo na medida em que tal limitação seja vedada por lei."),

  section("15.", "Ausência de garantia de anonimato integral"),
  lead("15.1", "A Escolha de Privacidade restringe as práticas de publicação da Elegant Society; não garante o sigilo do evento, o anonimato dos participantes, a exclusão do público, a prevenção de fotografias por convidados, o controle da videovigilância do local ou a remoção de todas as referências on-line ao Evento Coberto."),
  lead("15.2", "Quando for exigida confidencialidade reforçada, o Cliente deve considerar medidas adicionais, tais como exclusividade do local, avisos de confidencialidade aos convidados, restrição de dispositivos, equipe de segurança, acordos de confidencialidade com fornecedores, listas fechadas de convidados, transporte privativo e restrições de mídia junto a terceiros."),

  section("16.", "Vigência, modificação e revogação"),
  lead("16.1", "Este Contrato de Privacidade tem início na Data de Vigência e perdura enquanto a Elegant Society retiver ou controlar a Mídia do Evento Coberto, observados os usos permitidos e as exclusões aqui previstas."),
  lead("16.2", "O Cliente não poderá ampliar unilateralmente a Escolha de Privacidade após o Evento Coberto. Restrições adicionais, remoção retroativa ou cobertura de eventos ou pessoas adicionais exigem aditivo escrito e podem implicar custos adicionais."),
  lead("16.3", "A Elegant Society somente poderá renunciar a uma exigência mediante instrumento escrito assinado. A demora ou a omissão em exigir uma disposição não constitui renúncia continuada."),

  section("17.", "Solução de controvérsias e lei aplicável"),
  lead("17.1", "Antes de propor ação judicial, as partes buscarão resolver a controvérsia de boa-fé, mediante aviso escrito e tratativa direta. Não havendo solução, participarão de mediação não vinculante em Massachusetts antes de iniciar o litígio, salvo quando uma parte razoavelmente requerer tutela de urgência ou quando a mediação não puder ser licitamente exigida."),
  lead("17.2", "Os honorários cobrados pelo mediador serão divididos igualmente, salvo acordo diverso. Cada parte permanece responsável por seus próprios honorários advocatícios e custos de preparação, ressalvados direitos legais irrenunciáveis ou decisão judicial posterior."),
  lead("17.3", "Este Contrato de Privacidade é regido pelas leis do Estado de Massachusetts, sem consideração às suas normas de conflito de leis. Observadas as regras de competência aplicáveis, os processos serão propostos perante juízo estadual ou federal localizado em ou com competência sobre Middlesex County, Massachusetts."),
  lead("17.4", "Nada neste Contrato implica renúncia a direitos ou remédios irrenunciáveis sob a legislação de defesa do consumidor, de privacidade, de transações eletrônicas ou outra legislação aplicável."),

  section("18.", "Assinaturas eletrônicas, vias e notificações"),
  lead("18.1", "As partes consentem com registros e assinaturas eletrônicas. A assinatura entregue por meio eletrônico ou por plataforma de assinatura eletrônica terá a mesma eficácia de assinatura original, na extensão permitida em lei."),
  lead("18.2", "Este Contrato de Privacidade poderá ser assinado em vias, cada qual considerada original e todas, em conjunto, um único instrumento."),
  lead("18.3", "As notificações relativas a este Contrato de Privacidade devem ser enviadas por e-mail para hello@elegantsociety.us e para o e-mail do Cliente indicado abaixo, salvo se uma parte informar endereço substituto por escrito. Notificações de natureza jurídica devem também ser enviadas por meio rastreável, quando razoavelmente praticável."),

  section("19.", "Integralidade; autonomia das cláusulas"),
  lead("19.1", "Este Contrato de Privacidade, juntamente com seus anexos e as disposições do Contrato de Serviço aqui expressamente incorporadas, contém o acordo integral quanto à Escolha de Privacidade. Declarações verbais e mensagens informais não o alteram."),
  lead("19.2", "Qualquer aditamento deverá ser feito por escrito e assinado pela Elegant Society e por todos os Clientes cujos direitos ou obrigações sejam materialmente afetados."),
  lead("19.3", "Se uma disposição for considerada inválida ou inexequível, será aplicada até o limite máximo lícito ou será excluída, permanecendo eficazes as demais disposições."),
  lead("19.4", "Os títulos servem apenas à conveniência. “Inclusive” significa “inclusive, sem limitação”. Os termos no singular abrangem o plural quando o contexto exigir."),

  new Paragraph({ children: [new PageBreak()] }),

  ...banner("Anexo A — Escopo, restrições e exceções aprovadas"),

  P([t("Atividades cobertas", { bold: true, color: B.BURG })], { after: 100 }),
  new Paragraph({
    spacing: { after: 240, line: 300 },
    children: [
      t("☐ Evento    ☐ Ensaio    ☐ Montagem    ☐ Desmontagem    ☐ Visita técnica    ☐ Outra: ", { size: 20 }),
      t("__________________", { size: 20, color: B.MUTED }),
    ],
  }),

  fieldGrid([
    "Locais restritos", "Conteúdo restrito",
    "Detalhes não identificadores aprovados", "Exceções de publicação aprovadas",
    "Data de embargo / liberação", "Instruções especiais de segurança",
  ], 2, { minH: 140 }),

  ...banner("Anexo B — Pessoas cobertas"),

  P("Liste apenas as pessoas cujas restrições de mídia a Elegant Society concordou em administrar sob este Contrato. Cada adulto capaz poderá ser solicitado a assinar reconhecimento em separado. No caso de menores, identifique o pai, a mãe ou o responsável legal signatário.", { after: 200 }),
  coveredPersons(5),

  new Paragraph({ children: [new PageBreak()] }),

  ...banner("Reconhecimentos do Cliente"),

  checkbox("Revisei a Escolha de Privacidade, a taxa, as exclusões e as limitações relativas a terceiros."),
  checkbox("Compreendo que este Contrato não vincula fornecedores independentes, convidados, plataformas ou membros do público."),
  checkbox("Compreendo que a Taxa de Cessão de Privacidade é distinta dos valores de planejamento, design, decoração, coordenação e fornecedores."),
  checkbox("Compreendo que permanecem autorizados os usos internos, jurídicos, securitários, de conformidade e de guarda de registros."),
  checkbox("Compreendo que este Contrato não transfere titularidade nem direitos autorais."),
  checkbox("Tive a oportunidade de esclarecer dúvidas e de buscar assessoria jurídica independente antes de assinar."),

  ...banner("Assinaturas"),

  P("Ao assinarem abaixo, as partes reconhecem ter lido, compreendido e aceitado voluntariamente este Contrato de Cessão de Privacidade, incluindo todos os anexos e a Escolha de Privacidade selecionada.", { after: 260 }),

  signatureBlock([
    { title: "Cliente 1", fields: [["Assinatura"], ["Nome completo"], ["Data"], ["E-mail"]] },
    { title: "Cliente 2", fields: [["Assinatura"], ["Nome completo"], ["Data"], ["E-mail"]] },
  ]),

  spacer(12),

  signatureBlock([
    { title: "Elegant Society Inc.", fields: [["Assinatura"], ["Representante autorizado"], ["Cargo"], ["Data"]] },
    { title: "Registro de pagamento", fields: [["Taxa de cessão de privacidade recebida"], ["Data do pagamento"], ["Nº da transação / fatura"], ["Data de vigência"]] },
  ]),

  spacer(10),

  callout("Aviso de revisão jurídica",
    "Este modelo empresarial foi concebido para revisão e personalização por advogado. Não substitui a orientação de advogado licenciado em Massachusetts a respeito de evento, cliente ou controvérsia específicos.",
    { fill: B.IVORY_2 }),
];

const doc = buildDocument({
  title: "Contrato de Cessão de Privacidade — Elegant Society Inc.",
  docLabel: "Contrato de Cessão de Privacidade",
  children,
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(path.join(__dirname, "out", "Elegant Society - Contrato de Cessao de Privacidade.docx"), buf);
  console.log("ok");
});
