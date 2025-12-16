import { Phone, CheckCircle, Users } from "lucide-react"
import { howItWorks } from "@/data/features"

const iconMap: Record<string, React.ElementType> = {
  Phone,
  CheckCircle,
  Users,
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How Anna Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Three simple steps to transform your hiring process
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {howItWorks.map((step) => {
            const Icon = iconMap[step.icon] || Phone
            return (
              <div
                key={step.step}
                className="relative rounded-2xl border bg-card p-8 text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                  Step {step.step}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
