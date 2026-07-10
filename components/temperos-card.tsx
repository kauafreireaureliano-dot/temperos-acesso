"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ChevronRight, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const todasTemperosData = [
  {
    id: "tempero-completo",
    nome: "Tempero Completo Coringa",
    emoji: "🌿",
    image: "/tempero-caseiro-potes-ervas-especiarias.jpg",
  },
  {
    id: "tempero-verde",
    nome: "Tempero Verde Tradicional",
    emoji: "🌱",
    image: "/salsinha-cebolinha-coentro-tempero-verde-fresco.jpg",
  },
  {
    id: "tempero-carnes",
    nome: "Tempero para Carnes Vermelhas",
    emoji: "🥩",
    image: "/carne-vermelha-temperada-especiarias-churrasco.jpg",
  },
  {
    id: "tempero-frango",
    nome: "Tempero para Frango",
    emoji: "🍗",
    image: "/frango-dourado-assado-tempero-ervas.jpg",
  },
  {
    id: "tempero-arroz-feijao",
    nome: "Tempero para Arroz e Feijão",
    emoji: "🍚",
    image: "/arroz-feijao-prato-brasileiro-comida-caseira.jpg",
  },
  {
    id: "tempero-peixe",
    nome: "Tempero para Peixe",
    emoji: "🐟",
    image: "/peixe-grelhado-limao-ervas-tempero-fresco.jpg",
  },
  {
    id: "tempero-pizza",
    nome: "Tempero para Pizza",
    emoji: "🍕",
    image: "/pizza-italiana-oregano-manjericao-tomate-queijo.jpg",
  },
  {
    id: "tempero-mexican",
    nome: "Tempero à Mexicana",
    emoji: "🌶️",
    image: "/comida-mexicana-tacos-pimenta-especiarias-colorido.jpg",
  },
  {
    id: "tempero-oriental",
    nome: "Tempero Oriental",
    emoji: "🥢",
    image: "/comida-asiatica-oriental-gengibre-gergelim.jpg",
  },
  {
    id: "tempero-assados",
    nome: "Tempero para Assados",
    emoji: "🍖",
    image: "/carne-assada-forno-dourada-especiarias-rustico.jpg",
  },
  {
    id: "tempero-caldo",
    nome: "Tempero para Caldo",
    emoji: "🍲",
    image: "/caldo-sopa-quente-vapor-legumes-caseiro.jpg",
  },
  {
    id: "tempero-molho",
    nome: "Tempero para Molho de Tomate",
    emoji: "🍅",
    image: "/molho-tomate-manjericao-italiano-panela-caseiro.jpg",
  },
  {
    id: "tempero-legumes",
    nome: "Tempero para Legumes",
    emoji: "🥦",
    image: "/legumes-coloridos-salteados-tempero-ervas-frescos.jpg",
  },
  {
    id: "tempero-costela",
    nome: "Tempero para Costela",
    emoji: "🥓",
    image: "/costela-suina-bovina-assada-dourada-churrasco.jpg",
  },
  {
    id: "tempero-panela",
    nome: "Tempero para Panela de Pressão",
    emoji: "🍲",
    image: "/panela-pressao-cozido-carne-legumes-caseiro.jpg",
  },
  {
    id: "tempero-churrasco",
    nome: "Tempero para Churrasco",
    emoji: "🔥",
    image: "/churrasco-brasileiro-carne-brasa-sal-grosso.jpg",
  },
  {
    id: "tempero-barbecue",
    nome: "Tempero BBQ Caseiro",
    emoji: "🍖",
    image: "/barbecue-americano-costela-defumada-molho.jpg",
  },
  {
    id: "tempero-nordestino",
    nome: "Tempero Nordestino",
    emoji: "☀️",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-grelha",
    nome: "Tempero para Grelha",
    emoji: "🔥",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-portugues",
    nome: "Tempero à Portuguesa",
    emoji: "🇵🇹",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-italiano",
    nome: "Tempero Italiano",
    emoji: "🇮🇹",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-gourmet",
    nome: "Tempero Gourmet Premium",
    emoji: "⭐",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-vegano",
    nome: "Tempero Vegano",
    emoji: "🌱",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-mineiro",
    nome: "Tempero Mineiro",
    emoji: "🥔",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-carne-seca",
    nome: "Tempero para Carne Seca",
    emoji: "🥩",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-refogado",
    nome: "Tempero para Refogado",
    emoji: "🍳",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-frances",
    nome: "Tempero à Francesa",
    emoji: "🥐",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-indiano",
    nome: "Tempero Indiano",
    emoji: "🍛",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-marroquino",
    nome: "Tempero Marroquino",
    emoji: "🏺",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-libanes",
    nome: "Tempero Libanês",
    emoji: "🧆",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-acafrao",
    nome: "Tempero com Açafrão",
    emoji: "🌻",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-defumado",
    nome: "Tempero Defumado",
    emoji: "💨",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-picante",
    nome: "Tempero Picante Extra",
    emoji: "🌶️",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-suave",
    nome: "Tempero Suave",
    emoji: "🤍",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-sal-ervas",
    nome: "Sal de Ervas Premium",
    emoji: "🧂",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-japones",
    nome: "Tempero Japonês",
    emoji: "🍱",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-tailandes",
    nome: "Tempero Tailandês",
    emoji: "🥡",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-turco",
    nome: "Tempero Turco",
    emoji: "🕌",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-grego",
    nome: "Tempero Grego",
    emoji: "🏛️",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-camarao",
    nome: "Tempero para Camarão",
    emoji: "🦐",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-mariscos",
    nome: "Tempero para Mariscos",
    emoji: "🦪",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-porco",
    nome: "Tempero para Porco",
    emoji: "🐷",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-cordeiro",
    nome: "Tempero para Cordeiro",
    emoji: "🐑",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-feijoada",
    nome: "Tempero para Feijoada",
    emoji: "🫘",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-moqueca",
    nome: "Tempero para Moqueca",
    emoji: "🥥",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-strogonoff",
    nome: "Tempero para Strogonoff",
    emoji: "🍄",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-lasanha",
    nome: "Tempero para Lasanha",
    emoji: "🧀",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-risoto",
    nome: "Tempero para Risoto",
    emoji: "🍚",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-cafe",
    nome: "Tempero para Café Especial",
    emoji: "☕",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "tempero-cha",
    nome: "Tempero para Chá Especial",
    emoji: "🍵",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function TemperosCard() {
  const [currentPage, setCurrentPage] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const itemsPerPage = 6

  const filteredItems = todasTemperosData.filter((item) => item.nome.toLowerCase().includes(searchTerm.toLowerCase()))

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  return (
    <Card className="overflow-hidden border-2 border-primary/20 shadow-lg">
      <CardHeader className="bg-gradient-to-br from-primary/10 to-primary/5">
        <CardTitle className="flex items-center gap-2 text-lg">
          <span className="text-xl">🌿</span>
          50 Receitas de Temperos
        </CardTitle>
        <CardDescription className="text-sm">Temperos completos, testados e aprovados</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar tempero..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(0)
            }}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
        </div>

        <div className="space-y-3">
          {currentItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Nenhum tempero encontrado</p>
          ) : (
            currentItems.map((cat) => (
              <Link key={cat.id} href={`/temperos/${cat.id}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer mb-3">
                  <div className="relative h-40 w-full">
                    <Image src={cat.image || "/placeholder.svg"} alt={cat.nome} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl drop-shadow-lg">{cat.emoji}</span>
                        <h3 className="font-bold text-base drop-shadow-lg text-balance">{cat.nome}</h3>
                      </div>
                      <Heart className="w-5 h-5 opacity-80" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="px-4 py-2 rounded-lg bg-primary/10 text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/20 transition-colors text-sm font-medium"
            >
              Anterior
            </button>

            <div className="flex gap-1 flex-wrap justify-center">
              {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
                const pageNum = currentPage < 3 ? i : currentPage - 2 + i
                if (pageNum >= totalPages) return null
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded flex items-center justify-center text-xs font-medium transition-colors ${
                      currentPage === pageNum
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    {pageNum + 1}
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="px-4 py-2 rounded-lg bg-primary/10 text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/20 transition-colors text-sm font-medium flex items-center gap-2"
            >
              Próxima <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
