import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
  typescript: true,
})

export const PRICE_IDS = {
  paygo: process.env.STRIPE_PAYGO_PRICE_ID!,
  starter: process.env.STRIPE_STARTER_PRICE_ID!,
  growth: process.env.STRIPE_GROWTH_PRICE_ID!,
} as const

export function getPriceId(planId: string): string {
  if (planId in PRICE_IDS) {
    return PRICE_IDS[planId as keyof typeof PRICE_IDS]
  }
  throw new Error(`Invalid plan ID: ${planId}`)
}
