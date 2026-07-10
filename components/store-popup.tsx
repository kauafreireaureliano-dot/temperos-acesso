"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"

type StorePopupProps = {
  open: boolean
  onContinue: () => void
}

const produtos = [
  {
    nome: "Churrasqueira",
    imagem: "https://http2.mlstatic.com/D_Q_NP_873564-MLA99503984024_112025-F.webp",
    descricao: "Para preparar aquele churrasco perfeito com os temperos certos",
    url: "https://meli.la/1iPZaQq",
  },
  {
    nome: "Kit Churrasco",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_926310-MLB109770365017_032026-O.webp",
    descricao: "Kit completo para o preparo do dia a dia no churrasco",
    url: "https://meli.la/2y2HThr",
  },
]

export function StorePopup({ open, onContinue }: StorePopupProps) {
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md" showCloseButton={false} onEscapeKeyDown={(e) => e.preventDefault()} onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Equipamentos recomendados
          </DialogTitle>
          <DialogDescription>
            Antes de acessar seus temperos, dá uma olhada nesses itens que separamos pra você
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          {produtos.map((produto) => (
            <a
              key={produto.nome}
              href={produto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-md transition-all duration-200"
            >
              <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-white">
                <Image src={produto.imagem} alt={produto.nome} fill className="object-contain" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-foreground">{produto.nome}</p>
                <p className="text-sm text-muted-foreground text-pretty">{produto.descricao}</p>
              </div>
            </a>
          ))}
        </div>

        <Button size="lg" className="w-full h-12 text-base font-semibold" onClick={onContinue}>
          Ver meus temperos
        </Button>
      </DialogContent>
    </Dialog>
  )
}
