import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { formatDate } from "@/lib/utils"
import { getPostBySlug, getRelatedPosts } from "@/lib/api"
import PostCard from "@/components/post-card"
import AuthorCard from "@/components/author-card"
import ShareButtons from "@/components/share-buttons"
import CommentsSection from "@/components/comments/comments-section"
import { ExternalLink, Globe, MessageSquare } from "lucide-react"

export default async function NewsArticlePage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.id, post.category)

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link
              href={`/news?category=${post.category}`}
              className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-primary-foreground"
            >
              {post.category}
            </Link>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readingTime} min read</span>
            <span>•</span>
            <span className="flex items-center">
              <Globe className="h-4 w-4 mr-1" />
              {post.language.name}
            </span>
            {post.commentCount !== undefined && (
              <>
                <span>•</span>
                <span className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {post.commentCount} {post.commentCount === 1 ? "comment" : "comments"}
                </span>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

          <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

          <div className="flex items-center justify-between">
            <AuthorCard author={post.author} />

            <div className="flex items-center text-sm text-muted-foreground">
              <span>Source:</span>
              <a
                href={post.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 flex items-center hover:text-primary"
              >
                {post.source.name} <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] mb-8 rounded-xl overflow-hidden">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="border-t border-b py-6 mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/news?tag=${tag}`}
                className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-primary-foreground"
              >
                {tag}
              </Link>
            ))}
          </div>

          <ShareButtons url={`/news/${post.slug}`} title={post.title} />
        </div>

        {/* Comments Section */}
        <CommentsSection postId={post.id} postSlug={post.slug} />
      </article>

      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
