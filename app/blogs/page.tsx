"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, User } from "lucide-react"

const blogs = [
  {
    id: 1,
    title: "5 Tips for First-Time Home Buyers",
    excerpt: "Learn essential strategies to make your first home purchase a success.",
    author: "Rahman Sahib",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    category: "Buying Guide",
  },
  {
    id: 2,
    title: "How to Maximize Your Property Investment",
    excerpt: "Discover strategies to increase your real estate portfolio returns.",
    author: "Sarah Johnson",
    date: "Dec 3, 2024",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    category: "Investment",
  },
  {
    id: 3,
    title: "Smart Home Technology Trends in 2025",
    excerpt: "Explore the latest smart home innovations for modern living.",
    author: "Michael Chen",
    date: "Dec 1, 2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "Technology",
  },
  {
    id: 4,
    title: "Renting vs Buying: What's Right for You?",
    excerpt: "A comprehensive comparison to help you make the right decision.",
    author: "Emma Williams",
    date: "Nov 28, 2024",
    image: "https://images.unsplash.com/photo-1560421683-7434afe3560e?w=600&h=400&fit=crop",
    category: "Comparison",
  },
  {
    id: 5,
    title: "Commercial Real Estate Opportunities",
    excerpt: "Discover profitable commercial property investment options.",
    author: "Rahman Sahib",
    date: "Nov 25, 2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    category: "Commercial",
  },
  {
    id: 6,
    title: "Sustainable Housing: Building the Future",
    excerpt: "Learn about eco-friendly construction and green living spaces.",
    author: "Sarah Johnson",
    date: "Nov 22, 2024",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
    category: "Sustainability",
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Real Estate Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in real estate.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="inline-block bg-[#f3e5f5] text-[#701a3a] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {blog.category}
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>

                <div className="flex items-center gap-4 text-xs text-gray-500 border-t pt-4">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blog.date}
                  </div>
                </div>

                <button className="w-full mt-4 bg-[#701a3a] text-white py-2 rounded-lg hover:bg-[#5a1630] transition-colors text-sm font-medium">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
