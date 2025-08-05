"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"

export function QRCodeGenerator() {
  const [showQR, setShowQR] = useState(false)
  const [currentURL, setCurrentURL] = useState("")

  const handleGenerateQR = () => {
    setCurrentURL(window.location.href)
    setShowQR(true)
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>QR Code Tag</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border border-muted p-4 rounded-lg flex flex-col md:flex-row justify-between gap-4">
          {/* Instruction Block (always visible) */}
          <div className="flex-1 space-y-2 text-right rtl">
            {/* Logo */}
            <div>
              <h1 className="text-2xl font-bold text-blue-900 tracking-wide">KDT</h1>
              <p className="text-xs text-muted-foreground">
                KUWAIT DIGITAL TECHNOLOGIES <br />
                كويت ديجتال تكنولوجيز
              </p>
            </div>

            {/* Maintenance Callout */}
            <div className="bg-gray-200 p-2 rounded text-blue-800 font-semibold text-sm">
              فتح كاميرا الهاتف <br />
              لطلب الصيانة
            </div>

            {/* Contact Info */}
            <div className="text-sm">
              <p className="text-muted-foreground">
                لمزيد من التفاصيل يرجى الاتصال:
              </p>
              <p className="font-bold text-black">2221 0500</p>
              <p className="text-muted-foreground text-xs">شكاوى وزارة الداخلية - 24829073</p>
            </div>
          </div>

          {/* QR Block */}
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="font-semibold">TAG : 7513</p>

            {showQR ? (
              <QRCodeSVG value={currentURL} size={128} />
            ) : (
              <div className="w-[128px] h-[128px] border border-dashed border-gray-300 flex items-center justify-center text-xs text-muted-foreground">
                QR not generated
              </div>
            )}

            <div className="text-xs text-muted-foreground mt-2 text-right rtl">
              <p>رقم العقد : 102/2023.2024</p>
              <p>تاريخ العقد : من 09/08/2023</p>
              <p>الى 08/08/2025</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <Button className="w-full mt-4" onClick={handleGenerateQR}>
          Generate QR Code
        </Button>
      </CardContent>
    </Card>
  )
}
