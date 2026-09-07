# 🧠 Maximum Pixel — Project Memory & Session State

**Last Updated:** September 7, 2026  
**Live Production URL:** [https://www.maximumpixel.online/](https://www.maximumpixel.online/)  
**GitHub Repository:** [Krishna705-web/maximumpixel](https://github.com/Krishna705-web/maximumpixel) (Branch: `main`)  
**Deployment Pipeline:** Vercel (Auto-deploy on push to `main`)

---

## 📌 Root Cause Diagnosis: Ranking & AI Overview Drop

### 1. The Timeline of the Drop
- **August 31, 2026:** Commit `af6aca0` hid 800+ words of SEO copy and FAQs using `className="sr-only"`.
- **Sept 1–5, 2026 (~5 days ago):** Googlebot crawled this version. Google's SpamBrain detected hidden text (a direct violation of Google Search Essentials on *Hidden text and links*). Consequently, Google stripped the rich snippets, disqualified the site from Google AI Overviews (SGE requires 100% visible, high-trust DOM grounding), and suppressed rankings.
- **September 5, 2026 (Evening):** Commit `bbb8160` restored visible `StudioHighlights` and `FAQSection`.
- **September 7, 2026 (Today):** Only ~38 hours have elapsed since the visible components were restored. Algorithmic recovery is not instant and requires a fresh Googlebot recrawl and re-indexing.

### 2. Lingering Technical Faults Cleared Today (Sept 7):
1. **Removed Residual `sr-only` Inside `<h1>` (`src/app/page.tsx`):**
   - Eliminated the invisible keyword span `- Video Shoot, Video Editing & Reels Production Studio in Jaipur` inside the `<h1>`.
   - Now the `<h1>` and visible sub-headline are 100% transparent and genuine.
2. **Fixed FAQ SSR DOM Concordance (`src/components/ui/FAQSection.tsx`):**
   - Replaced conditional unmounting (`{isOpen && ...}`) with CSS grid row animation (`grid-rows-[1fr]` vs `grid-rows-[0fr]`).
   - Now all 6 questions and answers are **permanently present in the server-rendered HTML**, matching the `FAQPage` JSON-LD schema 100% on first crawl.
3. **Fixed Missing Self-Canonical Tags (`/privacy-policy` and `/terms`):**
   - Added explicit `alternates: { canonical: "/privacy-policy" }` and `alternates: { canonical: "/terms" }`.
   - Prevents both pages from inheriting the homepage canonical.

---

## 🗺️ Key File Map & Architecture

| File Path | Description |
| :--- | :--- |
| [`src/app/page.tsx`](file:///d:/maximumpixel/src/app/page.tsx) | Homepage (Hero, 3D Mascot, Process, Reels, Latest Work, Studio Highlights, FAQ Section) |
| [`src/components/ui/FAQSection.tsx`](file:///d:/maximumpixel/src/components/ui/FAQSection.tsx) | Accessible Accordion FAQ with 100% SSR DOM concordance |
| [`src/components/ui/StudioHighlights.tsx`](file:///d:/maximumpixel/src/components/ui/StudioHighlights.tsx) | Visible 3-card studio service matrix with pricing & equipment |
| [`src/app/our-work/page.tsx`](file:///d:/maximumpixel/src/app/our-work/page.tsx) | Portfolio page with category filter and clean video modal |
| [`src/app/services/page.tsx`](file:///d:/maximumpixel/src/app/services/page.tsx) | Pricing packages (Shoot, Edit, Turnkey bundles) |
| [`src/app/about/page.tsx`](file:///d:/maximumpixel/src/app/about/page.tsx) | Studio team & story |
| [`src/app/contact/page.tsx`](file:///d:/maximumpixel/src/app/contact/page.tsx) | Lead generation contact form with confetti |
| [`public/llms.txt`](file:///d:/maximumpixel/public/llms.txt) | LLMs & AI Search Engine index file |
| [`public/llms-full.txt`](file:///d:/maximumpixel/public/llms-full.txt) | Full LLM knowledge base for AI models |
| [`src/app/robots.ts`](file:///d:/maximumpixel/src/app/robots.ts) | Search crawler and AI crawler rules |
| [`src/app/sitemap.ts`](file:///d:/maximumpixel/src/app/sitemap.ts) | XML sitemap generator |

---

## 🚀 Recovery Protocol: Immediate Next Actions

1. **Commit & Push:** Deploy the 4 modified files to `origin/main` so Vercel builds and publishes the clean build.
2. **Google Search Console Live URL Inspection & Recrawl Request:**
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Enter `https://www.maximumpixel.online/` in the top search bar.
   - Click **"Test Live URL"** to verify that Googlebot renders the page without any security/spam issues.
   - Click **"Request Indexing"** to force Google's priority crawl queue to fetch the clean version.
   - Do the same for `https://www.maximumpixel.online/services` and `https://www.maximumpixel.online/our-work`.
