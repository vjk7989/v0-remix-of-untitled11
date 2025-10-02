import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MetricsSection } from "@/components/metrics-section"
import { ProcessSection } from "@/components/process-section"
import { Button } from "@/components/ui/button"
import { Rocket, Target, Users, Zap } from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <WhatsAppButton />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-20 right-20 w-96 h-96 opacity-5 animate-parallax-float">
          <img src="/futuristic-drone-silhouette.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Pioneering the Future of Drone Technology
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              At Ether Space Network, we're revolutionizing industries through cutting-edge drone solutions. Our mission
              is to make advanced aerial technology accessible, reliable, and transformative for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      <MetricsSection />

      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-20 left-20 w-64 h-64 opacity-5 animate-float-slow">
          <img src="/futuristic-drone-silhouette.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="glass-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-2xl hover:glass-strong transition-all duration-500 animate-slide-in-left">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with intelligent drone solutions that enhance efficiency, reduce costs, and unlock
                new possibilities. We're committed to delivering excellence through innovation, reliability, and
                unparalleled customer service.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-2xl hover:glass-strong transition-all duration-500 animate-slide-in-right">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in drone-as-a-service, transforming how industries operate through autonomous
                aerial technology. We envision a future where drones seamlessly integrate into everyday business
                operations, driving unprecedented growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Innovation",
                description: "Constantly pushing boundaries with cutting-edge technology",
                color: "primary",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your success is our priority in every interaction",
                color: "secondary",
              },
              {
                icon: Target,
                title: "Excellence",
                description: "Delivering the highest quality in every project",
                color: "accent",
              },
              {
                icon: Rocket,
                title: "Reliability",
                description: "Dependable solutions you can trust every time",
                color: "neon-purple",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl border border-border hover:border-primary/50 hover:glass-strong transition-all duration-500 hover:shadow-2xl animate-scale-in group hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 bg-${value.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className={`w-6 h-6 text-${value.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-48 h-48 animate-float">
            <img src="/futuristic-drone-silhouette.jpg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-10 right-10 w-64 h-64 animate-float-slow">
            <img src="/futuristic-drone-silhouette.jpg" alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="glass-strong p-12 rounded-3xl max-w-4xl mx-auto animate-glow">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Join hundreds of companies already leveraging our drone solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="glass-card bg-transparent" asChild>
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
