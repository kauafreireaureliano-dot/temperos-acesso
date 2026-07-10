import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UtensilsCrossed, Sparkles, Clock, TrendingUp } from "lucide-react"

const options = [
  {
    id: "dia-a-dia",
    label: "Para o dia a dia",
    icon: UtensilsCrossed,
    color: "text-orange-600 bg-orange-50",
  },
  {
    id: "complicar",
    label: "Para complicar",
    icon: Sparkles,
    color: "text-blue-600 bg-blue-50",
  },
  {
    id: "ganhar-tempo",
    label: "Para ganhar tempo",
    icon: Clock,
    color: "text-purple-600 bg-purple-50",
  },
  {
    id: "vender",
    label: "Para vender",
    icon: TrendingUp,
    color: "text-green-600 bg-green-50",
  },
]

export function UsageOptionsCard() {
  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Sparkles className="w-5 h-5 text-accent" />
          Como usar os temperos
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-3">
          {options.map((option) => {
            const Icon = option.icon
            return (
              <Button
                key={option.id}
                variant="outline"
                className="h-auto py-4 flex-col gap-2 hover:border-primary/40 hover:bg-primary/5 transition-all bg-transparent"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${option.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-center leading-tight text-balance">{option.label}</span>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
