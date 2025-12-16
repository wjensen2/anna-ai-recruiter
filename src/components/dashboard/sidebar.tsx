"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Settings,
  CreditCard,
  LogOut,
  Coins,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/interviews", label: "Interviews", icon: Users },
  { href: "/roles", label: "Job Roles", icon: Briefcase },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/billing", label: "Billing", icon: CreditCard },
]

interface SidebarProps {
  creditsRemaining?: number
  creditsTotal?: number
}

export function Sidebar({ creditsRemaining = 10, creditsTotal = 10 }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-violet-600">
            <span className="text-lg font-bold text-white">A</span>
          </div>
          <span className="text-xl font-bold">Anna</span>
        </Link>
      </div>

      {/* Credits Badge */}
      <div className="px-4 py-4">
        <div className="rounded-lg bg-primary/10 p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <Coins className="h-4 w-4" />
            Credits
          </div>
          <p className="mt-1 text-2xl font-bold">
            {creditsRemaining}/{creditsTotal}
          </p>
          <p className="text-xs text-muted-foreground">interviews remaining</p>
          {creditsRemaining <= 3 && (
            <Button size="sm" className="mt-3 w-full" asChild>
              <Link href="/billing">Add Credits</Link>
            </Button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <Button variant="ghost" className="w-full justify-start gap-3">
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
