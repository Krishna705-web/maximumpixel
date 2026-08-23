import React from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for MaximumPixel Media Studio in Jaipur, Rajasthan, India.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative bg-[#0A0A0A] text-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#FF7A1A] hover:text-[#FF8E3C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-3">
          <span className="font-display font-black text-xs text-[#5B2EE8] tracking-widest uppercase">
            LEGAL DOCUMENT
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase">
            MAXIMUMPIXEL — PRIVACY POLICY
          </h1>
          <p className="text-xs text-[#A0A0A0]">Last updated: August 23, 2026</p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#CCCCCC] leading-relaxed border-t border-white/10 pt-6">
          <p className="text-base text-[#E0E0E0]">
            MaximumPixel (&ldquo;MaximumPixel,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is a creative content and media studio based in Jaipur, Rajasthan, India, offering short-form video, photography, event coverage, social-media content, product/property shoots, and branding &amp; design services. This Privacy Policy explains how we collect, use, store, and protect personal data when you visit our website, contact us, or engage us for a project.
          </p>

          <p className="text-xs text-[#A0A0A0] bg-[#141416] p-4 rounded-xl border border-white/[0.08]">
            This Policy is intended to align with the Indian Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025 (notified 13 November 2025), which are being brought into force in phases.
          </p>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              1. Who this Policy applies to
            </h2>
            <p>This Policy applies to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#A0A0A0]">
              <li>Visitors to our website</li>
              <li>People who submit an inquiry, brief, or contact form</li>
              <li>Clients and prospective clients we correspond with over email, WhatsApp, phone, or Instagram</li>
              <li>Individuals who appear in or are otherwise connected to a project we are engaged for</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              2. What personal data we collect
            </h2>
            <p>Depending on how you interact with us, we may collect:</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 rounded-xl overflow-hidden text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#141416] text-white">
                    <th className="p-3 border-b border-white/10 font-bold w-1/3">Category</th>
                    <th className="p-3 border-b border-white/10 font-bold">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-[#A0A0A0]">
                  <tr>
                    <td className="p-3 font-semibold text-white">Contact details</td>
                    <td className="p-3">Name, business name, phone number, email address, Instagram handle/website</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Project information</td>
                    <td className="p-3">Service requested, project goals, deliverables, creative references, budget range, shoot location/date, deadlines</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Communications</td>
                    <td className="p-3">Messages sent via our contact form, WhatsApp, email, Instagram DMs, or phone calls</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Technical data</td>
                    <td className="p-3">Basic website usage data (e.g., pages visited), collected via standard hosting/analytics tools, if enabled</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Media content</td>
                    <td className="p-3">Photos, videos, and related files created during a project, which may include images of people, products, or property involved</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[#A0A0A0] pt-1">
              We only collect what we reasonably need to respond to your inquiry, scope a project, or deliver our services. We do not knowingly collect more than necessary just because a form or tool is capable of collecting it.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              3. Why we collect it (purpose)
            </h2>
            <p>We use personal data to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#A0A0A0]">
              <li>Respond to inquiries and prepare quotations</li>
              <li>Plan, schedule, and deliver a shoot or project</li>
              <li>Communicate about bookings, revisions, deliverables, and payments</li>
              <li>Maintain business records (invoices, agreements, project trackers)</li>
              <li>With your separate permission, showcase completed work in our portfolio, website, or social media</li>
              <li>Improve our services and internal operations</li>
            </ul>
            <p className="text-xs text-[#A0A0A0]">
              We do not use inquiry or project data for unrelated marketing without separately asking for your consent to that specific use.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              4. Portfolio and marketing use is separate from project processing
            </h2>
            <p>
              Using your project&apos;s photos/videos for MaximumPixel&apos;s own portfolio, website, or social media is not automatic. We request this permission separately from the core project work (for example, via a portfolio-permission checkbox in our agreements/forms). You may decline portfolio use and still receive the agreed deliverables.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              5. How long we keep data
            </h2>
            <p>We retain personal data only for as long as reasonably necessary to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#A0A0A0]">
              <li>Complete the project and deliver agreed work</li>
              <li>Maintain financial, tax, and business records as required by applicable law</li>
              <li>Resolve disputes or enforce our agreements</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              6. Who we share data with
            </h2>
            <p>We do not sell personal data. We may share limited data with:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#A0A0A0]">
              <li>Service providers we use to run the business (e.g., cloud storage, email/WhatsApp Business, form providers, website hosting)</li>
              <li>Professional advisors (accountant/lawyer), where necessary</li>
              <li>Authorities, if required by law</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              7. Security
            </h2>
            <p>
              We take reasonable steps to protect personal data, including limiting access within the MaximumPixel team, using account security features such as two-factor authentication where available, and maintaining backups of project files. No method of storage or transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              8. Your choices and rights
            </h2>
            <p>You may:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#A0A0A0]">
              <li>Ask what personal data we hold about you</li>
              <li>Ask us to correct inaccurate data</li>
              <li>Withdraw portfolio/marketing permission at any time (this does not affect already completed, separately-scoped project work)</li>
              <li>Ask us to delete data we no longer need to retain for legal/business record purposes</li>
            </ul>
            <p>To exercise any of these, contact us using the details in Section 10.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              9. Children&apos;s data
            </h2>
            <p>
              We do not knowingly target our services or website at children. If a project involves minors (e.g., a family event or a client&apos;s employees/models under 18), we rely on the client or guardian to have appropriate authority and consent for their participation.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 pt-2">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              10. Contact us
            </h2>
            <p>For any questions about this Privacy Policy or your data:</p>
            <div className="bg-[#111113] p-5 rounded-2xl border border-white/10 space-y-2.5">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5B2EE8]" />
                <span>
                  Email:{" "}
                  <a href="mailto:hello.maximumpixel@gmail.com" className="text-white hover:text-[#5B2EE8] underline">
                    hello.maximumpixel@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#22B14C]" />
                <span>
                  Phone / WhatsApp:{" "}
                  <a href="https://wa.me/917878736798" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#22B14C] underline">
                    +91 78787 36798
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF7A1A]" />
                <span>Location: Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              11. Updates to this Policy
            </h2>
            <p>
              We may update this Policy from time to time, particularly as our tools change or as Indian data-protection law comes further into force. The &ldquo;Last updated&rdquo; date at the top will reflect the most recent version. Material changes will be reflected on this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
