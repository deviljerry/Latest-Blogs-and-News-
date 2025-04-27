"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Search, Globe, User, Bookmark, Heart, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "Categories", href: "/categories" },
  { name: "Top News", href: "/top-news" },
  { name: "Sources", href: "/sources" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const languages = [
  { name: "English", code: "en" },
  { name: "Spanish", code: "es" },
  { name: "French", code: "fr" },
  { name: "German", code: "de" },
  { name: "Chinese", code: "zh" },
  { name: "Japanese", code: "ja" },
  { name: "Arabic", code: "ar" },
  { name: "Russian", code: "ru" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // For demo purposes
  const pathname = usePathname()

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <Image
                src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                alt="NewsHub Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              NewsHub
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 hover:text-primary transition-colors",
                pathname === item.href ? "text-primary" : "text-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full p-2 hover:bg-muted flex items-center">
                <Globe className="h-5 w-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Select Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code}>{lang.name}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search Button */}
          <button onClick={() => setSearchOpen(!searchOpen)} className="rounded-full p-2 hover:bg-muted">
            <Search className="h-5 w-5" />
          </button>

          {/* User Menu or Login Button */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full p-2 hover:bg-muted">
                  <User className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile" className="flex items-center w-full">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/saved" className="flex items-center w-full">
                    <Bookmark className="mr-2 h-4 w-4" /> Saved Articles
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/saved?tab=liked" className="flex items-center w-full">
                    <Heart className="mr-2 h-4 w-4" /> Liked Articles
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              size="sm"
              asChild
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <Link href="/auth/login">Sign in</Link>
            </Button>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background">
          <div className="fixed inset-0 flex">
            <div className="w-full">
              <div className="flex items-center justify-between p-4">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative h-10 w-10 mr-2">
                    <Image
                      src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                      alt="NewsHub Logo"
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                    NewsHub
                  </span>
                </Link>
                <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6 px-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "block py-2 text-base font-semibold leading-7 hover:text-primary",
                        pathname === item.href ? "text-primary" : "text-foreground",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 mr-2" />
                        <span>Language</span>
                      </div>
                      <select className="bg-transparent border rounded px-2 py-1">
                        {languages.map((lang) => (
                          <option key={lang.code} value={lang.code}>
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      onClick={() => {
                        setSearchOpen(!searchOpen)
                        setMobileMenuOpen(false)
                      }}
                      className="flex items-center py-2"
                    >
                      <Search className="h-5 w-5 mr-2" />
                      <span>Search</span>
                    </button>

                    {isLoggedIn ? (
                      <>
                        <Link href="/saved" className="flex items-center py-2" onClick={() => setMobileMenuOpen(false)}>
                          <Bookmark className="h-5 w-5 mr-2" />
                          <span>Saved Articles</span>
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout()
                            setMobileMenuOpen(false)
                          }}
                          className="flex items-center py-2"
                        >
                          <LogOut className="h-5 w-5 mr-2" />
                          <span>Sign out</span>
                        </button>
                      </>
                    ) : (
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" asChild>
                        <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                          Sign in
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 p-4 flex items-start justify-center pt-[20vh]">
          <div className="w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Search</h2>
              <button onClick={() => setSearchOpen(false)} className="rounded-full p-2 hover:bg-muted">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search news articles..."
                className="w-full px-4 py-3 pl-10 border rounded-lg text-lg"
                autoFocus
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
