"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"

const categories = ["All", "Agriculture", "Mapping", "Logistics", "R&D"]

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/drone-aerial-surveying-mapping.jpg",
    category: "Mapping",
    title: "Aerial Surveying & Mapping",
    description: "High-resolution 3D terrain mapping using LiDAR technology",
  },
  {
    id: 2,
    type: "image",
    src: "/agricultural-drone-spraying.jpg",
    category: "Agriculture",
    title: "Precision Agriculture",
    description: "Automated crop spraying for optimal yield",
  },
  {
    id: 3,
    type: "image",
    src: "/drone-fleet-management.jpg",
    category: "Logistics",
    title: "Fleet Management",
    description: "AI-powered drone fleet coordination",
  },
  {
    id: 4,
    type: "image",
    src: "/custom-drone-development.jpg",
    category: "R&D",
    title: "Custom Drone Development",
    description: "Specialized payload integration and testing",
  },
  {
    id: 5,
    type: "image",
    src: "/infrastructure-inspection.jpg",
    category: "Mapping",
    title: "Infrastructure Inspection",
    description: "Detailed structural analysis and monitoring",
  },
  {
    id: 6,
    type: "image",
    src: "/emergency-drone-rescue.jpg",
    category: "R&D",
    title: "Emergency Response",
    description: "Rapid deployment for disaster management",
  },
  {
    id: 7,
    type: "image",
    src: "/warehouse-drone-inventory.jpg",
    category: "Logistics",
    title: "Warehouse Automation",
    description: "Automated inventory management systems",
  },
  {
    id: 8,
    type: "image",
    src: "/crop-health-monitoring.jpg",
    category: "Agriculture",
    title: "Crop Health Monitoring",
    description: "AI-based multispectral analysis",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-20 right-20 w-96 h-96 opacity-5 animate-parallax-float">
          <img src="/futuristic-drone-silhouette.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Explore our portfolio of drone solutions across industries
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl glass-card hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 space-y-2">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold text-balance">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div className="max-w-6xl w-full space-y-6 animate-scale-in">
            <img
              src={filteredItems[currentIndex].src || "/placeholder.svg"}
              alt={filteredItems[currentIndex].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">{filteredItems[currentIndex].title}</h3>
              <p className="text-white/70">{filteredItems[currentIndex].description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
