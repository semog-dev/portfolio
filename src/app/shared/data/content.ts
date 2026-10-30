export const site = {
  title: 'Fernando Pereira — Desenvolvedor Backend .NET',
  description:
    'Portfolio de Fernando Pereira (semog-dev), Desenvolvedor Backend .NET em São Paulo. Sistemas de gestão de FIDCs com C#, ASP.NET Core, EF Core, Clean Architecture e CQRS.',
};

export const socialLinks = {
  github: 'https://github.com/semog-dev',
  linkedin: 'https://www.linkedin.com/in/fernando-pereira-dev/',
  email: 'semogdev.pereira@hotmail.com',
};

export const navItems = [
  { label: 'Início', anchor: 'home' },
  { label: 'Projetos', anchor: 'projetos' },
  { label: 'Contato', anchor: 'contato' },
];

export const hero = {
  greeting: 'Olá, meu nome é Fernando',
  headline: 'Desenvolvedor Backend com foco na plataforma',
  headlineAccent: '.NET',
  subtitle:
    'Construo sistemas de gestão de FIDCs para o mercado financeiro: cessão, precificação, liquidação e custódia. São 396 entregas em 22 fundos em quase 4 anos.',
};

export const about = {
  title: 'Minha Jornada como',
  titleAccent: 'Desenvolvedor',
  intro:
    'Sou Fernando Pereira, Desenvolvedor Backend .NET em São Paulo. Trabalho com C#, ASP.NET Core e Entity Framework Core, gosto de código testável e de entender o domínio de negócio a fundo.',
  photo: '/images/foto.jpg',
  paragraphs: [
    'O interesse por computadores vem desde criança. Ao terminar o ensino médio, cursei Técnico em Informática com ênfase em programação na ETEC Albert Einstein, mas não pude concluir o curso por motivos pessoais. Voltei à ETEC anos depois e me formei Técnico em Eletrônica (2016-2018).',
    'A programação continuou puxando mais forte. Em 2020 consegui minha primeira oportunidade na Soft Clever, como programador júnior em Delphi, onde também fiz minha transição para o ecossistema .NET com ASP.NET Web API. Em paralelo, cursei Análise e Desenvolvimento de Sistemas na Faculdade Impacta (2021-2023).',
    'Desde o fim de 2022 estou na Integral Trust, desenvolvendo o backend de sistemas de gestão de FIDCs para grandes instituições financeiras. Fora do trabalho, estudo mensageria com RabbitMQ, cache com Redis e Azure Key Vault em projetos próprios, que estão no meu GitHub.',
  ],
  cvUrl: '/docs/curriculo.pdf',
};

export const experiences = [
  {
    company: 'Integral Trust',
    role: 'Desenvolvedor Backend .NET Pleno',
    period: '12/2022 - atualmente',
    description:
      'Desenvolvimento backend de sistemas de gestão de FIDCs (Fundos de Investimento em Direitos Creditórios) para grandes instituições financeiras.',
    highlights: [
      '396 entregas concluídas (95,7% das tarefas atribuídas) em 22 fundos e projetos, de debêntures a FIDCs de varejo, montadoras e agronegócio',
      'Sistema completo de um FIDC de varejo automotivo: cadastros, controle de acesso, integração via API, cessão, precificação, liquidação, custódia e regras de elegibilidade',
      'Biblioteca de funcionalidades comuns entre fundos e template base que padronizou e acelerou o início de novos FIDCs',
      'Integração com a API de cobrança do Itaú e worker de processamento em lote com geração de arquivos Parquet',
    ],
    technologies:
      '.NET Core, EF Core, Clean Architecture, CQRS, MediatR, xUnit, SQL Server, Docker, AWS, GitHub Actions, Angular',
  },
  {
    company: 'Soft Clever',
    role: 'Programador Júnior',
    period: '08/2020 - 12/2022',
    description:
      'Desenvolvimento de sistemas desktop e APIs REST, com a transição para o ecossistema .NET.',
    highlights: [
      'Sistemas desktop em Delphi (VCL Forms) e APIs REST com DataSnap',
      'Participação no desenvolvimento de um ORM e outras ferramentas internas para Delphi',
      'APIs REST com ASP.NET Web API',
    ],
    technologies: 'Delphi, DataSnap, ASP.NET Web API, Firebird, MySQL',
  },
];

export const skillGroups = [
  {
    category: 'Backend',
    skills: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Delphi'],
  },
  {
    category: 'Arquitetura e Testes',
    skills: ['Clean Architecture', 'CQRS', 'MediatR', 'xUnit', 'FluentAssertions', 'NSubstitute'],
  },
  {
    category: 'Cloud e Infra',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'RabbitMQ', 'Redis', 'Azure Key Vault'],
  },
  {
    category: 'Frontend',
    skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
  },
];

export const projetosPage = {
  eyebrow: 'Projetos',
  title: 'Meus projetos no',
  titleAccent: 'GitHub',
  subtitle: 'Uma seleção dos repositórios fixados no meu perfil.',
  emptyState: 'Nenhum projeto encontrado.',
  ctaLabel: 'Ver todos os projetos',
};

export const contatoPage = {
  title: 'Entre em Contato',
  subtitle:
    'Tem uma oportunidade, um projeto em mente ou só quer trocar uma ideia? Me manda uma mensagem 👋',
  submitLabel: 'Enviar mensagem',
  submittingLabel: 'Enviando...',
  successMessage: 'Mensagem enviada com sucesso!',
  errorMessage: 'Erro ao enviar. Tente novamente.',
};

export const footerText = 'Este site foi desenvolvido por semog-dev';
