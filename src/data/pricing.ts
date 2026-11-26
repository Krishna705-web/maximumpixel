export interface PricingRow {
  service: string;
  included: string;
  price: string;
}

export interface MonthlyPackageTier {
  name: "Starter" | "Growth" | "Pro";
  reelsPerMonth: string;
  freePosts?: string;
  totalShootTime?: string;
  packageRatePerReel: string;
  reelsAtStandardRate: string;
  freePostsValue?: string;
  totalValueAtStandardRates?: string;
  monthlyPrice: string;
  clientSaves: string;
}

export const PRICING_META = {
  effectiveDate: "24 November 2026",
  currencyNote: "All prices in Indian rupees (₹). No GST shown.",
  studioSummary:
    "Video and photo shoot and editing studio for handicraft, product and local brands.",
  quotationValidity: "15 days from date of issue (24 Nov to 9 Dec 2026 for current quotes).",
};

export const VIDEO_SHOOT_EDIT_ROWS: PricingRow[] = [
  {
    service: "Reel, shoot + edit",
    included: "Shoot up to 1-2 hours, editing, music, captions, basic transitions, 1 revision",
    price: "₹1,700 / reel",
  },
  {
    service: "Reel, shoot only",
    included: "Raw clips, up to 2 hours shooting, no editing",
    price: "₹1,000 / reel",
  },
  {
    service: "Product video (15-30 sec)",
    included: "Single product, shoot + edit, music, captions",
    price: "₹1,000 / product",
  },
  {
    service: "Video shoot, half day",
    included: "Up to 4 hours, raw footage for multiple reels, no editing",
    price: "₹2,500",
  },
  {
    service: "Video shoot, full day",
    included: "Up to 8 hours, raw footage for multiple reels, no editing",
    price: "₹4,500",
  },
];

export const EDITING_ONLY_ROWS: PricingRow[] = [
  {
    service: "Reel editing (30-40 sec)",
    included:
      "Client footage up to 10 min raw, cuts, music, captions, transitions, colour correction, 1 revision",
    price: "₹800 / reel",
  },
  {
    service: "Photo editing",
    included: "Colour correction, basic retouch, background clean-up",
    price: "₹40 / photo (₹30 / photo for 25+ photos)",
  },
  {
    service: "Single image post",
    included: "Post design from client photos, caption and hashtag suggestions",
    price: "₹200 / post",
  },
  {
    service: "Carousel post (3-5 slides)",
    included: "Carousel design from client photos, caption and hashtags",
    price: "₹400 / post",
  },
];

export const PRODUCT_PHOTOGRAPHY_ROWS: PricingRow[] = [
  {
    service: "Single product",
    included: "4 edited photos (front, side, back/detail, close-up), plain or simple background",
    price: "₹400 / product",
  },
  {
    service: "10 products (40 photos)",
    included: "Bulk rate, client saves ₹500",
    price: "₹3,500 (₹350 per product)",
  },
  {
    service: "25 products (100 photos)",
    included: "Bulk rate, client saves ₹2,000",
    price: "₹8,000 (₹320 per product)",
  },
  {
    service: "50 products (200 photos)",
    included: "Bulk rate, client saves ₹6,000",
    price: "₹14,000 (₹280 per product)",
  },
  {
    service: "Extra photo of same product",
    included: "Additional angle or detail shot, edited",
    price: "₹100 / photo",
  },
];

export const PRODUCT_PHOTOGRAPHY_NOTE =
  "Note: products needing complex styling, props or models are priced under Lifestyle, Brand and Artisan Photoshoots.";

export const LIFESTYLE_PHOTOSHOOT_ROWS: PricingRow[] = [
  {
    service: "Mini shoot (1 hour)",
    included: "Up to 10 edited photos; styled product, artisan at work or brand portrait",
    price: "₹1,200",
  },
  {
    service: "Half day (up to 4 hours)",
    included: "Up to 25 edited photos, styled scenes, lifestyle and in-use shots",
    price: "₹3,000",
  },
  {
    service: "Full day (up to 8 hours)",
    included: "Up to 50 edited photos, multiple setups and locations in the city",
    price: "₹5,500",
  },
];

export const LIFESTYLE_PHOTOSHOOT_NOTE =
  "Note: client provides products, props, location and model or artisan. Props styling support by us: ₹300 per shoot.";

export const SOCIAL_POSTS_WITH_SHOOT_ROWS: PricingRow[] = [
  {
    service: "Single image post",
    included: "Photo shoot, colour correction, caption and hashtags",
    price: "₹300 / post",
  },
  {
    service: "Carousel post (3-5 slides)",
    included: "Photo shoot, colour correction, simple layout, caption and hashtags",
    price: "₹500 / post",
  },
  {
    service: "Post shot with a reel",
    included: "Post photos taken during the same reel shoot day",
    price: "₹150 / post",
  },
];

export const MONTHLY_SHOOT_EDIT_PACKAGES: MonthlyPackageTier[] = [
  {
    name: "Starter",
    reelsPerMonth: "6",
    freePosts: "4",
    totalShootTime: "up to 9 hours",
    packageRatePerReel: "₹1,350",
    reelsAtStandardRate: "₹10,200",
    freePostsValue: "₹1,200",
    totalValueAtStandardRates: "₹11,400",
    monthlyPrice: "₹8,100",
    clientSaves: "₹3,300 (29%)",
  },
  {
    name: "Growth",
    reelsPerMonth: "12",
    freePosts: "6",
    totalShootTime: "up to 18 hours",
    packageRatePerReel: "₹1,250",
    reelsAtStandardRate: "₹20,400",
    freePostsValue: "₹1,800",
    totalValueAtStandardRates: "₹22,200",
    monthlyPrice: "₹15,000",
    clientSaves: "₹7,200 (32%)",
  },
  {
    name: "Pro",
    reelsPerMonth: "20",
    freePosts: "10",
    totalShootTime: "up to 30 hours",
    packageRatePerReel: "₹1,225",
    reelsAtStandardRate: "₹34,000",
    freePostsValue: "₹3,000",
    totalValueAtStandardRates: "₹37,000",
    monthlyPrice: "₹24,500",
    clientSaves: "₹12,500 (34%)",
  },
];

export const MONTHLY_SHOOT_EDIT_NOTE =
  "Shoot about 1.5 hours per reel, pooled across the month. Free posts are made from photos taken during the reel shoots and are only available with monthly shoot + edit packages.";

export const MONTHLY_EDIT_ONLY_PACKAGES: MonthlyPackageTier[] = [
  {
    name: "Starter",
    reelsPerMonth: "6",
    packageRatePerReel: "₹750",
    reelsAtStandardRate: "₹4,800",
    monthlyPrice: "₹4,500",
    clientSaves: "₹300 (6%)",
  },
  {
    name: "Growth",
    reelsPerMonth: "12",
    packageRatePerReel: "₹700",
    reelsAtStandardRate: "₹9,600",
    monthlyPrice: "₹8,400",
    clientSaves: "₹1,200 (13%)",
  },
  {
    name: "Pro",
    reelsPerMonth: "20",
    packageRatePerReel: "₹650",
    reelsAtStandardRate: "₹16,000",
    monthlyPrice: "₹13,000",
    clientSaves: "₹3,000 (19%)",
  },
];

export const MONTHLY_EDIT_ONLY_NOTE =
  "Client supplies footage; no shoot and no posts included. Posts are not included in editing-only packages: ₹200 single / ₹400 carousel. Packages are for one month of service, paid 100% in advance.";

export const ADDONS_ROWS: { addon: string; rate: string }[] = [
  { addon: "Extra shoot hour (beyond included time)", rate: "₹500 / hour" },
  { addon: "Reel longer than 40 sec", rate: "₹500 shoot + edit / ₹300 editing only" },
  { addon: "Extra revision round", rate: "₹300 reels / ₹200 editing and photos" },
  { addon: "Raw footage beyond 10 min per reel (editing only)", rate: "₹200 per extra 10 min" },
  { addon: "Urgent delivery (within 24 hours)", rate: "+30% of job price" },
  { addon: "Raw footage / original files handover", rate: "₹1,000 per project" },
  {
    addon: "Extra posts beyond a package",
    rate: "₹200 / ₹400 (editing only), ₹300 / ₹500 (with shoot)",
  },
  {
    addon: "Voiceover, custom graphic design, logo work, festival creatives, paid music, drone",
    rate: "Quoted separately",
  },
  { addon: "Travel outside the city", rate: "Actual cost, quoted separately" },
];

export const PRICING_TERMS = [
  {
    label: "Delivery",
    detail:
      "Reels 3-5 days after the shoot (2-3 days for editing only, after complete files are received). Photos 2-3 days after the shoot.",
  },
  {
    label: "Revisions",
    detail: "1 round included per job; extra rounds charged as listed under Add-ons.",
  },
  {
    label: "Payment",
    detail: "Monthly packages 100% in advance. Single jobs 50% advance, 50% on delivery.",
  },
  {
    label: "Client provides",
    detail:
      "Products, location, script ideas or references (shoot jobs); raw footage and photos in good quality, brand logo, captions and music preferences (editing-only jobs).",
  },
  {
    label: "Usage",
    detail:
      "The client may use final content on their own social media and website. Raw footage and project files only if agreed and paid for.",
  },
  {
    label: "Quotation validity",
    detail: "15 days from date of issue (24 Nov to 9 Dec 2026 for current quotes).",
  },
];

export const STUDIO_GEAR = [
  { category: "Photo editing", tools: "Lightroom" },
  { category: "Graphics", tools: "Canva, Photoshop, plus AI tools" },
  { category: "Video editing", tools: "CapCut and Instagram Edits" },
  { category: "Shoot gear", tools: "iPhone 15, vivo X300, Canon 700D (kit lens only)" },
];

export const QUICK_CHEAT_SHEET: { need: string; price: string }[] = [
  { need: "1 reel, shoot + edit", price: "₹1,700" },
  { need: "1 reel, edit only", price: "₹800" },
  { need: "1 single post (with shoot / edit only)", price: "₹300 / ₹200" },
  { need: "1 carousel (with shoot / edit only)", price: "₹500 / ₹400" },
  { need: "Monthly shoot + edit (6 / 12 / 20 reels)", price: "₹8,100 / ₹15,000 / ₹24,500" },
  { need: "Monthly edit only (6 / 12 / 20 reels)", price: "₹4,500 / ₹8,400 / ₹13,000" },
  { need: "Product photos, 1 product (4 photos)", price: "₹400" },
  { need: "Photoshoot half day / full day", price: "₹3,000 / ₹5,500" },
];
