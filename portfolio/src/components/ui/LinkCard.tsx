interface LinkCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string
  description: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

export function LinkCard({ title, description, icon, children, className, ...props }: LinkCardProps) {
  const cls = [
    "group block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-teal-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-teal-700",
    className,
  ].filter(Boolean).join(" ")
  return (
    <a className={cls} {...props}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-400 transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{description}</p>
        </div>
      </div>
      {children && <div className="mt-4">{children}</div>}
    </a>
  )
}
