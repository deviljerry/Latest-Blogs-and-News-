import Image from "next/image"
import Link from "next/link"
import { getAllCategories } from "@/lib/api"
import { Card, CardContent } from "@/components/ui/card"

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">News Categories</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse all news categories and discover content that interests you. We cover everything from technology and
          business to lifestyle and entertainment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={`/news?category=${category.slug}`}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={category.image || `/placeholder.svg?height=400&width=600&text=${category.name}`}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-xl font-bold text-white">{category.name}</h2>
                  <p className="text-white/80 text-sm">{category.count} articles</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Browse the latest {category.name.toLowerCase()} news and updates from trusted sources around the
                  world.
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
