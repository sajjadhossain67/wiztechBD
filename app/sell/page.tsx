"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PropertyCard from "@/components/property-card"
import PropertyFilters from "@/components/property-filters"
import { Zap, BarChart3, Calendar, ChevronLeft, ChevronRight } from "lucide-react"

const featuredProperties = [
  {
    id: 1,
    name: "Modern City Apartment",
    price: "$450,000",
    period: "",
    location: "New York, USA",
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Luxury Villa with Garden",
    price: "$750,000",
    period: "",
    location: "New York, USA",
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Cozy Studio Downtown",
    price: "$250,000",
    period: "",
    location: "New York, USA",
    beds: 1,
    baths: 1,
    sqft: 600,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 4,
    name: "Penthouse with Terrace",
    price: "$1,200,000",
    period: "",
    location: "New York, USA",
    beds: 4,
    baths: 3,
    sqft: 3500,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=500&h=400&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 5,
    name: "Beachfront Family Home",
    price: "$650,000",
    period: "",
    location: "Miami, USA",
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1560070132-3ca02d1cb4da?w=500&h=400&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1560070132-3ca02d1cb4da?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 6,
    name: "Historic Brownstone",
    price: "$850,000",
    period: "",
    location: "New York, USA",
    beds: 4,
    baths: 2,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1576070881393-52b1f0643b68?w=500&h=400&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1576070881393-52b1f0643b68?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    ],
  },
]

export default function SellPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(featuredProperties.length / itemsPerPage)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sell Your Property</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            List your property with WiztecBD and reach thousands of potential buyers. Get your property sold faster with
            our expert support.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#701a3a] to-[#a01b5a] rounded-lg p-8 md:p-12 text-white mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to sell your property?</h2>
              <p className="text-lg opacity-90 mb-6">
                Join thousands of successful sellers who have found their buyers through WiztecBD.
              </p>
              <button className="bg-white text-[#701a3a] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                List Property Now
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-bold">Fast Listing</h3>
                  <p className="text-sm opacity-90">Get your property live in minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-bold">Maximum Exposure</h3>
                  <p className="text-sm opacity-90">Reach thousands of potential buyers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-bold">24/7 Support</h3>
                  <p className="text-sm opacity-90">Expert guidance throughout the process</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "List Property", description: "Add your property details and photos" },
              { step: 2, title: "Reach Buyers", description: "Connect with interested buyers instantly" },
              { step: 3, title: "Schedule Tours", description: "Manage property viewings easily" },
              { step: 4, title: "Close Deal", description: "Complete the transaction smoothly" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-[#701a3a] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Properties */}
        <div>
          <h2 className="text-3xl font-bold mb-12">Recently Sold Properties</h2>
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div className="lg:col-span-1">
              <PropertyFilters />
            </div>

            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {featuredProperties
                  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                  .map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <ChevronLeft size={20} />
                  Previous
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`h-10 w-10 rounded-lg font-medium transition-colors ${
                        currentPage === idx + 1
                          ? "bg-[#701a3a] text-white"
                          : "border border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  Next
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
