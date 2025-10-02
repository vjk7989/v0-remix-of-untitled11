"use client"

import { useEffect, useRef } from "react"

interface DronePathProps {
  className?: string
}

export function DroneFlightPath({ className = "" }: DronePathProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationFrame: number
    let progress = 0

    const drones = [
      { x: 0, y: canvas.height * 0.3, speed: 0.005, color: "rgba(14, 165, 233, 0.8)" },
      { x: 0, y: canvas.height * 0.6, speed: 0.003, color: "rgba(16, 185, 129, 0.8)" },
      { x: 0, y: canvas.height * 0.8, speed: 0.007, color: "rgba(147, 51, 234, 0.8)" },
    ]

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drones.forEach((drone) => {
        // Update drone position
        drone.x = (progress * drone.speed * canvas.width) % canvas.width

        // Draw flight path trail
        ctx.strokeStyle = drone.color.replace("0.8", "0.2")
        ctx.lineWidth = 1
        ctx.setLineDash([5, 5])
        ctx.beginPath()
        ctx.moveTo(0, drone.y)
        ctx.lineTo(drone.x, drone.y)
        ctx.stroke()

        // Draw drone icon (simplified)
        ctx.fillStyle = drone.color
        ctx.beginPath()
        ctx.arc(drone.x, drone.y, 4, 0, Math.PI * 2)
        ctx.fill()

        // Draw propeller effect
        ctx.strokeStyle = drone.color.replace("0.8", "0.4")
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(drone.x, drone.y, 8, 0, Math.PI * 2)
        ctx.stroke()

        // Draw scanning laser effect
        ctx.strokeStyle = drone.color.replace("0.8", "0.3")
        ctx.lineWidth = 1
        ctx.setLineDash([2, 2])
        ctx.beginPath()
        ctx.moveTo(drone.x, drone.y)
        ctx.lineTo(drone.x, canvas.height)
        ctx.stroke()
      })

      progress++
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}
