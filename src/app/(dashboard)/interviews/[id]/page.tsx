import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/dashboard/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowLeft, Download, Phone, MapPin, Clock, Star } from "lucide-react"
import { formatDate } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Interview Details - Anna AI Recruiter",
}

// Mock data - would come from API
const mockInterview = {
  id: "int-1",
  candidateName: "John Smith",
  candidatePhone: "+1 (555) 123-4567",
  candidateLocation: "Los Angeles, CA",
  jobRole: { title: "Driver", hourlyWage: 18 },
  status: "completed",
  score: 85,
  durationSeconds: 312,
  completedAt: new Date("2024-12-15T14:30:00"),
  answers: [
    {
      question: "Do you have a valid driver's license?",
      answer: "Yes, I have a valid Class C driver's license with no violations.",
    },
    {
      question: "How many years of driving experience do you have?",
      answer: "I have 5 years of professional driving experience, including 3 years doing delivery work.",
    },
    {
      question: "Are you able to work weekends?",
      answer: "Yes, I'm available to work weekends. I'm flexible with my schedule.",
    },
    {
      question: "Do you have your own reliable transportation?",
      answer: "Yes, I have my own car that I use daily. It's reliable and well-maintained.",
    },
  ],
  transcript: `Anna: Hi! Thanks for calling. I'm Anna, an AI assistant helping with driver recruitment. I'll ask you a few quick questions to learn more about your qualifications. This should only take about 5 minutes. Ready to get started?

John: Yes, I'm ready.

Anna: Great! First, do you have a valid driver's license?

John: Yes, I have a valid Class C driver's license with no violations.

Anna: Perfect! How many years of driving experience do you have?

John: I have 5 years of professional driving experience, including 3 years doing delivery work.

Anna: That's excellent experience. Are you able to work weekends?

John: Yes, I'm available to work weekends. I'm flexible with my schedule.

Anna: Good to know. Last question - do you have your own reliable transportation?

John: Yes, I have my own car that I use daily. It's reliable and well-maintained.

Anna: Wonderful! Based on your responses, you sound like a great fit. Someone from the team will be in touch soon. Thanks for your time today!

John: Thank you!`,
  recordingUrl: "/recordings/int-1.mp3",
}

export default function InterviewDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const interview = mockInterview

  return (
    <div className="flex flex-col">
      <Header title="Interview Details" />

      <div className="p-6">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/interviews">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Interviews
          </Link>
        </Button>

        {/* Header Card */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold">{interview.candidateName}</h1>
                <p className="text-muted-foreground">
                  {interview.jobRole.title} • ${interview.jobRole.hourlyWage}/hr
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    {interview.candidatePhone}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {interview.candidateLocation}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {Math.floor(interview.durationSeconds / 60)}:
                    {(interview.durationSeconds % 60).toString().padStart(2, "0")}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="text-2xl font-bold">{interview.score}</span>
                    <span className="text-muted-foreground">/100</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Qualification Score
                  </p>
                </div>
                <Badge
                  variant={interview.score >= 70 ? "success" : "secondary"}
                  className="h-8"
                >
                  {interview.score >= 70 ? "Qualified" : "Review"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Screening Answers */}
          <Card>
            <CardHeader>
              <CardTitle>Screening Answers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {interview.answers.map((qa, i) => (
                  <div key={i} className="border-b pb-4 last:border-0 last:pb-0">
                    <p className="text-sm font-medium">{qa.question}</p>
                    <p className="mt-1 text-muted-foreground">{qa.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recording */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recording</CardTitle>
              </CardHeader>
              <CardContent>
                <audio
                  controls
                  src={interview.recordingUrl}
                  className="w-full"
                />
                <Button variant="outline" className="mt-4 w-full" asChild>
                  <a href={interview.recordingUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Recording
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Transcript */}
            <Card>
              <CardHeader>
                <CardTitle>Full Transcript</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="transcript">
                    <AccordionTrigger>View Transcript</AccordionTrigger>
                    <AccordionContent>
                      <pre className="max-h-96 overflow-y-auto whitespace-pre-wrap rounded-lg bg-muted p-4 text-sm">
                        {interview.transcript}
                      </pre>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
