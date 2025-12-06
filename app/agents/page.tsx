"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Star } from "lucide-react"

const agents = [
  {
    id: 1,
    name: "Rahman Sahib",
    role: "Senior Real Estate Agent",
    experience: "12+ years",
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Property Specialist",
    experience: "8+ years",
    rating: 4.9,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Commercial Agent",
    experience: "10+ years",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Emma Williams",
    role: "Luxury Properties",
    experience: "9+ years",
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
]

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Agents</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced real estate professionals dedicated to helping you find your perfect property.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={agent.image || "/placeholder.svg"} alt={agent.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{agent.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{agent.role}</p>
                <p className="text-xs text-gray-500 mb-3">{agent.experience} experience</p>

                <div className="flex items-center gap-1 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(agent.rating) ? "fill-[#a01b5a] text-[#a01b5a]" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">
                    {agent.rating} ({agent.reviews})
                  </span>
                </div>

                <button className="w-full bg-[#701a3a] text-white py-2 rounded-lg hover:bg-[#5a1630] transition-colors text-sm font-medium">
                  Contact Agent
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
