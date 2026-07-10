import { Header } from "@/components/header"
import { IntroCard } from "@/components/intro-card"
import { UsageOptionsCard } from "@/components/usage-options-card"
import { TemperosCard } from "@/components/temperos-card"
import { WhatsAppCard } from "@/components/whatsapp-card"
import { BibliotecaCard } from "@/components/biblioteca-card"
import { FaithCard } from "@/components/faith-card"
import { Footer } from "@/components/footer"
import { WhatsAppGiftButton } from "@/components/whatsapp-gift-button"
import { CustomRecipeRequest } from "@/components/custom-recipe-request"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="px-4 py-6 pb-24 max-w-2xl mx-auto space-y-6">
        <WhatsAppGiftButton />

        <IntroCard />
        <UsageOptionsCard />
        <TemperosCard />

        <CustomRecipeRequest />

        <WhatsAppCard />
        <BibliotecaCard />
        <FaithCard />
      </main>

      <Footer />
    </div>
  )
}
