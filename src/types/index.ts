export interface User {
  id: string
  clerkId: string
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  companyName?: string
  companyAddress?: CompanyAddress
  hiringVolume?: string
  stripeCustomerId?: string
  termsAcceptedAt?: Date
  createdAt: Date
  updatedAt: Date
}

export interface CompanyAddress {
  street: string
  city: string
  state: string
  zip: string
  country: string
}

export interface Subscription {
  id: string
  userId: string
  plan: "trial" | "paygo" | "starter" | "growth" | "enterprise"
  stripeSubscriptionId?: string
  creditsRemaining: number
  creditsIncluded?: number
  status: "active" | "expired" | "canceled"
  currentPeriodStart?: Date
  currentPeriodEnd?: Date
  createdAt: Date
  updatedAt: Date
}

export interface JobRole {
  id: string
  userId: string
  title: string
  customTitle?: string
  hourlyWage: number
  interviewLink: string
  qrCodeUrl?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Interview {
  id: string
  userId: string
  jobRoleId: string
  jobRole?: JobRole
  vapiCallId?: string
  candidateName?: string
  candidatePhone?: string
  candidateLocation?: string
  status: "pending" | "in_progress" | "completed" | "failed"
  score?: number
  answers?: InterviewAnswer[]
  transcript?: string
  recordingUrl?: string
  durationSeconds?: number
  startedAt?: Date
  completedAt?: Date
  createdAt: Date
  updatedAt: Date
}

export interface InterviewAnswer {
  question: string
  answer: string
}

export interface DemoLead {
  id: string
  userId?: string
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  companyName?: string
  demoCompleted: boolean
  demoResult?: Record<string, unknown>
  demoSummary?: string
  convertedToTrial: boolean
  createdAt: Date
}

export interface DashboardStats {
  creditsRemaining: number
  creditsTotal: number
  completedInterviews: number
  qualifiedCandidates: number
  avgInterviewTime: number
}
