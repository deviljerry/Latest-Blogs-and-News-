"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { MessageSquare, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import CommentForm from "./comment-form"
import CommentItem from "./comment-item"
import { getComments, addComment, toggleCommentLike, deleteComment } from "@/lib/api"
import type { Comment, CommentFormData } from "@/lib/types"

interface CommentsSectionProps {
  postId: string
  postSlug: string
}

export default function CommentsSection({ postId, postSlug }: CommentsSectionProps) {
  const router = useRouter()
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("newest")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true)
        const data = await getComments(postId)
        setComments(data)
        setError(null)
      } catch (err) {
        setError("Failed to load comments. Please try again later.")
        console.error("Error fetching comments:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchComments()

    // Check if user is logged in (for demo purposes)
    const checkLoginStatus = () => {
      // In a real app, this would check authentication state
      // For demo, we'll just set it to true
      setIsLoggedIn(true)
    }

    checkLoginStatus()
  }, [postId])

  const handleSubmitComment = async (data: CommentFormData) => {
    if (!isLoggedIn) {
      router.push(`/auth/login?redirect=/news/${postSlug}`)
      return
    }

    try {
      const newComment = await addComment(postId, data)

      if (data.parentId) {
        // If it's a reply, find the parent comment and add the reply
        setComments((prevComments) =>
          prevComments.map((comment) => {
            if (comment.id === data.parentId) {
              return {
                ...comment,
                replies: [...(comment.replies || []), newComment],
              }
            }
            return comment
          }),
        )
      } else {
        // If it's a top-level comment, add it to the beginning
        setComments((prevComments) => [newComment, ...prevComments])
      }
    } catch (err) {
      setError("Failed to post comment. Please try again.")
      console.error("Error posting comment:", err)
    }
  }

  const handleLikeComment = async (commentId: string) => {
    if (!isLoggedIn) {
      router.push(`/auth/login?redirect=/news/${postSlug}`)
      return
    }

    try {
      const result = await toggleCommentLike(commentId, postId)

      // Update the comment in state
      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              isLiked: result.liked,
              likes: result.likes,
            }
          }

          // Check if it's in replies
          if (comment.replies) {
            return {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === commentId ? { ...reply, isLiked: result.liked, likes: result.likes } : reply,
              ),
            }
          }

          return comment
        }),
      )
    } catch (err) {
      console.error("Error liking comment:", err)
    }
  }

  const handleDeleteComment = async (commentId: string) => {
    try {
      const success = await deleteComment(commentId, postId)

      if (success) {
        // Remove the comment from state
        setComments((prevComments) => {
          // First check if it's a top-level comment
          const filteredComments = prevComments.filter((comment) => comment.id !== commentId)

          // If length is the same, it might be a reply
          if (filteredComments.length === prevComments.length) {
            return prevComments.map((comment) => {
              if (comment.replies) {
                return {
                  ...comment,
                  replies: comment.replies.filter((reply) => reply.id !== commentId),
                }
              }
              return comment
            })
          }

          return filteredComments
        })
      }
    } catch (err) {
      console.error("Error deleting comment:", err)
    }
  }

  const sortComments = (comments: Comment[]) => {
    if (activeTab === "newest") {
      return [...comments].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    } else if (activeTab === "popular") {
      return [...comments].sort((a, b) => b.likes - a.likes)
    }
    return comments
  }

  const sortedComments = sortComments(comments)
  const totalComments = comments.length + comments.reduce((total, comment) => total + (comment.replies?.length || 0), 0)

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <MessageSquare className="mr-2 h-5 w-5" />
        Comments ({totalComments})
      </h2>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {!isLoggedIn ? (
        <div className="bg-muted p-4 rounded-lg mb-6">
          <p className="text-center mb-4">Sign in to join the conversation and share your thoughts.</p>
          <div className="flex justify-center">
            <Button asChild>
              <a href={`/auth/login?redirect=/news/${postSlug}`}>Sign In</a>
            </Button>
          </div>
        </div>
      ) : (
        <CommentForm postId={postId} onSubmit={handleSubmitComment} />
      )}

      <div className="mt-8">
        <Tabs defaultValue="newest" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="newest">Newest</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
          </TabsList>

          <TabsContent value="newest" className="space-y-0 divide-y">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : sortedComments.length > 0 ? (
              sortedComments.map((comment) => (
                <CommentItem
                  key={comment.id}
                  comment={comment}
                  postId={postId}
                  onReply={handleSubmitComment}
                  onLike={handleLikeComment}
                  onDelete={handleDeleteComment}
                />
              ))
            ) : (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">No comments yet. Be the first to share your thoughts!</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="popular" className="space-y-0 divide-y">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : sortedComments.length > 0 ? (
              sortedComments.map((comment) => (
                <CommentItem
                  key={comment.id}
                  comment={comment}
                  postId={postId}
                  onReply={handleSubmitComment}
                  onLike={handleLikeComment}
                  onDelete={handleDeleteComment}
                />
              ))
            ) : (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">No comments yet. Be the first to share your thoughts!</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
