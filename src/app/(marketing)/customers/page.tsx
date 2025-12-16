import { Metadata } from "next"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { testimonials } from "@/data/testimonials"

export const metadata: Metadata = {
  title: "Customer Stories - Anna AI Recruiter",
  description:
    "See how logistics companies are transforming their hiring with Anna AI Recruiter.",
}

const caseStudies = [
  {
    company: "FastFreight Logistics",
    industry: "Regional Delivery",
    challenge:
      "FastFreight was struggling to keep up with their rapid growth. Their HR team was spending 40+ hours per week on phone screens alone.",
    solution:
      "Implemented Anna to handle initial candidate screening 24/7, freeing up HR to focus on final interviews and onboarding.",
    results: [
      { label: "Candidates Screened", value: "500+" },
      { label: "Drivers Hired", value: "47" },
      { label: "Time-to-Hire Reduction", value: "70%" },
      { label: "HR Hours Saved", value: "160/month" },
    ],
    quote:
      "Anna screened 500 candidates in our first month. We hired 47 drivers and cut our time-to-hire by 70%.",
    author: "Sarah Mitchell",
    role: "HR Director",
  },
  {
    company: "Metro Delivery Co",
    industry: "Last-Mile Delivery",
    challenge:
      "High candidate drop-off due to slow response times. 40% of applicants were lost to competitors before the first contact.",
    solution:
      "Anna immediately engages every applicant, conducts screening within minutes of application, and schedules qualified candidates for next steps.",
    results: [
      { label: "Response Time", value: "<5 min" },
      { label: "Candidate Conversion", value: "80%" },
      { label: "No-Show Reduction", value: "60%" },
      { label: "Monthly Hires", value: "2x" },
    ],
    quote:
      "We went from losing 40% of applicants to phone tag to converting 80%. Anna changed everything.",
    author: "Marcus Johnson",
    role: "Operations Manager",
  },
  {
    company: "UPS Store #4521",
    industry: "Franchise Operations",
    challenge:
      "Limited HR resources as a franchise owner. Couldn't compete with larger companies for driver talent.",
    solution:
      "Anna provides enterprise-level recruiting capabilities at a fraction of the cost, available 24/7 to screen candidates.",
    results: [
      { label: "Quarterly Savings", value: "$15,000" },
      { label: "Hiring Capacity", value: "3x" },
      { label: "Candidate Quality", value: "+40%" },
      { label: "Time Investment", value: "-80%" },
    ],
    quote:
      "The ROI was immediate. We saved $15,000 in our first quarter just on recruiter hours.",
    author: "Jennifer Park",
    role: "Franchise Owner",
  },
]

export default function CustomersPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Customer Stories
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See how logistics companies are transforming their hiring with Anna
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid gap-8 rounded-2xl bg-gradient-to-r from-primary to-violet-600 p-8 text-white sm:grid-cols-4">
          {[
            { label: "Companies", value: "500+" },
            { label: "Candidates Screened", value: "3M+" },
            { label: "Drivers Hired", value: "250K+" },
            { label: "Avg. Time-to-Hire Reduction", value: "65%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mt-20 space-y-20">
          {caseStudies.map((study, index) => (
            <div key={study.company}>
              <div className="mb-8">
                <p className="text-sm font-medium text-primary">
                  {study.industry}
                </p>
                <h2 className="mt-2 text-3xl font-bold">{study.company}</h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Challenge & Solution */}
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-semibold text-muted-foreground">
                      The Challenge
                    </h3>
                    <p>{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-muted-foreground">
                      The Solution
                    </h3>
                    <p>{study.solution}</p>
                  </div>

                  {/* Quote */}
                  <Card className="bg-slate-50">
                    <CardContent className="pt-6">
                      <Quote className="mb-4 h-8 w-8 text-primary/20" />
                      <p className="mb-4 text-lg italic">
                        &ldquo;{study.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {study.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{study.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {study.role}, {study.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Results */}
                <div>
                  <h3 className="mb-4 font-semibold text-muted-foreground">
                    The Results
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result) => (
                      <Card key={result.label}>
                        <CardContent className="pt-6 text-center">
                          <p className="text-3xl font-bold text-primary">
                            {result.value}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {result.label}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {index < caseStudies.length - 1 && (
                <div className="mt-20 border-b" />
              )}
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold">
            What Our Customers Say
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author}>
                <CardContent className="pt-6">
                  <p className="mb-4 text-sm">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
