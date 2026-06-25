interface TechTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string
}

const techColors: Record<string, string> = {
  FastAPI: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Python: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  NextJS: "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200",
  React: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
  TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  TailwindCSS: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  SQLite: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  SQLAlchemy: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  Docker: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  AWS: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  Firebase: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  Spring: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Flutter: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
  Dart: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
}

function getTechKey(name: string): string {
  const map: Record<string, string> = {
    "Next.js": "NextJS",
    "Tailwind CSS": "TailwindCSS",
  }
  return map[name] || name
}

export function TechTag({ name, className }: TechTagProps) {
  const techKey = getTechKey(name)
  const colorClass = techColors[techKey] || "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
  const cls = ["inline-flex items-center rounded-full px-3 py-1 text-xs font-medium", colorClass, className].filter(Boolean).join(" ")
  return (
    <span className={cls}>
      {name}
    </span>
  )
}
