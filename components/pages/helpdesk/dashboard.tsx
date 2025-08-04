"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import React from "react"

const tickets = [
  {
    id: 1,
    title: "Paper Jam Issue",
    subtitle: "Al-Tijari Bank ● Canon imageRUNNER C3226i",
    status: "OPEN",
    priority: "Medium Priority",
  },
  {
    id: 2,
    title: "Black Toner Replacement",
    subtitle: "Kuwait Airways ● HP LaserJet Enterprise M607n",
    status: "IN-PROGRESS",
    priority: "High Priority",
  },
  {
    id: 3,
    title: "Network Connectivity",
    subtitle: "Ministry of Health ● Xerox WorkCentre 6515",
    status: "RESOLVED",
    priority: "High Priority",
  },
]

const statusColors = {
  OPEN: "bg-destructive text-destructive-foreground",
  "IN-PROGRESS": "bg-yellow-400 text-black",
  RESOLVED: "bg-green-600 text-white",
}

const priorityColors = {
  "High Priority": "bg-destructive text-destructive-foreground",
  "Medium Priority": "bg-yellow-500 text-black",
}

export default function TicketsPanel() {
  const [activeTab, setActiveTab] = React.useState("Resolved")

  const tabs = ["All", "Open", "In Progress", "Resolved"]

  const filteredTickets =
    activeTab === "All"
      ? tickets
      : tickets.filter((ticket) =>
          ticket.status.toLowerCase().includes(activeTab.toLowerCase())
        )

  return (
    <Card className="bg-background border border-border">
      <CardContent className="p-4 space-y-4">
        <h2 className="text-lg font-semibold text-foreground">All Tickets</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={tab === activeTab ? "default" : "outline"}
              className={cn("text-sm px-4 py-1.5")}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Tickets */}
        <div className="space-y-4">
          {filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center bg-muted p-4 rounded-lg"
            >
              <div className="space-y-1">
                <Badge className={cn("text-xs px-2", statusColors[ticket.status])}>
                  {ticket.status}
                </Badge>
                <h3 className="text-foreground font-semibold">{ticket.title}</h3>
                <p className="text-sm text-muted-foreground">{ticket.subtitle}</p>
                <Badge className={cn("text-xs mt-1", priorityColors[ticket.priority])}>
                  {ticket.priority}
                </Badge>
              </div>
              <Button variant="secondary" className="mt-4 md:mt-0">
                View
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
