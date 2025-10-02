import { CheckCircle2, Rocket, Settings, TrendingUp, Users } from "lucide-react"

const steps = [
  {
    icon: Users,
    title: "Consultation & Needs Assessment",
    description: "We start by understanding your goals and challenges.",
  },
  {
    icon: Settings,
    title: "Custom Drone Deployment & Strategy",
    description: "We design tailored drone solutions for your industry.",
  },
  {
    icon: Rocket,
    title: "Execution & Performance Optimization",
    description: "Our team ensures reliable implementation with maximum efficiency.",
  },
  {
    icon: CheckCircle2,
    title: "Continuous Support & Expansion",
    description: "We provide training, upgrades, and ongoing maintenance.",
  },
  {
    icon: TrendingUp,
    title: "Scaling & Long-Term Partnership",
    description: "Helping you expand operations seamlessly as your business grows.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our proven 5-step process ensures seamless integration and long-term success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="mb-4 mt-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-balance">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
