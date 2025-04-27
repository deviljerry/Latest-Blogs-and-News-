import type { Post, Category, PostsResponse, PostsQueryParams, NewsSource, Language } from "./types"

// Define CommentAuthor interface
interface CommentAuthor {
  id: string
  name: string
  avatar?: string
  isVerified?: boolean
}

// Define Comment interface
interface Comment {
  id: string
  postId: string
  parentId?: string
  content: string
  author: CommentAuthor
  createdAt: string
  likes: number
  isLiked: boolean
  replies?: Comment[]
}

// Define CommentFormData type
interface CommentFormData {
  content: string
  parentId?: string
}

// Mock data for authors
const authors = [
  {
    id: "1",
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "Content Writer",
    bio: "John is a tech enthusiast and content writer with over 5 years of experience.",
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "Senior Editor",
    bio: "Jane has been writing about technology and design for over a decade.",
  },
  {
    id: "3",
    name: "Alex Johnson",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "Tech Journalist",
    bio: "Alex covers the latest in technology and software development.",
  },
  {
    id: "4",
    name: "Maria Garcia",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "International Correspondent",
    bio: "Maria reports on global events and international politics.",
  },
  {
    id: "5",
    name: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "Science Reporter",
    bio: "David specializes in breaking down complex scientific discoveries.",
  },
]

// Mock data for categories with real images
const categories = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
    count: 12,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "2",
    name: "Design",
    slug: "design",
    count: 8,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "3",
    name: "Business",
    slug: "business",
    count: 5,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "4",
    name: "Lifestyle",
    slug: "lifestyle",
    count: 7,
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "5",
    name: "Tutorials",
    slug: "tutorials",
    count: 10,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "6",
    name: "Politics",
    slug: "politics",
    count: 15,
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "7",
    name: "World",
    slug: "world",
    count: 18,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "8",
    name: "Sports",
    slug: "sports",
    count: 14,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "9",
    name: "Entertainment",
    slug: "entertainment",
    count: 9,
    image:
      "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "10",
    name: "Science",
    slug: "science",
    count: 11,
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "11",
    name: "Health",
    slug: "health",
    count: 13,
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
]

// Mock data for news sources with real logos
const newsSources = [
  {
    id: "1",
    name: "Global News Network",
    slug: "gnn",
    website: "https://example.com/gnn",
    logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Bringing you the latest news from around the world with unparalleled coverage and analysis.",
  },
  {
    id: "2",
    name: "Tech Today",
    slug: "tech-today",
    website: "https://example.com/techtoday",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Your daily source for technology news, reviews, and insights into the digital world.",
  },
  {
    id: "3",
    name: "Business Insider",
    slug: "business-insider",
    website: "https://example.com/businessinsider",
    logo: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Expert business analysis and in-depth market coverage for professionals and investors.",
  },
  {
    id: "4",
    name: "Sports Central",
    slug: "sports-central",
    website: "https://example.com/sportscentral",
    logo: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Comprehensive coverage of all major sports with expert commentary and analysis.",
  },
  {
    id: "5",
    name: "Science Daily",
    slug: "science-daily",
    website: "https://example.com/sciencedaily",
    logo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Breaking science news and in-depth articles about recent discoveries and scientific research.",
  },
  {
    id: "6",
    name: "World Report",
    slug: "world-report",
    website: "https://example.com/worldreport",
    logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "International news coverage with a focus on global politics, economics, and cultural events.",
  },
  {
    id: "7",
    name: "Entertainment Weekly",
    slug: "entertainment-weekly",
    website: "https://example.com/entertainmentweekly",
    logo: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "The latest in movies, TV, music, and celebrity news with exclusive interviews and reviews.",
  },
  {
    id: "8",
    name: "Health & Wellness",
    slug: "health-wellness",
    website: "https://example.com/healthwellness",
    logo: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Expert advice on health, nutrition, fitness, and mental wellbeing for a balanced lifestyle.",
  },
]

// Mock data for languages
const languages = [
  { id: "1", name: "English", code: "en" },
  { id: "2", name: "Spanish", code: "es" },
  { id: "3", name: "French", code: "fr" },
  { id: "4", name: "German", code: "de" },
  { id: "5", name: "Chinese", code: "zh" },
  { id: "6", name: "Japanese", code: "ja" },
  { id: "7", name: "Arabic", code: "ar" },
  { id: "8", name: "Russian", code: "ru" },
]

// Real image URLs for different categories
const categoryImages = {
  technology: [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ],
  design: [
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ],
  business: [
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ],
  lifestyle: [
    "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ],
  tutorials: [
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ],
  politics: [
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1575320181282-9afab399332c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1569252938913-24f0722d7894?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ],
  world: [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ],
  sports: [
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ],
  entertainment: [
    "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ],
  science: [
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ],
  health: [
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ],
}

// Function to get a random image for a category
function getCategoryImage(category: string, index: number) {
  const images = categoryImages[category as keyof typeof categoryImages] || categoryImages.world
  return images[index % images.length]
}

// Generate mock posts with real images
const generatePosts = (count: number): Post[] => {
  const posts: Post[] = []

  for (let i = 1; i <= count; i++) {
    const categoryIndex = i % categories.length
    const authorIndex = i % authors.length
    const sourceIndex = i % newsSources.length
    const languageIndex = i % languages.length
    const isFeatured = i <= 8
    const isBreaking = i % 10 === 0
    const isTopNews = i % 5 === 0
    const categorySlug = categories[categoryIndex].slug

    // Get a real image for this post based on its category
    const imageUrl = getCategoryImage(categorySlug, i)

    posts.push({
      id: `post-${i}`,
      title: `${isBreaking ? "BREAKING: " : ""}${categories[categoryIndex].name} News: Latest Updates and Developments ${i}`,
      slug: `${categorySlug}-news-${i}`,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
        <h2>Latest Developments</h2>
        <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
        <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
        <h2>Expert Analysis</h2>
        <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
        <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
        <h2>What This Means</h2>
        <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
        <p>For more information, visit the <a href="${newsSources[sourceIndex].website}" target="_blank" rel="noopener noreferrer">original source</a>.</p>
      `,
      coverImage: imageUrl,
      publishedAt: new Date(Date.now() - i * 3600000).toISOString(), // More recent timestamps
      updatedAt: new Date(Date.now() - i * 1800000).toISOString(),
      readingTime: Math.floor(Math.random() * 10) + 3,
      category: categorySlug,
      tags: ["news", categorySlug, i % 2 === 0 ? "trending" : "featured"],
      author: authors[authorIndex],
      featured: isFeatured,
      breaking: isBreaking,
      topNews: isTopNews,
      source: newsSources[sourceIndex],
      originalUrl: newsSources[sourceIndex].website + "/article-" + i,
      language: languages[languageIndex],
    })
  }

  return posts
}

// Generate 50 mock posts (increased from 30)
const mockPosts = generatePosts(50)

// Mock data for comments
const mockCommentAuthors: CommentAuthor[] = [
  {
    id: "user1",
    name: "Alice Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    isVerified: true,
  },
  {
    id: "user2",
    name: "Bob Smith",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "user3",
    name: "Carol Williams",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    isVerified: true,
  },
  {
    id: "user4",
    name: "David Brown",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "user5",
    name: "Eva Martinez",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]

// Generate mock comments for posts
const generateMockComments = () => {
  const comments: Record<string, Comment[]> = {}

  // Generate comments for each post
  mockPosts.forEach((post) => {
    const commentCount = Math.floor(Math.random() * 10) + 1 // 1-10 comments per post
    const postComments: Comment[] = []

    for (let i = 0; i < commentCount; i++) {
      const authorIndex = Math.floor(Math.random() * mockCommentAuthors.length)
      const commentId = `comment-${post.id}-${i}`
      const daysAgo = Math.floor(Math.random() * 14) // 0-14 days ago
      const createdAt = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString()

      const comment: Comment = {
        id: commentId,
        postId: post.id,
        content: getRandomCommentContent(),
        author: mockCommentAuthors[authorIndex],
        createdAt,
        likes: Math.floor(Math.random() * 50),
        isLiked: Math.random() > 0.7,
      }

      // Add replies to some comments (30% chance)
      if (Math.random() > 0.7) {
        const replyCount = Math.floor(Math.random() * 3) + 1 // 1-3 replies
        const replies: Comment[] = []

        for (let j = 0; j < replyCount; j++) {
          const replyAuthorIndex = Math.floor(Math.random() * mockCommentAuthors.length)
          const replyId = `reply-${commentId}-${j}`
          const replyDaysAgo = Math.floor(Math.random() * daysAgo) // More recent than parent comment
          const replyCreatedAt = new Date(Date.now() - replyDaysAgo * 24 * 60 * 60 * 1000).toISOString()

          replies.push({
            id: replyId,
            postId: post.id,
            parentId: commentId,
            content: getRandomReplyContent(),
            author: mockCommentAuthors[replyAuthorIndex],
            createdAt: replyCreatedAt,
            likes: Math.floor(Math.random() * 20),
            isLiked: Math.random() > 0.7,
          })
        }

        comment.replies = replies
      }

      postComments.push(comment)
    }

    comments[post.id] = postComments

    // Update post with comment count
    post.commentCount =
      postComments.length + postComments.reduce((total, comment) => total + (comment.replies?.length || 0), 0)
  })

  return comments
}

// Random comment content
function getRandomCommentContent() {
  const comments = [
    "This article was really insightful. Thanks for sharing!",
    "I disagree with some points here, but it's a well-written piece overall.",
    "Has anyone else noticed that this topic has been getting more attention lately?",
    "Great analysis! I'd love to see a follow-up on how this affects the industry.",
    "I've been following this story for a while, and this is the best coverage I've seen.",
    "The author makes some compelling arguments. I'm convinced!",
    "Interesting perspective. I hadn't thought about it that way before.",
    "This is exactly what I've been saying for years. Glad to see it getting coverage.",
    "I'm sharing this with my colleagues. Very relevant to our current project.",
    "The data presented here is fascinating. Where can I find more information?",
    "I appreciate the balanced approach taken in this article.",
    "This explains a lot about what's been happening in the market lately.",
    "I wonder how these developments will play out in the long term.",
    "As someone working in this field, I can confirm these observations are accurate.",
    "This article raises some important questions that need to be addressed.",
  ]
  return comments[Math.floor(Math.random() * comments.length)]
}

function getRandomReplyContent() {
  const replies = [
    "I completely agree with your point!",
    "That's an interesting perspective, but have you considered...",
    "Thanks for sharing your thoughts on this.",
    "I see where you're coming from, but I think there's more to it.",
    "You've made a really good point that I hadn't considered.",
    "I've had a similar experience with this issue.",
    "Can you elaborate more on what you mean?",
    "This is exactly what I was thinking while reading the article.",
    "I appreciate your insight on this topic.",
    "That's a valid concern. I wonder how the author would respond.",
  ]
  return replies[Math.floor(Math.random() * replies.length)]
}

// Generate mock comments
const mockComments = generateMockComments()

// Get comments for a specific post
export async function getComments(postId: string): Promise<Comment[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return mockComments[postId] || []
}

// Add a new comment
export async function addComment(postId: string, data: CommentFormData, currentUser?: CommentAuthor): Promise<Comment> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Use a default user if none provided (for demo purposes)
  const user = currentUser || {
    id: "current-user",
    name: "Current User",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    isVerified: false,
  }

  const newComment: Comment = {
    id: `comment-${Date.now()}`,
    postId,
    content: data.content,
    author: user,
    createdAt: new Date().toISOString(),
    likes: 0,
    isLiked: false,
  }

  if (data.parentId) {
    newComment.parentId = data.parentId

    // Find the parent comment and add this as a reply
    const parentComment = mockComments[postId]?.find((c) => c.id === data.parentId)
    if (parentComment) {
      if (!parentComment.replies) {
        parentComment.replies = []
      }
      parentComment.replies.push(newComment)
    }
  } else {
    // Add as a top-level comment
    if (!mockComments[postId]) {
      mockComments[postId] = []
    }
    mockComments[postId].unshift(newComment)
  }

  // Update comment count on the post
  const post = mockPosts.find((p) => p.id === postId)
  if (post) {
    post.commentCount = (post.commentCount || 0) + 1
  }

  return newComment
}

// Toggle like on a comment
export async function toggleCommentLike(commentId: string, postId: string): Promise<{ liked: boolean; likes: number }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Find the comment (either top-level or reply)
  let comment: Comment | undefined

  // Check top-level comments
  comment = mockComments[postId]?.find((c) => c.id === commentId)

  // If not found, check replies
  if (!comment) {
    for (const parentComment of mockComments[postId] || []) {
      if (parentComment.replies) {
        comment = parentComment.replies.find((r) => r.id === commentId)
        if (comment) break
      }
    }
  }

  if (comment) {
    comment.isLiked = !comment.isLiked
    comment.likes = comment.isLiked ? comment.likes + 1 : Math.max(0, comment.likes - 1)
    return { liked: comment.isLiked, likes: comment.likes }
  }

  throw new Error("Comment not found")
}

// Delete a comment
export async function deleteComment(commentId: string, postId: string): Promise<boolean> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Find and remove the comment
  const commentIndex = mockComments[postId]?.findIndex((c) => c.id === commentId)

  if (commentIndex !== undefined && commentIndex >= 0) {
    // It's a top-level comment
    mockComments[postId].splice(commentIndex, 1)

    // Update comment count on the post
    const post = mockPosts.find((p) => p.id === postId)
    if (post && post.commentCount) {
      post.commentCount -= 1
    }

    return true
  } else {
    // Check if it's a reply
    for (const parentComment of mockComments[postId] || []) {
      if (parentComment.replies) {
        const replyIndex = parentComment.replies.findIndex((r) => r.id === commentId)
        if (replyIndex >= 0) {
          parentComment.replies.splice(replyIndex, 1)

          // Update comment count on the post
          const post = mockPosts.find((p) => p.id === postId)
          if (post && post.commentCount) {
            post.commentCount -= 1
          }

          return true
        }
      }
    }
  }

  return false
}
// API functions
export async function getFeaturedPosts(): Promise<Post[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockPosts.filter((post) => post.featured).slice(0, 6)
}

export async function getBreakingNews(): Promise<Post[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  return mockPosts.filter((post) => post.breaking).slice(0, 4)
}

export async function getTopNews(): Promise<Post[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockPosts.filter((post) => post.topNews).slice(0, 8)
}

export async function getLatestPosts(limit = 6): Promise<Post[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, limit)
}

export async function getPosts(params: PostsQueryParams = {}): Promise<PostsResponse> {
  const { page = 1, limit = 9, category = "", search = "", tag = "", source = "", language = "" } = params

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredPosts = [...mockPosts]

  // Filter by category
  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.category === category)
  }

  // Filter by search term
  if (search) {
    const searchLower = search.toLowerCase()
    filteredPosts = filteredPosts.filter(
      (post) => post.title.toLowerCase().includes(searchLower) || post.excerpt.toLowerCase().includes(searchLower),
    )
  }

  // Filter by tag
  if (tag) {
    filteredPosts = filteredPosts.filter((post) => post.tags.includes(tag))
  }

  // Filter by source
  if (source) {
    filteredPosts = filteredPosts.filter((post) => post.source.slug === source)
  }

  // Filter by language
  if (language) {
    filteredPosts = filteredPosts.filter((post) => post.language.code === language)
  }

  // Sort by date (newest first)
  filteredPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  // Calculate pagination
  const totalPosts = filteredPosts.length
  const totalPages = Math.ceil(totalPosts / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  return {
    posts: filteredPosts.slice(startIndex, endIndex),
    totalPages,
    totalPosts,
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  const post = mockPosts.find((post) => post.slug === slug)
  return post || null
}

export async function getRelatedPosts(postId: string, category: string): Promise<Post[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockPosts
    .filter((post) => post.id !== postId && post.category === category)
    .sort(() => Math.random() - 0.5) // Randomize order
    .slice(0, 3)
}

export async function getAllCategories(): Promise<Category[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  return categories
}

export async function getAllSources(): Promise<NewsSource[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  return newsSources
}

export async function getAllLanguages(): Promise<Language[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  return languages
}

export async function getSavedPosts(ids: string[]): Promise<Post[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockPosts.filter((post) => ids.includes(post.id))
}
