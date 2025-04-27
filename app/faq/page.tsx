import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline flex items-center mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">
          Find answers to common questions about NewsHub, our services, and how to get the most out of your experience.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">General Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is NewsHub?</AccordionTrigger>
              <AccordionContent>
                NewsHub is a comprehensive news platform that aggregates and curates news from various trusted sources
                around the world. We provide coverage across multiple categories including technology, business,
                politics, sports, entertainment, and more, all in one convenient location.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is NewsHub free to use?</AccordionTrigger>
              <AccordionContent>
                Yes, basic access to NewsHub is completely free. We offer a premium subscription option that provides
                additional features such as ad-free browsing, exclusive content, and advanced customization options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How often is content updated?</AccordionTrigger>
              <AccordionContent>
                Our content is updated continuously throughout the day. Breaking news is published as it happens, and
                our editorial team works around the clock to ensure you have access to the latest information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Which languages does NewsHub support?</AccordionTrigger>
              <AccordionContent>
                NewsHub currently supports 8 languages: English, Spanish, French, German, Chinese, Japanese, Arabic, and
                Russian. We're continuously working to add more languages to make our content accessible to a global
                audience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Account & Subscription</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I create an account?</AccordionTrigger>
              <AccordionContent>
                To create an account, click on the "Sign in" button in the top right corner of the page, then select
                "Create an account." Fill in your details, agree to our Terms of Service and Privacy Policy, and click
                "Create account." You'll receive a verification email to activate your account.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>What are the benefits of creating an account?</AccordionTrigger>
              <AccordionContent>
                Creating an account allows you to personalize your news feed, save articles for later reading, receive
                newsletters tailored to your interests, comment on articles, and access your preferences across multiple
                devices.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>How do I reset my password?</AccordionTrigger>
              <AccordionContent>
                If you've forgotten your password, click on the "Sign in" button, then select "Forgot password?" Enter
                the email address associated with your account, and we'll send you a link to reset your password. Follow
                the instructions in the email to create a new password.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>How do I subscribe to newsletters?</AccordionTrigger>
              <AccordionContent>
                You can subscribe to our newsletters by entering your email in the subscription box at the bottom of our
                homepage or in your account settings. You can choose from various newsletter options including daily
                digests, breaking news alerts, and category-specific updates.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Content & Features</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-9">
              <AccordionTrigger>How do I save articles for later?</AccordionTrigger>
              <AccordionContent>
                To save an article for later reading, click on the bookmark icon that appears on each article card or at
                the top of an article page. You must be logged in to use this feature. You can access your saved
                articles by clicking on your profile icon and selecting "Saved Articles."
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>Can I share articles on social media?</AccordionTrigger>
              <AccordionContent>
                Yes, you can share any article on social media platforms. Each article has sharing buttons that allow
                you to quickly share content on Facebook, Twitter, LinkedIn, or via email. You can also copy the direct
                link to share elsewhere.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>How do I filter news by category?</AccordionTrigger>
              <AccordionContent>
                You can filter news by category using the category buttons on the homepage or by visiting the Categories
                page. From there, you can select specific categories to view articles related to those topics. You can
                also use the search function to find articles on specific subjects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger>Are the news sources reliable?</AccordionTrigger>
              <AccordionContent>
                Yes, we carefully select our news sources based on their credibility, accuracy, and journalistic
                standards. We partner with established news organizations and verify information before publication. You
                can view our complete list of sources on the Sources page.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Technical Support</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-13">
              <AccordionTrigger>The website isn't loading properly. What should I do?</AccordionTrigger>
              <AccordionContent>
                If you're experiencing loading issues, try refreshing the page or clearing your browser cache. Make sure
                you're using an up-to-date browser. If problems persist, try accessing the site from a different device
                or browser. If issues continue, please contact our support team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-14">
              <AccordionTrigger>How do I report a bug or technical issue?</AccordionTrigger>
              <AccordionContent>
                To report a bug or technical issue, please visit our Contact page and select "Technical Support" from
                the subject dropdown. Provide as much detail as possible about the issue, including the device and
                browser you're using, and any error messages you received.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-15">
              <AccordionTrigger>Is there a mobile app available?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer mobile apps for both iOS and Android devices. You can download them from the Apple App
                Store or Google Play Store. Our mobile apps provide a seamless reading experience optimized for smaller
                screens and include features like offline reading and push notifications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-16">
              <AccordionTrigger>How do I enable notifications?</AccordionTrigger>
              <AccordionContent>
                To enable browser notifications, click on the bell icon in the header. You'll be prompted to allow
                notifications from our site. On mobile apps, you can manage notification preferences in your account
                settings. You can customize which types of news you want to receive notifications for.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact & Support</h2>
          <p className="mb-4">
            If you couldn't find the answer to your question, please don't hesitate to contact us directly:
          </p>
          <ul className="space-y-2 mb-6">
            <li>
              <strong>General Inquiries:</strong>{" "}
              <a href="mailto:info@newshub.com" className="text-primary hover:underline">
                info@newshub.com
              </a>
            </li>
            <li>
              <strong>Technical Support:</strong>{" "}
              <a href="mailto:support@newshub.com" className="text-primary hover:underline">
                support@newshub.com
              </a>
            </li>
            <li>
              <strong>News Tips:</strong>{" "}
              <a href="mailto:tips@newshub.com" className="text-primary hover:underline">
                tips@newshub.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +1 (555) 123-4567
            </li>
          </ul>
          <p>
            You can also visit our{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact page
            </Link>{" "}
            to fill out our contact form.
          </p>
        </section>
      </div>
    </div>
  )
}
