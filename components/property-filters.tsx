"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function PropertyFilters() {
  const [expandedSections, setExpandedSections] = useState({
    preference: true,
    budget: true,
    suburb: true,
    type: true,
    amenities: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="space-y-6">
      {/* Property Preference */}
      <div>
        <button
          onClick={() => toggleSection("preference")}
          className="flex items-center justify-between w-full mb-4 hover:text-[#a01b5a]"
        >
          <h3 className="font-bold text-lg">Property Preference</h3>
          <ChevronDown
            size={20}
            className={`transition-transform ${expandedSections.preference ? "rotate-180" : ""}`}
          />
        </button>
        {expandedSections.preference && (
          <div className="space-y-3 pl-2">
            <button className="text-gray-600 hover:text-[#a01b5a]">Reset Filter</button>
          </div>
        )}
      </div>

      {/* Rent Budget */}
      <div>
        <button
          onClick={() => toggleSection("budget")}
          className="flex items-center justify-between w-full mb-4 hover:text-[#a01b5a]"
        >
          <h3 className="font-bold text-lg">Rent Budget</h3>
          <ChevronDown size={20} className={`transition-transform ${expandedSections.budget ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.budget && (
          <div className="space-y-4 pl-2">
            <input type="range" min="0" max="100" className="w-full" />
            <div className="flex gap-4 text-sm">
              <div>
                <p className="text-gray-600">Minimum</p>
                <p className="font-bold">$300</p>
              </div>
              <div>
                <p className="text-gray-600">Maximum</p>
                <p className="font-bold">$610000</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suburb */}
      <div>
        <button
          onClick={() => toggleSection("suburb")}
          className="flex items-center justify-between w-full mb-4 hover:text-[#a01b5a]"
        >
          <h3 className="font-bold text-lg">Suburb</h3>
          <ChevronDown size={20} className={`transition-transform ${expandedSections.suburb ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.suburb && (
          <div className="space-y-2 pl-2">
            {["Eshelby Drive, Cranbrook", "2-6 Eshelby Drive", "59/3 Eshelby Drive Cannoweale"].map((suburb, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-gray-600">{suburb}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Property Type */}
      <div>
        <button
          onClick={() => toggleSection("type")}
          className="flex items-center justify-between w-full mb-4 hover:text-[#a01b5a]"
        >
          <h3 className="font-bold text-lg">Property Type</h3>
          <ChevronDown size={20} className={`transition-transform ${expandedSections.type ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.type && (
          <div className="space-y-2 pl-2">
            {["House", "Land", "Appartment", "Town House", "Villa", "Acreage"].map((type, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-gray-600">{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Amenities */}
      <div>
        <button
          onClick={() => toggleSection("amenities")}
          className="flex items-center justify-between w-full mb-4 hover:text-[#a01b5a]"
        >
          <h3 className="font-bold text-lg">Amenities</h3>
          <ChevronDown size={20} className={`transition-transform ${expandedSections.amenities ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.amenities && (
          <div className="space-y-2 pl-2">
            {["Pet-friendly", "Parking", "Private Pool", "Gym"].map((amenity, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input type="checkbox" className="rounded" defaultChecked={idx === 2} />
                <span className="text-sm text-gray-600">{amenity}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
