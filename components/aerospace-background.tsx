"use client"

import { useEffect, useRef } from "react"

export function AerospaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Hexagonal grid pattern
    const drawHexagon = (x: number, y: number, size: number, opacity: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const hx = x + size * Math.cos(angle)
        const hy = y + size * Math.sin(angle)
        if (i === 0) ctx.moveTo(hx, hy)
        else ctx.lineTo(hx, hy)
      }
      ctx.closePath()
      ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Draw hexagonal grid
    const hexSize = 40
    const hexHeight = hexSize * Math.sqrt(3)
    for (let row = 0; row < canvas.height / hexHeight + 2; row++) {
      for (let col = 0; col < canvas.width / (hexSize * 1.5) + 2; col++) {
        const x = col * hexSize * 1.5
        const y = row * hexHeight + (col % 2) * (hexHeight / 2)
        const opacity = Math.random() * 0.15 + 0.05
        drawHexagon(x, y, hexSize / 2, opacity)
      }
    }

    // Draw flight path lines
    const drawFlightPath = () => {
      ctx.strokeStyle = "rgba(16, 185, 129, 0.3)"
      ctx.lineWidth = 2
      ctx.setLineDash([10, 5])

      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height
        const endX = Math.random() * canvas.width
        const endY = Math.random() * canvas.height

        ctx.moveTo(startX, startY)
        ctx.bezierCurveTo(
          startX + (endX - startX) * 0.3,
          startY + (endY - startY) * 0.1,
          startX + (endX - startX) * 0.7,
          startY + (endY - startY) * 0.9,
          endX,
          endY,
        )
        ctx.stroke()
      }
    }

    drawFlightPath()

    // Draw grid coordinates
    ctx.font = "10px monospace"
    ctx.fillStyle = "rgba(14, 165, 233, 0.2)"
    for (let i = 0; i < 10; i++) {
      const x = (canvas.width / 10) * i
      const y = (canvas.height / 10) * i
      ctx.fillText(`${i * 100}`, x, 20)
      ctx.fillText(`${i * 100}`, 10, y)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40 z-0"
      style={{ mixBlendMode: "multiply" }}
    />
  )
}
