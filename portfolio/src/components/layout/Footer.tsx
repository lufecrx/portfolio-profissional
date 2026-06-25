export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 py-8 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Luiz Felipe C. Gomes. Todos os direitos reservados.
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Desenvolvido para o processo seletivo <span className="font-medium text-teal-600 dark:text-teal-400">FESF-SUS</span>
        </p>
      </div>
    </footer>
  )
}
