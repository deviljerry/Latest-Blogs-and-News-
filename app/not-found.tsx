import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/" className="flex items-center">
            <Home className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/news" className="flex items-center">
            <Search className="mr-2 h-4 w-4" /> Browse News
          </Link>
        </Button>
      </div>
    </div>
  )
}
