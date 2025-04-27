import Image from "next/image"
import type { Author } from "@/lib/types"

export default function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="flex items-center">
      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
        <Image src={author.avatar || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
      </div>
      <div>
        <h3 className="font-medium">{author.name}</h3>
        <p className="text-sm text-muted-foreground">{author.role}</p>
      </div>
    </div>
  )
}
