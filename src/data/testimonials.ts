export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  logo?: string
  avatar?: string
  stats?: {
    candidates?: number
    hired?: number
    reduction?: string
    before?: string
    after?: string
    savings?: string
    period?: string
  }
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Anna screened 500 candidates in our first month. We hired 47 drivers and cut our time-to-hire by 70%.",
    author: "Sarah Mitchell",
    role: "HR Director",
    company: "FastFreight Logistics",
    logo: "/logos/fastfreight.svg",
    avatar: "/avatars/sarah.jpg",
    stats: { candidates: 500, hired: 47, reduction: "70%" },
  },
  {
    quote:
      "We went from losing 40% of applicants to phone tag to converting 80%. Anna changed everything.",
    author: "Marcus Johnson",
    role: "Operations Manager",
    company: "Metro Delivery Co",
    logo: "/logos/metro.svg",
    avatar: "/avatars/marcus.jpg",
    stats: { before: "40%", after: "80%" },
  },
  {
    quote:
      "The ROI was immediate. We saved $15,000 in our first quarter just on recruiter hours.",
    author: "Jennifer Park",
    role: "Franchise Owner",
    company: "UPS Store #4521",
    logo: "/logos/ups.svg",
    avatar: "/avatars/jennifer.jpg",
    stats: { savings: "$15,000", period: "Q1" },
  },
]
