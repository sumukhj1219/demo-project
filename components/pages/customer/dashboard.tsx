"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Wrench, Package2 } from "lucide-react"

export default function QuickRequestDashboard() {
  const [requestType, setRequestType] = useState("Service")

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-muted min-h-screen">

      {/* Left Side - Devices */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">My Devices</h2>

          <div className="bg-card p-4 rounded-lg flex justify-between items-center">
            <div>
              <Badge variant="outline" className="text-teal-700 border-teal-300 bg-teal-100">ACTIVE</Badge>
              <h3 className="text-base font-semibold mt-2">Canon imageRUNNER C3226i</h3>
              <p className="text-sm text-muted-foreground">Asset: 22658 • Serial: 24829073</p>
              <p className="text-sm text-muted-foreground">Location: Head Office - Floor 2</p>
            </div>
            <Button variant="outline">View Details</Button>
          </div>
        </CardContent>
      </Card>

      {/* Right Side - Quick Request */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Quick Request</h2>

          <div className="flex gap-2">
            <Button
              variant={requestType === "Service" ? "default" : "outline"}
              className="flex items-center gap-2"
              onClick={() => setRequestType("Service")}
            >
              <Wrench className="w-4 h-4" /> Service
            </Button>
            <Button
              variant={requestType === "Consumable" ? "default" : "outline"}
              className="flex items-center gap-2"
              onClick={() => setRequestType("Consumable")}
            >
              <Package2 className="w-4 h-4" /> Consumable
            </Button>
          </div>

          <div className="space-y-2">
            <label htmlFor="issue-type" className="text-sm font-medium">Issue Type</label>
            <Select defaultValue="Paper Jam">
              <SelectTrigger id="issue-type">
                <SelectValue placeholder="Select an issue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Paper Jam">Paper Jam</SelectItem>
                <SelectItem value="Toner Low">Toner Low</SelectItem>
                <SelectItem value="Connectivity">Connectivity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">Description</label>
            <Textarea id="description" placeholder="Describe the issue..." />
          </div>

          <Button className="w-full mt-2">Submit Service Request</Button>
        </CardContent>
      </Card>
    </div>
  )
}
