import type { Metadata } from "next";
import Link from "next/link";
import Schema from "@/components/Schema";
import { ORGANIZATION_CONFIG } from "@/config/organization";
import { createPageMetadata } from "@/utils/metadata";

const pageUrl = `${ORGANIZATION_CONFIG.url}/privacy-policy`;

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how TechFi Labs collects, uses, shares, protects, and retains personal information when you use our website or contact our team.",
  path: "/privacy-policy",
});

const sections = [
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use-information", label: "How we use information" },
  { id: "cookies-and-analytics", label: "Cookies and analytics" },
  { id: "sharing-information", label: "How information is shared" },
  { id: "retention-and-security", label: "Retention and security" },
  { id: "your-rights", label: "Your privacy rights" },
  { id: "international-transfers", label: "International transfers" },
  { id: "children-and-links", label: "Children and external links" },
  { id: "policy-updates", label: "Policy updates" },
  { id: "contact-us", label: "Contact us" },
] as const;

export default function PrivacyPolicyPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: `Privacy Policy | ${ORGANIZATION_CONFIG.name}`,
        description:
          "How TechFi Labs collects, uses, shares, protects, and retains personal information.",
        isPartOf: { "@id": `${ORGANIZATION_CONFIG.url}/#website` },
        publisher: { "@id": `${ORGANIZATION_CONFIG.url}/#organization` },
        dateModified: "2026-09-07",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: ORGANIZATION_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Privacy Policy",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#effcf5] text-slate-800">
      <Schema id="privacy-policy-jsonld" data={schemaData} />

      <header className="relative overflow-hidden bg-[linear-gradient(145deg,#03291d_0%,#064e2f_58%,#047857_100%)] px-6 pb-16 pt-36 text-white sm:pb-20 sm:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(52,211,153,0.18),transparent_32%),radial-gradient(circle_at_12%_88%,rgba(167,243,208,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-emerald-100/80">
            <Link className="rounded-md hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200" href="/">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-emerald-50">Privacy Policy</span>
          </nav>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
            Legal &amp; Privacy
          </p>
          <h1 className="max-w-4xl font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-emerald-50/85 sm:text-lg">
            This policy explains how TechFi Labs handles personal information when you visit our website, contact us, or discuss our services.
          </p>
          <p className="mt-6 text-sm font-medium text-emerald-100/75">
            Effective and last updated: September 7, 2026
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:py-20">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            On this page
          </p>
          <nav aria-label="Privacy policy sections">
            <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    className="inline-flex min-h-11 w-full items-center rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-emerald-100/60 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    href={`#${section.id}`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="min-w-0 rounded-[2rem] border border-emerald-900/10 bg-[#f7fefa] p-6 shadow-[0_24px_64px_rgba(6,78,47,0.08)] sm:p-9 lg:p-12">
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Overview
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              TechFi Labs, a unit of The Technology Fiction, provides AI automation, Salesforce delivery, and custom engineering services. In this policy, “TechFi Labs,” “we,” “us,” and “our” refer to the team operating this website and handling the enquiries submitted through it.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              This policy applies to information collected through techfilabs.com, our contact forms, and direct communications relating to our services. Separate agreements may govern information processed for a client as part of a project.
            </p>
          </section>

          <PolicySection id="information-we-collect" title="Information we collect">
            <p>We may collect the following categories of information:</p>
            <ul>
              <li><strong>Contact information:</strong> name, work email, phone number, company name, and location information you choose to provide.</li>
              <li><strong>Enquiry information:</strong> service interests, project requirements, workflow details, messages, and files or information you voluntarily share.</li>
              <li><strong>Communication information:</strong> emails, WhatsApp messages, call details, meeting notes, and related correspondence.</li>
              <li><strong>Website and device information:</strong> IP address, browser and device type, pages visited, referral source, interaction events, approximate location, and similar diagnostic information collected through analytics and hosting systems.</li>
              <li><strong>Business relationship information:</strong> project contacts, proposals, contracts, support requests, invoices, and delivery records where you become a client or supplier.</li>
            </ul>
            <p>Please do not submit passwords, financial credentials, government identifiers, health records, or other sensitive information through the general website contact form.</p>
          </PolicySection>

          <PolicySection id="how-we-use-information" title="How we use information">
            <p>We use personal information to:</p>
            <ul>
              <li>Respond to enquiries and arrange consultations.</li>
              <li>Understand, scope, propose, and deliver requested services.</li>
              <li>Provide project communication, support, administration, and billing.</li>
              <li>Operate, secure, troubleshoot, and improve our website and services.</li>
              <li>Measure website performance and understand how visitors use the site.</li>
              <li>Maintain business records and comply with legal obligations.</li>
              <li>Prevent fraud, misuse, security incidents, and other harmful activity.</li>
            </ul>
            <p>Depending on the circumstances and applicable law, we process information with your consent, to take steps requested before entering a contract, to perform a contract, to meet legal obligations, or for legitimate business interests that do not override your rights.</p>
          </PolicySection>

          <PolicySection id="cookies-and-analytics" title="Cookies and analytics">
            <p>
              We use Google Analytics to understand website traffic and interactions. Analytics technologies may use cookies or similar identifiers and may receive information such as your IP address, device details, pages viewed, and referral source. Google processes this information under its own privacy terms.
            </p>
            <p>
              Essential hosting and security systems may also use technical identifiers needed to deliver and protect the website. You can control or delete cookies through your browser settings. Blocking some technologies may affect website functionality. Where applicable law requires consent for non-essential analytics, those technologies should be used subject to the required consent controls.
            </p>
          </PolicySection>

          <PolicySection id="sharing-information" title="How information is shared">
            <p>We do not sell personal information for money. We may share information only as reasonably necessary with:</p>
            <ul>
              <li><strong>Service providers:</strong> providers supporting website hosting, analytics, email delivery, communications, scheduling, security, and business operations, including Vercel, Google Analytics, EmailJS, and WhatsApp/Meta where those services are used.</li>
              <li><strong>Professional advisers:</strong> legal, accounting, insurance, or other advisers when necessary.</li>
              <li><strong>Authorities or other parties:</strong> when required by law, legal process, or to protect rights, safety, systems, and users.</li>
              <li><strong>Business transaction parties:</strong> if our business or assets are reorganized, financed, acquired, or transferred, subject to appropriate confidentiality measures.</li>
            </ul>
            <p>Third-party websites and services have their own privacy practices. Review their policies before providing information directly to them.</p>
          </PolicySection>

          <PolicySection id="retention-and-security" title="Retention and security">
            <p>
              We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including responding to enquiries, maintaining business records, resolving disputes, protecting systems, and meeting contractual or legal requirements. Retention periods vary according to the type of information and relationship involved.
            </p>
            <p>
              We use reasonable technical and organizational safeguards designed to protect information from unauthorized access, alteration, disclosure, or loss. No internet transmission, platform, or storage method can be guaranteed to be completely secure.
            </p>
          </PolicySection>

          <PolicySection id="your-rights" title="Your privacy rights">
            <p>Depending on where you live and the law that applies, you may have rights to:</p>
            <ul>
              <li>Ask whether we process your personal information and request access to it.</li>
              <li>Request correction, completion, or updating of inaccurate information.</li>
              <li>Request deletion of information, subject to legal and contractual exceptions.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Object to or request restriction of certain processing.</li>
              <li>Request a portable copy of eligible information.</li>
              <li>Raise a grievance or complain to the relevant data-protection authority.</li>
              <li>Exercise applicable privacy rights without unlawful discrimination.</li>
            </ul>
            <p>
              To make a request, email us using the details below. We may ask for information needed to verify your identity and protect your data. Some requests may be limited where retention or processing is required by law or necessary to establish, exercise, or defend legal claims.
            </p>
          </PolicySection>

          <PolicySection id="international-transfers" title="International transfers">
            <p>
              TechFi Labs is based in India and works with service providers and business contacts in multiple countries. Your information may therefore be processed outside your country of residence. Where required, we use contractual, organizational, or other lawful safeguards appropriate to the transfer and the services involved.
            </p>
          </PolicySection>

          <PolicySection id="children-and-links" title="Children and external links">
            <p>
              This business website is not directed to individuals under 18, and we do not knowingly collect personal information from children through it. If you believe a child has submitted information, contact us so we can review and delete it where appropriate.
            </p>
            <p>
              The website may link to third-party websites, application stores, social platforms, or communication services. We are not responsible for their content or privacy practices.
            </p>
          </PolicySection>

          <PolicySection id="policy-updates" title="Updates to this policy">
            <p>
              We may update this policy when our services, providers, or legal obligations change. The latest version will be published on this page with an updated effective date. Material changes may also be communicated through an appropriate additional notice.
            </p>
          </PolicySection>

          <PolicySection id="contact-us" title="Contact us">
            <p>For privacy questions, requests, or grievances, contact:</p>
            <address className="not-italic">
              <strong>{ORGANIZATION_CONFIG.name}</strong><br />
              A unit of The Technology Fiction<br />
              {ORGANIZATION_CONFIG.contact.address}<br />
              Email: <a href={`mailto:${ORGANIZATION_CONFIG.contact.email}`}>{ORGANIZATION_CONFIG.contact.email}</a><br />
              Phone: <a href={`tel:${ORGANIZATION_CONFIG.contact.phone.replace(/\s/g, "")}`}>{ORGANIZATION_CONFIG.contact.phoneFormatted}</a>
            </address>
          </PolicySection>
        </article>
      </main>
    </div>
  );
}

interface PolicySectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function PolicySection({ id, title, children }: PolicySectionProps) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-emerald-900/10 pt-9 first:border-0 first:pt-0 [&+section]:mt-9">
      <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-slate-600 [&_a]:font-semibold [&_a]:text-emerald-700 [&_a]:underline [&_a]:decoration-emerald-300 [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-slate-800 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </section>
  );
}
