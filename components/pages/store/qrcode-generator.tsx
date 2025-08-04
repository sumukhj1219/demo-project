"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function QRCodeGenerator() {
  const [assetTag, setAssetTag] = useState("22658")
  const [serialNumber, setSerialNumber] = useState("24829073")

  const handleGenerate = () => {
    console.log("Generating QR for:", { assetTag, serialNumber })
  }

  return (
    <Card className=" w-full mx-auto">
      <CardHeader>
        <CardTitle>QR Code Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="assetTag">Asset Tag</Label>
          <Input
            id="assetTag"
            value={assetTag}
            onChange={(e) => setAssetTag(e.target.value)}
            placeholder="Enter Asset Tag"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="serialNumber">Serial Number</Label>
          <Input
            id="serialNumber"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            placeholder="Enter Serial Number"
          />
        </div>
        <Button className="w-full" onClick={handleGenerate}>
          Generate QR Sticker
        </Button>
      </CardContent>
    </Card>
  )
}
