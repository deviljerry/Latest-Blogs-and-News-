import { getTopNews } from "@/lib/api"
import PostCard from "@/components/post-card"

export default async function TopNewsPage() {
  const topNews = await getTopNews()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Top News</h1>
        <p className="text-muted-foreground">The most important stories from around the world</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topNews.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
