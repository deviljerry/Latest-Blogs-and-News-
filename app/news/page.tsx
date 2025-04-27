import { Suspense } from "react"
import { getPosts, getAllCategories, getAllSources, getAllLanguages } from "@/lib/api"
import PostCard from "@/components/post-card"
import CategoryFilter from "@/components/category-filter"
import Pagination from "@/components/pagination"
import { SearchIcon, Filter } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default async function NewsPage({
  searchParams,
}: {
  searchParams: {
    page?: string
    category?: string
    search?: string
    source?: string
    language?: string
  }
}) {
  const page = Number(searchParams.page) || 1
  const category = searchParams.category || ""
  const search = searchParams.search || ""
  const source = searchParams.source || ""
  const language = searchParams.language || ""

  const { posts, totalPages } = await getPosts({
    page,
    category,
    search,
    source,
    language,
    limit: 12,
  })

  const categories = await getAllCategories()
  const sources = await getAllSources()
  const languages = await getAllLanguages()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">News</h1>
        <p className="text-muted-foreground">Stay informed with the latest news from around the world</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="sticky top-24 bg-card rounded-lg border p-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Filter className="h-5 w-5 mr-2" /> Filters
            </h2>

            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search news..."
                className="w-full px-4 py-2 pl-10 border rounded-lg"
                defaultValue={search}
              />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>

            <Accordion type="multiple" defaultValue={["categories"]}>
              <AccordionItem value="categories">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <div key={cat.id} className="flex items-center space-x-2">
                        <Checkbox id={`category-${cat.slug}`} defaultChecked={category === cat.slug} />
                        <Label htmlFor={`category-${cat.slug}`} className="text-sm font-normal cursor-pointer">
                          {cat.name} ({cat.count})
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sources">
                <AccordionTrigger>Sources</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {sources.map((src) => (
                      <div key={src.id} className="flex items-center space-x-2">
                        <Checkbox id={`source-${src.slug}`} defaultChecked={source === src.slug} />
                        <Label htmlFor={`source-${src.slug}`} className="text-sm font-normal cursor-pointer">
                          {src.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="languages">
                <AccordionTrigger>Languages</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <div key={lang.id} className="flex items-center space-x-2">
                        <Checkbox id={`language-${lang.code}`} defaultChecked={language === lang.code} />
                        <Label htmlFor={`language-${lang.code}`} className="text-sm font-normal cursor-pointer">
                          {lang.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full lg:w-3/4">
          <CategoryFilter categories={categories} selectedCategory={category} />

          <Suspense fallback={<div>Loading posts...</div>}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </Suspense>

          <Pagination currentPage={page} totalPages={totalPages} />
        </div>
      </div>
    </div>
  )
}
