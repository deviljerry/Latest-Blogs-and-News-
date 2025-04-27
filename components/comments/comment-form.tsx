"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Loader2 } from "lucide-react"
import type { CommentFormData } from "@/lib/types"

interface CommentFormProps {
  postId: string
  parentId?: string
  onSubmit: (data: CommentFormData) => Promise<void>
  placeholder?: string
  buttonText?: string
  userAvatar?: string
  isReply?: boolean
  onCancel?: () => void
}

export default function CommentForm({
  postId,
  parentId,
  onSubmit,
  placeholder = "Write a comment...",
  buttonText = "Post Comment",
  userAvatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  isReply = false,
  onCancel,
}: CommentFormProps) {
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) return

    setIsSubmitting(true)

    try {
      await onSubmit({
        content: content.trim(),
        parentId,
      })

      // Reset form after successful submission
      setContent("")
    } catch (error) {
      console.error("Error submitting comment:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`flex ${isReply ? "ml-12 mt-2" : "mt-6"}`}>
      <Avatar className="h-10 w-10 mr-4 flex-shrink-0">
        <AvatarImage src={userAvatar || "/placeholder.svg"} alt="Your avatar" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-2">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={placeholder}
          className="min-h-[80px] resize-none"
          disabled={isSubmitting}
        />

        <div className="flex justify-end space-x-2">
          {isReply && onCancel && (
            <Button type="button" variant="outline" size="sm" onClick={onCancel} disabled={isSubmitting}>
              Cancel
            </Button>
          )}

          <Button type="submit" size="sm" disabled={isSubmitting || !content.trim()}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Posting...
              </>
            ) : (
              buttonText
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}
