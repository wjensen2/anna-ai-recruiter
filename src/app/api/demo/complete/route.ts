import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const demoCompleteSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  companyName: z.string().min(1),
  demoResult: z.object({
    transcript: z.string().optional(),
    summary: z.string().optional(),
    durationSeconds: z.number().optional(),
  }).optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = demoCompleteSchema.parse(body)

    // In production, you would:
    // 1. Save the lead to the database
    // 2. Send SMS with report link using Twilio
    // 3. Trigger email sequence
    // 4. Track analytics event

    // Mock: Generate a report token
    const reportToken = crypto.randomUUID()
    const reportUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/report/${reportToken}`

    // In production: Send SMS with Twilio
    // await twilioClient.messages.create({
    //   body: `Thanks for trying Anna! View your demo report: ${reportUrl}`,
    //   to: data.phone,
    //   from: process.env.TWILIO_FROM_NUMBER,
    // })

    return NextResponse.json({
      success: true,
      reportUrl,
      message: "Demo completed successfully",
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      )
    }

    console.error("Failed to complete demo:", error)
    return NextResponse.json(
      { error: "Failed to complete demo" },
      { status: 500 }
    )
  }
}
