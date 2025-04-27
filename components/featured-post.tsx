import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg h-[400px]">
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="mb-2">
          <span className="inline-block bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
            {post.category}
          </span>
        </div>

        <Link href={`/news/${post.slug}`}>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:underline">{post.title}</h3>
        </Link>

        <p className="text-white/80 mb-4 line-clamp-2">{post.excerpt}</p>

        <div className="flex items-center">
          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3 border-2 border-white/20">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-white font-medium">{post.author.name}</p>
            <p className="text-white/70 text-sm">{formatDate(post.publishedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
