import type { Metadata } from "next"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Anna AI Recruiter - Hire Drivers 2x Faster",
    template: "%s | Anna AI Recruiter",
  },
  description:
    "Anna automatically screens, schedules, and qualifies your driver candidates 24/7. Start your free trial with 10 AI interviews.",
  keywords: [
    "AI recruiter",
    "driver recruitment",
    "logistics hiring",
    "delivery driver hiring",
    "automated screening",
    "voice AI",
  ],
  authors: [{ name: "Anna AI" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anna.ai",
    siteName: "Anna AI Recruiter",
    title: "Anna AI Recruiter - Hire Drivers 2x Faster",
    description:
      "Anna automatically screens, schedules, and qualifies your driver candidates 24/7.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anna AI Recruiter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna AI Recruiter - Hire Drivers 2x Faster",
    description:
      "Anna automatically screens, schedules, and qualifies your driver candidates 24/7.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
