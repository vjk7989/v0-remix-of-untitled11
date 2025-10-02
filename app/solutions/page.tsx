import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SolutionsSection } from "@/components/solutions-section"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Aerial Surveying & Mapping",
      description: "High-precision 3D mapping and surveying for construction, mining, and land management",
      features: [
        "Centimeter-level accuracy",
        "Real-time data processing",
        "Orthomosaic map generation",
        "Volumetric calculations",
        "Progress tracking",
      ],
      image: "/drone-aerial-surveying-mapping.jpg",
    },
    {
      title: "Agricultural Monitoring",
      description: "Optimize crop health and yield with advanced multispectral imaging and AI analytics",
      features: [
        "NDVI crop health analysis",
        "Pest and disease detection",
        "Irrigation optimization",
        "Yield prediction",
        "Precision spraying",
      ],
      image: "/agricultural-drone-monitoring.png",
    },
    {
      title: "Infrastructure Inspection",
      description: "Safe, efficient inspection of bridges, towers, pipelines, and industrial facilities",
      features: [
        "Thermal imaging",
        "Defect detection AI",
        "3D modeling",
        "Safety compliance reports",
        "Reduced downtime",
      ],
      image: "/drone-infrastructure-inspection.jpg",
    },
    {
      title: "Logistics & Delivery",
      description: "Fast, autonomous delivery solutions for last-mile logistics and emergency supplies",
      features: [
        "Autonomous navigation",
        "Real-time tracking",
        "Weather-adaptive routing",
        "Secure payload handling",
        "Integration with existing systems",
      ],
      image: "/delivery-drone-logistics.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <WhatsAppButton />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 opacity-5 animate-parallax-float">
          <img src="/futuristic-drone-silhouette.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Comprehensive Drone Solutions
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              From aerial surveying to autonomous delivery, we provide end-to-end drone services tailored to your
              industry's unique challenges.
            </p>
          </div>
        </div>
      </section>

      <SolutionsSection />

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-in-up`}>
                  <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} animate-fade-in-up animation-delay-200`}>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="glass-strong p-12 rounded-3xl max-w-4xl mx-auto animate-glow">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 animate-fade-in-up">Custom Solutions for Your Needs</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Don't see exactly what you're looking for? We create tailored drone solutions for unique challenges.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 animate-fade-in-up animation-delay-400"
              asChild
            >
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
