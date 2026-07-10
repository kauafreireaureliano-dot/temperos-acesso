"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Search, MessageCircle } from "lucide-react"

export function CustomRecipeRequest() {
  const [recipeRequest, setRecipeRequest] = useState("")

  const phoneNumber = "5587974009597"

  const handleWhatsAppRedirect = () => {
    if (!recipeRequest.trim()) return

    const message = encodeURIComponent(
      `Oi Clara 😊\nEu sou aluno(a) do Temperos Secretos e queria uma receita de: ${recipeRequest}`,
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="overflow-hidden border-2 border-emerald-200 shadow-lg bg-gradient-to-br from-emerald-50/50 to-white">
      <CardHeader className="bg-gradient-to-br from-emerald-100/50 to-emerald-50/30 pb-4">
        <CardTitle className="flex items-center gap-2 text-lg text-emerald-800">
          <span className="text-xl">🔍</span>
          Peça sua receita personalizada
        </CardTitle>
        <CardDescription className="text-emerald-700">Não encontrou o que procura? A Clara te ajuda!</CardDescription>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400" />
          <textarea
            value={recipeRequest}
            onChange={(e) => setRecipeRequest(e.target.value)}
            placeholder="Digite a receita que você precisa (ex: fricassê de frango, molho especial, tempero para costela...)"
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 outline-none resize-none text-base bg-white placeholder:text-emerald-300 min-h-24"
          />
        </div>

        <button
          onClick={handleWhatsAppRedirect}
          disabled={!recipeRequest.trim()}
          className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Pedir essa receita no WhatsApp</span>
        </button>

        <p className="text-xs text-center text-emerald-600/70">Você será redirecionado para o WhatsApp da Clara</p>
      </CardContent>
    </Card>
  )
}
