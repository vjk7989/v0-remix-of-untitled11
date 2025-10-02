import { Card } from "@/components/ui/card"
import { Sprout, Radar, Truck, Activity, ShieldCheck, Satellite, Cpu } from "lucide-react"

const solutions = [
  {
    icon: Sprout,
    title: "Agricultural Drone Solutions",
    features: [
      "Precision spraying for higher yields",
      "AI-based crop health monitoring",
      "Drone seeding & irrigation systems",
      "Mapping and survey analytics",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
    size: "large",
  },
  {
    icon: Radar,
    title: "Drone Surveying & LiDAR",
    features: [
      "High-resolution aerial surveys",
      "3D terrain models",
      "LiDAR-enabled mapping",
      "Real-time data processing",
    ],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    size: "medium",
  },
  {
    icon: Truck,
    title: "Fleet Management",
    features: ["Flexible drone leasing", "Fleet maintenance", "AI-powered routing", "Logistics integration"],
    color: "text-accent",
    bgColor: "bg-accent/10",
    size: "medium",
  },
  {
    icon: Cpu,
    title: "Custom R&D Solutions",
    features: ["Specialized payload development", "Autonomous systems", "Sensor integration"],
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
    size: "small",
  },
  {
    icon: Activity,
    title: "Real-Time Analytics",
    features: ["Live telemetry data", "Performance monitoring", "Predictive maintenance"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    size: "small",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    features: ["Regulatory compliance", "Safety protocols", "Risk assessment"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    size: "small",
  },
]

export function SolutionsSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-slide-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold backdrop-blur-sm mb-4">
            <Satellite className="w-4 h-4" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-foreground">Our Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive drone services tailored to your industry needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-fr">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const gridClass =
              solution.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : solution.size === "medium"
                  ? "md:col-span-2 lg:col-span-2"
                  : "md:col-span-1"

            return (
              <Card
                key={index}
                className={`${gridClass} p-6 lg:p-8 bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 group animate-scale-in relative overflow-hidden cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />

                <div className="relative z-10 h-full flex flex-col">
                  <div
                    className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${solution.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-2 border-current/20 shadow-lg`}
                  >
                    <Icon
                      className={`w-7 h-7 lg:w-8 lg:h-8 ${solution.color} group-hover:scale-110 transition-transform`}
                    />
                  </div>

                  <h3
                    className={`text-xl lg:text-2xl font-bold mb-4 text-balance group-hover:${solution.color} transition-colors text-foreground`}
                  >
                    {solution.title}
                  </h3>

                  <ul className="space-y-3 flex-grow">
                    {solution.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 animate-slide-in-left group/item"
                        style={{ animationDelay: `${index * 0.1 + idx * 0.05}s` }}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${solution.bgColor} mt-2 flex-shrink-0 ring-2 ring-current/20 group-hover/item:scale-150 transition-transform`}
                        />
                        <span className="text-muted-foreground text-sm leading-relaxed group-hover/item:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
