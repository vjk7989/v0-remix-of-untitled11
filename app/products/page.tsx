"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bone as Drone, Camera, Cpu, Package } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

const productCategories = [
  {
    icon: Drone,
    title: "Enterprise Drones",
    description: "Professional-grade drones for surveying, mapping, and spraying operations",
    color: "text-primary",
    bgColor: "bg-primary/10",
    products: [
      {
        name: "AgriDrone Pro X1",
        description: "High-capacity agricultural spraying drone with 20L tank",
        price: "Starting at $15,000",
        image: "/agricultural-drone-spraying.jpg",
      },
      {
        name: "SurveyMaster 4K",
        description: "Professional mapping drone with RTK GPS and 4K camera",
        price: "Starting at $12,000",
        image: "/drone-aerial-surveying-mapping.jpg",
      },
      {
        name: "InspectPro LiDAR",
        description: "Infrastructure inspection drone with LiDAR sensor",
        price: "Starting at $18,000",
        image: "/infrastructure-inspection.jpg",
      },
    ],
  },
  {
    icon: Camera,
    title: "Drone Accessories & Payloads",
    description: "Advanced sensors, cameras, and specialized equipment",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    products: [
      {
        name: "MultiSpec Pro Camera",
        description: "5-band multispectral camera for crop health analysis",
        price: "$3,500",
        image: "/crop-health-monitoring.jpg",
      },
      {
        name: "LiDAR Sensor Kit",
        description: "High-precision LiDAR for 3D mapping and modeling",
        price: "$8,000",
        image: "/drone-aerial-surveying-mapping.jpg",
      },
      {
        name: "Thermal Imaging System",
        description: "Advanced thermal camera for inspection and monitoring",
        price: "$4,200",
        image: "/infrastructure-inspection.jpg",
      },
    ],
  },
  {
    icon: Cpu,
    title: "Fleet Management Software",
    description: "AI-powered routing, analytics, and fleet coordination",
    color: "text-accent",
    bgColor: "bg-accent/10",
    products: [
      {
        name: "FleetCommand Pro",
        description: "Complete fleet management platform with AI routing",
        price: "$299/month",
        image: "/drone-fleet-management.jpg",
      },
      {
        name: "Analytics Dashboard",
        description: "Real-time data visualization and reporting tools",
        price: "$149/month",
        image: "/business-scaling-strategy.png",
      },
      {
        name: "Mission Planner Elite",
        description: "Advanced mission planning with weather integration",
        price: "$199/month",
        image: "/drone-fleet-management.jpg",
      },
    ],
  },
  {
    icon: Package,
    title: "Leasing & Subscription Plans",
    description: "Flexible drone leasing programs for businesses",
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
    products: [
      {
        name: "Starter Package",
        description: "1 drone + basic software + maintenance",
        price: "$999/month",
        image: "/warehouse-drone-inventory.jpg",
      },
      {
        name: "Business Package",
        description: "3 drones + full software suite + priority support",
        price: "$2,499/month",
        image: "/drone-fleet-management.jpg",
      },
      {
        name: "Enterprise Package",
        description: "10+ drones + custom solutions + dedicated support",
        price: "Custom pricing",
        image: "/custom-drone-development.jpg",
      },
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-neon-purple/10" />
        <div className="absolute top-20 left-20 w-96 h-96 opacity-5 animate-float-slow">
          <img src="/futuristic-drone-silhouette.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
              Our <span className="text-primary">Products</span> & <span className="text-neon-purple">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Cutting-edge drone technology and software solutions for every industry
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, categoryIndex) => {
        const Icon = category.icon
        return (
          <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? "bg-muted/30" : ""}`}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center space-y-4 mb-16 animate-slide-in-up">
                <div
                  className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">{category.title}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{category.description}</p>
              </div>

              {/* Bento Grid Layout */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {category.products.map((product, productIndex) => (
                  <Card
                    key={productIndex}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group animate-scale-in"
                    style={{ animationDelay: `${productIndex * 0.1}s` }}
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-balance">{product.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className={`text-lg font-bold ${category.color}`}>{product.price}</span>
                        <Button size="sm" className="group/btn">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 glass-card p-12 rounded-3xl animate-glow">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get in touch with our team to discuss custom solutions tailored to your business needs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                Request a Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
