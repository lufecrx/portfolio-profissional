interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {}

export function Divider({ className, ...props }: DividerProps) {
  const cls = ["w-full border-t border-slate-200 dark:border-slate-700", className].filter(Boolean).join(" ")
  return (
    <hr className={cls} {...props} />
  )
}
