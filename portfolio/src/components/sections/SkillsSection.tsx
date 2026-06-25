import { Section } from "@/components/layout/Section"
import { skills } from "@/data/skills"

const levelLabels: Record<string, string> = {
  avancado: "Avançado",
  intermediario: "Intermediário",
  basico: "Básico",
}

const levelColors: Record<string, string> = {
  avancado: "bg-teal-500",
  intermediario: "bg-blue-500",
  basico: "bg-slate-400",
}

export function SkillsSection() {
  return (
    <Section id="skills" title="Hard Skills Alinhadas ao Edital">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((category) => (
          <div
            key={category.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3">
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${levelColors[skill.level]}`}
                    aria-label={levelLabels[skill.level]}
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
