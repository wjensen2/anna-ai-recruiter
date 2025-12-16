import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface CreditWarningBannerProps {
  creditsRemaining: number
}

export function CreditWarningBanner({
  creditsRemaining,
}: CreditWarningBannerProps) {
  if (creditsRemaining > 3) return null

  return (
    <div
      className={cn(
        "mb-6 flex items-center justify-between rounded-lg p-4",
        creditsRemaining === 0
          ? "border border-destructive bg-destructive/10"
          : "border border-warning bg-warning/10"
      )}
    >
      <div className="flex items-center gap-3">
        <AlertTriangle
          className={cn(
            "h-5 w-5",
            creditsRemaining === 0 ? "text-destructive" : "text-warning"
          )}
        />
        <div>
          <p className="font-medium">
            {creditsRemaining === 0
              ? "Your trial has ended"
              : `Only ${creditsRemaining} interview credit${
                  creditsRemaining !== 1 ? "s" : ""
                } remaining`}
          </p>
          <p className="text-sm text-muted-foreground">
            {creditsRemaining === 0
              ? "Upgrade now to continue screening candidates with Anna."
              : "Don't let your hiring momentum stop!"}
          </p>
        </div>
      </div>
      <Button asChild>
        <Link href="/billing">Upgrade Now</Link>
      </Button>
    </div>
  )
}
