// components/NotificationsPanel.tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Bell, Check } from "lucide-react"

const notifications = [
  {
    id: 1,
    icon: <Bell className="text-yellow-500 size-4" />,
    text: "New ticket created: Paper Jam Issue",
    time: "5 minutes ago",
  },
  {
    id: 2,
    icon: <Check className="text-green-500 size-4" />,
    text: "Ticket resolved: Network Connectivity",
    time: "1 hour ago",
  },
]

export default function NotificationsPanel() {
  return (
    <Card className="bg-background border border-border h-fit">
      <CardContent className="p-4 space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
        <div className="space-y-3">
          {notifications.map((n) => (
            <div key={n.id} className="flex items-start gap-3">
              <div className="bg-muted p-2 rounded-md">{n.icon}</div>
              <div>
                <p className="text-sm text-foreground">{n.text}</p>
                <p className="text-xs text-muted-foreground">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
