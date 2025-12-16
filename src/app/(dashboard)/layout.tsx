import { Sidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Sidebar creditsRemaining={8} creditsTotal={10} />
      <main className="flex-1 overflow-auto bg-slate-50">{children}</main>
    </div>
  )
}
