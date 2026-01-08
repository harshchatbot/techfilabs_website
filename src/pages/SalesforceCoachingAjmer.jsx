import Seo from "../components/Seo";
import WhatsAppChatButton from "../components/WhatsAppChatButton";
import Schema from "../components/Schema";

export default function SalesforceCoachingAjmer() {
  const faqItems = [
    {
      q: "Do you provide Salesforce coaching in Ajmer offline?",
      a: "Yes. We support learners in Ajmer, Rajasthan. Sessions are primarily online for flexibility, and offline sessions can be arranged when required."
    },
    {
      q: "Is this coaching suitable for non-IT or career switchers?",
      a: "Yes. The coaching is structured for beginners and career switchers. We start from fundamentals, then move to hands-on practice, projects, and interview preparation."
    },
    {
      q: "What will I learn in the program?",
      a: "You’ll learn Salesforce Admin concepts (security, data model, automation), development basics (Apex/LWC if needed), real-world use cases, and job-focused interview preparation."
    },
    {
      q: "Do you offer online Salesforce coaching across India?",
      a: "Yes. Online coaching is available across India, so you can learn from any city with live sessions and structured guidance."
    },
    {
      q: "Will you help with resume, LinkedIn, and interview prep?",
      a: "Yes. We cover resume and LinkedIn optimization, project positioning, mock interviews, and a roadmap tailored to your target role."
    },
    {
      q: "How do I get started?",
      a: "Message on WhatsApp to book a free 15-minute career call. We’ll understand your background and suggest the right learning path."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };

  return (
    <>
      <Seo
        title="Salesforce Coaching in Ajmer | Online Salesforce Training India"
        description="Learn Salesforce with expert 1-on-1 mentorship in Ajmer and online across India. Salesforce Admin, Developer, Data Migration, AI & real project-based coaching."
        canonical="https://thetechnologyfiction.com/salesforce-coaching-ajmer"
      />

      {/* FAQ JSON-LD Schema */}
      <Schema id="faq-schema" data={faqSchema} />

      {/* Light theme wrapper */}
      <main className="min-h-screen bg-white text-gray-900 px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          {/* HERO */}
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Salesforce Coaching & Mentorship in Ajmer
              <span className="block text-base md:text-lg font-medium text-gray-600 mt-3">
                Online & Offline | India-Wide Coaching
              </span>
            </h1>

            <p className="text-lg text-gray-700 max-w-3xl">
              Looking for professional Salesforce coaching in Ajmer? The
              Technology Fiction provides structured Salesforce training through
              live mentorship, real projects, and interview preparation — for
              freshers, working professionals, and career switchers.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/917976111087"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-medium transition"
              >
                Chat on WhatsApp
              </a>

              <a
                href="#book-call"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 px-6 py-3 font-medium transition"
              >
                Book Free 15-min Call
              </a>
            </div>
          </section>

          {/* WHY SALESFORCE */}
          <section className="mb-14">
            <h2 className="text-3xl font-semibold mb-4">
              Why Learn Salesforce in 2025?
            </h2>
            <p className="text-gray-700 max-w-4xl">
              Salesforce is the world’s leading CRM platform used by global
              companies across healthcare, finance, retail, and SaaS. With
              demand growing for Admins, Developers, and Consultants, the right
              coaching can speed up your career transition.
            </p>
          </section>

          {/* AJMER + ONLINE */}
          <section className="mb-14">
            <h2 className="text-3xl font-semibold mb-4">
              Salesforce Coaching in Ajmer (Local + Online)
            </h2>
            <p className="text-gray-700 max-w-4xl">
              We serve learners in Ajmer, Rajasthan and across India through
              online coaching. Offline sessions in Ajmer can be arranged when
              required. This approach helps you learn consistently without
              depending on location.
            </p>

            <p className="text-gray-700 max-w-4xl mt-3">
              <strong>
                Serving learners in Ajmer, Rajasthan, and across India through
                online Salesforce coaching.
              </strong>
            </p>
          </section>

          {/* WHAT YOU LEARN */}
          <section className="mb-14">
            <h2 className="text-3xl font-semibold mb-6">What You’ll Learn</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Salesforce Admin (Security, Profiles, Permission Sets)",
                "Salesforce Development (Apex, Triggers, LWC)",
                "Async Apex & Performance Optimization",
                "Data Migration (DBAmp, ETL basics, best practices)",
                "Automation (Flows, Approvals, Integrations overview)",
                "Real Projects + Resume + Interview Preparation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm"
                >
                  <div className="text-gray-900 font-medium">✔ {item}</div>
                </div>
              ))}
            </div>
          </section>

          {/* WHO IT IS FOR */}
          <section className="mb-14">
            <h2 className="text-3xl font-semibold mb-4">
              Who This Coaching Is For
            </h2>
            <ul className="list-disc pl-6 text-gray-700 max-w-3xl space-y-2">
              <li>Freshers starting their IT careers</li>
              <li>Non-IT professionals switching to Salesforce</li>
              <li>Working Salesforce Admins & Developers leveling up</li>
              <li>Professionals aiming for better roles and packages</li>
            </ul>
          </section>

          {/* FAQ SECTION */}
          <section className="mt-16 mb-14">
            <h2 className="text-3xl font-semibold mb-6">FAQs</h2>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-semibold text-gray-900 flex items-center justify-between">
                    <span>{item.q}</span>
                    <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section
            id="book-call"
            className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200"
          >
            <h2 className="text-3xl font-semibold mb-4">
              Book a Free Salesforce Career Call
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Not sure where to start? Get a free 15-minute career guidance call
              and a personalized roadmap based on your background.
            </p>

            <a
              href="https://wa.me/917976111087"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition"
            >
              Chat on WhatsApp
            </a>
            <p className="text-sm text-gray-600 mt-6">
              HQ Location: Ajmer, Rajasthan · Online coaching available across
              India
            </p>
          </section>
        </div>

        <WhatsAppChatButton />
      </main>
    </>
  );
}
