"use client"

import posthog from "posthog-js"

export const initPostHog = () => {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug()
      },
    })
  }
}

export const analytics = {
  // Acquisition
  landingPageViewed: (source?: string) => {
    posthog.capture("landing_page_viewed", { source })
  },

  tryAnnaCTAClicked: (location: string) => {
    posthog.capture("try_anna_clicked", { location })
  },

  // Activation
  demoStarted: (microphoneGranted: boolean) => {
    posthog.capture("demo_started", { microphone_granted: microphoneGranted })
  },

  demoCompleted: (durationSeconds: number) => {
    posthog.capture("demo_completed", { duration_seconds: durationSeconds })
  },

  demoAbandoned: (durationSeconds: number, reason: string) => {
    posthog.capture("demo_abandoned", { duration_seconds: durationSeconds, reason })
  },

  leadFormSubmitted: (hasCompanyEmail: boolean) => {
    posthog.capture("lead_form_submitted", { has_company_email: hasCompanyEmail })
  },

  trialSignupCompleted: (jobRole: string, hiringVolume: string) => {
    posthog.capture("trial_signup_completed", { job_role: jobRole, hiring_volume: hiringVolume })
  },

  firstInterviewLinkShared: (method: string) => {
    posthog.capture("first_interview_link_shared", { method })
  },

  firstInterviewCompleted: (hoursToFirst: number) => {
    posthog.capture("first_interview_completed", { time_to_first_interview_hours: hoursToFirst })
  },

  // Revenue
  interviewCreditUsed: (creditsRemaining: number) => {
    posthog.capture("interview_credit_used", { credits_remaining: creditsRemaining })
  },

  creditWarningShown: (creditsRemaining: number) => {
    posthog.capture("credit_warning_shown", { credits_remaining: creditsRemaining })
  },

  upgradeCTAClicked: (location: string) => {
    posthog.capture("upgrade_cta_clicked", { location })
  },

  paymentCompleted: (plan: string, amount: number) => {
    posthog.capture("payment_completed", { plan, amount })
  },

  trialConvertedToPaid: (plan: string, interviewsCompleted: number, daysInTrial: number) => {
    posthog.capture("trial_converted_to_paid", {
      plan,
      trial_interviews_completed: interviewsCompleted,
      days_in_trial: daysInTrial,
    })
  },
}
