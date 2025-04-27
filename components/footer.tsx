import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 mr-2">
                <Image
                  src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                  alt="NewsHub Logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                NewsHub
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Delivering insightful content and the latest news on technology, design, business, and more from trusted
              sources worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news?category=technology" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/news?category=design" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/news?category=business" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/news?category=lifestyle" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/news?category=tutorials" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-blue-400 hover:underline">
                  View All Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/sources" className="text-gray-300 hover:text-blue-400 transition-colors">
                  News Sources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Get the latest posts delivered straight to your inbox. Stay updated with our newsletter.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-md"
                  aria-label="Subscribe"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our{" "}
                <Link href="/privacy-policy" className="text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} NewsHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
