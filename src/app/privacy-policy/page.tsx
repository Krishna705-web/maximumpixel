import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Maximum Pixel Studio in Jaipur, Rajasthan, India.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F4F3EF] text-[#171717] py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#777873] hover:text-[#171717] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <header className="space-y-3 pb-8 border-b border-[#DAD8D1]">
          <p className="editorial-label text-[#A78B70]">Legal</p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-[-0.03em]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#777873]">Last updated: November 26, 2026</p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-[#777873] leading-relaxed">
          <p className="text-[#171717]">
            {COMPANY_INFO.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is a video production and post-production studio based in {COMPANY_INFO.location}. This Privacy Policy explains how we collect, use, store and protect personal data when you visit our website, submit an inquiry, or work with us on a project.
          </p>

          <p className="text-xs bg-[#FFFFFF] p-4 border border-[#DAD8D1] rounded-[2px]">
            This Policy is intended to align with the Indian Digital Personal Data Protection Act, 2023 and applicable rules notified thereunder.
          </p>

          <section className="space-y-2.5">
            <h2 className="font-display font-semibold text-xl text-[#171717]">
              1. Information We Collect
            </h2>
            <p>Depending on how you interact with us, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Contact details: name, business or brand name, email address, phone/WhatsApp number.</li>
              <li>Project information: project type, goals, expected shoot dates, budget range, references and deliverables.</li>
              <li>Communications: messages sent via our website inquiry form, email, WhatsApp or Instagram.</li>
              <li>Production media: video footage and photographs recorded or edited as part of an agreed project.</li>
            </ul>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display font-semibold text-xl text-[#171717]">
              2. How We Use Personal Data
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Respond to inquiries and prepare project quotations.</li>
              <li>Plan, schedule, film, edit and deliver agreed project files.</li>
              <li>Communicate regarding bookings, revisions, invoices and payments.</li>
              <li>Display completed work in our portfolio only where separate client permission is granted.</li>
            </ul>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display font-semibold text-xl text-[#171717]">
              3. Data Retention &amp; Sharing
            </h2>
            <p>
              We do not sell personal data. We retain inquiry and project records only as long as needed to deliver projects and meet legal or accounting obligations. Limited data may pass through standard infrastructure providers used to run our website, email, cloud file delivery and WhatsApp Business communications.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display font-semibold text-xl text-[#171717]">
              4. Your Rights &amp; Contact
            </h2>
            <p>
              You may request access to, correction of, or deletion of personal data we hold about you, or withdraw portfolio display permission for future use, by contacting us at{" "}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#171717] underline">
                {COMPANY_INFO.email}
              </a>{" "}
              or{" "}
              <a href={`mailto:${COMPANY_INFO.secondaryEmail}`} className="text-[#171717] underline">
                {COMPANY_INFO.secondaryEmail}
              </a>{" "}
              or on WhatsApp at {COMPANY_INFO.phone}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
