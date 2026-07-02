export const site = {
  title: 'Fernando Gomes — Desenvolvedor Fullstack .NET & Angular',
  description:
    'Portfolio de Fernando Gomes (semog-dev), Desenvolvedor Fullstack em São Paulo com foco na plataforma .NET e experiência também em Angular, Next.js e Flutter.',
};

export const socialLinks = {
  github: 'https://github.com/semog-dev',
  linkedin: 'https://www.linkedin.com/in/fernando-pereira-7172a6151/',
  email: 'semogdev.pereira@hotmail.com',
};

export const navItems = [
  { label: 'Início', anchor: 'home' },
  { label: 'Projetos', anchor: 'projetos' },
  { label: 'Contato', anchor: 'contato' },
];

export const hero = {
  greeting: 'Olá, meu nome é Fernando',
  headline: 'Desenvolvedor Fullstack com ênfase na plataforma',
  headlineAccent: '.NET',
  subtitle:
    'Do backend em C# e Delphi ao frontend em Angular — construo sistemas completos para quem precisa de software confiável no dia a dia.',
};

export const about = {
  title: 'Minha Jornada como',
  titleAccent: 'Desenvolvedor',
  intro:
    'Sou Fernando Gomes, Desenvolvedor Fullstack em São Paulo, com foco na plataforma .NET. Também trabalho com Angular, Next.js e Flutter, e gosto de acompanhar um projeto do banco de dados até a tela do usuário.',
  photo: '/images/foto.jpg',
  paragraphs: [
    'O interesse por computadores vem desde criança. Ao terminar o ensino médio, cursei Técnico em Informática com ênfase em programação na ETEC Albert Einstein, mas não pude concluir o curso por motivos pessoais.',
    'Anos depois, voltei à ETEC para cursar Técnico em Eletrônica e cheguei a trabalhar nessa área. Mas a programação continuou puxando mais forte, e decidi cursar Análise e Desenvolvimento de Sistemas na Faculdade Impacta.',
    'Foi durante a faculdade que consegui minha primeira oportunidade, na Soft Clever: 6 meses de estágio e mais 1 ano e meio como programador júnior, desenvolvendo e mantendo um ERP em Delphi e Firebird. Em seguida, ingressei na Integral Trust, onde atuo até hoje.',
  ],
  cvUrl: '/docs/curriculo.pdf',
};

export const experiences = [
  {
    company: 'Soft Clever',
    period: '06/2021 - 12/2022',
    description:
      'Desenvolvedor Delphi responsável pela manutenção e evolução de um sistema ERP: novas funcionalidades, correções e ajustes de performance.',
    technologies: 'Delphi, Firebird, Datasnap, Asp.NET',
  },
  {
    company: 'Integral Trust',
    period: '12/2022 - atualmente',
    description:
      'Desenvolvedor Fullstack em sistemas de gestão para FIDCs (Fundos de Investimento em Direitos Creditórios), do backend em .NET Core ao frontend em Angular.',
    technologies: '.NET Core, Asp.NET, Entity Framework, Angular, SQL Server',
  },
];

export const skillGroups = [
  {
    category: 'Backend',
    skills: ['.NET', 'C#', 'Entity Framework', 'SQL Server', 'RabbitMQ', 'Delphi'],
  },
  {
    category: 'Frontend',
    skills: ['Angular', 'Next.js', 'Flutter', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'Ferramentas',
    skills: ['Git', 'Docker', 'SQL Server Management Studio', 'Visual Studio'],
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
