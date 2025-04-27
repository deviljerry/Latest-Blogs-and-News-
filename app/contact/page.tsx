"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormState("success")
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Contact background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Have questions, feedback, or news tips? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>

            {formState === "success" ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Message Sent Successfully!</h3>
                <p className="text-gray-700 mb-6">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button onClick={() => setFormState("idle")}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Subject</Label>
                  <RadioGroup value={formData.subject} onValueChange={handleRadioChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="General Inquiry" id="general" />
                      <Label htmlFor="general" className="font-normal">
                        General Inquiry
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="News Tip" id="news" />
                      <Label htmlFor="news" className="font-normal">
                        News Tip
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Feedback" id="feedback" />
                      <Label htmlFor="feedback" className="font-normal">
                        Feedback
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Partnership" id="partnership" />
                      <Label htmlFor="partnership" className="font-normal">
                        Partnership
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={formState === "submitting"}>
                  {formState === "submitting" ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-700 mt-1">For general inquiries:</p>
                  <a href="mailto:info@newshub.com" className="text-blue-600 hover:underline">
                    info@newshub.com
                  </a>
                  <p className="text-gray-700 mt-1">For press releases and news tips:</p>
                  <a href="mailto:tips@newshub.com" className="text-blue-600 hover:underline">
                    tips@newshub.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-700 mt-1">Main Office:</p>
                  <p className="text-blue-600">+1 (555) 123-4567</p>
                  <p className="text-gray-700 mt-1">News Desk (24/7):</p>
                  <p className="text-blue-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                  <p className="text-gray-700 mt-1">NewsHub Headquarters</p>
                  <p className="text-gray-700">123 Media Avenue</p>
                  <p className="text-gray-700">New York, NY 10001</p>
                  <p className="text-gray-700">United States</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-md h-64 relative">
              <Image
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Map location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20 flex items-center justify-center">
                <Button variant="outline" className="bg-white hover:bg-gray-100">
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">How can I submit a news tip?</h3>
              <p className="text-gray-700">
                You can submit news tips through our contact form, by emailing tips@newshub.com, or by calling our news
                desk at +1 (555) 987-6543.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">How do I subscribe to your newsletter?</h3>
              <p className="text-gray-700">
                You can subscribe to our newsletter by creating an account on our website or by entering your email in
                the subscription box at the bottom of our homepage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Do you offer advertising opportunities?</h3>
              <p className="text-gray-700">
                Yes, we offer various advertising options for businesses. Please contact our advertising team at
                advertising@newshub.com for more information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">How can I report an error in an article?</h3>
              <p className="text-gray-700">
                We take accuracy seriously. If you spot an error, please email corrections@newshub.com with the article
                link and details of the error.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
