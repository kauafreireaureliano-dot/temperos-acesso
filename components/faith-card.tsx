import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Image from "next/image"

export function FaithCard() {
  return (
    <Card className="overflow-hidden border-2 border-muted shadow-lg">
      <div className="relative h-56 w-full overflow-hidden">
        <Image src="/peaceful-sunrise-hope-light-faith.jpg" alt="A Melhor Escolha" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-2">
            <span className="text-5xl drop-shadow-2xl">✝️</span>
            <h3 className="text-2xl font-bold drop-shadow-lg">A Melhor Escolha</h3>
          </div>
        </div>
      </div>

      <CardContent className="p-4 space-y-4">
        <div className="bg-muted/20 rounded-lg p-4 space-y-3">
          <p className="text-sm leading-relaxed text-center italic text-pretty">
            "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê
            não pereça, mas tenha a vida eterna."
          </p>
          <p className="text-xs text-center text-muted-foreground font-medium">João 3:16</p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          Talvez você tenha chegado até aqui buscando receitas, mas Deus pode ter algo muito maior para sua vida. Jesus
          é o caminho, a verdade e a vida.
        </p>

        <Button
          asChild
          variant="outline"
          className="w-full h-12 text-base font-semibold border-muted-foreground/20 hover:bg-muted/30 bg-transparent"
        >
          <a
            href="https://wa.me/5587991967122"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Heart className="h-5 w-5" />
            Quero ajuda espiritual
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
