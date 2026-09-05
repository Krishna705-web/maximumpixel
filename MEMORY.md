# 🧠 Maximum Pixel — Project Memory & Session State

**Last Updated:** September 5, 2026  
**Live Production URL:** [https://www.maximumpixel.online/](https://www.maximumpixel.online/)  
**GitHub Repository:** [Krishna705-web/maximumpixel](https://github.com/Krishna705-web/maximumpixel) (Branch: `main`)  
**Deployment Pipeline:** Vercel (Auto-deploy on push to `main`)

---

## 📌 Recent Accomplishments & Current System State

### 1. 🤖 Google AI Overview (SGE) & Generative Engine Visibility Restored
- **Root Cause Diagnosed & Fixed:**
  - In a previous SEO update, rich studio overview copy and FAQ questions were formatted inside `<section className="sr-only">`.
  - Google's Generative AI algorithms (Gemini / AI Overview / SGE grounding pipeline) strictly disregard offscreen/hidden text (`sr-only`) when synthesizing AI Overview summaries.
  - Furthermore, Google Search rules require JSON-LD structured data (`FAQPage`, `LocalBusiness`, `Service`) to match **visible text on the page**. Having schema without visible questions caused Google to strip rich snippet / AI Overview eligibility.
- **Visible Interactive Components Added:**
  - [`src/components/ui/StudioHighlights.tsx`](file:///d:/maximumpixel/src/components/ui/StudioHighlights.tsx): High-aesthetic, visible 3-card showcase detailing On-Location Video Shoots (from ₹1,499), High-Retention Reels Editing (from ₹499), and Turnkey Bundles (from ₹2,499).
  - [`src/components/ui/FAQSection.tsx`](file:///d:/maximumpixel/src/components/ui/FAQSection.tsx): Interactive, accessible accordion FAQ on the homepage covering studio location, pricing, turnaround times, and booking info.
- **Enhanced JSON-LD Schemas & VideoObject Graph:**
  - Added `VideoObject` schema graph in [`src/app/layout.tsx`](file:///d:/maximumpixel/src/app/layout.tsx) for cafe and barista reels.
  - Harmonized `FAQPage`, `LocalBusiness`, `ProfessionalService`, and `WebSite` schemas with the visible DOM.
- **Expanded AI Crawler Whitelist in `robots.ts`:**
  - Added explicit allow rules for `Google-Extended`, `GoogleOther`, `GoogleOther-Image`, `GoogleOther-Video`, `GPTBot`, `ChatGPT-User`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Anthropic-AI`, `Applebot`, `Applebot-Extended`, `Bingbot`, `meta-externalagent`, `Bytespider`, and `cohere-ai`.
- **Created Comprehensive `llms.txt` & `llms-full.txt`:**
  - Full structured knowledge base for Perplexity, ChatGPT Search, Gemini, and Claude.

---

## 🗺️ Key File Map & Architecture

| File Path | Description |
| :--- | :--- |
| [`src/app/page.tsx`](file:///d:/maximumpixel/src/app/page.tsx) | Homepage (Hero, 3D Mascot, Process, Reels, Latest Work, Studio Highlights, FAQ Section) |
| [`src/components/ui/FAQSection.tsx`](file:///d:/maximumpixel/src/components/ui/FAQSection.tsx) | Interactive visible Accordion FAQ grounding AI Overviews & Schema |
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

## 🚀 Recommended Next Actions

1. **Push & Deploy:** Commit and push changes to trigger the Vercel production deployment.
2. **Google Search Console Indexing Request:** In Google Search Console, submit URL inspection for `https://www.maximumpixel.online/` and click **"Request Indexing"** to trigger an immediate recrawl.
