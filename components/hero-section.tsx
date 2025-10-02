"use client"

import { SlideshowStack } from "./slideshow-stack"
import { Rocket, Zap, Shield, Sparkles } from "lucide-react"

const heroSlides = [
  {
    image: "/autonomous-drone-flying-over-agricultural-fields.jpg",
    title: "Autonomous Drone Solutions for Modern Agriculture",
    description: "Precision spraying, crop monitoring, and AI-powered analytics transforming farming efficiency",
    actions: [
      { label: "Explore Agriculture", href: "#agriculture", variant: "primary" as const },
      { label: "View Case Studies", href: "#cases", variant: "secondary" as const },
    ],
  },
  {
    image: "/drone-surveying-construction-site-with-lidar.jpg",
    title: "Advanced LiDAR Surveying & 3D Mapping",
    description: "High-resolution aerial surveys and terrain modeling for construction and infrastructure",
    actions: [
      { label: "Surveying Solutions", href: "#surveying", variant: "primary" as const },
      { label: "Request Demo", href: "#demo", variant: "secondary" as const },
    ],
  },
  {
    image: "/drone-delivery-fleet-in-urban-environment.jpg",
    title: "Smart Logistics & Delivery Fleet Management",
    description: "AI-powered routing and autonomous delivery systems revolutionizing last-mile logistics",
    actions: [
      { label: "Fleet Solutions", href: "#fleet", variant: "primary" as const },
      { label: "Get Started", href: "#start", variant: "secondary" as const },
    ],
  },
  {
    image: "/emergency-response-drone-with-thermal-camera.jpg",
    title: "Emergency Response & Search Operations",
    description: "Thermal imaging and real-time coordination for critical rescue missions",
    actions: [
      { label: "Emergency Services", href: "#emergency", variant: "primary" as const },
      { label: "Learn More", href: "#learn", variant: "secondary" as const },
    ],
  },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 space-y-12">
        <div className="text-center space-y-6 animate-slide-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold backdrop-blur-sm">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Next-Generation Autonomous Systems</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance max-w-4xl mx-auto">
            Redefining Industries Through{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Aerial Intelligence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            From agriculture to emergency response, Ether Space Network delivers cutting-edge autonomous drone solutions
            powered by AI
          </p>
        </div>

        <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <SlideshowStack slides={heroSlides} />
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto animate-slide-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: Rocket, value: "10,000+", label: "Missions Completed", color: "primary" },
            { icon: Zap, value: "200+", label: "Global Partners", color: "secondary" },
            { icon: Shield, value: "99.7%", label: "Safety Rating", color: "accent" },
            { icon: Sparkles, value: "50+", label: "AI Models Deployed", color: "neon-purple" },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 space-y-2">
                  <Icon className={`w-6 h-6 text-${stat.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <div className={`text-2xl md:text-3xl font-bold text-${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
