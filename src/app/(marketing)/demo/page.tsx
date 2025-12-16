"use client"

import { useEffect, useState } from "react"
import { DemoModal } from "@/components/demo/demo-modal"

export default function DemoPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 animate-pulse rounded-full bg-primary/10" />
          <p className="text-muted-foreground">Loading demo...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-4">
      <DemoModal open={true} onOpenChange={() => {}} />
    </div>
  )
}
