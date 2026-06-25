export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  links: { label: string; url: string }[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "vidaplena",
    name: "VidaPlena — Sistema de Gestão em Saúde Familiar",
    description:
      "Sistema web para gerenciamento de pacientes e controle integrado de agendamentos em saúde familiar. Composto por uma API RESTful com FastAPI/Python e um frontend SPA com Next.js 14/React, comunicando-se via requisições HTTP.",
    tags: ["FastAPI", "Python", "Next.js", "React", "TypeScript", "Tailwind CSS", "SQLite", "SQLAlchemy", "Docker"],
    links: [
      {
        label: "Repositório 1 — Desenvolvimento Funcional",
        url: "https://github.com/lufecrx/Selecao-FESF-SUS-1-F.C",
      },
      {
        label: "Repositório 2 — Conteinerização Docker",
        url: "https://github.com/lufecrx/Selecao-FESF-SUS-2-F.C",
      },
    ],
    featured: true,
  },
  {
    id: "yobi",
    name: "Yobi App",
    description:
      "Cofundador de startup no setor de construção civil. Implementei mais de 10 funcionalidades principais, incluindo fluxos de cadastro e acompanhamento de pedidos, reduzindo o tempo de entrega do MVP para aproximadamente 3 meses.",
    tags: ["React Native", "TypeScript", "Firebase", "Scrum"],
    links: [
      {
        label: "Instagram",
        url: "https://instagram.com/yobi.app",
      },
    ],
  },
  {
    id: "papacapim",
    name: "Papacapim",
    description:
      "Front-end de uma rede social de compartilhamento de textos para dispositivos móveis, utilizando Flutter e Dart.",
    tags: ["Flutter", "Dart"],
    links: [
      {
        label: "Repositório",
        url: "https://github.com/lufecrx/papacapim",
      },
    ],
  },
]
