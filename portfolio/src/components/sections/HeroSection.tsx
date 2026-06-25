"use client";

import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { GithubIcon } from "@/icons/GithubIcon"
import { LinkedinIcon } from "@/icons/LinkedinIcon"
import { profile } from "@/data/profile"

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="heading-hero"
      className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-teal-200 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-blue-200 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36 md:py-44">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {/* Status badge */}
          <Badge variant="default" className="mb-6">
            <span className="mr-2 h-2 w-2 rounded-full bg-teal-500" />
            Disponível para novas oportunidades
          </Badge>

          {/* Main heading */}
          <h1 id="heading-hero" className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>

          <p className="mb-2 text-xl font-medium text-teal-700 dark:text-teal-400 sm:text-2xl">
            {profile.title}
          </p>

          <p className="mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Desenvolvedor Full-Stack com experiência em arquitetura de sistemas, desenvolvimento completo de produtos e validação com usuários. Cofundador de startup e atualmente cursando Bacharelado em Sistemas de Informação pelo IFBA.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Button variant="primary" size="lg" onClick={() => {
              const el = document.getElementById("vidaplena")
              el?.scrollIntoView({ behavior: "smooth" as const })
            }}>
              Ver Projeto VidaPlena
            </Button>

            <div className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-all hover:border-teal-400 hover:text-teal-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-teal-600 dark:hover:text-teal-400"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-all hover:border-teal-400 hover:text-teal-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-teal-600 dark:hover:text-teal-400"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
