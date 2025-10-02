import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IndustriesSection } from "@/components/industries-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IndustriesPage() {
  const caseStudies = [
    {
      industry: "Agriculture",
      company: "GreenFields Farms",
      challenge: "Monitoring 5,000 acres of crops for pest detection and irrigation optimization",
      solution: "Deployed weekly multispectral drone surveys with AI-powered analysis",
      results: [
        "30% reduction in water usage",
        "25% increase in crop yield",
        "Early pest detection saved $200K in potential losses",
      ],
      image: "/agricultural-farm-drone-monitoring.jpg",
    },
    {
      industry: "Construction",
      company: "BuildTech Solutions",
      challenge: "Tracking progress on a $50M commercial development project",
      solution: "Bi-weekly aerial surveys with 3D modeling and volumetric analysis",
      results: [
        "Reduced survey time by 80%",
        "Identified $150K in material discrepancies",
        "Improved stakeholder communication with visual reports",
      ],
      image: "/construction-site-drone-survey.jpg",
    },
    {
      industry: "Energy",
      company: "PowerGrid Infrastructure",
      challenge: "Inspecting 500 miles of transmission lines across difficult terrain",
      solution: "Thermal imaging drones with automated defect detection",
      results: [
        "90% faster than manual inspection",
        "Identified 47 critical issues before failure",
        "Zero safety incidents during inspection",
      ],
      image: "/power-line-drone-inspection.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Industries We Serve
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Transforming operations across diverse sectors with specialized drone solutions
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <IndustriesSection />

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients across different industries
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      {study.industry}
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">{study.company}</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">CHALLENGE</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-secondary mb-2">SOLUTION</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-accent mb-2">RESULTS</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-accent mt-1">✓</span>
                              <span className="text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 animate-fade-in-up">Your Industry, Our Expertise</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Let's discuss how drone technology can transform your operations
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 animate-fade-in-up animation-delay-400"
            asChild
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
