import { HeroSection } from "@/components/hero-section"
import { MetricsSection } from "@/components/metrics-section"
import { ProcessSection } from "@/components/process-section"
import { SolutionsSection } from "@/components/solutions-section"
import { IndustriesSection } from "@/components/industries-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <WhatsAppButton />
      <HeroSection />
      <MetricsSection />
      <ProcessSection />
      <SolutionsSection />
      <IndustriesSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
