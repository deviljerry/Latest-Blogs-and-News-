"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PostCard from "@/components/post-card"
import { getSavedPosts } from "@/lib/api"
import type { Post } from "@/lib/types"

export default function SavedArticlesPage() {
  const [savedPosts, setSavedPosts] = useState<Post[]>([])
  const [likedPosts, setLikedPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSavedArticles = async () => {
      setIsLoading(true)

      // Get saved post IDs from localStorage
      const savedIds = JSON.parse(localStorage.getItem("savedPosts") || "[]")
      const likedIds = JSON.parse(localStorage.getItem("likedPosts") || "[]")

      // Fetch the actual posts
      if (savedIds.length > 0) {
        const savedPostsData = await getSavedPosts(savedIds)
        setSavedPosts(savedPostsData)
      }

      if (likedIds.length > 0) {
        const likedPostsData = await getSavedPosts(likedIds)
        setLikedPosts(likedPostsData)
      }

      setIsLoading(false)
    }

    fetchSavedArticles()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Your Saved Articles</h1>
        <p className="text-muted-foreground">Articles you've saved for later reading and those you've liked</p>
      </div>

      <Tabs defaultValue="saved" className="mb-8">
        <TabsList>
          <TabsTrigger value="saved">Read Later ({savedPosts.length})</TabsTrigger>
          <TabsTrigger value="liked">Liked Articles ({likedPosts.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="saved">
          {isLoading ? (
            <div className="text-center py-12">Loading your saved articles...</div>
          ) : savedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {savedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">You haven't saved any articles yet.</p>
              <p className="mt-2">Click the bookmark icon on any article to save it for later.</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="liked">
          {isLoading ? (
            <div className="text-center py-12">Loading your liked articles...</div>
          ) : likedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {likedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">You haven't liked any articles yet.</p>
              <p className="mt-2">Click the heart icon on any article to add it to your liked articles.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
