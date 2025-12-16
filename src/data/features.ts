export interface HowItWorksStep {
  step: number
  icon: string
  title: string
  description: string
}

export const howItWorks: HowItWorksStep[] = [
  {
    step: 1,
    icon: "Phone",
    title: "Anna Calls Candidates 24/7",
    description:
      "Share your unique interview link or QR code. Anna automatically reaches out and conducts screening calls — nights, weekends, whenever.",
  },
  {
    step: 2,
    icon: "CheckCircle",
    title: "Candidates Get Scored Instantly",
    description:
      "Anna asks your screening questions, captures responses, and scores each candidate. Full transcripts and recordings available immediately.",
  },
  {
    step: 3,
    icon: "Users",
    title: "You Hire the Best, Faster",
    description:
      "Review qualified candidates in your dashboard. No more phone tag, no more scheduling chaos. Just hire the right drivers, fast.",
  },
]

export interface Benefit {
  icon: string
  title: string
  description: string
}

export const benefits: Benefit[] = [
  {
    icon: "Clock",
    title: "24/7 Availability",
    description:
      "Anna never sleeps. Screen candidates around the clock, including nights and weekends when drivers are most available.",
  },
  {
    icon: "TrendingUp",
    title: "60% Fewer No-Shows",
    description:
      "Instant engagement means candidates stay interested. Reduce ghosting and no-shows with immediate AI follow-up.",
  },
  {
    icon: "DollarSign",
    title: "90% Cost Reduction",
    description:
      "Replace expensive manual screening with AI. Screen 100 candidates for the cost of screening 10 manually.",
  },
  {
    icon: "Zap",
    title: "Minutes, Not Weeks",
    description:
      "Typical time-to-hire drops from 2-3 weeks to just days. Fill shifts faster and reduce overtime.",
  },
  {
    icon: "Shield",
    title: "Consistent & Unbiased",
    description:
      "Every candidate gets the same professional experience. Anna asks consistent questions without unconscious bias.",
  },
  {
    icon: "BarChart3",
    title: "Real-Time Insights",
    description:
      "Dashboard analytics show hiring funnel health. Identify bottlenecks and optimize your process.",
  },
]

export const logoCompanies = [
  { name: "UPS", logo: "/logos/ups.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "FedEx", logo: "/logos/fedex.svg" },
  { name: "DHL", logo: "/logos/dhl.svg" },
  { name: "Uber Freight", logo: "/logos/uber.svg" },
  { name: "XPO Logistics", logo: "/logos/xpo.svg" },
]
