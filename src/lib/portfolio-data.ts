// Fonte única de conteúdo do portfólio.
// Para adicionar novos projetos, experiências ou tecnologias, basta editar os arrays abaixo.

export const perfil = {
  nome: "José André",
  nomeCompleto: "José André Pereira da Silva Neto",
  cargo: "Desenvolvedor Full Stack",
  local: "Natal — RN, Brasil",
  posicionamento:
    "Construo sistemas completos — APIs, ERPs e plataformas financeiras — com Python, Django e Vue/Angular, do modelo de dados ao deploy em containers.",
  resumo:
    "Desenvolvedor Full Stack com experiência em fintechs, ERPs e sistemas corporativos. Atuo em todas as camadas da aplicação: modelagem e otimização de banco, APIs em Django e Flask, interfaces em Vue.js e Angular, pipelines de ETL, testes automatizados e containers com Docker e CI/CD.",
  whatsapp: "5584987614805",
  whatsappExibicao: "(84) 98761-4805",
  email: "jose.andre.psn@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/jose-andre-desenvolvedor-de-software",
  github: "https://github.com/joseandrepereira",
};

export const mensagemWhatsApp =
  "Olá, José André! Encontrei seu portfólio e gostaria de conversar sobre um projeto.";

export const whatsappUrl = `https://wa.me/${perfil.whatsapp}?text=${encodeURIComponent(mensagemWhatsApp)}`;
export const mailtoUrl = `mailto:${perfil.email}?subject=${encodeURIComponent("Contato pelo portfólio")}`;

export const destaques = [
  { valor: "4+", rotulo: "anos construindo software em produção" },
  { valor: "6", rotulo: "ERPs e plataformas em que atuei" },
  { valor: "Full Stack", rotulo: "do banco de dados ao deploy" },
];

export const stacks: { categoria: string; itens: string[]; nota: string }[] = [
  {
    categoria: "Backend",
    itens: ["Python", "Django", "Flask", "APIs REST", "Design Patterns"],
    nota: "Núcleo do meu trabalho: APIs e regras de negócio de ERPs e fintechs.",
  },
  {
    categoria: "Frontend",
    itens: ["JavaScript", "Vue.js 2 e 3", "Angular", "Bootstrap Vue"],
    nota: "Interfaces de sistemas com muitos formulários, tabelas e permissões.",
  },
  {
    categoria: "Dados",
    itens: ["PostgreSQL", "MongoDB", "Redis", "ETL", "Pandas", "NumPy"],
    nota: "Otimização de queries, caching e pipelines de integração entre bases.",
  },
  {
    categoria: "Infra & DevOps",
    itens: ["Docker", "CI/CD", "Kubernetes", "Azure", "Databricks", "Git"],
    nota: "Ambientes reprodutíveis e entrega contínua em times ágeis.",
  },
  {
    categoria: "Testes & Qualidade",
    itens: ["Pytest", "Cypress", "Testes unitários"],
    nota: "Cobertura de regras críticas e fluxos de ponta a ponta.",
  },
  {
    categoria: "Processo",
    itens: ["Scrum", "Agile", "Jira", "Bitbucket", "Arquitetura de software"],
    nota: "Rotina de sprints, refinamento técnico e code review.",
  },
];

export type Experiencia = {
  empresa: string;
  cargo: string;
  periodo: string;
  local: string;
  atual?: boolean;
  pontos: string[];
  tecnologias: string[];
};

export const experiencias: Experiencia[] = [
  {
    empresa: "Luksoft Tecnologia e Sistemas",
    cargo: "Consultor de Desenvolvimento de Sistemas | Especialista em Python",
    periodo: "Nov 2025 — atual",
    local: "Guararema — SP",
    atual: true,
    pontos: [
      "Alocado na Riachuelo, apoiando o time de comissionamento em análise técnica e desenvolvimento de funcionalidades.",
      "Implementação de integrações, melhorias e otimizações em processos de dados.",
    ],
    tecnologias: ["Python", "Pandas", "NumPy", "Azure", "Databricks", "Jira", "Scrum", "Git"],
  },
  {
    empresa: "Global Tech Holding",
    cargo: "Desenvolvedor Full Stack",
    periodo: "Abr 2025 — Out 2025",
    local: "Rio de Janeiro — RJ",
    pontos: [
      "Desenvolvimento e manutenção da BKOPEN, fintech marketplace focada em concessão de crédito.",
      "APIs em Python/Django no backend e interfaces dinâmicas em Angular no frontend.",
      "Impacto: mais estabilidade e transparência na solicitação de empréstimos, simplificando a jornada do usuário.",
    ],
    tecnologias: ["Python", "Django", "Angular", "JavaScript", "Docker", "Bitbucket", "Scrum"],
  },
  {
    empresa: "Coorlab",
    cargo: "Desenvolvedor Full Stack",
    periodo: "Jul 2023 — Mar 2025",
    local: "Campinas — SP",
    pontos: [
      "SysLic (ERP de licitações): novos módulos de faturamento e logística; tempo de processamento de licitações reduzido em 40% com otimização de queries no PostgreSQL.",
      "Nezti (ERP de mudanças e transporte): eficiência do sistema 25% maior com caching estratégico em Redis.",
      "Sistema de gerenciamento de rotas: custos operacionais 30% menores com otimização dos algoritmos de roteamento.",
      "ETLs entre MongoDB e PostgreSQL, com 50% de ganho de performance nos processos de extração e análise.",
    ],
    tecnologias: ["Python", "Django", "Flask", "PostgreSQL", "MongoDB", "Redis", "Vue.js", "Docker", "Pytest", "Cypress"],
  },
  {
    empresa: "Coorlab",
    cargo: "Desenvolvedor Full Stack (30h)",
    periodo: "Ago 2022 — Jun 2023",
    local: "Campinas — SP",
    pontos: [
      "Coordene (ERP para indústria química e moda sustentável): automação de processos administrativos, com 35% menos tempo em tarefas manuais.",
      "Go Rotas (ERP de transporte e logística): participação no desenvolvimento completo do sistema de gestão de rotas e entregas, com 20% de ganho na eficiência das entregas.",
      "ETLs para transportadoras: 45% menos latência nas consultas e maior escalabilidade dos dados.",
    ],
    tecnologias: ["Python", "Django", "PostgreSQL", "Vue.js", "Bootstrap Vue", "Docker"],
  },
  {
    empresa: "Petroeng Consultoria e Projetos Industriais",
    cargo: "Estágio de TI",
    periodo: "Set 2021 — Jun 2022",
    local: "Aracaju — SE",
    pontos: [
      "Scripts em Python para automação de processos logísticos, economizando 1 hora por dia em tarefas repetitivas.",
      "Gestão e controle de equipamentos de microinformática; suporte técnico aos colaboradores.",
    ],
    tecnologias: ["Python", "Excel VBA", "Automação"],
  },
  {
    empresa: "UFRN",
    cargo: "Voluntário em Iniciação Científica",
    periodo: "Nov 2019 — Jul 2020",
    local: "Natal — RN",
    pontos: [
      "Pesquisa sobre fluxo de informações no tratamento de feridas na Maternidade Escola Januário Cicco.",
      "Apoio no desenvolvimento de um sistema para organização e estruturação de dados hospitalares.",
    ],
    tecnologias: ["Coleta de dados", "Modelagem de sistemas", "Análise estatística"],
  },
];

export type Projeto = {
  nome: string;
  contexto: string;
  problema: string;
  contribuicao: string[];
  tecnologias: string[];
  destaque?: boolean;
  link?: string;
  repositorio?: string;
};

export const projetos: Projeto[] = [
  {
    nome: "SysLic",
    contexto: "ERP para gestão de licitações — Coorlab",
    problema:
      "Processos de licitação envolvem prazos, documentos e faturamento que se perdem em planilhas e etapas manuais, tornando o ciclo lento e sujeito a erro.",
    contribuicao: [
      "Desenvolvi e evoluí o sistema, implementando os módulos de faturamento e logística.",
      "Otimizei queries no PostgreSQL e refatorei trechos críticos do backend em Django.",
      "Resultado: 40% de redução no tempo de processamento das licitações.",
      "Escrevi testes com Pytest e Cypress para proteger as regras de negócio mais sensíveis.",
    ],
    tecnologias: ["Python", "Django", "PostgreSQL", "Vue.js", "Docker", "Pytest", "Cypress"],
    destaque: true,
  },
  {
    nome: "BKOPEN",
    contexto: "Marketplace financeiro de concessão de crédito — Global Tech Holding",
    problema:
      "Solicitar crédito envolve várias instituições e etapas opacas para o usuário final.",
    contribuicao: [
      "Construí APIs em Python/Django e interfaces em Angular.",
      "Padronizei ambientes com Docker e trabalhei em sprints com Scrum e Jira.",
      "Resultado: mais estabilidade e transparência no fluxo de solicitação de empréstimos.",
    ],
    tecnologias: ["Python", "Django", "Angular", "Docker", "Scrum"],
  },
  {
    nome: "Nezti",
    contexto: "ERP para mudanças e transporte — Coorlab",
    problema:
      "Gestão manual de pacotes e clientes gerava retrabalho e respostas lentas do sistema.",
    contribuicao: [
      "Mantive e desenvolvi novas funcionalidades de automação na gestão de pacotes e clientes.",
      "Implementei caching estratégico com Redis: 25% de ganho de eficiência.",
    ],
    tecnologias: ["Python", "Django", "Redis", "PostgreSQL", "Vue.js"],
  },
  {
    nome: "Sistema de gerenciamento de rotas",
    contexto: "Logística para grandes transportadoras — Coorlab",
    problema:
      "Alocação de entregas mal distribuída elevava o custo por rota.",
    contribuicao: [
      "Aprimorei a alocação de entregas e os algoritmos de roteamento.",
      "Resultado: 30% de redução nos custos operacionais.",
    ],
    tecnologias: ["Python", "Django", "PostgreSQL"],
  },
  {
    nome: "Pipelines de ETL",
    contexto: "Integração de dados entre bases — Coorlab",
    problema:
      "Dados espalhados entre MongoDB e PostgreSQL dificultavam análise e geravam consultas lentas.",
    contribuicao: [
      "Desenvolvi e otimizei pipelines de ETL entre MongoDB e PostgreSQL.",
      "Resultados: 50% de ganho na performance de extração e análise e 45% menos latência nas consultas em projetos de transportadoras.",
    ],
    tecnologias: ["Python", "MongoDB", "PostgreSQL", "Docker"],
  },
  {
    nome: "Coordene",
    contexto: "ERP para indústria química e moda sustentável — Coorlab",
    problema:
      "Rotinas administrativas consumiam tempo da operação em tarefas repetitivas.",
    contribuicao: [
      "Manutenção e novas funcionalidades do ERP.",
      "Automação de processos administrativos: 35% menos tempo em tarefas manuais.",
    ],
    tecnologias: ["Python", "Django", "PostgreSQL", "Vue.js"],
  },
];

export const servicos = [
  {
    titulo: "Sistemas web sob medida",
    texto:
      "ERPs, painéis administrativos e plataformas internas com regras de negócio complexas, permissões e relatórios.",
  },
  {
    titulo: "APIs REST em Python",
    texto:
      "Backends em Django e Flask: modelagem, autenticação, versionamento e documentação de endpoints.",
  },
  {
    titulo: "Frontend de aplicação",
    texto:
      "Interfaces em Vue.js ou Angular para sistemas com muitos formulários, tabelas e fluxos operacionais.",
  },
  {
    titulo: "Integração entre sistemas",
    texto:
      "Conexão com serviços de terceiros e comunicação entre plataformas que hoje não conversam.",
  },
  {
    titulo: "Banco de dados e performance",
    texto:
      "PostgreSQL, MongoDB e Redis: modelagem, otimização de queries e caching para telas lentas.",
  },
  {
    titulo: "ETL e automação de processos",
    texto:
      "Pipelines de extração e transformação de dados e scripts que eliminam trabalho manual recorrente.",
  },
  {
    titulo: "Docker e entrega contínua",
    texto:
      "Padronização de ambientes com Docker e pipelines de CI/CD para deploys previsíveis.",
  },
  {
    titulo: "Evolução de sistemas existentes",
    texto:
      "Manutenção, refatoração e novos módulos em bases legadas, com testes automatizados.",
  },
];

export const diferenciais = [
  {
    titulo: "Sistemas reais, em produção",
    texto:
      "Fintech de crédito e ERPs de licitações, transporte e indústria — software usado diariamente por operações inteiras.",
  },
  {
    titulo: "Resultados mensuráveis",
    texto:
      "40% menos tempo de processamento de licitações, 30% de redução em custos de rota, 50% de ganho em pipelines de dados.",
  },
  {
    titulo: "Full Stack de verdade",
    texto:
      "Backend em Django/Flask, frontend em Vue e Angular, banco relacional e NoSQL, containers e CI/CD.",
  },
  {
    titulo: "Performance como prática",
    texto:
      "Otimização de queries no PostgreSQL, caching com Redis e revisão de algoritmos onde o custo aparece.",
  },
  {
    titulo: "Qualidade e testes",
    texto:
      "Pytest para regras de negócio e Cypress para fluxos ponta a ponta em sistemas críticos.",
  },
  {
    titulo: "Base acadêmica sólida",
    texto:
      "Bacharel em Tecnologia da Informação pela UFRN e pós-graduação em Inteligência Artificial no IMD/UFRN.",
  },
];

export const processo = [
  { n: "01", titulo: "Entendimento", texto: "Mapeio o problema, o processo atual e o que precisa mudar." },
  { n: "02", titulo: "Planejamento", texto: "Defino escopo, modelo de dados, arquitetura e tecnologias." },
  { n: "03", titulo: "Desenvolvimento", texto: "Construo em ciclos curtos, com entregas revisáveis a cada etapa." },
  { n: "04", titulo: "Testes", texto: "Valido regras de negócio com Pytest e fluxos completos com Cypress." },
  { n: "05", titulo: "Entrega", texto: "Deploy em ambiente containerizado, com documentação do que foi feito." },
  { n: "06", titulo: "Evolução", texto: "Acompanho o uso real e sigo com ajustes, melhorias e novos módulos." },
];

export const formacao = [
  {
    curso: "Pós-graduação em Inteligência Artificial (Lato Sensu, 360h)",
    instituicao: "Instituto Metrópole Digital — IMD/UFRN",
    periodo: "Ago 2025 — em andamento",
  },
  {
    curso: "Bacharelado em Tecnologia da Informação",
    instituicao: "Universidade Federal do Rio Grande do Norte — UFRN",
    periodo: "Fev 2018 — Jul 2023",
  },
  {
    curso: "Técnico em Automação Industrial",
    instituicao: "Instituto Metrópole Digital — IMD/UFRN",
    periodo: "Jul 2016 — Jun 2018",
  },
];

export const secoes = [
  { id: "inicio", rotulo: "Início" },
  { id: "sobre", rotulo: "Sobre" },
  { id: "experiencia", rotulo: "Experiência" },
  { id: "habilidades", rotulo: "Habilidades" },
  { id: "projetos", rotulo: "Projetos" },
  { id: "servicos", rotulo: "Serviços" },
  { id: "contato", rotulo: "Contato" },
];
