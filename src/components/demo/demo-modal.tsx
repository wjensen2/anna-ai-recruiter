"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useVapi } from "@/hooks/use-vapi"
import { VoiceWaveform } from "./voice-waveform"
import { LeadCaptureForm } from "./lead-capture-form"
import { Mic, PhoneOff, CheckCircle } from "lucide-react"
import type { LeadFormData } from "@/lib/validations"

type DemoState = "permission" | "active" | "processing" | "capture" | "complete"

interface DemoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface DemoResult {
  transcript: string
  summary?: string
  durationSeconds?: number
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const [state, setState] = useState<DemoState>("permission")
  const [demoResult, setDemoResult] = useState<DemoResult | null>(null)

  const {
    isConnected,
    isListening,
    isSpeaking,
    transcript,
    startCall,
    endCall,
  } = useVapi({
    agentId: process.env.NEXT_PUBLIC_VAPI_DEMO_AGENT_ID || "",
    onCallStart: () => {
      setState("active")
    },
    onCallEnd: (result) => {
      setDemoResult(result)
      setState("capture")
    },
    onError: (error) => {
      console.error("Vapi error:", error)
      // Could show error state here
    },
  })

  const handleStartDemo = async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true })
      await startCall()
    } catch (error) {
      console.error("Failed to start demo:", error)
      // Could show error state here
    }
  }

  const handleEndDemo = () => {
    endCall()
    setState("processing")
  }

  const handleLeadSubmit = async (data: LeadFormData) => {
    try {
      await fetch("/api/demo/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, demoResult }),
      })
      setState("complete")
    } catch (error) {
      console.error("Failed to submit lead:", error)
    }
  }

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      // Reset state when closing
      setState("permission")
      setDemoResult(null)
    }
    onOpenChange(isOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        {state === "permission" && (
          <div className="py-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Mic className="h-8 w-8 text-primary" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl">Talk to Anna</DialogTitle>
            </DialogHeader>
            <p className="mb-8 mt-2 text-muted-foreground">
              Experience a quick demo interview with Anna, our AI Recruiter.
              She&apos;ll ask you a few sample screening questions.
            </p>
            <Button size="lg" onClick={handleStartDemo}>
              Enable Microphone & Start
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              Demo takes ~60 seconds. Your microphone is only used during the
              call.
            </p>
          </div>
        )}

        {state === "active" && (
          <div className="py-8">
            <div className="mb-8 text-center">
              <div className="relative mx-auto mb-4 h-24 w-24">
                {/* Anna avatar */}
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary to-violet-600">
                  <span className="text-3xl font-bold text-white">A</span>
                </div>
                {/* Speaking indicator */}
                {isSpeaking && (
                  <span className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-4 border-white bg-green-500" />
                )}
              </div>
              <p className="text-lg font-medium">
                {isSpeaking ? "Anna is speaking..." : "Listening..."}
              </p>
            </div>

            {/* Voice Waveform */}
            <VoiceWaveform
              active={isConnected}
              speaking={isSpeaking}
              listening={isListening}
            />

            {/* Live Transcript */}
            <div className="mt-6 max-h-32 overflow-y-auto rounded-lg bg-muted/50 p-4">
              <p className="text-sm text-muted-foreground">
                {transcript || "Waiting for conversation..."}
              </p>
            </div>

            {/* End Call Button */}
            <div className="mt-8 text-center">
              <Button variant="destructive" onClick={handleEndDemo}>
                <PhoneOff className="mr-2 h-4 w-4" />
                End Demo
              </Button>
            </div>
          </div>
        )}

        {state === "processing" && (
          <div className="py-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-primary/10">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">
              Processing your demo...
            </h2>
            <p className="text-muted-foreground">
              Anna is analyzing your responses.
            </p>
          </div>
        )}

        {state === "capture" && (
          <LeadCaptureForm
            onSubmit={handleLeadSubmit}
            demoSummary={demoResult?.summary}
          />
        )}

        {state === "complete" && (
          <div className="py-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mb-2 text-2xl font-bold">Thank you!</h2>
            <p className="mb-6 text-muted-foreground">
              Your demo results have been sent to your phone. Ready to hire
              drivers faster?
            </p>
            <Button size="lg" asChild>
              <Link href="/sign-up">Start Your Free Trial</Link>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
