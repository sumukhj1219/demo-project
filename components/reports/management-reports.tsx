"use client"

import { FileText, FileSpreadsheet, FileBarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ManagementReports() {
  return (
    <div className="p-6 w-full space-y-4  rounded-xl shadow">
      <h2 className="text-lg font-semibold text-foreground">Export Reports</h2>
      
      <Button variant="default" className="w-full justify-start gap-2">
        <FileText className="h-4 w-4" />
        Export Analytics PDF
      </Button>
      
      <Button variant="secondary" className="w-full justify-start gap-2">
        <FileSpreadsheet className="h-4 w-4" />
        Export Excel Report
      </Button>
      
      <Button variant="outline" className="w-full justify-start gap-2">
        <FileBarChart2 className="h-4 w-4" />
        Monthly Summary
      </Button>
    </div>
  )
}
