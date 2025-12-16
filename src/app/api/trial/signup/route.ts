import { NextRequest, NextResponse } from "next/server"
import { signupSchema } from "@/lib/validations"
import { z } from "zod"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = signupSchema.parse(body)

    // In production, you would:
    // 1. Create user in Clerk or your auth system
    // 2. Create user record in database
    // 3. Create subscription with 10 trial credits
    // 4. Create initial job role
    // 5. Send welcome email with magic link
    // 6. Track analytics event

    // Mock user creation
    const userId = crypto.randomUUID()
    const roleId = crypto.randomUUID()
    const interviewLink = `https://anna.ai/i/${roleId.slice(0, 8)}`

    // In production: Create in database with Prisma
    // const user = await db.user.create({
    //   data: {
    //     email: data.email,
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     phone: data.phone,
    //     companyName: data.companyName,
    //     companyAddress: data.companyAddress,
    //     hiringVolume: data.hiringVolume,
    //     termsAcceptedAt: new Date(),
    //     subscription: {
    //       create: {
    //         plan: 'trial',
    //         creditsRemaining: 10,
    //         creditsIncluded: 10,
    //         status: 'active',
    //       }
    //     },
    //     jobRoles: {
    //       create: {
    //         title: data.jobRole.title,
    //         customTitle: data.jobRole.customTitle,
    //         hourlyWage: data.jobRole.hourlyWage,
    //         interviewLink,
    //       }
    //     }
    //   }
    // })

    return NextResponse.json({
      success: true,
      userId,
      interviewLink,
      message: "Trial account created successfully",
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.issues },
        { status: 400 }
      )
    }

    console.error("Failed to create trial:", error)
    return NextResponse.json(
      { error: "Failed to create trial account" },
      { status: 500 }
    )
  }
}
