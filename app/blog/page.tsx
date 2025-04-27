import { Suspense } from "react"
import { getPosts, getAllCategories } from "@/lib/api"
import PostCard from "@/components/post-card"
import CategoryFilter from "@/components/category-filter"
import Pagination from "@/components/pagination"
import { SearchIcon } from "lucide-react"

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string; search?: string }
}) {
  const page = Number(searchParams.page) || 1
  const category = searchParams.category || ""
  const search = searchParams.search || ""

  const { posts, totalPages } = await getPosts({
    page,
    category,
    search,
    limit: 9,
  })

  const categories = await getAllCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground">Discover the latest insights, tutorials, and updates from our team</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-2/3">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-2 pl-10 border rounded-lg"
              defaultValue={search}
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <CategoryFilter categories={categories} selectedCategory={category} />
        </div>
      </div>

      <Suspense fallback={<div>Loading posts...</div>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Suspense>

      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}
