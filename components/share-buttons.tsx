"use client"

import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://bloghub.com"}${url}`

  const shareLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl)
    toast({
      title: "Link copied",
      description: "The article link has been copied to your clipboard.",
    })
  }

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm font-medium">Share this article:</div>
      <div className="flex space-x-2">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-muted"
            aria-label={`Share on ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
        <button onClick={copyToClipboard} className="p-2 rounded-full hover:bg-muted" aria-label="Copy link">
          <LinkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
