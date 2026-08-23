import React from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata = {
  title: "Terms of Use",
  description: "Website Terms of Use for MaximumPixel Media Studio in Jaipur, Rajasthan, India.",
};

export default function TermsPage() {
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
            MAXIMUMPIXEL — WEBSITE TERMS OF USE
          </h1>
          <p className="text-xs text-[#A0A0A0]">Last updated: August 23, 2026</p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#CCCCCC] leading-relaxed border-t border-white/10 pt-6">
          <p className="text-base text-[#E0E0E0]">
            These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the MaximumPixel website (the &ldquo;Site&rdquo;), operated by MaximumPixel, a creative content and media studio based in Jaipur, Rajasthan, India (&ldquo;MaximumPixel,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By using the Site, you agree to these Terms.
          </p>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              1. What this Site is for
            </h2>
            <p>
              The Site is a portfolio and information resource showcasing MaximumPixel&apos;s services (video, photography, events, social content, product/property shoots, and branding &amp; design), and provides a way to contact us with inquiries.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              2. Submitting an inquiry does not create a contract
            </h2>
            <p>
              Filling out a contact form, sending a message, or receiving a quotation from us does not, by itself, create a binding service agreement. A project only becomes confirmed once both parties have agreed to a quotation and/or signed/accepted a separate service agreement, as applicable.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              3. Acceptable use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#A0A0A0]">
              <li>Use the Site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to the Site or its underlying systems</li>
              <li>Copy, scrape, or reproduce Site content for commercial use without permission</li>
              <li>Interfere with the normal operation of the Site</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              4. Ownership of content
            </h2>
            <p>
              Unless otherwise stated, all content on the Site — including the MaximumPixel name, logo, brand assets, photographs, videos, graphics, and written copy — is owned by MaximumPixel or used with permission.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              5. Portfolio and client work
            </h2>
            <p>
              Projects displayed in our portfolio are shown only where we have the client&apos;s permission to showcase that work, as agreed separately in the relevant project agreement. If you believe content involving you or your business is displayed without appropriate permission, contact us using the details in Section 11 and we will review it.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              6. Restrictions on reuse
            </h2>
            <p>
              Content on this Site (including portfolio images/videos) may not be downloaded, copied, redistributed, or used commercially without our prior written permission, except as permitted by applicable law (e.g., limited personal, non-commercial viewing).
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              7. Third-party links
            </h2>
            <p>
              The Site may link to third-party platforms (e.g., Instagram, YouTube, WhatsApp, LinkedIn). We are not responsible for the content, policies, or practices of third-party sites.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              8. Accuracy of information
            </h2>
            <p>
              We try to keep information on the Site accurate and up to date, but we do not guarantee that all content (including pricing indications, service descriptions, or availability) is error-free or current at all times. Confirm project-specific details directly with us before relying on them.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              9. No liability for indirect loss
            </h2>
            <p>
              To the maximum extent permitted by applicable Indian law, MaximumPixel shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use this website.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              10. Relationship to our Privacy Policy and service agreements
            </h2>
            <p>
              Your use of the Site is also governed by our{" "}
              <Link href="/privacy-policy" className="text-[#5B2EE8] hover:underline">
                Privacy Policy
              </Link>
              . Any confirmed project is governed by the separate signed/accepted quotation and service agreement for that project, which take precedence over these Terms for matters they cover.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4 pt-2">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              11. Contact us
            </h2>
            <p>For any questions regarding these Terms:</p>
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

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              12. Governing law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan, India.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              13. Updates to these Terms
            </h2>
            <p>
              We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date above reflects the most recent version. Continued use of the Site after changes means you accept the updated Terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
