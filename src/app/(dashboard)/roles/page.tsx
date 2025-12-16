import { Metadata } from "next"
import { Header } from "@/components/dashboard/header"
import { RoleCard } from "@/components/dashboard/role-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Job Roles - Anna AI Recruiter",
}

const mockRoles = [
  {
    id: "role-1",
    userId: "user-1",
    title: "Driver",
    hourlyWage: 18,
    interviewLink: "https://anna.ai/i/abc123",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "role-2",
    userId: "user-1",
    title: "Package Handler",
    hourlyWage: 15,
    interviewLink: "https://anna.ai/i/def456",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export default function RolesPage() {
  return (
    <div className="flex flex-col">
      <Header
        title="Job Roles"
        description="Manage your interview links for different positions"
      />

      <div className="p-6">
        <div className="mb-6 flex justify-end">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Role
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {mockRoles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}

          {/* Add New Role Card */}
          <Card className="flex items-center justify-center border-dashed">
            <CardContent className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-medium">Add a new job role</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Create interview links for different positions
              </p>
              <Button variant="outline" className="mt-4">
                Add Role
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
