"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", ActiveTickets: 222, ResolvedTickets: 150 },
  { date: "2024-04-02", ActiveTickets: 97, ResolvedTickets: 180 },
  { date: "2024-04-03", ActiveTickets: 167, ResolvedTickets: 120 },
  { date: "2024-04-04", ActiveTickets: 242, ResolvedTickets: 260 },
  { date: "2024-04-05", ActiveTickets: 373, ResolvedTickets: 290 },
  { date: "2024-04-06", ActiveTickets: 301, ResolvedTickets: 340 },
  { date: "2024-04-07", ActiveTickets: 245, ResolvedTickets: 180 },
  { date: "2024-04-08", ActiveTickets: 409, ResolvedTickets: 320 },
  { date: "2024-04-09", ActiveTickets: 59, ResolvedTickets: 110 },
  { date: "2024-04-10", ActiveTickets: 261, ResolvedTickets: 190 },
  { date: "2024-04-11", ActiveTickets: 327, ResolvedTickets: 350 },
  { date: "2024-04-12", ActiveTickets: 292, ResolvedTickets: 210 },
  { date: "2024-04-13", ActiveTickets: 342, ResolvedTickets: 380 },
  { date: "2024-04-14", ActiveTickets: 137, ResolvedTickets: 220 },
  { date: "2024-04-15", ActiveTickets: 120, ResolvedTickets: 170 },
  { date: "2024-04-16", ActiveTickets: 138, ResolvedTickets: 190 },
  { date: "2024-04-17", ActiveTickets: 446, ResolvedTickets: 360 },
  { date: "2024-04-18", ActiveTickets: 364, ResolvedTickets: 410 },
  { date: "2024-04-19", ActiveTickets: 243, ResolvedTickets: 180 },
  { date: "2024-04-20", ActiveTickets: 89, ResolvedTickets: 150 },
  { date: "2024-04-21", ActiveTickets: 137, ResolvedTickets: 200 },
  { date: "2024-04-22", ActiveTickets: 224, ResolvedTickets: 170 },
  { date: "2024-04-23", ActiveTickets: 138, ResolvedTickets: 230 },
  { date: "2024-04-24", ActiveTickets: 387, ResolvedTickets: 290 },
  { date: "2024-04-25", ActiveTickets: 215, ResolvedTickets: 250 },
  { date: "2024-04-26", ActiveTickets: 75, ResolvedTickets: 130 },
  { date: "2024-04-27", ActiveTickets: 383, ResolvedTickets: 420 },
  { date: "2024-04-28", ActiveTickets: 122, ResolvedTickets: 180 },
  { date: "2024-04-29", ActiveTickets: 315, ResolvedTickets: 240 },
  { date: "2024-04-30", ActiveTickets: 454, ResolvedTickets: 380 },
  { date: "2024-05-01", ActiveTickets: 165, ResolvedTickets: 220 },
  { date: "2024-05-02", ActiveTickets: 293, ResolvedTickets: 310 },
  { date: "2024-05-03", ActiveTickets: 247, ResolvedTickets: 190 },
  { date: "2024-05-04", ActiveTickets: 385, ResolvedTickets: 420 },
  { date: "2024-05-05", ActiveTickets: 481, ResolvedTickets: 390 },
  { date: "2024-05-06", ActiveTickets: 498, ResolvedTickets: 520 },
  { date: "2024-05-07", ActiveTickets: 388, ResolvedTickets: 300 },
  { date: "2024-05-08", ActiveTickets: 149, ResolvedTickets: 210 },
  { date: "2024-05-09", ActiveTickets: 227, ResolvedTickets: 180 },
  { date: "2024-05-10", ActiveTickets: 293, ResolvedTickets: 330 },
  { date: "2024-05-11", ActiveTickets: 335, ResolvedTickets: 270 },
  { date: "2024-05-12", ActiveTickets: 197, ResolvedTickets: 240 },
  { date: "2024-05-13", ActiveTickets: 197, ResolvedTickets: 160 },
  { date: "2024-05-14", ActiveTickets: 448, ResolvedTickets: 490 },
  { date: "2024-05-15", ActiveTickets: 473, ResolvedTickets: 380 },
  { date: "2024-05-16", ActiveTickets: 338, ResolvedTickets: 400 },
  { date: "2024-05-17", ActiveTickets: 499, ResolvedTickets: 420 },
  { date: "2024-05-18", ActiveTickets: 315, ResolvedTickets: 350 },
  { date: "2024-05-19", ActiveTickets: 235, ResolvedTickets: 180 },
  { date: "2024-05-20", ActiveTickets: 177, ResolvedTickets: 230 },
  { date: "2024-05-21", ActiveTickets: 82, ResolvedTickets: 140 },
  { date: "2024-05-22", ActiveTickets: 81, ResolvedTickets: 120 },
  { date: "2024-05-23", ActiveTickets: 252, ResolvedTickets: 290 },
  { date: "2024-05-24", ActiveTickets: 294, ResolvedTickets: 220 },
  { date: "2024-05-25", ActiveTickets: 201, ResolvedTickets: 250 },
  { date: "2024-05-26", ActiveTickets: 213, ResolvedTickets: 170 },
  { date: "2024-05-27", ActiveTickets: 420, ResolvedTickets: 460 },
  { date: "2024-05-28", ActiveTickets: 233, ResolvedTickets: 190 },
  { date: "2024-05-29", ActiveTickets: 78, ResolvedTickets: 130 },
  { date: "2024-05-30", ActiveTickets: 340, ResolvedTickets: 280 },
  { date: "2024-05-31", ActiveTickets: 178, ResolvedTickets: 230 },
  { date: "2024-06-01", ActiveTickets: 178, ResolvedTickets: 200 },
  { date: "2024-06-02", ActiveTickets: 470, ResolvedTickets: 410 },
  { date: "2024-06-03", ActiveTickets: 103, ResolvedTickets: 160 },
  { date: "2024-06-04", ActiveTickets: 439, ResolvedTickets: 380 },
  { date: "2024-06-05", ActiveTickets: 88, ResolvedTickets: 140 },
  { date: "2024-06-06", ActiveTickets: 294, ResolvedTickets: 250 },
  { date: "2024-06-07", ActiveTickets: 323, ResolvedTickets: 370 },
  { date: "2024-06-08", ActiveTickets: 385, ResolvedTickets: 320 },
  { date: "2024-06-09", ActiveTickets: 438, ResolvedTickets: 480 },
  { date: "2024-06-10", ActiveTickets: 155, ResolvedTickets: 200 },
  { date: "2024-06-11", ActiveTickets: 92, ResolvedTickets: 150 },
  { date: "2024-06-12", ActiveTickets: 492, ResolvedTickets: 420 },
  { date: "2024-06-13", ActiveTickets: 81, ResolvedTickets: 130 },
  { date: "2024-06-14", ActiveTickets: 426, ResolvedTickets: 380 },
  { date: "2024-06-15", ActiveTickets: 307, ResolvedTickets: 350 },
  { date: "2024-06-16", ActiveTickets: 371, ResolvedTickets: 310 },
  { date: "2024-06-17", ActiveTickets: 475, ResolvedTickets: 520 },
  { date: "2024-06-18", ActiveTickets: 107, ResolvedTickets: 170 },
  { date: "2024-06-19", ActiveTickets: 341, ResolvedTickets: 290 },
  { date: "2024-06-20", ActiveTickets: 408, ResolvedTickets: 450 },
  { date: "2024-06-21", ActiveTickets: 169, ResolvedTickets: 210 },
  { date: "2024-06-22", ActiveTickets: 317, ResolvedTickets: 270 },
  { date: "2024-06-23", ActiveTickets: 480, ResolvedTickets: 530 },
  { date: "2024-06-24", ActiveTickets: 132, ResolvedTickets: 180 },
  { date: "2024-06-25", ActiveTickets: 141, ResolvedTickets: 190 },
  { date: "2024-06-26", ActiveTickets: 434, ResolvedTickets: 380 },
  { date: "2024-06-27", ActiveTickets: 448, ResolvedTickets: 490 },
  { date: "2024-06-28", ActiveTickets: 149, ResolvedTickets: 200 },
  { date: "2024-06-29", ActiveTickets: 103, ResolvedTickets: 160 },
  { date: "2024-06-30", ActiveTickets: 446, ResolvedTickets: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  ActiveTickets: {
    label: "ActiveTickets",
    color: "var(--primary)",
  },
  ResolvedTickets: {
    label: "ResolvedTickets",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isResolvedTickets = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isResolvedTickets) {
      setTimeRange("7d")
    }
  }, [isResolvedTickets])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Tickets</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillActiveTickets" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-ActiveTickets)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-ActiveTickets)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillResolvedTickets" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-ResolvedTickets)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-ResolvedTickets)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="ResolvedTickets"
              type="natural"
              fill="url(#fillResolvedTickets)"
              stroke="var(--color-ResolvedTickets)"
              stackId="a"
            />
            <Area
              dataKey="ActiveTickets"
              type="natural"
              fill="url(#fillActiveTickets)"
              stroke="var(--color-ActiveTickets)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
