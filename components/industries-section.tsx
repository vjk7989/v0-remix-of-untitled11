import { Building2, Tractor, Warehouse, AlertTriangle, Shield } from "lucide-react"

const industries = [
  { icon: Tractor, name: "Agriculture", color: "text-secondary" },
  { icon: Warehouse, name: "Logistics & Warehousing", color: "text-primary" },
  { icon: Building2, name: "Infrastructure & Construction", color: "text-chart-3" },
  { icon: AlertTriangle, name: "Emergency & Disaster Response", color: "text-chart-4" },
  { icon: Shield, name: "Government & Defense", color: "text-chart-5" },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Delivering cutting-edge drone solutions across multiple sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 group text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-muted mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${industry.color}`} />
                </div>
                <h3 className="font-semibold text-sm text-balance">{industry.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
