const B = require("./brand");
const fs = require("fs");
const path = require("path");
const { section, body, lead, bullet, callout, infoTable, defTable, banner, cover,
        spacer, signatureBlock, buildDocument, Packer, Paragraph, PageBreak, t } = B;

const P = (...a) => body(...a);

const children = [
  ...cover({
    wordmark: "Elegant Society",
    title: "Termos e Condições\nGerais",
    subtitle: "Serviços de planejamento, design e coordenação de eventos · Massachusetts",
  }),

  infoTable([
    ["Empresa", "Elegant Society Inc."],
    ["Endereço comercial", "20 Washington Street, Floor 2, Reading, MA 01867"],
    ["E-mail", "hello@elegantsociety.us"],
    ["Telefone", "(978) 206-8620"],
    ["Data de vigência", "[DATA]"],
    ["Contrato de serviço aplicável", "[IDENTIFICAÇÃO DO CONTRATO]"],
  ], { labelW: 3600 }),

  spacer(14),

  callout("Aviso importante",
    "Estes termos constituem um modelo de contrato empresarial e devem ser revisados por advogado licenciado em Massachusetts antes do primeiro uso ou após qualquer alteração material na legislação, nos serviços, nos preços ou na operação da empresa."),

  spacer(10),

  P([
    t("Acordo e incorporação. ", { bold: true, color: B.BURG }),
    t("Estes Termos e Condições Gerais (os “Termos”) são celebrados entre a Elegant Society Inc., sociedade constituída em Massachusetts, com endereço comercial principal em 20 Washington Street, Floor 2, Reading, Massachusetts 01867 (“Elegant Society”, “Empresa”, “Planejadora”, “Designer”, “Coordenadora”, “nós” ou “nosso”), e a pessoa física ou jurídica identificada como cliente na respectiva proposta, contrato de serviço, ordem de serviço, fatura, formulário de reserva, aditivo ou pedido (“Cliente”, “você” ou “seu”). Estes Termos são incorporados a todo Contrato de Serviço emitido pela Elegant Society. O Contrato de Serviço e estes Termos, em conjunto, constituem o “Contrato”."),
  ]),

  section("1.", "Definições"),
  defTable([
    ["“Serviços Adicionais”", "serviços, mão de obra, materiais, locações, viagens, reuniões, revisões, horas extras ou entregáveis não expressamente incluídos no pacote selecionado ou no Escopo de Serviços."],
    ["“Dia Útil”", "de segunda a sexta-feira, excluídos os feriados federais e os feriados estaduais de Massachusetts."],
    ["“Materiais do Cliente”", "todos os nomes, fotografias, logotipos, seleções musicais, informações de convidados, textos, arquivos, imagens de inspiração, marcas e demais conteúdos fornecidos pelo Cliente."],
    ["“Materiais da Empresa”", "todas as propostas, sistemas de planejamento, cronogramas, templates, painéis de referência, projetos, layouts, apresentações, listas de fornecedores, receitas florais, processos, checklists, conceitos, renderizações e demais materiais criados ou fornecidos pela Elegant Society."],
    ["“Entregáveis”", "o produto do trabalho, tangível ou digital, expressamente identificado no Contrato de Serviço."],
    ["“Evento”", "o casamento, pedido de casamento, celebração, encontro social, programa corporativo ou outro evento identificado no Contrato de Serviço."],
    ["“Data do Evento”", "a data ou datas identificadas no Contrato de Serviço."],
    ["“Evento de Força Maior”", "evento fora do controle razoável de uma parte, conforme detalhado na Seção 14."],
    ["“Convidado”", "qualquer participante, convidado, familiar, integrante do cortejo, empregado, representante, menor ou outra pessoa admitida ou participante do Evento por intermédio do Cliente."],
    ["“Sinal”", "o pagamento de reserva não reembolsável exigido para reservar a Data do Evento e iniciar a execução."],
    ["“Escopo de Serviços”", "os serviços expressamente descritos no Contrato de Serviço e em qualquer Ordem de Alteração assinada."],
    ["“Contrato de Serviço”", "o contrato, proposta, ordem de serviço ou documento de reserva específico que identifica o Cliente, o Evento, os serviços selecionados, os valores e o cronograma de pagamento."],
    ["“Fornecedor”", "terceiro que fornece bens ou serviços em conexão com o Evento, incluindo locais, buffets, fotógrafos, videomakers, floristas, locadoras, artistas, transportadoras, profissionais de beleza, celebrantes e equipes de segurança."],
  ]),

  section("2.", "Documentos contratuais; ordem de precedência"),
  P("O Contrato é composto por: (a) o Contrato de Serviço assinado; (b) quaisquer Ordens de Alteração ou aditivos assinados; (c) estes Termos; e (d) os anexos escritos expressamente incorporados por referência. Havendo conflito entre os documentos, prevalece a seguinte ordem: Ordem de Alteração ou aditivo assinado, Contrato de Serviço, estes Termos e, por fim, os demais anexos incorporados. Proposta, orçamento, painel de referência, e-mail, fatura ou mensagem de texto não ampliam o Escopo de Serviços, salvo se expressamente incorporados a instrumento assinado."),

  section("3.", "Capacidade e representante do Cliente"),
  P("O Cliente declara ter no mínimo dezoito (18) anos, possuir capacidade legal para celebrar o Contrato e ter poderes para vincular toda pessoa física ou jurídica identificada como cliente. Quando mais de uma pessoa assinar ou for identificada como Cliente, cada uma responderá solidariamente por todas as obrigações, aprovações, valores, danos e comunicações previstos no Contrato."),
  P("O Cliente designará um único tomador de decisão principal. A Elegant Society poderá confiar nas instruções e aprovações dessa pessoa. Instruções conflitantes provenientes do Cliente, de familiares, de integrantes do cortejo, de empregados ou de outros representantes poderão acarretar atraso, custos adicionais ou suspensão dos trabalhos."),

  section("4.", "Escopo de serviços"),
  P("A Elegant Society executará somente os serviços expressamente descritos no Escopo de Serviços. Qualquer serviço não expressamente incluído está excluído. São exemplos de serviços excluídos: assessoria jurídica, assessoria tributária, serviços de arquitetura ou engenharia, segurança, cuidado infantil, serviços médicos, preparo de alimentos, serviço de bebidas alcoólicas, transporte, administração do local, manuseio de numerário, guarda de valores e supervisão de Fornecedores independentes, salvo disposição expressa em contrário."),
  P("Denominações como “full service”, “planejamento parcial”, “coordenação”, “styling” ou “design” são rótulos de marketing e não ampliam o Escopo de Serviços além das inclusões específicas do Contrato de Serviço."),

  section("5.", "Reserva; bloqueio da data do evento"),
  P("A Data do Evento não estará reservada até que a Elegant Society receba: (a) o Contrato de Serviço integralmente assinado; (b) o Sinal exigido; e (c) as informações de onboarding solicitadas. Enquanto todos os requisitos não forem satisfeitos, a Elegant Society poderá aceitar outra reserva para a mesma data, sem qualquer responsabilidade."),
  P("O Sinal remunera a Elegant Society pela reserva de capacidade, pelo início dos trabalhos administrativos e criativos, pela recusa de outras oportunidades e pela alocação de pessoal e recursos. Na máxima extensão permitida em lei, o Sinal é considerado auferido no recebimento e é não reembolsável, salvo disposição expressa em contrário no Contrato."),

  section("6.", "Valores; cronograma e forma de pagamento"),
  P("O Cliente pagará todos os valores conforme o cronograma de pagamento do Contrato de Serviço. O prazo é essencial para todos os pagamentos. A Elegant Society não é obrigada a enviar lembretes, e a ausência de lembrete não escusa o atraso."),
  P("Os pagamentos serão feitos pelo meio aprovado indicado na fatura ou no portal do cliente. O Cliente é responsável por tarifas de transação, tarifas de transferência, encargos por devolução de pagamento e demais custos de processamento informados antes do pagamento. Não são admitidos abatimentos, compensações ou retenções, salvo quando exigidos por lei."),
  P("Os valores pagos a Fornecedores são distintos dos honorários da Elegant Society, salvo disposição expressa em contrário. O Cliente permanece responsável por todos os saldos de Fornecedores, tributos, gorjetas, taxas de entrega, taxas de serviço, licenças, estacionamento, pedágios, frete e demais custos de terceiros."),

  section("7.", "Atraso no pagamento; suspensão; cobrança"),
  P("Qualquer valor não pago no vencimento poderá sofrer encargo por atraso de cinco por cento (5%) do montante vencido a cada período de trinta dias, ou o máximo legalmente admitido, o que for menor. Como um encargo mensal de cinco por cento pode ser limitado ou questionado sob a legislação aplicável conforme a natureza da operação, esta disposição será automaticamente reduzida ao valor máximo exequível."),
  P("Se um pagamento estiver em atraso por mais de cinco (5) dias corridos, a Elegant Society poderá suspender reuniões, trabalhos de design, comunicações com Fornecedores, pedidos, alocação de equipe, montagem e todos os demais serviços até a regularização da conta. Prazos e disponibilidades afetados pela suspensão não são garantidos. A suspensão não afasta as obrigações de pagamento do Cliente."),
  P("O Cliente reembolsará os custos razoáveis de cobrança admitidos em lei, incluindo custas, despesas de citação e honorários advocatícios razoáveis, quando recuperáveis nos termos do Contrato ou da legislação aplicável."),

  section("8.", "Estornos e disputas de pagamento"),
  P("Antes de iniciar um estorno ou disputa de pagamento, o Cliente enviará aviso escrito descrevendo o valor controvertido e concederá à Elegant Society dez (10) Dias Úteis para investigar e responder. Esta disposição não implica renúncia a direitos que não possam ser legalmente renunciados."),
  P("O estorno não cancela o Contrato nem extingue as obrigações do Cliente relativas a serviços prestados, mão de obra comprometida, bens personalizados, locações, custos de Fornecedores, encargos de cancelamento ou demais valores licitamente devidos. A Elegant Society poderá apresentar à operadora de pagamentos ou à instituição financeira o Contrato, as comunicações, o produto do trabalho, os registros de comparecimento, as confirmações de Fornecedores, as faturas e demais provas."),

  section("9.", "Aprovações e prazos de decisão do Cliente"),
  P("O Cliente fornecerá informações, decisões, aprovações, número de convidados, medidas, seleções, contatos de Fornecedores, regras do local, plantas, detalhes de acesso e pagamentos de forma completa e tempestiva. A Elegant Society poderá confiar nas informações prestadas pelo Cliente, sem verificação independente."),
  P("Aprovações transmitidas por e-mail, portal do cliente, mensagem de texto ou outro meio eletrônico acordado são vinculantes para fins operacionais. Uma vez que um item seja encomendado, produzido, reservado, impresso, personalizado, instalado ou liberado a um Fornecedor, alterações poderão ser impossíveis ou sujeitas a custos adicionais."),
  P("A Elegant Society não responde por consequências decorrentes de instruções tardias, incompletas, imprecisas, inconsistentes ou alteradas pelo Cliente."),

  section("10.", "Ordens de alteração; serviços adicionais"),
  P("Qualquer alteração solicitada quanto à Data do Evento, ao local, ao número de convidados, ao Escopo de Serviços, ao cronograma, ao design, à planta, ao projeto floral, às quantidades de locação, à equipe, a viagens, à montagem, à desmontagem ou aos Entregáveis poderá exigir Ordem de Alteração escrita e pagamento adicional."),
  P("A Elegant Society poderá recusar qualquer alteração que seja insegura, ilícita, incompatível com os padrões profissionais, indisponível, impraticável ou solicitada tardiamente. Trabalhos executados a pedido do Cliente fora do Escopo de Serviços poderão ser cobrados pela tabela vigente da Elegant Society, acrescidos de despesas, ainda que não tenha sido possível formalizar Ordem de Alteração antes da execução urgente."),

  section("11.", "Número de convidados e alterações materiais"),
  P("Preços e dimensionamento de equipe podem basear-se no número de convidados previsto no Contrato de Serviço. O Cliente informará o número final garantido de convidados até o prazo estabelecido pela Elegant Society ou pelo Fornecedor aplicável. Aumentos poderão gerar custos adicionais de equipe, locação, transporte, segurança ou serviço. Reduções não implicam automaticamente diminuição de valores ou de custos já comprometidos."),
  P("A mudança de local, cidade, data, tipo de evento ou o aumento substancial de escopo serão tratados como alteração material e poderão exigir reprecificação ou novo contrato."),

  section("12.", "Cancelamento pelo Cliente"),
  P("O Cliente poderá cancelar somente mediante aviso escrito entregue na forma da Seção 48. A data efetiva do cancelamento é a data em que a Elegant Society receber aviso escrito e inequívoco de representante autorizado do Cliente."),
  lead("12.1  Mais de 90 dias antes do Evento.", "O Sinal e todos os valores já auferidos, comprometidos, encomendados ou pagos a terceiros permanecem não reembolsáveis. Não incide multa adicional de cancelamento, salvo previsão no Contrato de Serviço."),
  lead("12.2  Entre 31 e 90 dias antes do Evento.", "O Cliente pagará cinquenta por cento (50%) do saldo contratual em aberto, acrescido de todas as despesas não canceláveis, encomendas personalizadas, mão de obra comprometida, encargos de Fornecedores e Serviços Adicionais incorridos até o cancelamento."),
  lead("12.3  Trinta dias ou menos antes do Evento.", "O Cliente pagará cem por cento (100%) do saldo contratual em aberto, acrescido de todas as despesas não canceláveis, encomendas personalizadas, mão de obra comprometida, encargos de Fornecedores e Serviços Adicionais."),
  P("As partes reconhecem que os valores de cancelamento constituem estimativa razoável das perdas decorrentes da capacidade reservada, das oportunidades de reserva perdidas, do trabalho de planejamento, dos compromissos assumidos e da preparação específica do Evento, e não penalidade. Se a legislação aplicável exigir valor inferior, a disposição será exigível apenas até o limite máximo permitido em lei."),

  section("13.", "Reagendamento"),
  P("O pedido de transferência do Evento somente é eficaz mediante aprovação escrita da Elegant Society. O reagendamento está sujeito à disponibilidade, à equipe, à precificação sazonal, à disponibilidade dos Fornecedores e ao pagamento da taxa de reagendamento e de todos os custos não transferíveis."),
  P("Salvo acordo em contrário, o Evento reagendado deverá ocorrer no prazo de doze (12) meses contados da Data do Evento original. Caso a Elegant Society não esteja disponível na nova data solicitada, ou o Cliente não escolha data aprovada dentro do prazo exigido, o pedido será tratado como cancelamento pelo Cliente."),

  section("14.", "Força maior"),
  P("Nenhuma das partes responderá por descumprimento ou atraso decorrente de eventos fora de seu controle razoável, incluindo intempérie severa, incêndio, inundação, desastre natural, epidemia, pandemia, emergência de saúde pública, guerra, terrorismo, comoção civil, greve, falha de serviços públicos, paralisação de transportes, ordem governamental, fechamento do local, falha generalizada de Fornecedores ou evento equiparável."),
  P("A parte afetada dará aviso tempestivo quando razoavelmente possível e empregará esforços comercialmente razoáveis para mitigar o impacto. A Elegant Society poderá modificar o cronograma, a equipe, o layout, o design, os materiais, o método de instalação ou o Escopo de Serviços para preservar a segurança e prestar serviços substancialmente equivalentes."),
  P("A força maior não implica automaticamente a devolução de valores já auferidos ou despendidos. As partes buscarão primeiro, de boa-fé, reagendar ou adaptar o Evento. Qualquer reembolso ou crédito limitar-se-á aos valores não auferidos remanescentes após a dedução do Sinal não reembolsável, dos trabalhos concluídos, da mão de obra comprometida, dos bens personalizados, das locações, dos custos de Fornecedores e das despesas irrecuperáveis."),

  section("15.", "Substituição emergencial; cancelamento pela Empresa"),
  P("A Elegant Society poderá substituir planejadora, coordenadora, designer, assistente, prestador, florista ou outro membro da equipe por pessoa de qualificação razoavelmente equivalente, caso doença, lesão, emergência, crise familiar, falha de transporte, desligamento ou outra circunstância imprevista impeça a atuação da pessoa originalmente prevista."),
  P("Se a Elegant Society não puder executar parte material do Escopo de Serviços e não puder oferecer substituto razoável, poderá cancelar os serviços afetados e restituir a parcela não auferida dos valores pagos por tais serviços. Essa devolução constitui o remédio pecuniário exclusivo do Cliente, ressalvados os direitos que não possam ser legalmente limitados."),

  section("16.", "Fornecedores terceirizados"),
  P("Os Fornecedores são empresas independentes e não são empregados, sócios, mandatários ou subcontratados da Elegant Society, salvo se expressamente assim identificados por escrito. Recomendações, apresentações, listas preferenciais, orçamentos, revisões contratuais, apoio à agenda ou coordenação não constituem garantia de desempenho, solvência, qualidade, licenciamento, seguro, segurança, legalidade ou disponibilidade do Fornecedor."),
  P("O Cliente revisará e assinará diretamente os contratos com Fornecedores, salvo disposição diversa no Contrato de Serviço. A Elegant Society não responde por atos, omissões, atrasos, substituições, cancelamentos, insolvência, defeitos de produto, falhas de serviço, lesões, incidentes de dados ou descumprimento legal ou das regras do local por parte de Fornecedores."),
  P("A Elegant Society poderá transmitir instruções operacionais aos Fornecedores, mas não controla seu julgamento profissional nem sua operação interna. O Cliente permanece responsável por ler os contratos dos Fornecedores, pagar suas faturas e exigir o cumprimento de suas obrigações."),

  section("17.", "Revisão de contratos de fornecedores"),
  P("Qualquer revisão de contrato de Fornecedor pela Elegant Society tem caráter exclusivamente administrativo e operacional. A Elegant Society poderá apontar questões de cronograma, escopo, quantidade ou coordenação, mas não presta assessoria jurídica e não garante que o contrato do Fornecedor seja completo, equilibrado, exequível ou conforme a lei. O Cliente deve buscar revisão jurídica independente quando apropriado."),

  section("18.", "Acesso e regras do local"),
  P("Cabe ao Cliente providenciar o local, as licenças exigidas, as janelas de acesso, o acesso para carga, o estacionamento, a energia, a água, os sanitários, a remoção de resíduos, o armazenamento, a segurança e as demais autorizações necessárias ao Evento. O Cliente fornecerá à Elegant Society todas as regras do local, plantas, restrições, exigências de seguro e prazos, prontamente após recebê-los."),
  P("A Elegant Society não responde por condições do local, vícios ocultos, insuficiência de utilidades, obras, restrições de acesso, falta de pessoal, dupla reserva, fechamento, infrações a normas edilícias ou decisões de fiscalização do local. Restrições do local podem exigir substituições, alterações de layout, aumento de mão de obra, ajustes de entrega ou custos adicionais."),

  section("19.", "Conduta do Cliente, da família e dos convidados"),
  P("O Cliente é responsável pela conduta dos Convidados e assegurará que estes observem a lei, as regras do local, as orientações de segurança e as instruções razoáveis da Elegant Society e dos Fornecedores. A Elegant Society não responde por lesões, danos, atrasos ou perturbações causados pela conduta de Convidados."),
  P("A Elegant Society poderá recusar ou interromper serviços, retirar pessoal ou exigir intervenção de segurança se qualquer pessoa praticar ameaças, violência, assédio, discriminação, intimidação, conduta insegura, atividade ilícita, contato físico não consentido, embriaguez severa ou abuso contra a equipe da Elegant Society ou Fornecedores. Nessas hipóteses, não haverá devolução de valores pelos serviços interrompidos para proteger a saúde e a segurança."),

  section("20.", "Menores, animais e participantes especiais"),
  P("A Elegant Society não presta serviços de cuidado infantil, cuidado de idosos, supervisão médica, cuidado de animais ou supervisão de pessoas vulneráveis. Um adulto responsável designado pelo Cliente deverá supervisionar menores, animais e qualquer participante que necessite de assistência. A Elegant Society poderá exigir a retirada de qualquer pessoa ou animal que crie risco operacional ou de segurança."),

  section("21.", "Bebidas alcoólicas, alimentos e alergias"),
  P("A Elegant Society não vende, fornece, serve nem controla bebidas alcoólicas, salvo se expressamente licenciada e contratada para tanto. O Cliente e o buffet, bartender, local ou fornecedor de bebidas licenciado são os únicos responsáveis pela conformidade quanto ao álcool, verificação de idade, decisões de serviço, Convidados embriagados e transporte seguro."),
  P("O Cliente comunicará alergias, restrições alimentares e necessidades de acessibilidade diretamente ao Fornecedor responsável e confirmará essa informação de forma independente. A Elegant Society não prepara alimentos e não pode garantir ambiente livre de alérgenos nem impedir contato cruzado."),

  section("22.", "Cronogramas, atrasos e decisões no dia do evento"),
  P("Cronogramas são ferramentas de planejamento e não garantem que cada atividade ocorrerá em horário exato. A Elegant Society não responde por atrasos causados pelo Cliente, Convidados, Fornecedores, trânsito, clima, equipe do local, transporte, fotografia, duração da cerimônia, discursos, emergências ou demais circunstâncias fora de seu controle."),
  P("O Cliente autoriza a Elegant Society a tomar decisões operacionais razoáveis e de boa-fé quando for necessária ação imediata e o Cliente estiver indisponível. Tais decisões podem incluir ajuste de horários, remanejamento de decoração, alteração da ordem do cortejo, redução de atividades não essenciais, realocação de elementos por segurança ou acionamento do plano de contingência climática. A Elegant Society não assumirá compromissos financeiros materiais além de eventual valor emergencial previamente aprovado sem autorização do Cliente, quando esta for razoavelmente obtenível."),

  section("23.", "Horas extras e serviços estendidos"),
  P("Os serviços limitam-se às horas previstas no Contrato de Serviço. Horas extras solicitadas pelo Cliente ou razoavelmente necessárias em razão de atrasos do Cliente, dos Convidados, dos Fornecedores ou do local poderão ser cobradas pela tarifa prevista no Contrato de Serviço ou, na sua ausência, pela tarifa de hora extra então vigente da Elegant Society, sujeita à disponibilidade da equipe. A prestação de horas extras não é garantida."),

  section("24.", "Aprovações de design e discricionariedade criativa"),
  P("O Cliente reconhece que o design de eventos é atividade criativa e interpretativa. Imagens de inspiração comunicam preferências gerais, mas não constituem promessa de reprodução exata. A Elegant Society poderá exercer julgamento profissional quanto a escala, equilíbrio, posicionamento, materiais, mecânica, segurança, substituições e instalação."),
  P("O Cliente aprovará projetos, layouts, paletas, quantidades e seleções principais nos prazos indicados. Após a aprovação, qualquer revisão poderá implicar custos adicionais de design, encargos de Fornecedores, taxas de urgência ou custos de reposição."),

  section("25.", "Flores e materiais naturais"),
  P("Flores e materiais naturais variam em cor, forma, tamanho, aroma, textura, sazonalidade e disponibilidade. A Elegant Society poderá substituir flor, folhagem, recipiente, material ou variedade por item razoavelmente equivalente, compatível com o estilo e o orçamento aprovados, quando o item original estiver indisponível, danificado, inseguro ou comercialmente impraticável."),
  P("A Elegant Society não garante tonalidades exatas, grau de abertura das flores, durabilidade ou desempenho sob calor extremo, frio, vento, chuva ou luz solar direta. O Cliente informará alergias ou sensibilidades antes da aprovação final do projeto."),

  section("26.", "Locações, inventário e danos ao patrimônio"),
  P("Todos os itens locados permanecem de propriedade da Elegant Society ou da respectiva locadora. O Cliente não moverá, modificará, fixará com fita, grampeará, cortará, pintará, desmontará ou removerá itens locados, nem permitirá que Convidados os levem, sem aprovação escrita."),
  P("O Cliente responde por perda, furto, manchas, quebra, danos por intempérie, uso indevido ou destruição de itens locados causados pelo Cliente, por Convidados, pela equipe do local ou por Fornecedores diversos da Elegant Society. O custo de reposição poderá incluir o valor de reposição no varejo, frete, encargos de urgência, mão de obra, lucros cessantes de locação e despesas administrativas."),
  P("A Elegant Society poderá documentar o inventário antes e depois do Evento. O Cliente comunicará prontamente os danos de que tiver conhecimento e cooperará com a investigação e com eventuais sinistros."),

  section("27.", "Montagem, desmontagem e condições do local"),
  P("A montagem e a desmontagem limitam-se aos itens contratados e às janelas de acesso. Atraso na liberação do local, áreas de carga bloqueadas, escadas, longos percursos, elevadores indisponíveis, energia insuficiente, condições inseguras ou fechamento antecipado do local poderão exigir mão de obra adicional, redução da montagem ou modificação do projeto."),
  P("A Elegant Society não responde por itens deixados após o período contratado de desmontagem. Cabe ao Cliente providenciar a retirada de bens pessoais, presentes, alimentos, bebidas, equipamentos de Fornecedores e decoração não contratada."),

  section("28.", "Eventos ao ar livre e plano de contingência climática"),
  P("O Cliente aprovará um plano de contingência climática praticável e o respectivo prazo de decisão exigido pelo local ou pelos Fornecedores. A Elegant Society poderá recusar instalação ao ar livre ou exigir realocação quando vento, raios, precipitação, temperatura, condições do solo, risco de incêndio ou outras condições apresentarem risco à segurança ou ao patrimônio."),
  P("Alterações motivadas pelo clima podem modificar a aparência, a quantidade, o posicionamento ou a viabilidade da decoração e podem exigir tendas, pisos, aquecedores, ventiladores, contrapesos, coberturas, mão de obra ou transporte, a expensas do Cliente."),

  section("29.", "Bens pessoais, presentes, dinheiro e joias"),
  P("A Elegant Society não é depositária e não assume a guarda de dinheiro, cartões, presentes, joias, alianças, trajes, documentos, medicamentos, eletrônicos, bens de família ou outros bens pessoais. Cabe ao Cliente designar pessoas responsáveis por tais itens. Qualquer auxílio prestado pela equipe da Elegant Society constitui cortesia e não cria dever de guarda."),

  section("30.", "Fotografia, videografia e limites de captação"),
  P("A Elegant Society poderá coordenar fotografia ou videografia, mas não garante imagens, ângulos, iluminação, áudio, listas de tomadas, prazos de entrega ou edição específicos, salvo se contratada separadamente como fornecedora de mídia. Condições do evento, cronograma, restrições, Convidados, clima, iluminação e o desempenho dos Fornecedores afetam o resultado."),
  P("Cabe ao Cliente obter as autorizações eventualmente exigidas de Convidados, empregados, artistas ou menores, salvo se o Contrato de Serviço atribuir expressamente essa responsabilidade à Elegant Society."),

  section("31.", "Operação de drones"),
  P("A captação com drone está sujeita à disponibilidade de piloto, às exigências da Federal Aviation Administration, a restrições de espaço aéreo, à autorização do local, ao clima, à privacidade, à segurança e às normas locais. A Elegant Society não garante a operação de drone, e o piloto detém autoridade final para recusar ou interromper o voo por razões de segurança ou conformidade."),

  section("32.", "Autorização de uso de imagem e direitos de portfólio"),
  P("Salvo se o Cliente contratar e quitar integralmente uma Cessão de Privacidade antes do Evento, o Cliente concede à Elegant Society e a seus representantes autorizados licença perpétua, mundial, isenta de royalties e não exclusiva para fotografar, gravar, reproduzir, recortar, editar, exibir, publicar, distribuir e utilizar imagens e gravações do Evento, da decoração, das instalações, dos espaços do local, dos detalhes e dos serviços, para fins de portfólio, site, redes sociais, publicidade, imprensa, propostas, premiações, educação, apresentações e demais finalidades empresariais lícitas."),
  P("A Elegant Society utilizará julgamento profissional razoável e não empregará conscientemente a mídia de forma difamatória ou ilícita. Nenhuma remuneração é devida ao Cliente pelo uso autorizado. O Cliente declara possuir poderes para conceder direitos relativos aos Materiais do Cliente fornecidos à Elegant Society."),
  P("Esta Seção não transfere a titularidade de obra protegida por direitos autorais de fotógrafo ou videomaker. O uso pela Elegant Society permanece sujeito a licença específica do criador da mídia."),

  section("33.", "Cessão de privacidade"),
  P("O Cliente poderá solicitar Contrato de Cessão de Privacidade por escrito, restringindo a publicação futura de mídia do Evento pela Elegant Society. Salvo disposição diversa naquele contrato, o valor corresponde ao maior entre Mil Dólares (US$ 1.000) ou dez por cento (10%) do valor total contratado, para contratos superiores a Quinze Mil Dólares (US$ 15.000), calculado por Evento."),
  P("A Cessão de Privacidade somente produz efeitos após a assinatura e o pagamento integral, antes do Evento. Ela não obriga à remoção de mídia já licitamente publicada antes da data de vigência, não restringe a retenção de arquivos para fins jurídicos, securitários, contábeis, de treinamento ou de litígio, e não controla a publicação por Convidados, Fornecedores, locais ou terceiros."),

  section("34.", "Redes sociais e comunicações públicas"),
  P("O Cliente não afirmará nem sugerirá que a Elegant Society endossa Fornecedor, produto, posição política, organização ou declaração, sem aprovação escrita. Marcações, créditos, embargos, cronograma de publicação e regras de postagem de Fornecedores poderão ser definidos no Contrato de Serviço ou em plano de mídia."),
  P("Nada no Contrato proíbe avaliações verdadeiras, comunicações de boa-fé a autoridades, participação em processos judiciais ou outras manifestações protegidas por lei. As partes comprometem-se a não publicar conscientemente declarações falsas de fato sobre a outra parte."),

  section("35.", "Ferramentas de IA e conteúdo digital"),
  P("A Elegant Society poderá utilizar softwares comercialmente disponíveis e ferramentas assistidas por inteligência artificial para redação administrativa, agendamento, tradução, transcrição, exploração de design, aprimoramento de imagens, conceitos de marketing e apoio ao fluxo de trabalho. A Elegant Society permanece responsável por seu produto final dentro do Escopo de Serviços e adotará salvaguardas razoáveis e proporcionais às informações envolvidas."),
  P("Salvo autorização expressa e escrita do Cliente, a Elegant Society não submeterá intencionalmente dados pessoais sensíveis, dados de cartão de pagamento, números de documentos oficiais ou informações médicas confidenciais a sistemas públicos de IA generativa. Prévias e imagens conceituais geradas por IA têm caráter ilustrativo e podem não refletir com exatidão materiais, dimensões, cores ou disponibilidade finais."),

  section("36.", "Propriedade intelectual"),
  P("A Elegant Society mantém todos os direitos, títulos e interesses sobre os Materiais da Empresa, métodos de negócio, templates, sistemas de planejamento, projetos, conceitos, painéis de referência, renderizações, cronogramas, checklists, plantas, receitas florais, materiais de treinamento, estruturas de precificação e know-how, inclusive materiais criados antes ou durante a contratação."),
  P("Mediante o pagamento integral, o Cliente recebe licença limitada, não exclusiva e intransferível para utilizar os Entregáveis finais exclusivamente para o Evento e para suas finalidades pessoais ou internas, conforme aplicável. O Cliente não poderá revender, sublicenciar, reproduzir para outro evento, fornecer a concorrente para replicação, remover avisos de propriedade ou utilizar os Materiais da Empresa para obter trabalho substancialmente idêntico de outro prestador sem autorização escrita."),
  P("O Cliente mantém a titularidade dos Materiais do Cliente e concede à Elegant Society licença para utilizá-los conforme necessário à execução do Contrato e ao exercício dos direitos de portfólio autorizados."),

  section("37.", "Confidencialidade"),
  P("Cada parte empregará cuidado razoável para proteger as informações não públicas de natureza empresarial, financeira, pessoal e operacional divulgadas pela outra parte e identificadas como confidenciais ou razoavelmente compreendidas como tais. A confidencialidade não se aplica a informações públicas sem violação, já licitamente conhecidas, desenvolvidas de forma independente, recebidas licitamente de terceiro ou cuja divulgação seja exigida por lei."),
  P("A Elegant Society poderá compartilhar as informações necessárias com empregados, prestadores, Fornecedores, seguradoras, contadores, advogados, provedores de software e operadoras de pagamento que tenham legítima necessidade de conhecê-las e estejam sujeitos a deveres ou salvaguardas adequados."),

  section("38.", "Segurança de dados e comunicações eletrônicas"),
  P("O Cliente autoriza a comunicação por e-mail, telefone, mensagem de texto, portal do cliente, videoconferência e demais sistemas eletrônicos acordados. As comunicações eletrônicas envolvem riscos, incluindo interceptação, entrega equivocada, comprometimento de conta ou atraso. O Cliente manterá senhas seguras, comunicará prontamente qualquer suspeita de comprometimento e verificará instruções incomuns de pagamento ou bancárias por telefone, utilizando número conhecido."),
  P("A Elegant Society não responderá por valores enviados a conta fraudulenta quando o Cliente deixar de verificar instruções de pagamento alteradas após alerta de segurança razoável. A Elegant Society manterá salvaguardas administrativas e técnicas comercialmente razoáveis e proporcionais ao porte e à natureza de sua operação, ressalvado que nenhum sistema pode ser garantido como completamente seguro."),

  section("39.", "Seguros e certificados"),
  P("O Cliente contratará seguro de evento, de cancelamento, de responsabilidade civil, patrimonial, de bebidas alcoólicas ou outro, quando exigido pelo local, pelo Fornecedor ou pela legislação aplicável. A Elegant Society poderá exigir do Cliente ou dos Fornecedores certificados de seguro e endossos de segurado adicional. O recebimento de certificado não significa que a Elegant Society tenha verificado a suficiência da cobertura ou a conformidade da apólice."),

  section("40.", "Política de ambiente de trabalho seguro"),
  P("O Cliente proporcionará ambiente de trabalho razoavelmente livre de riscos reconhecidos, atividade ilícita, armas proibidas pelo local, assédio, discriminação, violência, condições estruturais inseguras, animais soltos e embriaguez severa. A Elegant Society poderá interromper os trabalhos ou deixar o local se sua equipe razoavelmente entender que as condições são inseguras. O Cliente permanece responsável pelos valores e custos quando os serviços forem interrompidos por condições sob seu controle."),

  section("41.", "Conformidade legal"),
  P("Cada parte cumprirá a legislação aplicável às suas próprias responsabilidades. Cabe ao Cliente providenciar licenças, alvarás, limites de lotação, autorizações musicais, autorizações para bebidas alcoólicas, requisitos de captação de recursos, obrigações trabalhistas relativas a seu pessoal, obrigações de acessibilidade atribuídas ao anfitrião do evento e o uso lícito dos Materiais do Cliente."),
  P("A Elegant Society poderá recusar qualquer instrução que razoavelmente entenda ser ilícita, insegura, discriminatória, violadora de direitos, enganosa ou incompatível com as regras do local ou com os padrões profissionais."),

  section("42.", "Ausência de garantia de resultado"),
  P("A Elegant Society prestará os serviços com cuidado profissional razoável, mas não garante clima, comparecimento, desempenho de Fornecedores, cobertura de imprensa, engajamento em redes sociais, premiações, vendas, resultados de arrecadação, satisfação dos convidados ou qualquer resultado emocional, estético ou comercial específico. A mera insatisfação subjetiva não caracteriza inadimplemento quando os serviços atendem materialmente ao Contrato."),

  section("43.", "Limitação de responsabilidade"),
  P("Na máxima extensão permitida em lei, a responsabilidade agregada total da Elegant Society decorrente do Contrato não excederá o total dos honorários de serviço efetivamente pagos à Elegant Society sob o respectivo Contrato de Serviço, excluídos custos repassados a Fornecedores, tributos, reembolsos e valores pagos a terceiros."),
  P("Na máxima extensão permitida em lei, a Elegant Society não responderá por danos indiretos, incidentais, especiais, exemplares, punitivos ou consequenciais; lucros cessantes; perda de oportunidades de negócio; dano moral; dano reputacional; perda de dados; ou perda de fruição, ainda que advertida da possibilidade de tais danos."),
  P("As limitações não se aplicam à responsabilidade que não possa ser legalmente limitada, nem à culpa grave, ao dolo ou à fraude da Elegant Society, conforme decisão final de juízo competente."),

  section("44.", "Indenização"),
  P("Na máxima extensão permitida em lei, o Cliente defenderá, indenizará e manterá indenes a Elegant Society e seus sócios, diretores, empregados e prestadores de reclamações de terceiros, danos, multas, penalidades, responsabilidades e custos razoáveis decorrentes de: (a) Materiais do Cliente; (b) violação do Contrato pelo Cliente; (c) conduta do Cliente ou dos Convidados; (d) bebidas alcoólicas, alimentos, instalações ou atividades controladas pelo Cliente ou por terceiros; ou (e) violação legal pelo Cliente, exceto na medida em que decorram de culpa grave ou dolo da Elegant Society."),
  P("A Elegant Society comunicará prontamente ao Cliente a reclamação indenizável e permitirá que o Cliente conduza a defesa com advogados razoavelmente aceitáveis, ressalvado que o Cliente não poderá compor reclamação de modo a reconhecer culpa da Elegant Society ou lhe impor obrigações não pecuniárias sem consentimento escrito."),

  section("45.", "Solução de controvérsias; conferência de boa-fé; mediação"),
  P("Antes de ajuizar ação, as partes buscarão resolver a controvérsia de boa-fé por meio de conferência entre representantes autorizados. A parte interessada enviará aviso escrito descrevendo a controvérsia e a solução pretendida. A parte destinatária terá dez (10) Dias Úteis para responder, salvo se houver necessidade razoável de tutela de urgência."),
  P("Não resolvida a controvérsia, as partes participarão de mediação não vinculante em Massachusetts antes de iniciar o litígio. O mediador será escolhido de comum acordo e os honorários de mediação serão divididos igualmente, salvo acordo diverso. Cada parte arcará com seus próprios honorários advocatícios na mediação. Qualquer parte poderá requerer tutela cautelar para proteger informações confidenciais, propriedade intelectual, segurança ou patrimônio, sem necessidade de concluir previamente a mediação."),

  section("46.", "Honorários advocatícios e custas"),
  P("Em ação de execução do Contrato, a parte vencedora poderá recuperar honorários advocatícios e custas razoáveis, na extensão admitida pela legislação aplicável e conforme determinado pelo juízo. Nada nesta Seção limita direitos ou remédios legais irrenunciáveis."),

  section("47.", "Lei aplicável; foro"),
  P("O Contrato é regido pelas leis do Estado de Massachusetts, sem consideração às suas normas de conflito de leis. Observada a exigência de mediação, qualquer processo judicial será ajuizado perante juízo estadual ou federal com competência em Middlesex County, Massachusetts, salvo se a legislação aplicável exigir foro diverso. Cada parte consente com a jurisdição pessoal desses juízos."),

  section("48.", "Notificações"),
  P("As notificações formais relativas a cancelamento, inadimplemento, indenização ou pretensões jurídicas devem ser feitas por escrito e entregues por: (a) entrega pessoal; (b) transportadora expressa de reconhecimento nacional; (c) correio registrado dos EUA, com aviso de recebimento; ou (d) e-mail com confirmação de recebimento, nos endereços indicados no Contrato de Serviço. Comunicações operacionais de rotina podem ser enviadas por e-mail comum, mensagem de texto ou portal do cliente."),
  P("Cada parte comunicará prontamente à outra a alteração de seus dados de contato. A notificação é eficaz na entrega pessoal, na confirmação de recebimento do e-mail, um Dia Útil após a postagem por transportadora expressa ou três Dias Úteis após a postagem por correio registrado."),

  section("49.", "Registros e assinaturas eletrônicas"),
  P("As partes consentem em transacionar eletronicamente. Assinaturas eletrônicas, aceite por clique, aceite autenticado em portal do cliente e registros eletrônicos terão a mesma eficácia de assinaturas originais e registros em papel, na extensão permitida pela legislação aplicável. Cada parte poderá manter cópia eletrônica como registro autoritativo do Contrato."),

  section("50.", "Disposições gerais"),
  lead("50.1  Integralidade.", "O Contrato constitui o acordo integral entre as partes sobre seu objeto e substitui tratativas, declarações, propostas e entendimentos anteriores ou contemporâneos."),
  lead("50.2  Aditamentos.", "Aditamento deverá constar de instrumento escrito assinado ou aceito eletronicamente por ambas as partes, ressalvado que a Elegant Society poderá atualizar procedimentos administrativos que não reduzam materialmente os direitos ou serviços contratados do Cliente."),
  lead("50.3  Vedação de alteração verbal.", "Declarações verbais de qualquer parte, de Convidado, de Fornecedor ou de membro da equipe não modificam o Contrato."),
  lead("50.4  Renúncia.", "A não exigência de uma disposição não implica renúncia a ela nem a inadimplemento posterior. A renúncia deve constar por escrito e aplica-se somente à matéria específica indicada."),
  lead("50.5  Autonomia das cláusulas.", "Se uma disposição for considerada inválida ou inexequível, será modificada no mínimo necessário para torná-la exequível, permanecendo eficazes as demais."),
  lead("50.6  Cessão.", "O Cliente não poderá ceder o Contrato sem consentimento escrito da Elegant Society. A Elegant Society poderá cedê-lo em razão de fusão, alienação, reorganização ou transferência de substancialmente todos os ativos do negócio relacionado, desde que o cessionário assuma suas obrigações."),
  lead("50.7  Prestação autônoma.", "A Elegant Society é prestadora autônoma. O Contrato não cria relação de emprego, sociedade, fidúcia, franquia ou consórcio."),
  lead("50.8  Ausência de terceiros beneficiários.", "O Contrato beneficia apenas as partes e seus sucessores e cessionários autorizados, ressalvadas as pessoas expressamente protegidas por cláusula de indenização ou limitação."),
  lead("50.9  Títulos.", "Os títulos servem apenas à conveniência e não alteram a interpretação."),
  lead("50.10  Interpretação.", "O Contrato será interpretado de forma equilibrada, sem interpretação estrita contra qualquer das partes na condição de redatora. “Inclusive” significa “inclusive, sem limitação”. O singular abrange o plural quando cabível."),
  lead("50.11  Vias.", "O Contrato poderá ser assinado em vias, cada qual considerada original e todas, em conjunto, um único instrumento."),
  lead("50.12  Sobrevivência.", "As obrigações de pagamento, as disposições sobre propriedade intelectual, confidencialidade, direitos de portfólio, privacidade, indenização, limitações de responsabilidade, solução de controvérsias e todas as disposições que por natureza devam subsistir permanecerão vigentes após o término ou a rescisão."),

  section("51.", "Reconhecimento e aceitação"),
  P("O Cliente reconhece que leu o Contrato, teve a oportunidade de esclarecer dúvidas e obter assessoria jurídica independente, compreende que o Escopo de Serviços limita-se às inclusões escritas e concorda voluntariamente em vincular-se a estes Termos. O Cliente reconhece ainda ter recebido ou ter tido acesso a cópia integral do Contrato antes da assinatura."),

  new Paragraph({ children: [new PageBreak()] }),

  ...banner("Assinaturas"),

  signatureBlock([
    { title: "Cliente 1", fields: [["Assinatura"], ["Nome completo"], ["Data"], ["E-mail"], ["Telefone"]] },
    { title: "Elegant Society Inc.", fields: [["Assinatura"], ["Representante autorizado"], ["Cargo"], ["Data"], ["E-mail", "hello@elegantsociety.us"], ["Telefone", "(978) 206-8620"]] },
  ]),

  spacer(12),

  signatureBlock([
    { title: "Cliente 2 (se aplicável)", fields: [["Assinatura"], ["Nome completo"], ["Data"], ["E-mail"], ["Telefone"]] },
    null,
  ]),

  spacer(10),
  B.rule({ color: B.GOLD, size: 8, after: 120 }),
  B.eyebrow("Fim dos Termos e Condições Gerais", { align: B.AlignmentType.CENTER, color: B.MUTED, after: 0 }),
];

const doc = buildDocument({
  title: "Termos e Condições Gerais — Elegant Society Inc.",
  docLabel: "Termos e Condições Gerais",
  children,
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(path.join(__dirname, "out", "Elegant Society - Termos e Condicoes Gerais.docx"), buf);
  console.log("ok");
});
