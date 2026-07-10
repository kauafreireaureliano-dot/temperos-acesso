"use client"

import { Gift } from "lucide-react"

export function WhatsAppGiftButton() {
  const phoneNumber = "5587991323959"
  const message = encodeURIComponent("Oi, vim dos Tempeiros Secretos e quero receber a receita grátis.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
    >
      <Gift className="w-6 h-6" />
      <span>Receber uma receita grátis no WhatsApp</span>
    </a>
  )
}
