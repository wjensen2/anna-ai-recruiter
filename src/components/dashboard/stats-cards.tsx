import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, CheckCircle, Users, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import type { DashboardStats } from "@/types"

interface StatsCardsProps {
  stats: DashboardStats
}

export function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      title: "Credits Remaining",
      value: `${stats.creditsRemaining}/${stats.creditsTotal}`,
      icon: Coins,
      trend: stats.creditsRemaining <= 3 ? "warning" : "neutral",
    },
    {
      title: "Interviews Completed",
      value: stats.completedInterviews.toString(),
      icon: CheckCircle,
      trend: "up",
    },
    {
      title: "Qualified Candidates",
      value: stats.qualifiedCandidates.toString(),
      icon: Users,
      trend: "up",
    },
    {
      title: "Avg Interview Time",
      value: formatDuration(stats.avgInterviewTime),
      icon: Clock,
      trend: "neutral",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon
              className={cn(
                "h-4 w-4",
                card.trend === "warning"
                  ? "text-warning"
                  : card.trend === "up"
                  ? "text-success"
                  : "text-muted-foreground"
              )}
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, "0")}`
}
