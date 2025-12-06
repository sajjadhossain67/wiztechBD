"use client"

import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="w-full grid md:grid-cols-2 gap-0">
        {/* Left Form */}
        <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-12 md:py-0">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2 mb-12">
              <img src="/wiztecbd-logo.png" alt="WiztecBD Logo" className="h-10 w-auto" />
            </Link>

            {/* Header */}
            <h1 className="text-3xl font-bold mb-2">Create New Account</h1>
            <p className="text-gray-600 mb-8">Let's login to grab amazing deal</p>

            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-sm font-medium">Continue with Google</span>
              </button>
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 13.5c0-.3 0-.6-.06-.9 1.48-1.06 2.47-2.8 2.47-4.74 0-3.31-2.64-6-5.91-6-3.28 0-5.91 2.69-5.91 6 0 1.94.99 3.68 2.47 4.74-.04.3-.06.6-.06.9 0 2.5 1.49 4.66 3.6 5.66-.19.19-.37.39-.53.61-3.02.23-5.55-2.25-5.55-5.27 0-3.31 2.64-6 5.91-6s5.91 2.69 5.91 6c0 3.01-2.53 5.5-5.55 5.27-.16-.22-.34-.42-.53-.61 2.11-1 3.6-3.16 3.6-5.66z" />
                </svg>
                <span className="text-sm font-medium">Continue with Apple</span>
              </button>
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
                <span className="text-sm font-medium">Continue with Email/Phone</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link href="/login" className="font-medium text-[#a01b5a] hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden md:block relative bg-gray-100">
          <img
            src="/modern-cityscape-building-through-window-with-sky.jpg"
            alt="City skyline through window"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
