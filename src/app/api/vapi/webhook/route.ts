import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Vapi sends different event types
    const eventType = body.type

    switch (eventType) {
      case "call-started":
        // Interview started
        // Update interview status to 'in_progress'
        console.log("Call started:", body.call_id)
        break

      case "call-ended":
        // Interview completed
        // Save transcript, recording URL, calculate score
        console.log("Call ended:", body.call_id)
        // In production:
        // await db.interview.update({
        //   where: { vapiCallId: body.call_id },
        //   data: {
        //     status: 'completed',
        //     transcript: body.transcript,
        //     recordingUrl: body.recording_url,
        //     durationSeconds: body.duration_seconds,
        //     completedAt: new Date(),
        //   }
        // })
        break

      case "transcript":
        // Real-time transcript update (if needed)
        break

      default:
        console.log("Unknown event type:", eventType)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Vapi webhook error:", error)
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    )
  }
}
