"use client"

import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Briefcase,
  Copy,
  Check,
  ExternalLink,
  Download,
  Mail,
  MessageSquare,
  Share2,
} from "lucide-react"
import type { JobRole } from "@/types"

interface RoleCardProps {
  role: JobRole
}

export function RoleCard({ role }: RoleCardProps) {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    await navigator.clipboard.writeText(role.interviewLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadQRCode = () => {
    const canvas = document.getElementById(`qr-${role.id}`) as HTMLCanvasElement
    if (canvas) {
      const url = canvas.toDataURL("image/png")
      const a = document.createElement("a")
      a.href = url
      a.download = `${role.title.toLowerCase().replace(/\s+/g, "-")}-qr.png`
      a.click()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          {role.title}
          {role.customTitle && ` - ${role.customTitle}`}
        </CardTitle>
        <CardDescription>${role.hourlyWage}/hr</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Interview Link */}
          <div>
            <Label className="text-xs text-muted-foreground">
              Interview Link
            </Label>
            <div className="mt-1 flex gap-2">
              <Input
                value={role.interviewLink}
                readOnly
                className="font-mono text-sm"
              />
              <Button variant="outline" size="icon" onClick={copyLink}>
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={role.interviewLink} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex items-center gap-4">
            <div className="rounded-lg border bg-white p-2">
              <QRCodeSVG
                id={`qr-${role.id}`}
                value={role.interviewLink}
                size={80}
              />
            </div>
            <div className="space-y-1">
              <Button variant="outline" size="sm" onClick={downloadQRCode}>
                <Download className="mr-2 h-4 w-4" />
                Download PNG
              </Button>
              <p className="text-xs text-muted-foreground">
                Share this QR code with applicants
              </p>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              SMS
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
