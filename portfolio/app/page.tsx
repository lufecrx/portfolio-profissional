import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { VidaPlenaShowcase } from "@/components/sections/VidaPlenaShowcase"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <VidaPlenaShowcase />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
