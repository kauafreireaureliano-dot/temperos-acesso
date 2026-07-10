"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Leaf, Sparkles } from "lucide-react"
import { StorePopup } from "@/components/store-popup"

export function WelcomeScreen() {
  const router = useRouter()
  const [showStorePopup, setShowStorePopup] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center space-y-8 animate-in fade-in duration-1000">
        {/* Decorative floating elements */}
        <div className="relative">
          <div className="absolute -top-8 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -top-4 right-8 w-12 h-12 bg-accent/20 rounded-full blur-xl animate-pulse delay-300"></div>

          {/* Icon */}
          <div className="relative inline-block">
            <div className="w-28 h-28 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto shadow-xl">
              <Leaf className="w-14 h-14 text-primary" strokeWidth={2} />
            </div>
            <Sparkles className="w-6 h-6 text-accent absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl font-serif text-foreground/90 text-balance">Bem-vindo(a) aos</h1>
          <h2 className="text-4xl font-bold text-primary text-balance">Temperos Secretos</h2>
          <div className="inline-block">
            <Leaf className="w-6 h-6 text-accent mx-auto" />
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed text-pretty max-w-md mx-auto">
          Seu acesso foi confirmado com sucesso.
          <br />
          Aqui você vai encontrar temperos simples, práticos e testados, para facilitar sua rotina na cozinha ou te
          ajudar a vender comida.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="w-full max-w-sm h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          onClick={() => setShowStorePopup(true)}
        >
          <Leaf className="w-5 h-5 mr-2" />
          Acessar meus temperos
        </Button>

        <StorePopup open={showStorePopup} onContinue={() => router.push("/home")} />

        {/* Tip */}
        <div className="pt-4">
          <div className="inline-flex items-start gap-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-5 py-4 text-left max-w-md shadow-sm">
            <span className="text-2xl mt-0.5">📱</span>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Dica:</span> adicione à tela inicial do celular
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
