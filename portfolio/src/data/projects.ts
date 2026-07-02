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
        url: "https://github.com/lufecrx/gestao-de-saude",
      },
      {
        label: "Repositório 2 — Conteinerização Docker",
        url: "https://github.com/lufecrx/gestao-de-saude-docker",
      },
    ],
    featured: true,
  },
  {
    id: "yobi",
    name: "Yobi App",
    description:
      "A Yobi é um aplicativo voltado para o setor de construção civil e descarte de materiais de construção, com arquitetura full-stack e integração cloud.",
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
      "Front-end de uma rede social de compartilhamento de textos para dispositivos móveis, utilizando Flutter e Dart, com integração a uma API REST para consumo e gerenciamento de dados.",
    tags: ["Flutter", "Dart"],
    links: [
      {
        label: "Repositório",
        url: "https://github.com/lufecrx/papacapim",
      },
    ],
  },
]
