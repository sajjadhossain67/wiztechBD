"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("rownok@gmail.com");
  const [password, setPassword] = useState("••••••••••••••");

  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="w-full grid md:grid-cols-2 gap-0">
        {/* Left Form */}
        <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-12 md:py-0">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2 mb-12">
              <img
                src="/wiztecbd-logo.png"
                alt="WiztecBD Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Header */}
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-600 mb-8">
              Let's login to grab amazing deal
            </p>

            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <svg className="w-5 h-5" viewBox="0 0 48 48" aria-hidden="true">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 5.94 1.54 7.31 2.83l5.34-5.2C33.97 4.09 29.35 2 24 2 14.74 2 6.84 7.69 3.22 15.17l6.92 5.37C11.54 14.79 17.22 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.48 24.55c0-1.56-.14-3.04-.4-4.49H24v8.49h12.72c-.53 2.7-2.16 5-4.6 6.54l7.06 5.49C43.97 36.73 46.48 31.14 46.48 24.55z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.14 28.83c-.48-1.43-.75-2.95-.75-4.53s.27-3.1.74-4.53l-6.92-5.37C1.26 17.14 0 20.43 0 24s1.26 6.86 3.22 9.6l6.92-5.37z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.91-2.13 15.88-5.93l-7.06-5.49c-1.97 1.34-4.5 2.18-8.82 2.18-6.78 0-12.46-5.29-13.92-12.48l-6.92 5.37C6.84 40.31 14.74 48 24 48z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Continue with Google
                </span>
              </button>

              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M16.365 1.43c-.94.056-2.055.66-2.72 1.436-.59.68-1.073 1.74-.88 2.756 1.043.08 2.11-.57 2.75-1.36.63-.77 1.11-1.82.85-2.832zM20.88 17.4c-.598 1.31-.88 1.9-1.648 3.07-1.071 1.64-2.58 3.68-4.444 3.69-1.654.02-2.075-1.07-4.338-1.06-2.262.01-2.729 1.08-4.384 1.06-1.864-.01-3.31-1.86-4.38-3.5-2.996-4.59-3.315-9.97-1.472-12.82 1.308-1.99 3.378-3.16 5.325-3.16 1.976 0 3.22 1.07 4.85 1.07 1.59 0 2.558-1.08 4.836-1.08 1.75 0 3.596.95 4.75 2.58-4.17 2.29-3.484 8.27.57 9.55z" />
                </svg>
                <span className="text-sm font-medium">Continue with Apple</span>
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#a01b5a]"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#a01b5a]"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-[#a01b5a]"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Button className="w-full bg-[#701a3a] hover:bg-[#5a1630] text-white py-3 rounded-lg font-semibold mb-6">
              Login
            </Button>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-[#a01b5a] hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden md:block relative bg-gray-100">
          <img
            src="/modern-luxury-office-building-interior-through-win.jpg"
            alt="City skyline through window"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
