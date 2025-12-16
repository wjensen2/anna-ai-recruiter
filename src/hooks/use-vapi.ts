"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Vapi from "@vapi-ai/web"

interface UseVapiOptions {
  agentId: string
  onCallStart?: () => void
  onCallEnd?: (result: VapiCallResult) => void
  onSpeechStart?: () => void
  onSpeechEnd?: () => void
  onTranscript?: (text: string, isFinal: boolean) => void
  onError?: (error: Error) => void
}

interface VapiCallResult {
  transcript: string
  summary?: string
  durationSeconds?: number
}

export function useVapi(options: UseVapiOptions) {
  const vapiRef = useRef<Vapi | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [error, setError] = useState<Error | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY) {
      console.warn("VAPI public key not configured")
      return
    }

    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY)
    vapiRef.current = vapi

    vapi.on("call-start", () => {
      setIsConnected(true)
      setError(null)
      startTimeRef.current = Date.now()
      options.onCallStart?.()
    })

    vapi.on("call-end", () => {
      setIsConnected(false)
      setIsListening(false)
      setIsSpeaking(false)

      const durationSeconds = startTimeRef.current
        ? Math.round((Date.now() - startTimeRef.current) / 1000)
        : undefined

      options.onCallEnd?.({
        transcript,
        durationSeconds,
      })
    })

    vapi.on("speech-start", () => {
      setIsSpeaking(true)
      setIsListening(false)
      options.onSpeechStart?.()
    })

    vapi.on("speech-end", () => {
      setIsSpeaking(false)
      setIsListening(true)
      options.onSpeechEnd?.()
    })

    vapi.on("message", (message) => {
      if (message.type === "transcript") {
        const newText = message.transcript || ""
        setTranscript((prev) => {
          if (message.transcriptType === "final") {
            return prev + " " + newText
          }
          return prev
        })
        options.onTranscript?.(newText, message.transcriptType === "final")
      }
    })

    vapi.on("error", (err) => {
      const error = new Error(err.message || "Vapi error occurred")
      setError(error)
      options.onError?.(error)
    })

    return () => {
      vapi.stop()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.agentId])

  const startCall = useCallback(async () => {
    if (!vapiRef.current) {
      throw new Error("Vapi not initialized")
    }

    setTranscript("")
    setError(null)

    try {
      await vapiRef.current.start(options.agentId)
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Failed to start call")
      setError(error)
      throw error
    }
  }, [options.agentId])

  const endCall = useCallback(() => {
    vapiRef.current?.stop()
  }, [])

  const toggleMute = useCallback(() => {
    if (vapiRef.current) {
      // Vapi mute functionality
      vapiRef.current.setMuted(!vapiRef.current.isMuted())
    }
  }, [])

  return {
    isConnected,
    isListening,
    isSpeaking,
    transcript,
    error,
    startCall,
    endCall,
    toggleMute,
  }
}
