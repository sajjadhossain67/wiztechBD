"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PropertyCard from "@/components/property-card"
import PropertyFilters from "@/components/property-filters"
import { ChevronLeft, ChevronRight } from "lucide-react"

const properties = [
  {
    id: 1,
    name: "Maple Grove Garden House",
    price: "$1,200",
    period: "/month",
    location: "New York, USA",
    beds: 4,
    baths: 3,
    sqft: 3500,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560070132-3ca02d1cb4da?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Sunset Towers Eksubai",
    price: "$1,500",
    period: "/month",
    location: "New York, USA",
    beds: 3,
    baths: 2,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Riverside Retreat",
    price: "$1,100",
    period: "/month",
    location: "New York, USA",
    beds: 4,
    baths: 3,
    sqft: 3500,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 4,
    name: "Golden Meadows",
    price: "$900",
    period: "/month",
    location: "New York, USA",
    beds: 2,
    baths: 2,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=500&h=400&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 5,
    name: "Ocean Sea Breeze",
    price: "$2,000",
    period: "/month",
    location: "New York, USA",
    beds: 5,
    baths: 3,
    sqft: 4200,
    image: "https://images.unsplash.com/photo-1560070132-3ca02d1cb4da?w=500&h=400&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1560070132-3ca02d1cb4da?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 6,
    name: "The Urban Nest Lofts",
    price: "$1,350",
    period: "/month",
    location: "New York, USA",
    beds: 3,
    baths: 2,
    sqft: 2500,
    image: "https://images.unsplash.com/photo-1576070881393-52b1f0643b68?w=500&h=400&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1576070881393-52b1f0643b68?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
    ],
  },
]

export default function RentPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(properties.length / itemsPerPage)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <PropertyFilters />
          </div>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Properties to Rent</h1>
                <p className="text-gray-600">Showing result: (12)</p>
              </div>
              <select className="px-4 py-2 border border-gray-200 rounded-lg">
                <option>Sort By</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {properties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((property) => (
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
                <span className="px-2 flex items-center">...</span>
              </div>

              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
