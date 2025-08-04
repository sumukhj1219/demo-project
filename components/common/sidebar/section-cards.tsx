import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Trend = 'up' | 'down'

interface CardData {
  description: string
  title: string
  badgeText: string
  badgeTrend: Trend
  footerPrimary: string
  footerSecondary: string
}

interface SectionCardsProps {
  cards: CardData[]
}

export function SectionCards({ cards }: SectionCardsProps) {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {cards.map((card, i) => {
        const Icon = card.badgeTrend === 'up' ? IconTrendingUp : IconTrendingDown

        return (
          <Card key={i} className="@container/card">
            <CardHeader>
              <CardDescription>{card.description}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {card.title}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <Icon />
                  {card.badgeText}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {card.footerPrimary} <Icon className="size-4" />
              </div>
              <div className="text-muted-foreground">{card.footerSecondary}</div>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
