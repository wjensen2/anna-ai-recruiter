"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { DemoModal } from "@/components/demo/demo-modal"

export function CTASection() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-violet-600 px-6 py-16 text-center md:px-16 md:py-24">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="absolute right-0 top-0 h-full"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="pattern"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-white"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#pattern)" />
            </svg>
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to hire drivers faster?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Start your free trial with 10 AI interviews.
              <br />
              No credit card required.
            </p>
            <div className="mt-10">
              <Button
                size="xl"
                variant="secondary"
                className="h-14 px-8 text-lg"
                onClick={() => setDemoOpen(true)}
              >
                Try Anna Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  )
}
