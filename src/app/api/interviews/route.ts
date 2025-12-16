import { NextRequest, NextResponse } from "next/server"

// Mock data for development
const mockInterviews = [
  {
    id: "int-1",
    userId: "user-1",
    jobRoleId: "role-1",
    candidateName: "John Smith",
    candidatePhone: "+1 (555) 123-4567",
    candidateLocation: "Los Angeles, CA",
    status: "completed",
    score: 85,
    durationSeconds: 312,
    completedAt: "2024-12-15T14:30:00Z",
    createdAt: "2024-12-15T14:25:00Z",
  },
  {
    id: "int-2",
    userId: "user-1",
    jobRoleId: "role-1",
    candidateName: "Jane Doe",
    candidatePhone: "+1 (555) 987-6543",
    candidateLocation: "San Francisco, CA",
    status: "completed",
    score: 72,
    durationSeconds: 285,
    completedAt: "2024-12-14T10:15:00Z",
    createdAt: "2024-12-14T10:10:00Z",
  },
]

export async function GET(req: NextRequest) {
  try {
    // In production, you would:
    // 1. Authenticate the user
    // 2. Query database for interviews
    // 3. Apply filters and pagination

    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const status = searchParams.get("status")

    let interviews = mockInterviews

    if (status && status !== "all") {
      interviews = interviews.filter(i => i.status === status)
    }

    return NextResponse.json({
      interviews,
      pagination: {
        page,
        limit,
        total: interviews.length,
        totalPages: Math.ceil(interviews.length / limit),
      },
    })
  } catch (error) {
    console.error("Failed to fetch interviews:", error)
    return NextResponse.json(
      { error: "Failed to fetch interviews" },
      { status: 500 }
    )
  }
}
