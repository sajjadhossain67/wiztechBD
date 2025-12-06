"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import RevenueSection from "@/components/revenue-section"
import CreatorSection from "@/components/creator-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <RevenueSection />
      <CreatorSection />
      <Footer />
    </main>
  )
}
