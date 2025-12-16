"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import { cn } from "@/lib/utils"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted by Leading Companies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See how Anna is transforming hiring for logistics companies
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative rounded-2xl bg-gradient-to-br from-primary/5 to-violet-500/5 p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="absolute left-6 top-6 h-8 w-8 text-primary/20" />

            {/* Quote */}
            <blockquote className="relative text-center">
              <p className="text-xl font-medium text-slate-900 md:text-2xl lg:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 flex flex-col items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={current.avatar} alt={current.author} />
                  <AvatarFallback>
                    {current.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="font-semibold">{current.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {current.role}, {current.company}
                  </p>
                </div>
              </div>

              {/* Stats */}
              {current.stats && (
                <div className="mt-8 flex flex-wrap justify-center gap-8">
                  {current.stats.candidates && (
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">
                        {current.stats.candidates}+
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Candidates Screened
                      </p>
                    </div>
                  )}
                  {current.stats.hired && (
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">
                        {current.stats.hired}
                      </p>
                      <p className="text-sm text-muted-foreground">Drivers Hired</p>
                    </div>
                  )}
                  {current.stats.reduction && (
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">
                        {current.stats.reduction}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Faster Hiring
                      </p>
                    </div>
                  )}
                  {current.stats.savings && (
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">
                        {current.stats.savings}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Saved in {current.stats.period}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </blockquote>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors",
                      index === currentIndex ? "bg-primary" : "bg-primary/20"
                    )}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
