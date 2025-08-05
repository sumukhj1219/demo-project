"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CameraIcon, QrCodeIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const TicketCard = ({
  status,
  title,
  location,
  machine,
  priority,
  action,
  actionLabel,
}: {
  status: "OPEN" | "IN PROGRESS"
  title: string
  location: string
  machine: string
  priority: "Low" | "Medium" | "High"
  action?: () => void
  actionLabel?: string
}) => {
  return (
    <div className="bg-muted rounded-lg p-4 space-y-2">
      <Badge
        variant={status === "OPEN" ? "destructive" : "secondary"}
        className="text-xs mb-1"
      >
        {status}
      </Badge>
      <h3 className="text-foreground font-semibold text-sm md:text-base">
        {title}
      </h3>
      <p className="text-xs text-muted-foreground">
        {location} • {machine}
      </p>
      <Badge
        className={cn(
          "mt-2 w-fit text-xs",
          priority === "High" && "bg-destructive text-destructive-foreground",
          priority === "Medium" && "bg-warning text-warning-foreground",
          priority === "Low" && "bg-success text-success-foreground"
        )}
      >
        {priority} Priority
      </Badge>
      {action && (
        <Button
          size="sm"
          className={cn(
            "mt-2",
            actionLabel === "Complete"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          )}
          onClick={action}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 flex flex-col gap-6 bg-background min-h-screen">
      <div className="flex gap-2">
        <Button variant="default">
          <QrCodeIcon className="mr-2 size-4" /> QR Scanner
        </Button>
        <Button variant="secondary">
          <CameraIcon className="mr-2 size-4" /> Add Service Log
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-foreground">
              My Assigned Tickets
            </h2>
            <div className="space-y-4">
              <TicketCard
                status="OPEN"
                title="Paper Jam Issue"
                location="Al-Tijari Bank"
                machine="Canon imageRUNNER C3226i"
                priority="Medium"
                actionLabel="Update"
              />
              <TicketCard
                status="IN PROGRESS"
                title="Black Toner Replacement"
                location="Kuwait Airways"
                machine="HP LaserJet Enterprise"
                priority="High"
                actionLabel="Complete"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-foreground">
              QR Scanner
            </h2>
            <div className="border border-dashed border-muted rounded-lg p-6 bg-muted flex flex-col items-center justify-center text-center">
              <CameraIcon className="size-10 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                Position QR code within the frame
              </p>
            </div>
            <Button className="mt-4 w-full" variant="default">
              Simulate QR Scan
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
