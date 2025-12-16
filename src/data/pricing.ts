export interface PricingPlan {
  id: string
  name: string
  price: number | null
  unit: string
  interviews?: number
  description: string
  features: string[]
  cta: string
  popular: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "paygo",
    name: "Pay as You Go",
    price: 15,
    unit: "per interview",
    description: "Perfect for low-volume hiring",
    features: [
      "Individual interview credits",
      "Full transcripts & recordings",
      "No monthly commitment",
    ],
    cta: "Buy Credits",
    popular: false,
  },
  {
    id: "starter",
    name: "Starter",
    price: 1000,
    unit: "per month",
    interviews: 100,
    description: "For small teams",
    features: [
      "Up to 100 interviews/month",
      "Priority support",
      "Custom interview scripts",
      "Team collaboration",
    ],
    cta: "Start Trial",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: 2500,
    unit: "per month",
    interviews: 400,
    description: "For growing companies",
    features: [
      "Up to 400 interviews/month",
      "Dedicated success manager",
      "API access",
      "Advanced analytics",
      "Multiple job roles",
    ],
    cta: "Start Trial",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    unit: "custom",
    description: "For large organizations",
    features: [
      "Unlimited interviews",
      "Custom integrations",
      "SSO & advanced security",
      "Dedicated infrastructure",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]
