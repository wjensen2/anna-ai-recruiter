"use client"

import { Header } from "@/components/dashboard/header"
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
import { Progress } from "@/components/ui/progress"
import { Check, CreditCard, Zap } from "lucide-react"
import { pricingPlans } from "@/data/pricing"
import { cn } from "@/lib/utils"

const mockSubscription = {
  plan: "trial",
  creditsRemaining: 8,
  creditsTotal: 10,
  status: "active",
}

export default function BillingPage() {
  const creditsUsed = mockSubscription.creditsTotal - mockSubscription.creditsRemaining
  const creditsPercentage = (creditsUsed / mockSubscription.creditsTotal) * 100

  return (
    <div className="flex flex-col">
      <Header title="Billing" description="Manage your subscription and credits" />

      <div className="p-6">
        {/* Current Plan */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>
                  You&apos;re currently on the free trial
                </CardDescription>
              </div>
              <Badge variant="secondary">Free Trial</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span>Credits Used</span>
                  <span className="font-medium">
                    {creditsUsed} / {mockSubscription.creditsTotal}
                  </span>
                </div>
                <Progress value={creditsPercentage} className="h-2" />
              </div>
              <p className="text-sm text-muted-foreground">
                {mockSubscription.creditsRemaining} interview credits remaining.
                Upgrade to get more interviews and unlock premium features.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Plans */}
        <h2 className="mb-4 text-lg font-semibold">Upgrade Your Plan</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                <div className="mb-4">
                  {plan.price !== null ? (
                    <>
                      <span className="text-3xl font-bold">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">/{plan.unit}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold">Custom</span>
                  )}
                </div>

                <ul className="space-y-2">
                  {plan.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={cn("w-full", plan.popular && "gradient-cta")}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Payment Method */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>
              Add a payment method to upgrade your plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 rounded-lg border border-dashed p-6">
              <CreditCard className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="font-medium">No payment method on file</p>
                <p className="text-sm text-muted-foreground">
                  Add a credit card to start your subscription
                </p>
              </div>
              <Button variant="outline" className="ml-auto">
                Add Card
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
