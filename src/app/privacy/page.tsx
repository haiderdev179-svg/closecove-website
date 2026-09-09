import { LegalPage } from "@/components/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage>
      <article className="prose prose-zinc max-w-none">
        <h1>Privacy Policy</h1>

        <p>
          <strong>Effective Date:</strong> September 10, 2026
        </p>

        <p>
          CloseCove (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates
          closecove.com. This policy explains what information we collect when you
          visit our site or submit an inquiry, and how we use it.
        </p>

        <h2>What We Collect</h2>

        <p>
          When you submit the inquiry form on this site, we collect:
        </p>

        <ul>
          <li>Your name</li>
          <li>Business name</li>
          <li>Business type</li>
          <li>Phone number or email address</li>
          <li>
            Any details you provide about your business&apos;s lead/booking
            challenges
          </li>
        </ul>

        <p>
          We do not require account creation, and we do not collect payment
          information through this website — pricing discussions and payment happen
          directly between you and us after contact is made.
        </p>

        <h2>How We Use This Information</h2>

        <p>Submitted inquiry information is used solely to:</p>

        <ul>
          <li>Respond to your inquiry</li>
          <li>Understand your business needs before a call</li>
          <li>Follow up regarding CloseCove&apos;s services</li>
        </ul>

        <p>
          We do not sell, rent, or share your information with third parties for
          marketing purposes.
        </p>

        <h2>Third-Party Services We Use</h2>

        <p>
          To operate this website and respond to inquiries, we use the following
          service providers, who may process your data as part of delivering their
          service to us:
        </p>

        <ul>
          <li>
            <strong>Resend</strong> — used to deliver inquiry form notifications to
            our team via email
          </li>
          <li>
            <strong>Vercel</strong> — hosts this website
          </li>
        </ul>

        <p>
          These providers process data only as needed to perform their function
          (e.g., sending an email, serving the website) and are bound by their
          own privacy and security practices.
        </p>

        <h2>Data Retention</h2>

        <p>
          We retain inquiry submissions for as long as necessary to respond to you
          and maintain a record of business inquiries, or until you request
          deletion (see below).
        </p>

        <h2>Your Rights</h2>

        <p>
          You can request that we delete any information you&apos;ve submitted by
          emailing hello@closecove.com. We will honor such requests promptly.
        </p>

        <h2>Cookies</h2>

        <p>
          This website does not currently use tracking or advertising cookies. If
          this changes, this policy will be updated accordingly.
        </p>

        <h2>Changes to This Policy</h2>

        <p>
          We may update this policy as our services evolve. Material changes will
          be reflected with an updated effective date above.
        </p>

        <h2>Contact</h2>

        <p>
          Questions about this policy or your data can be sent to
          hello@closecove.com.
        </p>
      </article>
    </LegalPage>
  );
}
