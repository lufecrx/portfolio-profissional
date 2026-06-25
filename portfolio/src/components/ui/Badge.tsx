interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline"
  children: React.ReactNode
}

const baseClasses =
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors"

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-200",
  outline: "border border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-400",
}

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  const cls = [baseClasses, variantClasses[variant], className].filter(Boolean).join(" ")
  return (
    <span className={cls} {...props}>
      {children}
    </span>
  )
}
