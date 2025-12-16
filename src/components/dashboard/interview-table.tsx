"use client"

import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Eye, ChevronRight } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { Interview } from "@/types"

interface InterviewTableProps {
  interviews: Interview[]
}

const statusColors: Record<string, "default" | "secondary" | "success" | "destructive"> = {
  pending: "secondary",
  in_progress: "default",
  completed: "success",
  failed: "destructive",
}

export function InterviewTable({ interviews }: InterviewTableProps) {
  if (interviews.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center">
        <p className="text-muted-foreground">No interviews yet</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Share your interview link to start receiving candidates
        </p>
      </div>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Candidate</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Score</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {interviews.map((interview) => (
          <TableRow key={interview.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {interview.candidateName
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("") || "?"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">
                    {interview.candidateName || "Unknown"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {interview.candidatePhone}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell>{interview.jobRole?.title}</TableCell>
            <TableCell>
              <Badge variant={statusColors[interview.status]}>
                {interview.status.replace("_", " ")}
              </Badge>
            </TableCell>
            <TableCell>
              {interview.score !== null && interview.score !== undefined ? (
                <span
                  className={
                    interview.score >= 70
                      ? "font-medium text-success"
                      : "text-muted-foreground"
                  }
                >
                  {interview.score}/100
                </span>
              ) : (
                <span className="text-muted-foreground">—</span>
              )}
            </TableCell>
            <TableCell className="text-muted-foreground">
              {interview.completedAt
                ? formatDate(interview.completedAt)
                : formatDate(interview.createdAt)}
            </TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/interviews/${interview.id}`}>
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
