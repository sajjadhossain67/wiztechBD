"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const tabs = [
  { name: "Courses", icon: "📚" },
  { name: "Communities", icon: "👥" },
  { name: "Coaching & Consulting", icon: "🎯" },
  { name: "Merchandise", icon: "🛍️" },
  { name: "Podcasts", icon: "🎙️" },
  { name: "Events", icon: "📅" },
  { name: "Brokerage", icon: "💼" },
]

export default function RevenueSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-pink-100 rounded-full">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Diversify Revenue Stream</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Maximise earnings with limitless revenue streams.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Create and sell courses, consulting services, and communities - with Zero marketing cost and a built-in
            sales network.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === idx ? "bg-primary text-primary-foreground" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#3d1a2f] rounded-3xl overflow-hidden p-8 md:p-12">
          <div className="text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Courses</h3>
            <p className="text-gray-300 mb-4">Turn your knowledge into structured, sellable products.</p>
            <p className="text-gray-300 mb-6">
              Build online, drip, academic, or challenge-based courses with built-in tools for gamification,
              accountability, and engagement.
            </p>
            <p className="text-gray-300 mb-8">
              Every course is optimized to deliver value and generate recurring income.
            </p>
            <Button className="bg-white text-[#3d1a2f] hover:bg-gray-100">Learn More</Button>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img src="/online-course-teaching-instructor.jpg" alt="Course preview" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
