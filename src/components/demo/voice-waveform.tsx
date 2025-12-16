"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface VoiceWaveformProps {
  active: boolean
  speaking: boolean
  listening: boolean
  className?: string
}

export function VoiceWaveform({
  active,
  speaking,
  listening,
  className,
}: VoiceWaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!active || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const bars = 40
    const barWidth = canvas.width / bars - 2

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < bars; i++) {
        const height = speaking
          ? Math.random() * canvas.height * 0.8 + canvas.height * 0.1
          : listening
          ? Math.random() * canvas.height * 0.4 + canvas.height * 0.1
          : canvas.height * 0.1

        const x = i * (barWidth + 2)
        const y = (canvas.height - height) / 2

        // Create gradient
        const gradient = ctx.createLinearGradient(x, y, x, y + height)
        if (speaking) {
          gradient.addColorStop(0, "hsl(221.2 83.2% 53.3%)")
          gradient.addColorStop(1, "hsl(262 83% 58%)")
        } else {
          gradient.addColorStop(0, "hsl(215.4 16.3% 56.9%)")
          gradient.addColorStop(1, "hsl(215.4 16.3% 46.9%)")
        }

        ctx.fillStyle = gradient
        ctx.fillRect(x, y, barWidth, height)
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationId)
  }, [active, speaking, listening])

  if (!active) {
    return (
      <div className={cn("flex h-20 items-center justify-center", className)}>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-4 w-1 rounded-full bg-muted-foreground/30"
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={80}
      className={cn("w-full h-20", className)}
    />
  )
}
