"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface SlideshowStackProps {
  slides: Array<{
    image: string
    title: string
    description: string
    actions: Array<{
      label: string
      href: string
      variant?: "primary" | "secondary"
    }>
  }>
}

export function SlideshowStack({ slides }: SlideshowStackProps) {
  const [activeTab, setActiveTab] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const totalTabs = slides.length
    const sizes = Array(totalTabs)
      .fill(1)
      .map((_, index) => (index === activeTab ? 20 : 1))
    const gridSizes = sizes.map((s) => `${s}fr`).join(" ")

    container.style.setProperty("--active-tab", gridSizes)
    container.style.setProperty("--total-tabs", totalTabs.toString())
  }, [activeTab, slides.length])

  return (
    <div className="slideshow-stack-wrapper w-full h-[600px] md:h-[700px]">
      <div ref={containerRef} className="slideshow-stack-container">
        <div className="slideshow-stack-tablist" role="tablist" aria-label="Featured solutions">
          {slides.map((_, index) => (
            <div key={index} className="slideshow-stack-tablist-item">
              <button
                role="tab"
                aria-selected={index === activeTab}
                aria-controls={`panel-${index + 1}`}
                id={`tab-${index + 1}`}
                tabIndex={index === activeTab ? 0 : -1}
                onClick={() => setActiveTab(index)}
                className="slideshow-tab-button"
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            </div>
          ))}
        </div>
        <div className="slideshow-stack-panels">
          {slides.map((slide, index) => (
            <div
              key={index}
              role="tabpanel"
              tabIndex={0}
              id={`panel-${index + 1}`}
              aria-labelledby={`tab-${index + 1}`}
              inert={index !== activeTab}
              style={{ "--index": index } as React.CSSProperties}
              className="slideshow-panel"
            >
              <div className="slideshow-panel-content">
                <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="slideshow-panel-image" />
                <div className="slideshow-panel-overlay">
                  <div className="slideshow-panel-text">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{slide.title}</h2>
                    <p className="text-lg md:text-xl mb-6 text-pretty opacity-90">{slide.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {slide.actions.map((action, idx) => (
                        <a
                          key={idx}
                          href={action.href}
                          className={`slideshow-action-button ${action.variant === "secondary" ? "slideshow-action-secondary" : "slideshow-action-primary"}`}
                        >
                          {action.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
