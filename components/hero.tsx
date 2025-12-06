"use client"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-screen flex items-center py-12 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-0">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">Welcome to Your Next Home</h1>
            <p className="mt-4 text-gray-600 text-lg">
              Browse thousands of properties to buy, sell, or rent with trusted agents.
            </p>
          </div>

          {/* Search Form */}
          <div className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Property Type</label>
                <input
                  type="text"
                  placeholder="Any Type"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#a01b5a]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Price Range</label>
                <input
                  type="text"
                  placeholder="Any Price"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#a01b5a]"
                />
              </div>
            </div>
            <Button className="w-full bg-[#701a3a] hover:bg-[#5a1630]">Search Properties</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-96 md:h-full min-h-96 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/modern-cityscape-through-window.jpg"
            alt="City skyline through window"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
          <p className="absolute top-6 right-6 text-white text-sm md:text-base font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full max-w-xs text-pretty">
            Browse thousands of properties to buy, sell, or rent with trusted agents.
          </p>
        </div>
      </div>
    </section>
  )
}
