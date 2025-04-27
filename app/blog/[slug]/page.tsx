import Image from "next/image"
import { notFound } from "next/navigation"
import { formatDate } from "@/lib/utils"
import { getPostBySlug, getRelatedPosts } from "@/lib/api"
import PostCard from "@/components/post-card"
import AuthorCard from "@/components/author-card"
import ShareButtons from "@/components/share-buttons"

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.id, post.category)

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

          <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

          <AuthorCard author={post.author} />
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] mb-8 rounded-xl overflow-hidden">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="border-t border-b py-6 mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-muted px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <ShareButtons url={`/blog/${post.slug}`} title={post.title} />
        </div>
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
