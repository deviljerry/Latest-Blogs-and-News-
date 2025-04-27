"use client"

import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageSquare, MoreVertical, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import CommentForm from "./comment-form"
import type { Comment, CommentFormData } from "@/lib/types"

interface CommentItemProps {
  comment: Comment
  postId: string
  onReply: (data: CommentFormData) => Promise<void>
  onLike: (commentId: string) => Promise<void>
  onDelete: (commentId: string) => Promise<void>
  currentUserId?: string
}

export default function CommentItem({
  comment,
  postId,
  onReply,
  onLike,
  onDelete,
  currentUserId = "current-user",
}: CommentItemProps) {
  const [isReplying, setIsReplying] = useState(false)
  const [showReplies, setShowReplies] = useState(true)
  const hasReplies = comment.replies && comment.replies.length > 0
  const isAuthor = comment.author.id === currentUserId

  const handleReplySubmit = async (data: CommentFormData) => {
    await onReply(data)
    setIsReplying(false)
  }

  const handleLike = async () => {
    await onLike(comment.id)
  }

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      await onDelete(comment.id)
    }
  }

  const formattedDate = formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })

  return (
    <div className="py-4">
      <div className="flex">
        <Avatar className="h-10 w-10 mr-4 flex-shrink-0">
          <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
          <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <span className="font-semibold">{comment.author.name}</span>
                {comment.author.isVerified && (
                  <Badge variant="outline" className="ml-2 text-xs bg-blue-50 text-blue-700 border-blue-200">
                    Verified
                  </Badge>
                )}
              </div>

              {isAuthor && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={handleDelete} className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>

            <p className="text-sm text-foreground mb-2">{comment.content}</p>

            <div className="flex items-center text-xs text-muted-foreground">
              <span>{formattedDate}</span>
              <span className="mx-2">•</span>
              <button
                onClick={handleLike}
                className={`flex items-center hover:text-primary ${comment.isLiked ? "text-red-500" : ""}`}
              >
                <Heart className={`h-3.5 w-3.5 mr-1 ${comment.isLiked ? "fill-red-500" : ""}`} />
                <span>{comment.likes}</span>
              </button>
              <span className="mx-2">•</span>
              <button onClick={() => setIsReplying(!isReplying)} className="flex items-center hover:text-primary">
                <MessageSquare className="h-3.5 w-3.5 mr-1" />
                <span>Reply</span>
              </button>
            </div>
          </div>

          {isReplying && (
            <CommentForm
              postId={postId}
              parentId={comment.id}
              onSubmit={handleReplySubmit}
              placeholder="Write a reply..."
              buttonText="Post Reply"
              isReply={true}
              onCancel={() => setIsReplying(false)}
            />
          )}

          {hasReplies && (
            <div className="mt-2">
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="text-xs text-primary font-medium hover:underline ml-2"
              >
                {showReplies ? "Hide" : "Show"} {comment.replies!.length}{" "}
                {comment.replies!.length === 1 ? "reply" : "replies"}
              </button>

              {showReplies && (
                <div className="ml-8 mt-2 space-y-4">
                  {comment.replies!.map((reply) => (
                    <div key={reply.id} className="flex">
                      <Avatar className="h-8 w-8 mr-3 flex-shrink-0">
                        <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                        <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="bg-muted p-3 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              <span className="font-semibold text-sm">{reply.author.name}</span>
                              {reply.author.isVerified && (
                                <Badge
                                  variant="outline"
                                  className="ml-2 text-xs bg-blue-50 text-blue-700 border-blue-200"
                                >
                                  Verified
                                </Badge>
                              )}
                            </div>

                            {reply.author.id === currentUserId && (
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                    <MoreVertical className="h-3 w-3" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={() => onDelete(reply.id)} className="text-red-600">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            )}
                          </div>

                          <p className="text-sm text-foreground mb-1">{reply.content}</p>

                          <div className="flex items-center text-xs text-muted-foreground">
                            <span>{formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })}</span>
                            <span className="mx-2">•</span>
                            <button
                              onClick={() => onLike(reply.id)}
                              className={`flex items-center hover:text-primary ${reply.isLiked ? "text-red-500" : ""}`}
                            >
                              <Heart className={`h-3 w-3 mr-1 ${reply.isLiked ? "fill-red-500" : ""}`} />
                              <span>{reply.likes}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
