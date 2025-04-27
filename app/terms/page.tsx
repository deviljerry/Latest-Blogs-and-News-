import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline flex items-center mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: April 27, 2025</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>1. Introduction</h2>
        <p>
          Welcome to NewsHub ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of
          the NewsHub website, mobile applications, and services (collectively, the "Service").
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms,
          you may not access or use the Service.
        </p>

        <h2>2. Using Our Service</h2>
        <h3>2.1 Account Registration</h3>
        <p>
          To access certain features of the Service, you may be required to register for an account. You agree to
          provide accurate, current, and complete information during the registration process and to update such
          information to keep it accurate, current, and complete.
        </p>
        <h3>2.2 Account Security</h3>
        <p>
          You are responsible for safeguarding your password and for all activities that occur under your account. You
          agree to notify us immediately of any unauthorized use of your account.
        </p>
        <h3>2.3 Age Restrictions</h3>
        <p>
          The Service is intended for users who are at least 13 years of age. By using the Service, you confirm that you
          are at least 13 years old.
        </p>

        <h2>3. Content and Conduct</h2>
        <h3>3.1 User Content</h3>
        <p>
          Our Service may allow you to post, link, store, share, and otherwise make available certain information, text,
          graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post
          on or through the Service, including its legality, reliability, and appropriateness.
        </p>
        <h3>3.2 Content License</h3>
        <p>
          By posting User Content on or through the Service, you grant us a worldwide, non-exclusive, royalty-free
          license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly
          perform, and otherwise use the User Content in connection with operating and providing the Service.
        </p>
        <h3>3.3 Prohibited Conduct</h3>
        <p>You agree not to engage in any of the following prohibited activities:</p>
        <ul>
          <li>
            Using the Service for any illegal purpose or in violation of any local, state, national, or international
            law;
          </li>
          <li>
            Harassing, threatening, intimidating, or impersonating any other user of the Service or any NewsHub
            employee;
          </li>
          <li>Posting or transmitting any content that is libelous, defamatory, obscene, fraudulent, or offensive;</li>
          <li>
            Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to
            or from the servers running the Service;
          </li>
          <li>
            Taking any action that imposes, or may impose, an unreasonable or disproportionately large load on our
            infrastructure;
          </li>
          <li>Uploading invalid data, viruses, worms, or other software agents through the Service;</li>
          <li>Collecting or harvesting any personally identifiable information from the Service;</li>
          <li>Using the Service for any commercial solicitation purposes without our prior written consent;</li>
          <li>Impersonating another person or otherwise misrepresenting your affiliation with a person or entity;</li>
          <li>Interfering with the proper working of the Service.</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <h3>4.1 Our Content</h3>
        <p>
          The Service and its original content (excluding User Content), features, and functionality are and will remain
          the exclusive property of NewsHub and its licensors. The Service is protected by copyright, trademark, and
          other laws of both the United States and foreign countries.
        </p>
        <h3>4.2 Trademarks</h3>
        <p>
          The NewsHub name, logo, and all related names, logos, product and service names, designs, and slogans are
          trademarks of NewsHub or its affiliates or licensors. You may not use such marks without our prior written
          permission.
        </p>

        <h2>5. Third-Party Links and Services</h2>
        <p>
          The Service may contain links to third-party websites or services that are not owned or controlled by NewsHub.
          We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any
          third-party websites or services. You acknowledge and agree that NewsHub shall not be responsible or liable
          for any damage or loss caused by or in connection with the use of any such content, goods, or services
          available on or through any such websites or services.
        </p>

        <h2>6. Termination</h2>
        <p>
          We may terminate or suspend your account and access to the Service immediately, without prior notice or
          liability, for any reason, including if you breach these Terms. Upon termination, your right to use the
          Service will immediately cease.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          In no event shall NewsHub, its directors, employees, partners, agents, suppliers, or affiliates be liable for
          any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of
          profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability
          to access or use the Service.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide
          at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be
          determined at our sole discretion.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto:legal@newshub.com" className="text-primary hover:underline">
            legal@newshub.com
          </a>
          .
        </p>
      </div>
    </div>
  )
}
