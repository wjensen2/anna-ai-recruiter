"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import { DemoModal } from "@/components/demo/demo-modal"
import { LogoCarousel } from "./logo-carousel"

export function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8 lg:py-40">
        <div className="text-center">
          {/* Pill badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Now with Voice AI — Talk to Anna
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Fill Driver Shifts{" "}
            <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
              2x Faster
            </span>{" "}
            with Anna
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Anna automatically screens, schedules, and qualifies your driver
            candidates 24/7 — so you never lose them in the hiring process.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="xl"
              className="h-14 px-8 text-lg gradient-cta hover:opacity-90"
              onClick={() => setDemoOpen(true)}
            >
              Try Anna Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="xl" variant="outline" className="h-14 px-8 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust badge */}
          <p className="mt-12 text-sm font-medium text-slate-500">
            Trusted by UPS franchises, Amazon DSPs, and 500+ logistics companies
          </p>

          {/* Logo carousel */}
          <LogoCarousel className="mt-8" />
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  )
}
