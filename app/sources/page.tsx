import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { getAllSources } from "@/lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default async function SourcesPage() {
  const sources = await getAllSources()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">News Sources</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse all our trusted news sources and partners. We aggregate content from reputable publishers to bring you
          comprehensive coverage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sources.map((source) => (
          <Card key={source.id} className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative h-40 w-full bg-gray-100 flex items-center justify-center p-4">
              <Image
                src={source.logo || "/placeholder.svg"}
                alt={source.name}
                width={200}
                height={80}
                className="object-contain max-h-full"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{source.name}</CardTitle>
              <CardDescription>
                {source.description || "Trusted news source for the latest updates and in-depth reporting"}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <Link href={`/news?source=${source.slug}`}>
                <Button variant="outline" size="sm">
                  View Articles
                </Button>
              </Link>
              <a
                href={source.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary"
              >
                Visit Website <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
