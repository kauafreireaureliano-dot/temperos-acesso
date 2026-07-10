import { Card, CardContent } from "@/components/ui/card"
import { Leaf } from "lucide-react"

export function IntroCard() {
  return (
    <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
      <CardContent className="p-6 text-center space-y-4">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
          <Leaf className="w-7 h-7 text-primary" />
        </div>

        <h3 className="text-xl font-bold text-foreground">Introdução</h3>

        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
          Cozinhar bem não é ter ingredientes caros.
          <br />É ter temperos prontos, bem feitos e na hora certa.
        </p>

        <p className="text-sm font-medium text-foreground pt-2">
          Esses temperos foram pensados para facilitar sua vida.
        </p>
      </CardContent>
    </Card>
  )
}
