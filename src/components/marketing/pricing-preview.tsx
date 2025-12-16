import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { pricingPlans } from "@/data/pricing"
import { cn } from "@/lib/utils"

export function PricingPreview() {
  return (
    <section className="bg-slate-50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Start free with 10 AI interviews. No credit card required.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "relative flex flex-col",
                plan.popular && "border-primary shadow-lg"
              )}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}

              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                {/* Price */}
                <div className="mb-6">
                  {plan.price !== null ? (
                    <>
                      <span className="text-4xl font-bold">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">/{plan.unit}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold">Custom</span>
                  )}
                  {plan.interviews && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {plan.interviews} interviews/month
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={cn("w-full", plan.popular && "gradient-cta")}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.id === "enterprise" ? "/contact" : "/sign-up"}>
                    {plan.cta}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pay as you go note */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          All plans include full transcripts, recordings, and candidate scoring.{" "}
          <Link href="/pricing" className="text-primary hover:underline">
            View full pricing details
          </Link>
        </p>
      </div>
    </section>
  )
}
