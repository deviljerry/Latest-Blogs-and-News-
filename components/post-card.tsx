"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Bookmark, BookmarkCheck, Heart, ExternalLink } from "lucide-react"
import type { Post } from "@/lib/types"

export default function PostCard({ post }: { post: Post }) {
  const [isSaved, setIsSaved] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  // Check if post is saved or liked on component mount
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "[]")
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]")

    setIsSaved(savedPosts.includes(post.id))
    setIsLiked(likedPosts.includes(post.id))
  }, [post.id])

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "[]")

    if (isSaved) {
      const updatedPosts = savedPosts.filter((id: string) => id !== post.id)
      localStorage.setItem("savedPosts", JSON.stringify(updatedPosts))
    } else {
      savedPosts.push(post.id)
      localStorage.setItem("savedPosts", JSON.stringify(savedPosts))
    }

    setIsSaved(!isSaved)
  }

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]")

    if (isLiked) {
      const updatedPosts = likedPosts.filter((id: string) => id !== post.id)
      localStorage.setItem("likedPosts", JSON.stringify(updatedPosts))
    } else {
      likedPosts.push(post.id)
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts))
    }

    setIsLiked(!isLiked)
  }

  return (
    <article className="group overflow-hidden rounded-lg border bg-card">
      <Link href={`/news/${post.slug}`} className="block overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <Link href={`/news?category=${post.category}`} className="text-xs font-medium text-primary hover:underline">
              {post.category}
            </Link>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex space-x-1">
            <button
              onClick={toggleSave}
              className="p-1 rounded-full hover:bg-muted"
              aria-label={isSaved ? "Remove from saved" : "Save for later"}
            >
              {isSaved ? <BookmarkCheck className="h-4 w-4 text-primary" /> : <Bookmark className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleLike}
              className="p-1 rounded-full hover:bg-muted"
              aria-label={isLiked ? "Unlike" : "Like"}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            </button>
          </div>
        </div>

        <Link href={`/news/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary line-clamp-2">{post.title}</h3>
        </Link>

        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>

          <a
            href={post.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex items-center text-muted-foreground hover:text-primary"
            onClick={(e) => e.stopPropagation()}
          >
            {post.source.name} <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  )
}
