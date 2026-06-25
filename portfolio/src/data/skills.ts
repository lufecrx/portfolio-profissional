export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: "avancado" | "intermediario" | "basico"
  icon?: string
}

export const skills: SkillCategory[] = [
  {
    id: "linguagens",
    title: "Linguagens de Programação",
    skills: [
      { name: "TypeScript", level: "avancado" },
      { name: "JavaScript", level: "avancado" },
      { name: "Python", level: "avancado" },
      { name: "Java", level: "intermediario" },
      { name: "Kotlin", level: "intermediario" },
      { name: "SQL", level: "avancado" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Tecnologias",
    skills: [
      { name: "Next.js 16", level: "avancado" },
      { name: "React", level: "avancado" },
      { name: "FastAPI", level: "avancado" },
      { name: "Spring Boot", level: "intermediario" },
      { name: "Angular", level: "intermediario" },
      { name: "Vue.js", level: "intermediario" },
      { name: "Tailwind CSS", level: "avancado" },
      { name: "React Native", level: "intermediario" },
      { name: "Jetpack Compose", level: "intermediario" },
    ],
  },
  {
    id: "infra",
    title: "Infraestrutura & Cloud",
    skills: [
      { name: "Docker", level: "avancado" },
      { name: "AWS", level: "intermediario" },
      { name: "DynamoDB", level: "intermediario" },
      { name: "Firebase", level: "intermediario" },
      { name: "Git / GitHub", level: "avancado" },
    ],
  },
  {
    id: "metodologias",
    title: "Metodologias",
    skills: [
      { name: "Scrum", level: "intermediario" },
      { name: "Desenvolvimento Ágil", level: "intermediario" },
    ],
  },
]
