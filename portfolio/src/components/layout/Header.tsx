import { GithubIcon } from "@/icons/GithubIcon"
import { LinkedinIcon } from "@/icons/LinkedinIcon"

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "VidaPlena", href: "#vidaplena" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold text-teal-700 dark:text-teal-400">
          LF.Gomes
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/lufecrx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/luizfelipecrx/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition-colors hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  )
}
