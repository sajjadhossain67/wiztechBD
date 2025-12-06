"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Bed, Bath, Maximize2 } from "lucide-react"
import ImageGalleryModal from "./image-gallery-modal"

interface Property {
  id: number
  name: string
  price: string
  period: string
  location: string
  beds: number
  baths: number
  sqft: number
  image: string
  galleryImages?: string[]
}

export default function PropertyCard({ property }: { property: Property }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  // Use gallery images if available, otherwise create array with main image
  const images = property.galleryImages || [property.image]

  return (
    <>
      <div className="group cursor-pointer">
        <div
          className="relative h-64 rounded-xl overflow-hidden mb-4 bg-gray-200"
          onClick={() => setIsGalleryOpen(true)}
        >
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <button
            className="absolute top-3 right-3 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <h3 className="font-bold text-lg mb-2 group-hover:text-[#a01b5a] transition-colors">{property.name}</h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-[#701a3a]">{property.price}</span>
          <span className="text-gray-600 text-sm">{property.period}</span>
          <span className="text-gray-400 text-sm">•</span>
          <span className="text-gray-600 text-sm">{property.location}</span>
        </div>

        <div className="flex gap-6 pt-3 border-t border-gray-200">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Bed size={16} />
            <span>Bed-{property.beds}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Bath size={16} />
            <span>Bathroom-{property.baths}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Maximize2 size={16} />
            <span>{property.sqft}sqft</span>
          </div>
        </div>
      </div>

      <ImageGalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} images={images} />
    </>
  )
}
