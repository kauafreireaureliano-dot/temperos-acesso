import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function WhatsAppCard() {
  return (
    <Card className="overflow-hidden border-2 border-accent/30 shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src="/whatsapp-group-community-cooking-recipes.jpg"
          alt="Grupo VIP de Receitas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <div className="bg-accent/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <MessageCircle className="h-4 w-4 text-accent-foreground" />
            <span className="text-sm font-bold text-accent-foreground">VIP</span>
          </div>
        </div>
      </div>

      <CardHeader className="bg-gradient-to-br from-accent/10 to-accent/5">
        <CardTitle className="flex items-center gap-2 text-xl">
          <span className="text-2xl">💬</span>
          Grupo VIP de Receitas
        </CardTitle>
        <CardDescription className="text-base">
          Receitas novas, avisos importantes e conteúdos exclusivos direto no WhatsApp
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="bg-accent/5 rounded-lg p-4 mb-4">
          <p className="text-sm text-center text-muted-foreground mb-3">✨ Benefício exclusivo para membros premium</p>
        </div>
        <Button
          asChild
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base font-semibold"
        >
          <a
            href="https://chat.whatsapp.com/LivP8QgRr729fs5VIHYnmg?mode=hqrc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Entrar no Grupo VIP
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
