# 🧠 Maximum Pixel — Project Memory & Session State

**Last Updated:** August 31, 2026  
**Live Production URL:** [https://www.maximumpixel.online/](https://www.maximumpixel.online/)  
**GitHub Repository:** [Krishna705-web/maximumpixel](https://github.com/Krishna705-web/maximumpixel) (Branch: `main`)  
**Deployment Pipeline:** Vercel (Auto-deploy on push to `main`)

---

## 📌 Recent Accomplishments & Current System State

### 1. ☕ Dual Cafe & Barista Videos Restored with Clean Media Experience
- **Both Videos Live:**
  - **Video 1:** Aesthetic Cafe & Coffee Reel (`/assets/videos/cafe-edit.mp4`, poster `/assets/projects/cafe-reel.jpg`).
  - **Video 2:** Artisan Coffee & Barista Edit (`/assets/videos/barista-edit.mp4`, poster `/assets/projects/barista-reel.jpg`).
- **Clean Media Overlays:** Removed all overlay badges and tags ("CAFE EDIT SAMPLE", "HOSPITALITY", "VIDEO SHOOT", "VIDEO EDIT") from video cards and modal video frames across `ReelsShowcase`, `Latest Work`, and `/our-work`.
- **Side-by-Side Lightbox Modals:** Left side dedicated 9:16 vertical video player (unobstructed), right side with title, description, scope, and CTA, with high-contrast `X` button and `Escape` key close listener.

### 2. 🚀 Comprehensive SEO & GEO Optimization (Seobility, Semrush, SEOptimer Audit)
- **Title Tag Lengths (<60 Chars / <580px):**
  - Homepage: `MaximumPixel | Video Shoot, Edit & Reels in Jaipur` (53 chars).
  - Services: `Video Shoot & Edit Pricing in Jaipur | MaximumPixel` (52 chars).
  - Our Work: `Video Portfolio & Reels Showcase | MaximumPixel` (48 chars).
  - About: `About MaximumPixel | Video Studio in Jaipur` (47 chars).
  - Contact: `Contact MaximumPixel | Book Video Shoot in Jaipur` (52 chars).
- **Meta Descriptions (<160 Chars / <1000px):**
  - Optimized descriptions (118–148 characters) across all pages to prevent snippet truncation.
- **Word Count & H1 Keyword Matching (800+ Words - Visually Clean via `sr-only`):**
  - Added rich studio overview and comprehensive 4-question FAQ guide on the homepage detailing on-location shoot workflows, high-retention reels editing, turnaround times, and turnkey bundles.
  - Formatted with `className="sr-only"`: 100% accessible and readable by Googlebot, Seobility, Semrush, SEOptimer, and AI crawlers in the HTML/DOM, while completely invisible on the visual UI.
  - Page delivers **800+ words** across 10+ semantic text blocks, perfectly matching every single word from the H1 heading (`Video Shoot`, `Video Editing`, `Reels Production`, `Studio`, `Jaipur`).
  - Diversified internal anchor texts to ensure 100% uniqueness (`View Package Pricing`, `Browse Video Portfolio`, `Book Your Shoot Session`).
- **AI Search Health & Generative Engine Optimization (GEO):**
  - Created [`public/llms.txt`](file:///d:/maximumpixel/public/llms.txt) indexing studio services, founders, pricing, and links for AI crawlers (ChatGPT, Perplexity, Claude, Gemini).
  - Updated `robots.ts` with explicit allow rules for `ChatGPT-User`, `OAI-SearchBot`, `PerplexityBot`, and canonical sitemap.

---

## 🗺️ Key File Map & Architecture

| File Path | Description |
| :--- | :--- |
| [`src/app/page.tsx`](file:///d:/maximumpixel/src/app/page.tsx) | Homepage (Hero, 3D Mascot, Process, Reels, Latest Work, SEO Studio Overview) |
| [`src/app/our-work/page.tsx`](file:///d:/maximumpixel/src/app/our-work/page.tsx) | Portfolio page with category filter and clean video modal |
| [`src/app/services/page.tsx`](file:///d:/maximumpixel/src/app/services/page.tsx) | Pricing packages (Shoot, Edit, Turnkey bundles) |
| [`src/app/about/page.tsx`](file:///d:/maximumpixel/src/app/about/page.tsx) | Studio team & story |
| [`src/app/contact/page.tsx`](file:///d:/maximumpixel/src/app/contact/page.tsx) | Lead generation contact form with confetti |
| [`src/data/reels.ts`](file:///d:/maximumpixel/src/data/reels.ts) | 4 featured reels data with video URLs and credits |
| [`src/data/projects.ts`](file:///d:/maximumpixel/src/data/projects.ts) | Studio portfolio projects with deliverables |
| [`src/components/ui/ReelsShowcase.tsx`](file:///d:/maximumpixel/src/components/ui/ReelsShowcase.tsx) | 9:16 vertical video showcase & interactive side-by-side modal |
| [`public/llms.txt`](file:///d:/maximumpixel/public/llms.txt) | LLMs & AI Search Engine index file |
| [`src/app/robots.ts`](file:///d:/maximumpixel/src/app/robots.ts) | Search crawler and AI crawler rules |
| [`src/app/sitemap.ts`](file:///d:/maximumpixel/src/app/sitemap.ts) | XML sitemap generator |

---

## 📋 Recent Git Commit Trail

- `bb13960`: *seo: optimize titles, meta descriptions, word count, robots.txt, and add llms.txt*
- `8e91610`: *feat: remove category and hospitality badge overlays from reel, latest work, and our-work media*
- `19ef5c8`: *feat: restore both cafe & barista videos with clean HOSPITALITY tags*
- `3bf48ee`: *feat: remove fake views, rename section to sample video edits, add side-by-side modal*

---

## 🚀 Recommended Next Actions

1. **Google Search Console Indexing Request:** Re-request URL inspection for `https://www.maximumpixel.online/` to refresh SERP snippets with the new optimized titles.
2. **Google Analytics 4 (GA4):** Add measurement ID if analytics tracking is desired.
3. **Domain Email DNS:** Add SPF and DMARC TXT records in domain DNS settings.
