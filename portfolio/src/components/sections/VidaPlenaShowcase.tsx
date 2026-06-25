import { Section } from "@/components/layout/Section"
import { LinkCard } from "@/components/ui/LinkCard"
import { TechTag } from "@/components/ui/TechTag"
import { GithubIcon } from "@/icons/GithubIcon"
import { FastApiIcon } from "@/icons/FastApiIcon"
import { DockerIcon } from "@/icons/DockerIcon"
import { NextJsIcon } from "@/icons/NextJsIcon"
import { projects } from "@/data/projects"

const featuredProject = projects.find((p) => p.featured)

const architectureNodes = [
  { label: "Next.js SPA", port: "localhost:3000", icon: <NextJsIcon className="h-5 w-5" /> },
  { label: "FastAPI REST", port: "localhost:8000", icon: <FastApiIcon className="h-5 w-5" /> },
  { label: "SQLite", port: "Volume Docker", icon: <DockerIcon className="h-5 w-5" /> },
]

export function VidaPlenaShowcase() {
  if (!featuredProject) return null

  return (
    <Section id="vidaplena" title="Projeto Destaque: VidaPlena">
      {/* Description */}
      <p className="mb-8 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
        {featuredProject.description}
      </p>

      {/* Architecture Diagram */}
      <div className="mb-10 rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Arquitetura do Sistema
        </h3>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          {architectureNodes.map((node, i) => (
            <div key={node.label} className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                {node.icon}
              </div>
              <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                {node.label}
              </span>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                {node.port}
              </span>
              {i < architectureNodes.length - 1 && (
                <div className="hidden h-px w-12 bg-slate-300 sm:block dark:bg-slate-600" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-8">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Stack Tecnológica
        </h3>
        <div className="flex flex-wrap gap-2">
          {featuredProject.tags.map((tag) => (
            <TechTag key={tag} name={tag} />
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-10">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Funcionalidades-Chave
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Cadastro de pacientes com validação de CPF",
            "Controle de agendamentos com filtros avançados",
            "API RESTful com documentação Swagger automática",
            "Conteinerização completa com Docker Compose",
          ].map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Repository Links */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Repositórios
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProject.links.map((link) => (
            <LinkCard
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              description="Clique para acessar o repositório no GitHub"
              icon={<GithubIcon className="h-5 w-5" />}
              className="group"
            >
              <span className="text-sm font-medium text-teal-600 group-hover:underline dark:text-teal-400">
                Ver Repositório →
              </span>
            </LinkCard>
          ))}
        </div>
      </div>
    </Section>
  )
}
