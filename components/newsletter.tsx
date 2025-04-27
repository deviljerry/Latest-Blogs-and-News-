"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setEmail("")

      // Reset after 3 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 3000)
    }, 1000)
  }

  return (
    <section className="rounded-xl overflow-hidden">
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-4 text-white/80" />
          <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to our newsletter</h2>
          <p className="text-blue-100 mb-6">
            Get the latest articles, resources, and insights delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading" || status === "success"}
            />
            <Button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="bg-white text-blue-700 hover:bg-white/90"
            >
              {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>

          {status === "error" && <p className="mt-2 text-red-300">Something went wrong. Please try again.</p>}
        </div>
      </div>
    </section>
  )
}
