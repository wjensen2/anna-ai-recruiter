import { Metadata } from "next"
import { Header } from "@/components/dashboard/header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RoleCard } from "@/components/dashboard/role-card"
import { InterviewTable } from "@/components/dashboard/interview-table"
import { CreditWarningBanner } from "@/components/dashboard/credit-warning-banner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Dashboard - Anna AI Recruiter",
}

// Mock data - would come from API in production
const mockStats = {
  creditsRemaining: 8,
  creditsTotal: 10,
  completedInterviews: 2,
  qualifiedCandidates: 1,
  avgInterviewTime: 272, // 4:32 in seconds
}

const mockRole = {
  id: "role-1",
  userId: "user-1",
  title: "Driver",
  hourlyWage: 18,
  interviewLink: "https://anna.ai/i/abc123",
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
}

const mockInterviews = [
  {
    id: "int-1",
    userId: "user-1",
    jobRoleId: "role-1",
    jobRole: { id: "role-1", title: "Driver", hourlyWage: 18, interviewLink: "", isActive: true, userId: "user-1", createdAt: new Date(), updatedAt: new Date() },
    candidateName: "John Smith",
    candidatePhone: "+1 (555) 123-4567",
    status: "completed" as const,
    score: 85,
    completedAt: new Date("2024-12-15"),
    createdAt: new Date("2024-12-15"),
    updatedAt: new Date("2024-12-15"),
  },
  {
    id: "int-2",
    userId: "user-1",
    jobRoleId: "role-1",
    jobRole: { id: "role-1", title: "Driver", hourlyWage: 18, interviewLink: "", isActive: true, userId: "user-1", createdAt: new Date(), updatedAt: new Date() },
    candidateName: "Jane Doe",
    candidatePhone: "+1 (555) 987-6543",
    status: "completed" as const,
    score: 72,
    completedAt: new Date("2024-12-14"),
    createdAt: new Date("2024-12-14"),
    updatedAt: new Date("2024-12-14"),
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <Header
        title="Welcome back!"
        description="Here's an overview of your recruiting activity"
      />

      <div className="p-6">
        {/* Credit Warning */}
        <CreditWarningBanner creditsRemaining={mockStats.creditsRemaining} />

        {/* Stats */}
        <StatsCards stats={mockStats} />

        {/* Main Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Interview Link Card */}
          <RoleCard role={mockRole} />

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="font-medium">Share your interview link</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Post your interview link on job boards, social media, or send
                  directly to candidates.
                </p>
              </div>
              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="font-medium">Add a new job role</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Create additional interview links for different positions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Interviews */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <InterviewTable interviews={mockInterviews} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
