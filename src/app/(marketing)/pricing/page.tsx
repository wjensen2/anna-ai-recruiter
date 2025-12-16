import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, HelpCircle } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { pricingPlans } from "@/data/pricing"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Pricing - Anna AI Recruiter",
  description:
    "Simple, transparent pricing for AI-powered driver recruitment. Start free with 10 AI interviews.",
}

const faqs = [
  {
    question: "What counts as an interview?",
    answer:
      "One interview credit is used each time a candidate completes a screening call with Anna. Incomplete calls or no-shows don't count against your credits.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What happens when I run out of credits?",
    answer:
      "Your interview links will pause until you add more credits or upgrade your plan. You won't lose any data, and candidates who try to call will receive a message to try again later.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! Every new account starts with 10 free interview credits. No credit card required.",
  },
]

export default function PricingPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Start free with 10 AI interviews. No credit card required. Scale as
            you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <TooltipProvider>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={cn(
                  "relative flex flex-col",
                  plan.popular && "border-primary shadow-lg scale-105"
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
                        <span className="text-muted-foreground">
                          /{plan.unit}
                        </span>
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
                    <Link
                      href={plan.id === "enterprise" ? "/contact" : "/sign-up"}
                    >
                      {plan.cta}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TooltipProvider>

        {/* All plans include */}
        <div className="mt-16 rounded-2xl bg-slate-50 p-8 md:p-12">
          <h2 className="mb-8 text-center text-2xl font-bold">
            All Plans Include
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              "Full call transcripts",
              "Call recordings",
              "Candidate scoring",
              "Custom interview links",
              "QR code generation",
              "Real-time dashboard",
              "Email notifications",
              "API access (Growth+)",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl divide-y">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="mb-2 font-semibold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
