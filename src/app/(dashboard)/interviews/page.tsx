import { Metadata } from "next"
import { Header } from "@/components/dashboard/header"
import { InterviewTable } from "@/components/dashboard/interview-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Interviews - Anna AI Recruiter",
}

// Mock data
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
  {
    id: "int-3",
    userId: "user-1",
    jobRoleId: "role-1",
    jobRole: { id: "role-1", title: "Driver", hourlyWage: 18, interviewLink: "", isActive: true, userId: "user-1", createdAt: new Date(), updatedAt: new Date() },
    candidateName: "Mike Wilson",
    candidatePhone: "+1 (555) 456-7890",
    status: "in_progress" as const,
    score: undefined,
    completedAt: undefined,
    createdAt: new Date("2024-12-16"),
    updatedAt: new Date("2024-12-16"),
  },
]

export default function InterviewsPage() {
  return (
    <div className="flex flex-col">
      <Header
        title="Interviews"
        description="View and manage all candidate interviews"
      />

      <div className="p-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <CardTitle>All Interviews</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search candidates..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All roles</SelectItem>
                  <SelectItem value="driver">Driver</SelectItem>
                  <SelectItem value="dispatcher">Dispatcher</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Table */}
            <InterviewTable interviews={mockInterviews} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
