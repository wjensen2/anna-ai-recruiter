import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const magicLinkSchema = z.object({
  email: z.string().email(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = magicLinkSchema.parse(body)

    // In production, you would:
    // 1. Check if user exists
    // 2. Generate a secure token
    // 3. Store token in database with expiry
    // 4. Send email with Resend

    const token = crypto.randomUUID()
    const magicLink = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/auth/verify?token=${token}`

    // In production: Send email with Resend
    // await resend.emails.send({
    //   from: 'Anna AI <noreply@anna.ai>',
    //   to: email,
    //   subject: 'Sign in to Anna AI',
    //   html: `<p>Click <a href="${magicLink}">here</a> to sign in. This link expires in 15 minutes.</p>`
    // })

    return NextResponse.json({
      success: true,
      message: "Magic link sent",
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      )
    }

    console.error("Failed to send magic link:", error)
    return NextResponse.json(
      { error: "Failed to send magic link" },
      { status: 500 }
    )
  }
}
