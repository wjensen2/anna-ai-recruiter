"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { leadSchema, type LeadFormData } from "@/lib/validations"

interface LeadCaptureFormProps {
  onSubmit: (data: LeadFormData) => Promise<void>
  demoSummary?: string
}

export function LeadCaptureForm({ onSubmit, demoSummary }: LeadCaptureFormProps) {
  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
    },
  })

  const handleSubmit = async (data: LeadFormData) => {
    await onSubmit(data)
  }

  return (
    <div className="py-6">
      {demoSummary && (
        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
          <h3 className="mb-1 font-semibold text-green-800">
            Anna&apos;s Quick Summary
          </h3>
          <p className="text-sm text-green-700">{demoSummary}</p>
        </div>
      )}

      <h2 className="mb-2 text-xl font-bold">Get Your Full Results</h2>
      <p className="mb-6 text-muted-foreground">
        Enter your details to receive your demo report via SMS.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Smith" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="john@company.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} type="tel" placeholder="+1 (555) 123-4567" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Acme Delivery Co" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Sending..." : "Send My Results"}
          </Button>
        </form>
      </Form>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        By submitting, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  )
}
