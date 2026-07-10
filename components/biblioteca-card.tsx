import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const receitas = [
  {
    id: "sobremesas-zero",
    nome: "Sobremesas Zero Açúcar",
    emoji: "🍰",
    url: "https://drive.google.com/file/d/1DEFVz3tZ6Cv0q_E_oL8C-FneS6oO7vVs/view",
    image: "/sugar-free-desserts-healthy-sweets.jpg",
  },
  {
    id: "50-sobremesas",
    nome: "50 Sobremesas",
    emoji: "🍩",
    url: "https://drive.google.com/file/d/1OHkVrxPmL2o6EtGUUSmbuVvcwjtoWQEg/view",
    image: "/variety-desserts-cakes-pastries-sweets.jpg",
  },
  {
    id: "salgadinhos",
    nome: "Salgadinhos para Vender",
    emoji: "🥟",
    url: "https://drive.google.com/file/d/1ueVfJW2iHaWBQIdk4wQhhAluR-shScrB/view",
    image: "/savory-snacks-pastries-empanadas-golden.jpg",
  },
  {
    id: "50-lanches",
    nome: "50 Lanches",
    emoji: "🥪",
    url: "https://drive.google.com/file/d/1lOygGxSB2bTv1yoX_zCmkOqnV4zJC9Nu/view",
    image: "/sandwiches-burgers-snacks-variety.jpg",
  },
]

export function BibliotecaCard() {
  return (
    <Card className="overflow-hidden border-2 border-secondary/30 shadow-lg">
      <CardHeader className="bg-gradient-to-br from-secondary/10 to-secondary/5">
        <CardTitle className="flex items-center gap-2 text-xl">
          <span className="text-2xl">📚</span>
          Biblioteca Premium de Receitas
        </CardTitle>
        <CardDescription className="text-base">
          Conteúdos extras selecionados para quem quer ir além do básico
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid gap-3">
          {receitas.map((receita) => (
            <Link key={receita.id} href={`/biblioteca/${receita.id}`}>
              <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                {/* Image */}
                <div className="relative h-32 w-full">
                  <Image src={receita.image || "/placeholder.svg"} alt={receita.nome} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl drop-shadow-lg">{receita.emoji}</span>
                      <h3 className="font-bold text-sm drop-shadow-lg text-balance">{receita.nome}</h3>
                    </div>
                    <BookOpen className="w-4 h-4 opacity-80" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
