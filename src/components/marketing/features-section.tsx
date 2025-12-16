import {
  Clock,
  TrendingUp,
  DollarSign,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react"
import { benefits } from "@/data/features"

const iconMap: Record<string, React.ElementType> = {
  Clock,
  TrendingUp,
  DollarSign,
  Zap,
  Shield,
  BarChart3,
}

export function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why Companies Choose Anna
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Powerful features that make hiring drivers effortless
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon] || Clock
            return (
              <div
                key={benefit.title}
                className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
