"use client"

import { cn } from "@/lib/utils"

const companies = [
  "UPS",
  "Amazon",
  "FedEx",
  "DHL",
  "Uber Freight",
  "XPO",
]

interface LogoCarouselProps {
  className?: string
}

export function LogoCarousel({ className }: LogoCarouselProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex items-center justify-center gap-8 md:gap-12 opacity-60 grayscale">
        {companies.map((company) => (
          <div
            key={company}
            className="flex h-12 items-center justify-center px-4"
          >
            <span className="text-lg font-semibold text-muted-foreground">
              {company}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
