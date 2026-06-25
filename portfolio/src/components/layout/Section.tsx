import { HTMLAttributes } from "react"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string
  title: string
  children: React.ReactNode
}

export function Section({ id, title, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`heading-${id}`}
      {...props}
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2
          id={`heading-${id}`}
          className="mb-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl"
        >
          {title}
        </h2>
        <div className="mb-10 h-1 w-16 rounded-full bg-teal-500" />
        {children}
      </div>
    </section>
  )
}
