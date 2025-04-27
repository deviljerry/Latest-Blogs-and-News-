"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import type { Category } from "@/lib/types"

export default function CategoryFilter({
  categories,
  selectedCategory = "",
}: {
  categories: Category[]
  selectedCategory?: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleCategoryChange = (categorySlug: string) => {
    const params = new URLSearchParams(searchParams)

    if (categorySlug === "") {
      params.delete("category")
    } else {
      params.set("category", categorySlug)
    }

    // Reset to page 1 when changing category
    params.delete("page")

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === "" ? "default" : "outline"}
        size="sm"
        onClick={() => handleCategoryChange("")}
      >
        All
      </Button>

      {categories.map((category) => (
        <Button
          key={category.slug}
          variant={selectedCategory === category.slug ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange(category.slug)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
