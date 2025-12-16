import { z } from "zod"

export const leadSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  companyName: z.string().min(1, "Company name is required"),
})

export type LeadFormData = z.infer<typeof leadSchema>

export const signupSchema = z.object({
  // Contact Info
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),

  // Company Info
  companyName: z.string().min(1, "Company name is required"),
  companyAddress: z.object({
    street: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(2, "State is required"),
    zip: z.string().min(5, "ZIP code is required"),
    country: z.string().default("US"),
  }),

  // Hiring Info
  hiringVolume: z.enum(["1-10", "11-25", "26-50", "51-100", "100+"]),

  // First Job Role
  jobRole: z.object({
    title: z.enum(["Driver", "Dispatcher", "Package Handler", "Warehouse", "Other"]),
    customTitle: z.string().optional(),
    hourlyWage: z.number().positive("Hourly wage must be positive"),
  }),

  // Terms
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms of service",
  }),
})

export type SignupFormData = z.infer<typeof signupSchema>

export const interviewFilterSchema = z.object({
  status: z.enum(["all", "pending", "in_progress", "completed", "failed"]).optional(),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(10),
})
