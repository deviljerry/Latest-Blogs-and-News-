import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline flex items-center mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: April 27, 2025</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>1. Introduction</h2>
        <p>
          At NewsHub, we respect your privacy and are committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you visit our website or use our
          services.
        </p>
        <p>
          Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please
          do not access the site or use our services.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Data</h3>
        <p>We may collect personal identification information from you in various ways, including:</p>
        <ul>
          <li>
            <strong>Account Information:</strong> When you create an account, we collect your name, email address, and
            password.
          </li>
          <li>
            <strong>Profile Information:</strong> Information you provide in your user profile, such as a profile
            picture, bio, or location.
          </li>
          <li>
            <strong>Communication Data:</strong> If you contact us directly, we may collect additional information such
            as your name, email address, phone number, and the contents of the message.
          </li>
          <li>
            <strong>Subscription Information:</strong> If you subscribe to our newsletter, we collect your email
            address.
          </li>
        </ul>

        <h3>2.2 Usage Data</h3>
        <p>We may also collect information about how the Service is accessed and used, including:</p>
        <ul>
          <li>Your IP address, browser type, and version</li>
          <li>The pages of our Service that you visit and the time spent on those pages</li>
          <li>The time and date of your visit</li>
          <li>The referring website or source that led you to our Service</li>
          <li>Your device information (type, model, operating system)</li>
        </ul>

        <h3>2.3 Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar tracking technologies to track activity on our Service and hold certain
          information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
          you do not accept cookies, you may not be able to use some portions of our Service.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our Service</li>
          <li>Improve, personalize, and expand our Service</li>
          <li>Understand and analyze how you use our Service</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you about our Service, updates, and other information</li>
          <li>Process your transactions</li>
          <li>Send you marketing and promotional communications (with your consent)</li>
          <li>Find and prevent fraud</li>
          <li>For compliance, legal process, and law enforcement purposes</li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>We may share your information with third parties in the following situations:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share your information with third-party vendors, service
            providers, contractors, or agents who perform services for us.
          </li>
          <li>
            <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a
            portion of our assets, your information may be transferred as part of that transaction.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in
            response to valid requests by public authorities.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may share your information with your consent or as otherwise
            disclosed at the time of data collection or sharing.
          </li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We have implemented appropriate technical and organizational security measures designed to protect the
          security of any personal information we process. However, please also remember that we cannot guarantee that
          the internet itself is 100% secure.
        </p>

        <h2>6. Your Data Protection Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul>
          <li>The right to access, update, or delete your information</li>
          <li>The right to rectification (to correct or update your information)</li>
          <li>The right to object (to processing of your information)</li>
          <li>The right of restriction (to request that we restrict processing)</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>
        <p>
          To exercise these rights, please contact us at{" "}
          <a href="mailto:privacy@newshub.com" className="text-primary hover:underline">
            privacy@newshub.com
          </a>
          .
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Our Service is not directed to children under the age of 13. We do not knowingly collect personally
          identifiable information from children under 13. If you are a parent or guardian and you are aware that your
          child has provided us with personal data, please contact us.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
          effective when they are posted on this page.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:privacy@newshub.com" className="text-primary hover:underline">
            privacy@newshub.com
          </a>
          .
        </p>
      </div>
    </div>
  )
}
