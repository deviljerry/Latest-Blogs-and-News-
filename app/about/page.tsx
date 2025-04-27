import Image from "next/image"
import Link from "next/link"
import { Mail, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Team members data
const teamMembers = [
  {
    id: "1",
    name: "John Doe",
    role: "Founder & CEO",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "John has over 15 years of experience in journalism and digital media. He founded NewsHub with a vision to deliver accurate and timely news to readers worldwide.",
    social: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      email: "john@newshub.com",
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Editor in Chief",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Jane brings her extensive background in international journalism to lead our editorial team. She's committed to maintaining the highest standards of journalistic integrity.",
    social: {
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      email: "jane@newshub.com",
    },
  },
  {
    id: "3",
    name: "Alex Johnson",
    role: "Technology Editor",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Alex leads our technology coverage, bringing insights from his decade of experience in Silicon Valley and tech journalism to our readers.",
    social: {
      twitter: "https://twitter.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      email: "alex@newshub.com",
    },
  },
  {
    id: "4",
    name: "Maria Garcia",
    role: "International Correspondent",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Maria covers global events and international politics, with a focus on providing context and analysis that helps readers understand complex world issues.",
    social: {
      twitter: "https://twitter.com/mariagarcia",
      linkedin: "https://linkedin.com/in/mariagarcia",
      email: "maria@newshub.com",
    },
  },
]

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Newsroom background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About NewsHub</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Delivering accurate, timely, and insightful news from around the world.
            </p>
            <p className="text-lg text-blue-100">
              Founded in 2023, NewsHub has quickly become a trusted source for news and analysis across multiple
              categories and languages.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              At NewsHub, we believe that informed citizens are the foundation of a functioning democracy. Our mission
              is to provide accurate, balanced, and insightful news coverage that helps our readers understand the world
              around them.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We're committed to journalistic integrity, factual reporting, and presenting diverse perspectives on the
              issues that matter most.
            </p>
            <p className="text-lg text-gray-700">
              Through our coverage of local, national, and international news, we aim to foster informed discussion and
              contribute to a more connected and understanding global community.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Newspapers and journalism"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Accuracy & Truth</h3>
              <p className="text-gray-700">
                We are committed to factual reporting and thorough fact-checking. We correct errors promptly and
                transparently.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Independence & Fairness</h3>
              <p className="text-gray-700">
                We maintain editorial independence and present diverse perspectives. We strive for fair and balanced
                coverage.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation & Accessibility</h3>
              <p className="text-gray-700">
                We embrace new technologies to deliver news effectively. We make our content accessible to diverse
                audiences worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image src={member.avatar || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-700 mb-4 text-sm">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.social?.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-500"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-500"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social?.email && (
                    <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-blue-500">
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Countries Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-blue-100">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Journalists</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-blue-100">Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Our Community</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Stay informed with the latest news, exclusive content, and special features by subscribing to our newsletter.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/auth/register">Create an Account</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact" className="flex items-center">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
