import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Website Terms of Use for Maximum Pixel Studio in Jaipur, Rajasthan, India.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="text-xs text-[#777873]">Last updated: November 26, 2026</p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-[#777873] leading-relaxed">
          <p className="text-[#171717]">
            These Terms govern your use of the {COMPANY_INFO.name} website ({COMPANY_INFO.siteUrl}), operated from {COMPANY_INFO.location}. By accessing this website, you agree to these Terms.
          </p>

          <section className="space-y-2.5">
            <h2 className="font-display font-semibold text-xl text-[#171717]">
              1. Inquiries &amp; Quotations
            </h2>
            <p>
              Submitting a contact form or receiving a rate card or quotation does not create a binding production contract. A project is confirmed only upon written agreement and applicable advance payment (50% advance for single jobs, 100% in advance for monthly packages). Quotations are valid for 15 days from the date of issue unless stated otherwise.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display font-semibold text-xl text-[#171717]">
              2. Content Ownership &amp; Usage
            </h2>
            <p>
              Unless stated otherwise (such as licensed stock footage clearly credited on showcase studies), website text, branding and studio assets belong to {COMPANY_INFO.name}. For client commissions, clients may use delivered final content across their own social media and websites. Raw footage and working project files are handed over only when separately agreed and paid for.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display font-semibold text-xl text-[#171717]">
              3. Acceptable Use &amp; Governing Law
            </h2>
            <p>
              You agree not to scrape, copy for commercial redistribution, or disrupt this site. These Terms are governed by the laws of India, with exclusive jurisdiction in the courts of Jaipur, Rajasthan.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display font-semibold text-xl text-[#171717]">
              4. Contact
            </h2>
            <p>
              Questions regarding these Terms may be sent to{" "}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#171717] underline">
                {COMPANY_INFO.email}
              </a>{" "}
              or{" "}
              <a href={`mailto:${COMPANY_INFO.secondaryEmail}`} className="text-[#171717] underline">
                {COMPANY_INFO.secondaryEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
