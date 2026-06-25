import { Section } from "@/components/layout/Section"
import { MailIcon } from "@/icons/MailIcon"
import { GithubIcon } from "@/icons/GithubIcon"
import { LinkedinIcon } from "@/icons/LinkedinIcon"
import { profile } from "@/data/profile"

const contactItems = [
  {
    icon: <MailIcon className="h-5 w-5" />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <LinkedinIcon className="h-5 w-5" />,
    label: "LinkedIn",
    value: "Luiz Felipe C. Gomes",
    href: profile.linkedin,
  },
  {
    icon: <GithubIcon className="h-5 w-5" />,
    label: "GitHub",
    value: "@lufecrx",
    href: profile.github,
  },
]

export function ContactSection() {
  return (
    <Section id="contato" title="Contato">
      <div className="grid gap-6 sm:grid-cols-3">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-teal-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-teal-700"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-100 dark:bg-teal-900/30 dark:text-teal-400 dark:group-hover:bg-teal-900/50">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.label}</p>
              <p className="mt-1 text-base font-semibold text-slate-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-400">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Location */}
      <div className="mt-10 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          📍 {profile.location} &middot; {profile.phone}
        </p>
      </div>
    </Section>
  )
}
