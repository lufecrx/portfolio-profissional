import { Section } from "@/components/layout/Section"
import { LinkCard } from "@/components/ui/LinkCard"
import { TechTag } from "@/components/ui/TechTag"
import { GithubIcon } from "@/icons/GithubIcon"
import { projects } from "@/data/projects"

const otherProjects = projects.filter((p) => !p.featured)

export function ProjectsSection() {
  return (
    <Section id="projetos" title="Outros Projetos">
      <div className="grid gap-6 sm:grid-cols-2">
        {otherProjects.map((project) => (
          <LinkCard
            key={project.id}
            href={project.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            title={project.name}
            description={project.description}
            icon={<GithubIcon className="h-5 w-5" />}
          >
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechTag key={tag} name={tag} />
              ))}
            </div>
          </LinkCard>
        ))}
      </div>
    </Section>
  )
}
