const B = require("./brand");
const fs = require("fs");
const path = require("path");
const { section, body, lead, bullet, callout, infoTable, banner, cover, spacer, rule,
        signatureBlock, fieldGrid, buildDocument, Packer, Paragraph, PageBreak, t,
        AlignmentType, eyebrow } = B;

const P = (...args) => body(...args);

const children = [
  ...cover({
    wordmark: "Elegant Society Inc.",
    title: "Contrato de Prestação\nde Serviços Autônomos",
    subtitle: "Independent Contractor Services Agreement · Commonwealth of Massachusetts",
  }),

  infoTable([
    ["Data de vigência", "[DATA]"],
    ["Nome legal do prestador", "[NOME DO PRESTADOR]"],
    ["Empresa / Nome fantasia", "[RAZÃO SOCIAL, SE HOUVER]"],
    ["Endereço", "[ENDEREÇO]"],
    ["E-mail / Telefone", "[E-MAIL]   |   [TELEFONE]"],
    ["Serviços / Designação", "[DESCRIÇÃO OU ORDEM DE SERVIÇO ANEXA]"],
  ]),

  spacer(14),

  P("Este Contrato de Prestação de Serviços Autônomos (o “Contrato”) é celebrado entre a Elegant Society Inc., sociedade constituída no estado de Massachusetts (“Empresa”), e o prestador identificado acima (“Prestador”). Empresa e Prestador podem ser referidos individualmente como “Parte” e, em conjunto, como “Partes”."),

  spacer(4),

  callout("Aviso importante sobre classificação",
    "Este Contrato não determina, por si só, a classificação do trabalhador. As Partes pretendem estabelecer uma relação de prestação autônoma somente quando a contratação e a relação de trabalho efetiva satisfizerem todos os requisitos federais e estaduais aplicáveis de Massachusetts. Caso a lei exija a classificação como empregado, a lei aplicável prevalecerá, independentemente do título deste Contrato, da emissão do Formulário 1099 ou de qualquer outra denominação em contrário utilizada pelas Partes."),

  section("1.", "Contratação e ordens de serviço"),
  P("A Empresa poderá contratar o Prestador, de tempos em tempos, para executar os serviços descritos em uma ou mais ordens de serviço escritas, confirmações de reserva, fichas de designação, propostas ou cronogramas aceitos por ambas as Partes (cada qual, uma “Ordem de Serviço”). Cada Ordem de Serviço passa a integrar este Contrato."),
  P("Não há garantia de número mínimo de designações, horas, eventos ou valor de remuneração. O Prestador poderá aceitar ou recusar qualquer designação proposta antes de aceitar a respectiva Ordem de Serviço. Uma vez aceita, o Prestador deverá concluir a designação em conformidade com este Contrato e com a Ordem de Serviço."),

  section("2.", "Natureza dos serviços e atividade independente"),
  P("O Prestador declara que exerce habitualmente ofício, ocupação, profissão ou atividade empresarial independente e estabelecida, de mesma natureza dos serviços prestados sob este Contrato; que oferece ou está autorizado a oferecer tais serviços ao público em geral; e que mantém os registros, licenças, ferramentas, sistemas empresariais e o julgamento profissional ordinariamente associados a essa atividade independente."),
  P("O Prestador poderá prestar serviços a outros clientes, inclusive concorrentes, desde que proteja as informações confidenciais da Empresa, evite conflitos de interesse efetivos nas designações aceitas e cumpra todas as obrigações assumidas perante a Empresa."),

  section("3.", "Condição de prestador autônomo; conformidade legal"),
  P("As Partes pretendem que o Prestador execute as designações qualificadas na condição de prestador autônomo, e não como empregado, mandatário, sócio, consorciado, franqueado ou representante da Empresa."),
  P("O Prestador controlará os meios, métodos, sequência e forma de execução dos serviços, observados os entregáveis acordados, o cronograma do evento, os requisitos do cliente, as regras do local, as exigências de segurança, as exigências legais, os padrões de marca aplicáveis ao entregável final e a coordenação razoavelmente necessária entre os profissionais do evento."),
  P("Nada neste Contrato autoriza qualquer das Partes a desconsiderar o Capítulo 149, Seção 148B, das Leis Gerais de Massachusetts, a legislação sobre jornada e salários, a legislação tributária, a legislação previdenciária, a legislação de acidentes de trabalho ou qualquer outro requisito de classificação. A Empresa poderá suspender, reestruturar ou recusar uma designação caso os requisitos de classificação não sejam atendidos."),

  section("4.", "Ausência de poderes para vincular a Empresa"),
  P("O Prestador não tem poderes para celebrar contratos, contrair dívidas, prestar garantias, cotar preços vinculantes, aprovar reembolsos, contratar pessoal em nome da Empresa, alterar contratos com clientes ou, de qualquer outra forma, vincular a Empresa, salvo mediante autorização prévia, específica e por escrito da Empresa."),

  section("5.", "Padrão de desempenho"),
  P("O Prestador executará todos os serviços de forma profissional, segura, pontual, cortês e em conformidade com os padrões geralmente aceitos aplicáveis ao seu ofício ou profissão."),
  P("O Prestador comunicará prontamente à Empresa qualquer atraso, incidente, conflito, doença, falha de equipamento, restrição do local, reclamação de cliente, preocupação de segurança ou circunstância que possa afetar materialmente a designação."),

  section("6.", "Cronograma, local e coordenação do evento"),
  P("Uma Ordem de Serviço poderá indicar datas fixas de evento, janelas de acesso, horários de cerimônia, prazos de entrega, locais ou pontos de conferência de coordenação. Tais exigências definem o resultado e a logística da designação e não conferem, por si sós, à Empresa controle sobre os métodos independentes do Prestador."),
  P("O Prestador é responsável pela chegada pontual, transporte, estacionamento, carga, descarga, montagem e desmontagem, salvo disposição diversa na Ordem de Serviço. O Prestador cumprirá as políticas lícitas do local e os procedimentos de segurança específicos do site."),

  section("7.", "Remuneração e faturamento"),
  P("A remuneração será estabelecida na Ordem de Serviço aplicável. Salvo disposição diversa na Ordem de Serviço, o Prestador apresentará fatura precisa após a conclusão da designação, e a Empresa pagará os valores incontroversos em até trinta (30) dias do recebimento da fatura completa."),
  P("As faturas devem identificar a designação, a data do serviço, o valor acordado, as despesas reembolsáveis aprovadas e o nome legal ou empresarial do Prestador. A Empresa poderá reter apenas valores efetivamente controvertidos enquanto as Partes trabalham de boa-fé para resolver a divergência."),
  P("O Prestador não faz jus a horas extras, licenças remuneradas, bonificações, comissões, benefícios ou reembolso de despesas, salvo quando expressamente previsto em Ordem de Serviço ou exigido por lei."),

  section("8.", "Despesas"),
  P("O Prestador arca com todas as despesas ordinárias de sua atividade, incluindo equipamentos, insumos, comunicações, transporte, seguros, licenças, auxiliares e tributos, salvo quando uma Ordem de Serviço identificar expressamente a despesa como reembolsável."),
  P("Qualquer despesa reembolsável que exceda o limite aprovado depende de autorização prévia e por escrito da Empresa e de comprovantes de suporte."),

  section("9.", "Tributos e registros"),
  P("O Prestador é o único responsável por todos os tributos federais, estaduais e municipais, pagamentos estimados, registros, declarações e livros empresariais decorrentes de sua atividade independente, exceto na medida em que a lei imponha à Empresa obrigação irrenunciável."),
  P("O Prestador apresentará o Formulário W-9 preenchido antes do pagamento e comunicará prontamente à Empresa qualquer alteração nos dados fiscais. A Empresa poderá emitir o Formulário 1099 ou qualquer outra declaração informativa exigida por lei; a emissão de documento fiscal não determina a classificação jurídica."),

  section("10.", "Benefícios, seguro-desemprego e acidentes de trabalho"),
  P("O Prestador não é elegível a participar dos planos de benefícios da Empresa. Cabe ao Prestador manter as coberturas de saúde, invalidez, seguro-desemprego, acidentes de trabalho ou acidentes ocupacionais exigidas para si e para seu pessoal."),
  P("Quando a legislação de Massachusetts exigir cobertura de acidentes de trabalho, o Prestador manterá tal cobertura e apresentará comprovação mediante solicitação. Nada nesta Seção implica renúncia a direitos ou obrigações que não possam ser licitamente renunciados."),

  section("11.", "Licenças, alvarás e qualificações profissionais"),
  P("O Prestador manterá todas as licenças, certificações, alvarás, treinamentos, credenciais de segurança alimentar, credenciais de serviço de bebidas alcoólicas, autorizações da FAA, registros empresariais e demais qualificações exigidas para os serviços."),
  P("O Prestador comunicará imediatamente à Empresa qualquer suspensão, expiração, investigação, restrição ou perda de qualificação exigida."),

  section("12.", "Seguros"),
  P("O Prestador manterá seguros razoavelmente adequados aos serviços e riscos, que poderão incluir responsabilidade civil geral, responsabilidade profissional, responsabilidade automotiva, acidentes de trabalho, cobertura de equipamentos, responsabilidade cibernética ou responsabilidade por bebidas alcoólicas."),
  P("Se exigido pela Ordem de Serviço, pelo local ou pelo contrato com o cliente, o Prestador apresentará certificado de seguro antes de acessar o site e incluirá a Empresa, o cliente ou o local como segurado adicional quando comercialmente disponível e expressamente exigido."),

  section("13.", "Equipamentos, materiais e pessoal"),
  P("O Prestador fornecerá ordinariamente suas próprias ferramentas, equipamentos, softwares, dispositivos, materiais, vestuário e transporte. Bens de propriedade da Empresa somente poderão ser utilizados mediante autorização escrita e deverão ser devolvidos nas mesmas condições, ressalvado o desgaste natural."),
  P("O Prestador não poderá delegar ou subcontratar designação aceita sem consentimento prévio e por escrito da Empresa. Qualquer auxiliar ou subcontratado aprovado permanece sob a direção e responsabilidade do Prestador e deverá firmar obrigações de confidencialidade e cessão de direitos ao menos tão protetivas quanto as deste Contrato."),

  section("14.", "Experiência do cliente, conduta e proteção da marca"),
  P("Ao interagir com clientes, locais, convidados e fornecedores da Empresa, o Prestador deverá ser respeitoso, discreto, sóbrio, adequadamente trajado e focado na designação. O Prestador não praticará assédio, discriminação, ameaças, embriaguez, conduta insegura ou comportamento disruptivo."),
  P("O Prestador não fará declarações falsas ou enganosas sobre a Empresa, não prometerá serviços fora da Ordem de Serviço, não receberá pagamentos não autorizados, não distribuirá material promocional alheio ao evento nem utilizará o evento para aliciar clientes da Empresa."),

  section("15.", "Confidencialidade"),
  P("“Informação Confidencial” inclui identidades e dados de contato de clientes, contratos, orçamentos, preços, condições de fornecedores, listas de convidados, plantas, cronogramas, senhas, métodos de negócio, propostas, painéis de referência, mídias não publicadas, dados pessoais e todas as informações não públicas divulgadas pela Empresa ou por seus clientes."),
  P("O Prestador utilizará a Informação Confidencial apenas para executar as designações aceitas, protegerá tal informação mediante salvaguardas razoáveis, divulgará somente a pessoas autorizadas com necessidade de conhecer e devolverá ou eliminará com segurança tal informação mediante solicitação."),
  P("Essas obrigações não se aplicam à informação que o Prestador comprove ser licitamente conhecida sem restrição, desenvolvida de forma independente sem uso de Informação Confidencial, publicamente disponível sem violação, ou licitamente recebida de terceiro. A divulgação legalmente compelida é permitida após aviso tempestivo à Empresa, quando lícito."),

  section("16.", "Privacidade e segurança de dados"),
  P("O Prestador coletará e acessará somente os dados pessoais razoavelmente necessários à designação. O Prestador não copiará listas de convidados, documentos de identificação, dados de pagamento, mensagens privadas, fotografias, informações médicas ou alimentares, nem credenciais de acesso para uso pessoal."),
  P("O Prestador comunicará prontamente qualquer suspeita de perda, acesso não autorizado, evento de phishing, comunicação enviada a destinatário errado, incidente com software malicioso ou divulgação envolvendo informações da Empresa ou de clientes, e cooperará razoavelmente na contenção e remediação."),

  section("17.", "Produto do trabalho e propriedade intelectual"),
  P("“Produto do Trabalho” significa todos os entregáveis especificamente criados para a Empresa sob uma Ordem de Serviço, incluindo fotografias, clipes de vídeo, mídia editada, cronogramas, layouts, textos, artes gráficas, templates, renderizações, receitas florais, inventários, relatórios e demais materiais, excluídas as ferramentas preexistentes e o conhecimento geral do Prestador identificados por escrito antes do uso."),
  P("Na máxima extensão permitida em lei, o Produto do Trabalho especialmente encomendado sob uma Ordem de Serviço constitui obra feita sob encomenda (work made for hire) da Empresa. Na medida em que qualquer Produto do Trabalho não se qualifique como obra feita sob encomenda, o Prestador cede irrevogavelmente à Empresa todos os direitos, títulos e interesses mundiais sobre o Produto do Trabalho mediante o pagamento do valor devido, incluindo direitos autorais e o direito de reproduzir, editar, publicar, licenciar, distribuir, exibir e criar obras derivadas."),
  P("O Prestador concede à Empresa licença perpétua, mundial e isenta de royalties sobre qualquer material preexistente aprovado e incorporado ao Produto do Trabalho, na medida necessária para que a Empresa e seus clientes utilizem o entregável. O Prestador obterá todas as autorizações necessárias para materiais de terceiros."),

  section("18.", "Mídia do evento e redes sociais"),
  P("O Prestador não publicará, transmitirá ao vivo, divulgará, venderá, submeterá a premiações, entregará a blogs, marcará clientes, identificará residências particulares, revelará detalhes do evento nem divulgará fotografias ou vídeos do evento sem aprovação prévia e por escrito da Empresa e sem observância de eventuais restrições de privacidade do cliente ou embargo de publicação."),
  P("Salvo se uma Ordem de Serviço conceder direitos de portfólio, o Prestador não adquire direito autônomo de uso da mídia do evento. A aprovação de uma publicação não autoriza outros usos. A Empresa poderá exigir a remoção de conteúdo não autorizado, observada a legislação aplicável."),

  section("19.", "Não aliciamento e não circunvenção"),
  P("Durante a designação aceita e pelos doze (12) meses seguintes ao respectivo evento, o Prestador não contornará conscientemente a Empresa para contratar diretamente serviços substancialmente semelhantes decorrentes de apresentação realizada exclusivamente por intermédio da Empresa, salvo mediante consentimento escrito da Empresa."),
  P("Esta Seção não proíbe publicidade geral, a aceitação de trabalho de pessoa que procure o Prestador de forma independente e sem aliciamento direcionado, o trabalho com clientes preexistentes ou a concorrência lícita. Deverá ser interpretada restritivamente, de modo a proteger relações comerciais legítimas e não a restringir trabalho ou comércio lícitos."),

  section("20.", "Conflitos de interesse"),
  P("O Prestador informará qualquer conflito efetivo que possa comprometer a imparcialidade da execução, incluindo participação financeira em fornecedor recomendado, obrigações simultâneas que possam causar atraso ou relações que gerem risco material à confidencialidade do cliente. A Empresa poderá exigir mitigação razoável ou realocar o trabalho."),

  section("21.", "Segurança; direito de retirada"),
  P("O Prestador observará a legislação de segurança aplicável e comunicará imediatamente condições perigosas. O Prestador poderá interromper ou retirar-se de local que apresente ameaça razoável de violência, assédio, intempérie severa, risco estrutural, atividade ilícita, embriaguez descontrolada ou outro risco material, comunicando a Empresa quando praticável."),
  P("Nenhuma das Partes é obrigada a executar serviços ilícitos ou a permanecer em ambiente inseguro."),

  section("22.", "Declarações e garantias"),
  P("O Prestador declara que: (a) tem poderes para celebrar este Contrato; (b) sua atuação não violará outro contrato; (c) os serviços e o Produto do Trabalho serão originais ou devidamente licenciados; (d) cumprirá a legislação aplicável; e (e) não introduzirá código malicioso nem violará conscientemente direitos de terceiros."),

  section("23.", "Indenização"),
  P("Na máxima extensão permitida em lei, o Prestador defenderá, indenizará e manterá indenes a Empresa e seus sócios, diretores, empregados, clientes e mandatários de reclamações de terceiros, perdas, danos, penalidades e despesas jurídicas razoáveis decorrentes de negligência, dolo, violação deste Contrato, violação de direitos de terceiros, infração legal, lesão corporal, dano material ou atos do pessoal aprovado do Prestador."),
  P("A Empresa comunicará prontamente ao Prestador a reclamação coberta e cooperará razoavelmente. O Prestador não poderá compor reclamação de modo que implique reconhecimento de culpa por parte indenizada ou lhe imponha obrigação não pecuniária, sem consentimento escrito."),

  section("24.", "Limitação de responsabilidade"),
  P("Na máxima extensão permitida em lei, nenhuma das Partes responderá perante a outra por danos incidentais, consequenciais, especiais, exemplares ou punitivos decorrentes deste Contrato, ressalvados os casos de fraude, dolo, violação de confidencialidade ou de propriedade intelectual, obrigações de indenização, remuneração não paga ou responsabilidade que não possa ser legalmente limitada."),
  P("A responsabilidade contratual agregada da Empresa por uma designação não excederá a remuneração paga ou devida ao Prestador pela Ordem de Serviço afetada, salvo quando a lei exigir limitação diversa."),

  section("25.", "Vigência e rescisão"),
  P("Este Contrato tem início na Data de Vigência e vigora até ser rescindido por qualquer das Partes mediante aviso escrito. A rescisão do contrato-quadro não cancela automaticamente uma Ordem de Serviço já aceita, salvo se o aviso assim dispuser expressamente."),
  P("A Empresa poderá rescindir imediatamente uma Ordem de Serviço por inadimplemento material, conduta insegura, embriaguez, assédio, fraude, quebra de confidencialidade, ausência de credenciais ou seguros exigidos, abandono, atraso grave, exposição do cliente a risco ou conduta razoavelmente capaz de prejudicar o evento ou a reputação da Empresa."),
  P("Rescindido o Contrato, o Prestador cessará qualquer representação de vínculo com a Empresa, devolverá bens da Empresa, preservará e entregará o Produto do Trabalho concluído e faturará apenas os serviços regularmente prestados e as despesas aprovadas não canceláveis, sujeito a compensações ou indenizações lícitas."),

  section("26.", "Cancelamento e execução substitutiva"),
  P("Caso o Prestador não possa executar designação de evento já aceita, deverá comunicar a Empresa imediatamente. O Prestador poderá propor substituto qualificado, mas nenhuma substituição é eficaz sem aprovação escrita da Empresa."),
  P("Se o Prestador cancelar sem justificativa contratual ou abandonar a designação, deverá restituir os valores não auferidos e poderá responder pelo custo incremental razoável da Empresa com execução substitutiva, na extensão permitida em lei."),

  section("27.", "Caso fortuito e força maior"),
  P("Nenhuma das Partes responderá por atraso decorrente de evento fora de seu controle razoável e que não pudesse ser evitado com diligência razoável, incluindo intempérie severa, desastre natural, ordem governamental, paralisação ampla de transportes, falha de serviços públicos, restrição epidêmica, guerra, terrorismo ou fechamento do local."),
  P("A Parte afetada dará aviso tempestivo e empregará esforços razoáveis de mitigação. Permanecem devidos os pagamentos por serviços regularmente prestados e por compromissos aprovados e irrecuperáveis. As Partes documentarão por escrito qualquer reagendamento ou revisão de escopo."),

  section("28.", "Solução de controvérsias; mediação"),
  P("Antes de propor ação judicial, as Partes buscarão de boa-fé resolver a controvérsia por meio de tratativa direta e, em seguida, de mediação não vinculante em Middlesex County, Massachusetts, salvo se houver necessidade razoável de tutela de urgência ou se a pretensão não puder ser licitamente submetida a mediação prévia obrigatória."),
  P("Os custos da mediação serão divididos igualmente, excluídos os honorários advocatícios de cada Parte. A participação na mediação não implica renúncia a prazos prescricionais ou decadenciais; qualquer Parte poderá adotar medida razoável para preservar sua pretensão."),

  section("29.", "Lei aplicável e foro"),
  P("Este Contrato é regido pelas leis do Estado de Massachusetts, sem consideração às suas normas de conflito de leis. Observada a cláusula de mediação, qualquer processo judicial admitido será proposto perante juízo estadual ou federal com competência em Middlesex County, Massachusetts."),

  section("30.", "Notificações"),
  P("As notificações previstas neste Contrato devem ser feitas por escrito e entregues pessoalmente, por transportadora expressa de reconhecimento nacional, por correio registrado ou por e-mail aos endereços indicados acima ou posteriormente designados por escrito. A notificação por e-mail é eficaz quando enviada sem retorno de falha de entrega; notificações relativas a pretensões jurídicas devem também ser enviadas por correio registrado ou transportadora expressa."),

  section("31.", "Comunicações e assinaturas eletrônicas"),
  P("As Partes consentem em transacionar eletronicamente. Registros, vias e assinaturas eletrônicas terão a mesma eficácia dos originais, na extensão permitida pela legislação aplicável. Mensagens de texto e e-mails de rotina podem coordenar a logística, mas não alteram remuneração, titularidade, responsabilidade ou outras condições materiais, salvo se manifestarem claramente intenção de aditamento e forem aceitos por representantes autorizados de ambas as Partes."),

  section("32.", "Disposições gerais"),
  lead("Integralidade.", "Este Contrato e cada Ordem de Serviço aceita constituem o acordo integral quanto ao objeto e substituem tratativas anteriores."),
  lead("Aditamentos.", "Qualquer aditamento deverá constar de instrumento escrito aceito por representantes autorizados de ambas as Partes."),
  lead("Cessão.", "O Prestador não poderá ceder este Contrato ou uma Ordem de Serviço sem consentimento escrito da Empresa. A Empresa poderá cedê-lo em razão de fusão, reorganização, alienação de substancialmente todos os ativos ou sucessão empresarial."),
  lead("Autonomia das cláusulas.", "Se alguma disposição for inexequível, será reduzida ao mínimo necessário, permanecendo eficazes as demais."),
  lead("Renúncia.", "A não exigência de uma disposição não implica renúncia à sua exigência futura."),
  lead("Ordem de precedência.", "Havendo conflito entre uma Ordem de Serviço e este Contrato, prevalecerá a Ordem de Serviço somente se ela identificar expressamente a disposição alterada."),
  lead("Sobrevivência.", "As seções relativas a pagamento, tributos, confidencialidade, privacidade, propriedade intelectual, mídia, indenização, limitações, controvérsias e demais disposições que por natureza devam subsistir permanecerão vigentes após a rescisão."),
  lead("Títulos.", "Os títulos servem apenas à conveniência e não afetam a interpretação. “Inclusive” significa “inclusive, sem limitação”."),

  new Paragraph({ children: [new PageBreak()] }),

  ...banner("Anexo A — Ordem de Serviço / Designação de Evento"),

  infoTable([
    ["Designação / Evento", "[NOME DO EVENTO OU PROJETO]"],
    ["Cliente", "[NOME DO CLIENTE]"],
    ["Data do evento", "[DATA]"],
    ["Local / Endereço", "[LOCAL E ENDEREÇO]"],
    ["Acesso / Início", "[HORÁRIO]"],
    ["Término estimado", "[HORÁRIO]"],
    ["Serviços", "[ESCOPO DETALHADO]"],
    ["Entregáveis", "[ENTREGÁVEIS E PRAZOS]"],
    ["Honorários", "[VALOR / VALOR FIXO / VALOR DO PROJETO]"],
    ["Despesas aprovadas", "[NENHUMA / LIMITE / DESCRIÇÃO]"],
    ["Vencimento da fatura", "[CONDIÇÕES DE PAGAMENTO]"],
    ["Seguro / Certificado", "[EXIGÊNCIAS]"],
    ["Requisitos especiais", "[TRAJE, EQUIPAMENTO, PRIVACIDADE, EMBARGO, REGRAS DO LOCAL]"],
  ], { labelW: 3400 }),

  spacer(14),
  P("Ao assinarem abaixo, as Partes aceitam esta Ordem de Serviço, sujeita ao Contrato de Prestação de Serviços Autônomos."),

  ...banner("Assinaturas"),

  signatureBlock([
    { title: "Elegant Society Inc.", fields: [["Assinatura"], ["Nome", "Letícia Cardoso"], ["Cargo", "Representante Autorizada"], ["Data"]] },
    { title: "Prestador", fields: [["Assinatura"], ["Nome legal"], ["Cargo / Nome fantasia"], ["Data"]] },
  ]),

  spacer(10),

  callout(null,
    "O Prestador reconhece ter tido a oportunidade de revisar este Contrato com assessores jurídicos e tributários independentes e compreende que as condições reais de trabalho, e não apenas as denominações contratuais, determinam a classificação jurídica.",
    { fill: B.IVORY_2 }),
];

const doc = buildDocument({
  title: "Contrato de Prestação de Serviços Autônomos — Elegant Society Inc.",
  docLabel: "Contrato de Prestação de Serviços Autônomos",
  children,
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(path.join(__dirname, "out", "Elegant Society - Contrato de Prestacao de Servicos Autonomos.docx"), buf);
  console.log("ok");
});
