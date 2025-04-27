export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  updatedAt: string
  readingTime: number
  category: string
  tags: string[]
  author: Author
  featured?: boolean
  breaking?: boolean
  topNews?: boolean
  source: NewsSource
  originalUrl: string
  language: Language
  commentCount?: number
}

export interface Author {
  id: string
  name: string
  avatar: string
  role: string
  bio?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  count: number
  image?: string
}

export interface NewsSource {
  id: string
  name: string
  slug: string
  website: string
  logo: string
  description?: string
}

export interface Language {
  id: string
  name: string
  code: string
}

export interface PostsResponse {
  posts: Post[]
  totalPages: number
  totalPosts: number
}

export interface PostsQueryParams {
  page?: number
  limit?: number
  category?: string
  search?: string
  tag?: string
  source?: string
  language?: string
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  savedPosts: string[]
  likedPosts: string[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  bio: string
  social?: {
    twitter?: string
    linkedin?: string
    email?: string
  }
}

// New comment-related types
export interface Comment {
  id: string
  postId: string
  content: string
  author: CommentAuthor
  createdAt: string
  updatedAt?: string
  likes: number
  isLiked?: boolean
  replies?: Comment[]
  parentId?: string
}

export interface CommentAuthor {
  id: string
  name: string
  avatar: string
  isVerified?: boolean
}

export interface CommentFormData {
  content: string
  parentId?: string
}
