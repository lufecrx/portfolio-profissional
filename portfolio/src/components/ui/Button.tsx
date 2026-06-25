interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-teal-600 text-white hover:bg-teal-700 shadow-sm hover:shadow",
  secondary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow",
  outline: "border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800",
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const cls = [baseClasses, variantClasses[variant], sizeClasses[size], className].filter(Boolean).join(" ")
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
