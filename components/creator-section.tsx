"use client"

import { Button } from "@/components/ui/button"

export default function CreatorSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1628] via-[#3d1a2f] to-[#2a1628] -z-10" />
      <div className="absolute inset-0 opacity-30 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Build For You</p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Built for Creators. Powered for Profit
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          Create and sell courses, consulting services, and communities - with Zero marketing cost and a built-in sales
          network.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-pink-500 flex-1 max-w-xs"
          />
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8">
            Start for Free
          </Button>
        </div>

        <p className="text-gray-400 text-xs">By proceeding you agree to our Platform terms & Privacy Notice</p>

        {/* Stats Box */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <p className="text-white font-bold mb-8">Sell from day one - even with zero audience</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="border-l border-white/10 pl-6">
              <p className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">21,500+</p>
              <p className="text-gray-400 text-sm">CO-SELLERS IN NETWORK</p>
              <p className="text-gray-500 text-xs mt-2">People who can co-promote</p>
            </div>

            <div className="border-l border-white/10 pl-6">
              <p className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">86</p>
              <p className="text-gray-400 text-sm">EXPECTED BUYERS / MONTH</p>
              <p className="text-gray-500 text-xs mt-2">With zero personel audience</p>
            </div>

            <div className="border-l border-white/10 pl-6">
              <p className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">US$774</p>
              <p className="text-gray-400 text-sm">EST. MRR at USD/MO</p>
              <p className="text-gray-500 text-xs mt-2">From membership sales</p>
            </div>

            <div className="border-l border-white/10 pl-6">
              <p className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">US$300</p>
              <p className="text-gray-400 text-sm">EARN W/O A PRODUCT</p>
              <p className="text-gray-500 text-xs mt-2">Just by co-selling</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-amber-100/20 border border-amber-400/30 rounded-lg p-4 text-left">
          <p className="text-amber-100 text-sm">
            <span className="font-semibold">Unlike Kajabi, Teachable, or Skool,</span> Growthubs helps you find and
            convert clients inside the platform so you can sell from day one.
          </p>
        </div>
      </div>
    </section>
  )
}
