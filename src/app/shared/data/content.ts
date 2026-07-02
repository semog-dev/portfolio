export const site = {
  title: "Portfolio Semog Dev",
  description:
    "Portfolio de Fernando Gomes (semog-dev), Desenvolvedor Fullstack com ênfase na plataforma .NET.",
};

export const socialLinks = {
  github: "https://github.com/semog-dev",
  linkedin: "https://www.linkedin.com/in/fernando-pereira-7172a6151/",
  email: "semogdev.pereira@hotmail.com",
};

export const navItems = [
  { label: "Início", path: "/" },
  { label: "Projetos", path: "/projetos" },
  { label: "Contato", path: "/contato" },
];

export const hero = {
  greeting: "Olá, meu nome é Fernando",
  headline: "Desenvolvedor Fullstack com ênfase na plataforma",
  headlineAccent: ".NET",
};

export const about = {
  title: "Minha Jornada como",
  titleAccent: "Desenvolvedor",
  intro:
    "Eu sou Fernando Gomes, um Desenvolvedor Fullstack na cidade de São Paulo, dedicado a criar experiências digitais que não apenas são amigáveis ao usuário, mas também altamente eficientes.",
  photo: "/images/foto.jpg",
  paragraphs: [
    "Desde criança me interesso por computadores. Ao terminar o ensino médio, cursei Técnico em Informática com ênfase em programação na ETEC Albert Einstein, mas por motivos pessoais não concluí.",
    "Alguns anos depois, retornei à ETEC para cursar Técnico em Eletrônica e consegui alguns trabalhos nessa área. Ainda assim, minha paixão pela programação falou mais alto e cursei Análise e Desenvolvimento de Sistemas na Faculdade Impacta.",
    "Foi lá que conquistei minha primeira oportunidade, na Softclever, onde atuei por 6 meses como estagiário e 1 ano e meio como programador júnior, desenvolvendo e mantendo um ERP com Delphi e Firebird. Em seguida, ingressei na Integraltrust, onde atuo atualmente.",
  ],
  cvUrl: "/docs/curriculo.pdf",
};

export const experiences = [
  {
    company: "Soft Clever",
    period: "06/2021 - 12/2022",
    description:
      "Atuei como Desenvolvedor Delphi, criando soluções inteligentes para empresas (ERP).",
    technologies: "Delphi, Firebird, Datasnap, Asp.NET",
  },
  {
    company: "Integral Trust",
    period: "12/2022 - atualmente",
    description:
      "Atuo como Desenvolvedor Fullstack, criando soluções inteligentes para o FIDC (Fundo de investimento de direitos creditórios)",
    technologies: ".NET Core, Asp.NET, Entity Framework, Angular, SQL Server",
  },
];

export const skillGroups = [
  {
    category: "Backend",
    skills: [
      ".NET",
      "C#",
      "Entity Framework",
      "SQL Server",
      "RabbitMQ",
      "Delphi",
    ],
  },
  {
    category: "Frontend",
    skills: ["Angular", "Next.js", "Flutter", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Ferramentas",
    skills: ["Git", "Docker", "SQL Server Management Studio", "Visual Studio"],
  },
];

export const projetosPage = {
  eyebrow: "Projetos",
  title: "Meus projetos no",
  titleAccent: "GitHub",
  subtitle: "Repositórios fixados no meu perfil",
  emptyState: "Nenhum projeto encontrado.",
  ctaLabel: "Ver todos os projetos",
};

export const contatoPage = {
  title: "Entre em Contato",
  subtitle:
    "Fale comigo para oportunidades, colaborações ou apenas para dizer olá 👋",
  submitLabel: "Enviar mensagem",
  submittingLabel: "Enviando...",
  successMessage: "Mensagem enviada com sucesso!",
  errorMessage: "Erro ao enviar. Tente novamente.",
};

export const footerText = "Este site foi desenvolvido por semog-dev";
