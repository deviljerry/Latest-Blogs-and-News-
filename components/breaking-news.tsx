"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"
import type { Post } from "@/lib/types"

export default function BreakingNews({ news }: { news: Post[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate breaking news
  useEffect(() => {
    if (news.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [news.length])

  if (news.length === 0) return null

  return (
    <div className="bg-red-600 text-white py-2 px-4 mb-8 rounded-lg overflow-hidden">
      <div className="flex items-center">
        <AlertTriangle className="h-5 w-5 mr-2 animate-pulse" />
        <span className="font-bold mr-2">BREAKING:</span>
        <div className="overflow-hidden relative flex-1">
          <div className="whitespace-nowrap overflow-hidden text-ellipsis">
            <Link href={`/news/${news[currentIndex].slug}`} className="hover:underline">
              {news[currentIndex].title}
            </Link>
          </div>
        </div>
        {news.length > 1 && (
          <span className="text-xs ml-2">
            {currentIndex + 1}/{news.length}
          </span>
        )}
      </div>
    </div>
  )
}
