"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Founder",
    bio: "15+ years in aerospace engineering and autonomous systems",
    image: "/professional-woman-ceo.png",
    linkedin: "#",
    email: "sarah@etherspace.com",
    quote: "Innovation is not just about technology, it's about solving real-world problems.",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    bio: "Former NASA engineer specializing in AI and robotics",
    image: "/professional-engineer.png",
    linkedin: "#",
    email: "michael@etherspace.com",
    quote: "The future of automation is here, and we're building it.",
  },
  {
    name: "Emily Watson",
    role: "Head of Operations",
    bio: "Expert in logistics and supply chain optimization",
    image: "/professional-woman-operations.png",
    linkedin: "#",
    email: "emily@etherspace.com",
    quote: "Efficiency and reliability are the cornerstones of great service.",
  },
  {
    name: "David Kim",
    role: "Lead Drone Engineer",
    bio: "Specialized in agricultural drone systems and precision farming",
    image: "/professional-man-engineer-asian.jpg",
    linkedin: "#",
    email: "david@etherspace.com",
    quote: "Technology should empower farmers, not complicate their work.",
  },
  {
    name: "Priya Sharma",
    role: "Head of R&D",
    bio: "PhD in Computer Vision and Machine Learning",
    image: "/professional-woman-scientist.png",
    linkedin: "#",
    email: "priya@etherspace.com",
    quote: "Every challenge is an opportunity to innovate.",
  },
  {
    name: "James Thompson",
    role: "Director of Sales",
    bio: "20+ years building partnerships in the tech industry",
    image: "/professional-man-sales.jpg",
    linkedin: "#",
    email: "james@etherspace.com",
    quote: "Success is built on trust and delivering value.",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-accent/10" />
        <div className="absolute bottom-20 right-20 w-96 h-96 opacity-5 animate-parallax-float">
          <img src="/futuristic-drone-silhouette.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
              Meet the <span className="text-secondary">Minds</span> Behind Ether Space Network
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              A team of passionate innovators dedicated to revolutionizing industries through drone technology
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 group relative animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm italic leading-relaxed">"{member.quote}"</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Button size="sm" variant="outline" className="flex-1 group/btn bg-transparent">
                      <Linkedin className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 group/btn bg-transparent">
                      <Mail className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Email
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 glass-card p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Join Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're always looking for talented individuals who share our passion for innovation and excellence
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
