import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ImageSlider from "@/components/image-slider"
import FeaturedPost from "@/components/featured-post"
import PostCard from "@/components/post-card"
import CategoryFilter from "@/components/category-filter"
import Newsletter from "@/components/newsletter"
import BreakingNews from "@/components/breaking-news"
import { getFeaturedPosts, getLatestPosts, getAllCategories, getBreakingNews, getTopNews } from "@/lib/api"
import { Suspense } from "react"

export default async function Home() {
  const featuredPosts = await getFeaturedPosts()
  const latestPosts = await getLatestPosts(6)
  const categories = await getAllCategories()
  const breakingNews = await getBreakingNews()
  const topNews = await getTopNews()

  // Prepare slides for the image slider
  const sliderItems = topNews.map((post) => ({
    id: post.id,
    title: post.title,
    image: post.coverImage,
    category: post.category,
    slug: post.slug,
  }))

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breaking News Banner */}
        {breakingNews.length > 0 && <BreakingNews news={breakingNews} />}

        {/* Hero Slider */}
        <section className="mb-16">
          <ImageSlider slides={sliderItems} />
        </section>

        {/* Featured Posts */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-8 w-2 bg-blue-600 rounded-full mr-3"></div>
            <h2 className="text-3xl font-bold">Featured Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 3).map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="h-8 w-2 bg-blue-600 rounded-full mr-3"></div>
              <h2 className="text-3xl font-bold">Latest News</h2>
            </div>
            <Link href="/news" className="flex items-center text-blue-600 hover:underline font-medium">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <Suspense fallback={<div className="h-10 bg-gray-100 animate-pulse rounded-lg mb-8"></div>}>
            <CategoryFilter categories={categories} />
          </Suspense>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-8 w-2 bg-blue-600 rounded-full mr-3"></div>
            <h2 className="text-3xl font-bold">Browse by Category</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((category) => (
              <Link
                key={category.id}
                href={`/news?category=${category.slug}`}
                className="relative h-32 rounded-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${category.image || `/placeholder.svg?height=400&width=600&text=${category.name}`})`,
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-white font-bold">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.count} articles</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button asChild>
              <Link href="/categories">View All Categories</Link>
            </Button>
          </div>
        </section>

        <Newsletter />
      </div>
    </div>
  )
}
