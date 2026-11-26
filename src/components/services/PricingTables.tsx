"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  PRICING_META,
  VIDEO_SHOOT_EDIT_ROWS,
  EDITING_ONLY_ROWS,
  PRODUCT_PHOTOGRAPHY_ROWS,
  PRODUCT_PHOTOGRAPHY_NOTE,
  LIFESTYLE_PHOTOSHOOT_ROWS,
  LIFESTYLE_PHOTOSHOOT_NOTE,
  SOCIAL_POSTS_WITH_SHOOT_ROWS,
  MONTHLY_SHOOT_EDIT_PACKAGES,
  MONTHLY_SHOOT_EDIT_NOTE,
  MONTHLY_EDIT_ONLY_PACKAGES,
  MONTHLY_EDIT_ONLY_NOTE,
  ADDONS_ROWS,
  PRICING_TERMS,
  STUDIO_GEAR,
  QUICK_CHEAT_SHEET,
  PricingRow,
  MonthlyPackageTier,
} from "@/data/pricing";

type PricingTab = "all" | "video" | "photography" | "monthly" | "terms";

function StandardPriceTable({
  title,
  subtitle,
  rows,
  note,
}: {
  title: string;
  subtitle?: string;
  rows: PricingRow[];
  note?: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <h3 className="font-display font-semibold text-xl sm:text-2xl tracking-[-0.02em] text-[#171717]">
          {title}
        </h3>
        {subtitle && <span className="text-xs text-[#777873]">{subtitle}</span>}
      </div>

      <div className="overflow-x-auto border border-[#DAD8D1] bg-[#FFFFFF] rounded-[2px]">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-[#171717] text-[#F4F3EF]">
              <th className="py-3.5 px-4 sm:px-5 text-[11px] font-medium uppercase tracking-[0.14em] w-[26%]">
                Service
              </th>
              <th className="py-3.5 px-4 sm:px-5 text-[11px] font-medium uppercase tracking-[0.14em] w-[50%]">
                Included
              </th>
              <th className="py-3.5 px-4 sm:px-5 text-[11px] font-medium uppercase tracking-[0.14em] text-right w-[24%]">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DAD8D1] text-sm">
            {rows.map((row) => (
              <tr
                key={row.service}
                className="hover:bg-[#F4F3EF]/60 transition-colors align-top"
              >
                <td className="py-4 px-4 sm:px-5 font-medium text-[#171717]">
                  {row.service}
                </td>
                <td className="py-4 px-4 sm:px-5 text-[#777873] leading-relaxed">
                  {row.included}
                </td>
                <td className="py-4 px-4 sm:px-5 font-semibold text-[#171717] text-right whitespace-nowrap">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {note && <p className="text-xs text-[#777873] leading-relaxed">{note}</p>}
    </div>
  );
}

function MonthlyComparisonTable({
  title,
  note,
  tiers,
  includeShootDetails,
}: {
  title: string;
  note: string;
  tiers: MonthlyPackageTier[];
  includeShootDetails: boolean;
}) {
  return (
    <div className="space-y-4">
      <h3 className="font-display font-semibold text-xl sm:text-2xl tracking-[-0.02em] text-[#171717]">
        {title}
      </h3>

      <div className="overflow-x-auto border border-[#DAD8D1] bg-[#FFFFFF] rounded-[2px]">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-[#171717] text-[#F4F3EF]">
              <th className="py-3.5 px-4 sm:px-5 text-[11px] font-medium uppercase tracking-[0.14em] w-[40%]">
                Package Details
              </th>
              {tiers.map((tier) => (
                <th
                  key={tier.name}
                  className="py-3.5 px-4 sm:px-5 text-[11px] font-medium uppercase tracking-[0.14em] text-right"
                >
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DAD8D1] text-sm">
            <tr>
              <td className="py-3.5 px-4 sm:px-5 text-[#777873]">
                {includeShootDetails ? "Reels per month (30-40 sec)" : "Reels edited per month (30-40 sec)"}
              </td>
              {tiers.map((t) => (
                <td key={t.name} className="py-3.5 px-4 sm:px-5 text-right font-medium text-[#171717]">
                  {t.reelsPerMonth}
                </td>
              ))}
            </tr>

            {includeShootDetails && (
              <>
                <tr>
                  <td className="py-3.5 px-4 sm:px-5 text-[#777873]">
                    Free posts (single or carousel)
                  </td>
                  {tiers.map((t) => (
                    <td key={t.name} className="py-3.5 px-4 sm:px-5 text-right text-[#171717]">
                      {t.freePosts}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-5 text-[#777873]">
                    Total shoot time (pooled)
                  </td>
                  {tiers.map((t) => (
                    <td key={t.name} className="py-3.5 px-4 sm:px-5 text-right text-[#171717]">
                      {t.totalShootTime}
                    </td>
                  ))}
                </tr>
              </>
            )}

            <tr>
              <td className="py-3.5 px-4 sm:px-5 text-[#777873]">Package rate per reel</td>
              {tiers.map((t) => (
                <td key={t.name} className="py-3.5 px-4 sm:px-5 text-right text-[#171717]">
                  {t.packageRatePerReel}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 sm:px-5 text-[#777873]">
                {includeShootDetails
                  ? "Reels at standard rate (₹1,700 each)"
                  : "Reels at standard rate (₹800 each)"}
              </td>
              {tiers.map((t) => (
                <td key={t.name} className="py-3.5 px-4 sm:px-5 text-right text-[#777873]">
                  {t.reelsAtStandardRate}
                </td>
              ))}
            </tr>

            {includeShootDetails && (
              <>
                <tr>
                  <td className="py-3.5 px-4 sm:px-5 text-[#777873]">
                    Free posts value (₹300 each)
                  </td>
                  {tiers.map((t) => (
                    <td key={t.name} className="py-3.5 px-4 sm:px-5 text-right text-[#777873]">
                      {t.freePostsValue}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-5 text-[#777873]">
                    Total value at standard rates
                  </td>
                  {tiers.map((t) => (
                    <td key={t.name} className="py-3.5 px-4 sm:px-5 text-right text-[#777873]">
                      {t.totalValueAtStandardRates}
                    </td>
                  ))}
                </tr>
              </>
            )}

            <tr className="bg-[#F4F3EF]">
              <td className="py-4 px-4 sm:px-5 font-semibold uppercase tracking-[0.08em] text-xs text-[#171717]">
                Monthly Price
              </td>
              {tiers.map((t) => (
                <td key={t.name} className="py-4 px-4 sm:px-5 text-right font-display font-bold text-lg text-[#171717]">
                  {t.monthlyPrice}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 sm:px-5 text-[#777873]">Client saves</td>
              {tiers.map((t) => (
                <td key={t.name} className="py-3.5 px-4 sm:px-5 text-right font-medium text-[#A78B70]">
                  {t.clientSaves}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#777873] leading-relaxed">{note}</p>
    </div>
  );
}

export const PricingTables: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PricingTab>("all");

  const tabs: { id: PricingTab; label: string }[] = [
    { id: "all", label: "Complete Rate Card" },
    { id: "video", label: "Video Shoot & Edit" },
    { id: "photography", label: "Product & Lifestyle Photo" },
    { id: "monthly", label: "Monthly Packages" },
    { id: "terms", label: "Add-Ons, Terms & Gear" },
  ];

  return (
    <div className="space-y-12">
      {/* Header Metadata & Quick Cheat Sheet */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4">
          <p className="editorial-label text-[#A78B70]">
            Effective {PRICING_META.effectiveDate}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.03em] text-[#171717]">
            TRANSPARENT STUDIO RATES.
          </h2>
          <p className="text-sm text-[#777873] leading-relaxed">
            {PRICING_META.currencyNote} {PRICING_META.studioSummary}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#171717] hover:text-[#A78B70] transition-colors"
            >
              <span>Request a Custom Quotation</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Quick Reference Summary */}
        <div className="lg:col-span-7 border border-[#DAD8D1] bg-[#FFFFFF] rounded-[2px]">
          <div className="px-5 py-3.5 border-b border-[#DAD8D1] bg-[#171717] text-[#F4F3EF] flex items-center justify-between">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em]">
              Quick Reference Summary
            </span>
            <span className="text-[11px] text-[#A78B70]">INR (₹)</span>
          </div>
          <div className="divide-y divide-[#DAD8D1] text-sm">
            {QUICK_CHEAT_SHEET.map((item) => (
              <div
                key={item.need}
                className="px-5 py-3 flex items-center justify-between gap-4"
              >
                <span className="text-[#777873]">{item.need}</span>
                <span className="font-medium text-[#171717] text-right">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div
        className="flex flex-wrap gap-2 pb-6 border-b border-[#DAD8D1]"
        role="tablist"
        aria-label="Filter pricing tables"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] rounded-[2px] border transition-colors cursor-pointer ${
                isActive
                  ? "bg-[#171717] text-[#F4F3EF] border-[#171717]"
                  : "bg-transparent text-[#777873] border-[#DAD8D1] hover:border-[#171717] hover:text-[#171717]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tables */}
      <div className="space-y-12">
        {(activeTab === "all" || activeTab === "video") && (
          <div className="space-y-12">
            <StandardPriceTable
              title="1. Video Shoot and Edit (Reels, 30–40 sec)"
              rows={VIDEO_SHOOT_EDIT_ROWS}
            />
            <StandardPriceTable
              title="2. Editing Only and Post Creation"
              subtitle="Client supplies files"
              rows={EDITING_ONLY_ROWS}
            />
          </div>
        )}

        {(activeTab === "all" || activeTab === "photography") && (
          <div className="space-y-12">
            <StandardPriceTable
              title="3. Product Photography (Handicraft & Catalog)"
              rows={PRODUCT_PHOTOGRAPHY_ROWS}
              note={PRODUCT_PHOTOGRAPHY_NOTE}
            />
            <StandardPriceTable
              title="4. Lifestyle, Brand and Artisan Photoshoots"
              rows={LIFESTYLE_PHOTOSHOOT_ROWS}
              note={LIFESTYLE_PHOTOSHOOT_NOTE}
            />
            <StandardPriceTable
              title="5. Social Posts with Shoot"
              rows={SOCIAL_POSTS_WITH_SHOOT_ROWS}
            />
          </div>
        )}

        {(activeTab === "all" || activeTab === "monthly") && (
          <div className="space-y-12">
            <MonthlyComparisonTable
              title="6A. Monthly Shoot + Edit Packages"
              tiers={MONTHLY_SHOOT_EDIT_PACKAGES}
              note={MONTHLY_SHOOT_EDIT_NOTE}
              includeShootDetails
            />
            <MonthlyComparisonTable
              title="6B. Monthly Editing-Only Packages"
              tiers={MONTHLY_EDIT_ONLY_PACKAGES}
              note={MONTHLY_EDIT_ONLY_NOTE}
              includeShootDetails={false}
            />
          </div>
        )}

        {(activeTab === "all" || activeTab === "terms") && (
          <div className="space-y-12">
            {/* 7. Add-ons */}
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-xl sm:text-2xl tracking-[-0.02em] text-[#171717]">
                7. Add-ons and Extras
              </h3>
              <div className="overflow-x-auto border border-[#DAD8D1] bg-[#FFFFFF] rounded-[2px]">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#171717] text-[#F4F3EF]">
                      <th className="py-3.5 px-4 sm:px-5 text-[11px] font-medium uppercase tracking-[0.14em]">
                        Add-on
                      </th>
                      <th className="py-3.5 px-4 sm:px-5 text-[11px] font-medium uppercase tracking-[0.14em] text-right">
                        Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DAD8D1] text-sm">
                    {ADDONS_ROWS.map((row) => (
                      <tr key={row.addon}>
                        <td className="py-3.5 px-4 sm:px-5 text-[#171717]">{row.addon}</td>
                        <td className="py-3.5 px-4 sm:px-5 text-right font-medium text-[#171717] whitespace-nowrap">
                          {row.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8. Terms & 9. Gear */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 border border-[#DAD8D1] bg-[#FFFFFF] p-6 sm:p-8 rounded-[2px] space-y-5">
                <h3 className="font-display font-semibold text-xl tracking-[-0.02em] text-[#171717]">
                  8. Standard Terms
                </h3>
                <dl className="divide-y divide-[#DAD8D1] text-sm">
                  {PRICING_TERMS.map((term) => (
                    <div key={term.label} className="py-3.5 first:pt-0 last:pb-0">
                      <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#A78B70]">
                        {term.label}
                      </dt>
                      <dd className="text-[#777873] mt-1 leading-relaxed">{term.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-5 border border-[#DAD8D1] bg-[#FFFFFF] p-6 sm:p-8 rounded-[2px] space-y-5">
                <h3 className="font-display font-semibold text-xl tracking-[-0.02em] text-[#171717]">
                  9. Studio Tools &amp; Gear
                </h3>
                <dl className="divide-y divide-[#DAD8D1] text-sm">
                  {STUDIO_GEAR.map((item) => (
                    <div key={item.category} className="py-3.5 first:pt-0 last:pb-0">
                      <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#A78B70]">
                        {item.category}
                      </dt>
                      <dd className="text-[#171717] mt-1 leading-relaxed">{item.tools}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

