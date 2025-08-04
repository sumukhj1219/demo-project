"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
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
    <div className="bg-muted/20 rounded-lg p-4 space-y-2">
      <Badge
        variant={status === "OPEN" ? "destructive" : "secondary"}
        className="text-xs mb-1"
      >
        {status}
      </Badge>
      <h3 className="text-white font-semibold text-sm md:text-base">
        {title}
      </h3>
      <p className="text-xs text-muted-foreground">
        {location} • {machine}
      </p>
      <Badge
        className={cn(
          "mt-2 w-fit text-xs",
          priority === "High" && "bg-red-600",
          priority === "Medium" && "bg-yellow-500",
          priority === "Low" && "bg-green-600"
        )}
      >
        {priority} Priority
      </Badge>
      {action && (
        <Button
          size="sm"
          className={cn(
            "mt-2",
            actionLabel === "Complete" ? "bg-white text-black" : "bg-cyan-500"
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
        <Button variant="default" className="bg-cyan-500 text-black">
          <QrCodeIcon className="mr-2 size-4" /> QR Scanner
        </Button>
        <Button variant="secondary">
          <CameraIcon className="mr-2 size-4" /> Add Service Log
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">My Assigned Tickets</h2>
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
            <h2 className="text-lg font-semibold mb-4">QR Scanner</h2>
            <div className="border border-dashed border-muted-foreground rounded-lg p-6 bg-muted/10 flex flex-col items-center justify-center text-center">
              <CameraIcon className="size-10 text-muted mb-2" />
              <p className="text-sm text-muted-foreground">
                Position QR code within the frame
              </p>
            </div>
            <Button className="mt-4 w-full bg-cyan-500 text-black">
              Simulate QR Scan
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
