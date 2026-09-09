import { LegalPage } from "@/components/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage>
      <article className="space-y-6 text-zinc-700 [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-zinc-950 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-zinc-900 [&_p]:m-0 [&_p]:text-base [&_p]:leading-7 [&_ul]:m-0 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:text-base [&_li]:leading-7 [&_li]:text-zinc-700 [&_strong]:font-semibold [&_strong]:text-zinc-950 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4">
        <h1>Terms &amp; Conditions</h1>

        <p>
          <strong>Effective Date:</strong> September 10, 2026
        </p>

        <p>
          These terms govern the use of closecove.com and any services engaged
          through CloseCove (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;). By
          submitting an inquiry or engaging our services, you agree to the terms
          below.
        </p>

        <h2>Our Services</h2>

        <p>
          CloseCove builds AI-powered lead-response and automation systems for
          local businesses, offered under two current packages — Starter and Growth
          — as described on our Pricing page. Specific features, pricing, and
          scope for your business will be confirmed in writing (a proposal or
          agreement) before any work begins.
        </p>

        <h2>The Live Demo</h2>

        <p>
          The interactive demo on this site (&quot;FitFlow&quot;) is an illustrative
          example built with mocked data for a fictional business. It demonstrates
          the type of system we build but is not connected to real SMS, calendar,
          or payment systems. A live client system is custom-built with your real
          business information and real integrations.
        </p>

        <h2>Pricing &amp; Payment</h2>

        <ul>
          <li>
            Current pricing is listed on our Pricing page and may change; any
            engagement will use the pricing confirmed in your proposal at the
            time of agreement.
          </li>
          <li>
            Setup fees are typically split into two payments (an upfront deposit
            and a balance on delivery), as confirmed in your proposal.
          </li>
          <li>
            Monthly fees begin once your system is live, not before.
          </li>
          <li>
            Deposits cover work already performed and are non-refundable once
            building has started. No further payment is owed if you choose not to
            continue before delivery.
          </li>
        </ul>

        <h2>Cancellation</h2>

        <p>
          Monthly service is billed month-to-month with no long-term contract. You
          may cancel at any time; cancellation stops future monthly billing but
          does not refund amounts already paid for periods already rendered.
        </p>

        <h2>Custom Requests</h2>

        <p>
          Requests outside our standard packages are evaluated individually and
          quoted separately — they are not included in Starter or Growth pricing
          unless explicitly agreed in writing.
        </p>

        <h2>Support Scope</h2>

        <p>
          Monthly service includes hosting, monitoring, and fixing issues with your
          system as described in your package. We aim to respond to urgent issues
          the same business day but do not guarantee 24/7 availability.
        </p>

        <h2>Limitation of Liability</h2>

        <p>
          CloseCove provides these services on an &quot;as available&quot; basis.
          While we work to ensure systems function reliably, we are not liable for
          indirect losses arising from system downtime, missed leads, or
          third-party service outages (e.g., issues originating from SMS, calendar,
          or AI providers we integrate with) beyond correcting the issue as soon
          as reasonably possible.
        </p>

        <h2>Changes to These Terms</h2>

        <p>
          We may update these terms as our services evolve. Continued use of our
          services after an update constitutes acceptance of the revised terms.
        </p>

        <h2>Contact</h2>

        <p>
          Questions about these terms can be sent to hello@closecove.com.
        </p>
      </article>
    </LegalPage>
  );
}
