import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type Receita = {
  id: string
  nome: string
  emoji: string
  url: string
}

const receitas: Record<string, Receita> = {
  "sobremesas-zero": {
    id: "sobremesas-zero",
    nome: "Sobremesas Zero Açúcar",
    emoji: "🍰",
    url: "https://drive.google.com/file/d/1DEFVz3tZ6Cv0q_E_oL8C-FneS6oO7vVs/preview",
  },
  "50-sobremesas": {
    id: "50-sobremesas",
    nome: "50 Sobremesas",
    emoji: "🍩",
    url: "https://drive.google.com/file/d/1OHkVrxPmL2o6EtGUUSmbuVvcwjtoWQEg/preview",
  },
  salgadinhos: {
    id: "salgadinhos",
    nome: "Salgadinhos para Vender",
    emoji: "🥟",
    url: "https://drive.google.com/file/d/1ueVfJW2iHaWBQIdk4wQhhAluR-shScrB/preview",
  },
  "50-lanches": {
    id: "50-lanches",
    nome: "50 Lanches",
    emoji: "🥪",
    url: "https://drive.google.com/file/d/1lOygGxSB2bTv1yoX_zCmkOqnV4zJC9Nu/preview",
  },
}

export default async function BibliotecaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const receita = receitas[slug]

  if (!receita) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="px-4 py-6 pb-24 max-w-4xl mx-auto">
        <div className="mb-4 flex items-center justify-between">
          <Button asChild variant="ghost" className="-ml-2">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </Button>

          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span className="text-2xl">{receita.emoji}</span>
            {receita.nome}
          </h2>
        </div>

        <div
          className="bg-card rounded-lg shadow-lg overflow-hidden border-2 border-secondary/20"
          style={{ height: "calc(100vh - 240px)" }}
        >
          <iframe src={receita.url} className="w-full h-full" allow="autoplay" title={receita.nome} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(receitas).map((slug) => ({
    slug,
  }))
}
