export type Lang = "en" | "bn";

export const content = {
  en: {
    nav: {
      features: "Features",
      tracking: "Tracking",
      fraud: "Fraud shield",
      pricing: "Pricing",
      faq: "FAQ",
      docs: "Docs",
      contact: "Contact",
      trial: "Start free trial",
    },

    hero: {
      eyebrow: "Commerce Buddy · WooCommerce plugin",
      title: ["One plugin for", "tracking, fraud & couriers."],
      lede:
        "Server-side Meta Pixel + CAPI, GA4, Google Ads, courier auto-booking for Pathao / Steadfast / RedX, and a community fraud blocklist — all from your WordPress admin.",
      ctaPrimary: "Start 14-day free trial",
      ctaSecondary: "See it in action",
      ctaMeta: "No card required · Works with any WooCommerce theme",
      bullets: [
        "iOS 14+ accurate via CAPI",
        "Built for Bangladeshi stores",
        "GPLv2 — own your data",
      ],
    },

    dash: { url: "wp-admin · commerce-buddy" },

    pillars: {
      head: "One install. Four pillars. Zero browser-only blind spots.",
      items: [
        {
          t: "Server-side tracking",
          s: "Meta CAPI, GA4 Measurement Protocol, Google Ads — all dedup'd against the browser pixel.",
          icon: "signal",
        },
        {
          t: "Courier autopilot",
          s: "Auto-book Pathao, Steadfast & RedX consignments. Status syncs back via webhook.",
          icon: "truck",
        },
        {
          t: "COD fraud shield",
          s: "Real-time blocklist + community parcel history. Block, hold, or flag before you ship.",
          icon: "shield",
        },
        {
          t: "Cart recovery",
          s: "Capture incomplete checkouts and recover orders with one-click resume links.",
          icon: "cart",
        },
      ],
    },

    problem: {
      eyebrow: "Why this plugin exists",
      title: "Selling COD in Bangladesh is brutal. Your stack should fight back.",
      lede:
        "Browser pixels miss half your events. Couriers want CSVs at midnight. One bad customer can torch a 200 BDT delivery fee. Commerce Buddy fixes all three.",
      bad: {
        badge: "Without Commerce Buddy",
        h: "Tracking lies. Couriers leak. Returns pile up.",
        p: "What most WooCommerce stores in Bangladesh are stuck with today.",
        items: [
          { t: "Pixel events vanish", s: "iOS 14+, ad blockers and slow networks lose 30–60% of conversions client-side." },
          { t: "Couriers booked by hand", s: "Owners CSV-export every night, log into 3 portals, copy waybills back into orders." },
          { t: "Return-to-origin orders pile up", s: "No way to check a phone number's parcel history before shipping COD." },
          { t: "Abandoned carts forgotten", s: "Checkout page abandoned? You'll never know — and never recover the order." },
        ],
      },
      good: {
        badge: "With Commerce Buddy",
        h: "Server-side truth. One-click consignments. Pre-ship fraud check.",
        p: "Everything wired into your WP admin. No SaaS, no JavaScript surgery.",
        items: [
          { t: "Server + browser dedup", s: "Same event_id on both legs — Meta, GA4 and Ads each dedupe automatically." },
          { t: "Auto-create consignments", s: "Order status flips to Processing → Pathao/Steadfast/RedX consignment is booked." },
          { t: "Block before you ship", s: "Phone-history lookup + community blocklist holds risky COD orders for review." },
          { t: "Resume abandoned carts", s: "Captured checkouts get a recovery link emailed automatically." },
        ],
      },
    },

    tracking: {
      eyebrow: "Tracking pillars",
      title: "Three ad providers, one event stream.",
      lede:
        "Every funnel event fans out to Meta, GA4 and Google Ads simultaneously — with a shared event_id so the browser pixel and the server API never double-count.",
      cards: [
        {
          logo: "M",
          logoClass: "meta",
          name: "Meta Pixel + Conversions API",
          sub: "Browser pixel plus server-side CAPI. SHA-256 hashed PII. Forwards _fbp and _fbc cookies.",
          feats: [
            "Graph API v19.0 endpoint",
            "Deterministic event_id for dedup",
            "test_event_code support",
            "Per-event toggles",
          ],
        },
        {
          logo: "GA",
          logoClass: "ga",
          name: "Google Analytics 4",
          sub: "Both client-side gtag/GTM and server-side Measurement Protocol for full redundancy.",
          feats: [
            "page_view → view_item → purchase",
            "Optional GTM container ID",
            "Debug mode for GA4 DebugView",
            "Encrypted API secret",
          ],
        },
        {
          logo: "G",
          logoClass: "gads",
          name: "Google Ads Conversions",
          sub: "Server-side click conversions with Enhanced Conversions + automatic OAuth refresh.",
          feats: [
            "Google Ads API v18",
            "GCLID from _gcl_aw cookie",
            "Per-event conversion labels",
            "OAuth token auto-refresh",
          ],
        },
      ],
      dedup: {
        eyebrow: "Deduplication",
        h: "One event_id on the browser. The same event_id on the server.",
        p: "Each provider matches the pair and counts the conversion exactly once — no inflated ROAS, no missed iOS purchases.",
      },
    },

    couriers: {
      h: "Bangladeshi couriers, wired in.",
      p: "Auto-create consignments and pull delivery status back into the WooCommerce order timeline.",
      items: [
        { name: "Pathao", color: "#E81F2E", letters: "PT" },
        { name: "Steadfast", color: "#0E7C66", letters: "SF" },
        { name: "RedX", color: "#EF233C", letters: "RX" },
      ],
      soonNote: "Other courier integrations are coming soon.",
      liveTag: "LIVE",
    },

    fraud: {
      eyebrow: "Fraud protection",
      title: "Check the phone number. Before you ship.",
      lede:
        "Every COD order is screened against community blocklists and 3-courier delivery history. Decide whether to ship, hold or block — in one glance.",
      checks: [
        { t: "Parcel history across 3 couriers", s: "Aggregate success / cancellation rate from Pathao, Steadfast, RedX for this phone number." },
        { t: "Community fraud blocklist", s: "Shared registry of confirmed RTO-abusers. Updated by every Commerce Buddy store." },
        { t: "Auto-hold suspicious orders", s: "Set COD or any custom payment method to land in On-hold until manually verified." },
        { t: "Block at checkout", s: "Refuse the order entirely when the customer's phone, email or IP is blocklisted." },
      ],
      parcelAlt: "Parcel delivery report — 16 parcels across 3 couriers, 93.75% success, no fraud reports",
    },

    audience: {
      eyebrow: "Built for both sides of the order page",
      title: "For owners who count taka, and developers who count milliseconds.",
      merchant: {
        eb: "For store owners",
        h: "Run the store, not the spreadsheets.",
        p: "Designed for non-technical operators. Plain-language statuses, one toggle per integration, sensible defaults.",
        items: [
          "One-toggle credential vault per provider",
          "Visual fraud reports — no SQL needed",
          "WhatsApp-shareable order links",
          "Email notifications on every dispatch",
        ],
      },
      dev: {
        eb: "For developers / agencies",
        h: "Hooks, REST, encrypted secrets.",
        p: "Built like a proper plugin. WP-CLI ready, GPLv2, every secret AES-256-CBC encrypted with your wp_salt.",
        items: [
          "REST + Action Scheduler queue",
          "Provider interface for custom couriers",
          "do_action hooks on every event",
          "Structured cb_event_log table",
        ],
      },
    },

    pricing: {
      eyebrow: "Pricing",
      title: "One Pro license per site. Pick the term that fits.",
      lede: "Same Pro feature set on every plan. Pay monthly for flexibility, or lock in a longer term and save.",
      plans: [
        {
          key: "monthly",
          name: "Monthly",
          amount: "৳ 1,000",
          per: "/ month",
          strike: null,
          badge: "20% off your 1st month",
          firstLine: "First month ৳ 800",
          sub: "Flexible. Cancel anytime.",
          ribbon: null,
          cta: "Start monthly",
        },
        {
          key: "half",
          name: "6 Months",
          amount: "৳ 5,500",
          per: "/ 6 months",
          strike: "৳ 6,000",
          badge: "20% off — limited time",
          firstLine: "Save ৳ 500 vs monthly",
          sub: "Six-month license, paid up front.",
          ribbon: null,
          cta: "Choose 6 months",
        },
        {
          key: "yearly",
          name: "Yearly",
          amount: "৳ 10,000",
          per: "/ year",
          strike: "৳ 12,000",
          badge: "20% off your 1st year",
          firstLine: "First year ৳ 8,000",
          sub: "Two months free vs monthly billing.",
          ribbon: "Best value",
          cta: "Choose yearly",
        },
      ],
      featsTitle: "Every plan includes",
      feats: [
        "All tracking providers — Meta CAPI, GA4, Google Ads",
        "All courier integrations — Pathao, Steadfast, RedX",
        "Community fraud blocklist sync",
        "Priority support over WhatsApp",
        "Automatic plugin updates for your term",
        "30-day money-back guarantee",
      ],
    },

    faq: {
      eyebrow: "FAQ",
      title: "Questions we hear from Bangladeshi WooCommerce stores.",
      items: [
        {
          q: "Will Commerce Buddy slow down my store?",
          a: "No. Server-side calls happen on shutdown after the page is sent. The browser pixel is async. Action Scheduler queues anything heavy.",
        },
        {
          q: "Does it work with my existing Meta Pixel / GA4 setup?",
          a: "Yes — disable any duplicate manual tags. Commerce Buddy emits a single pixel/gtag instance with the same event_id as the server call, so Meta and GA4 dedupe correctly.",
        },
        {
          q: "Are my API tokens safe?",
          a: "Every secret (CAPI token, GA4 API secret, Google Ads refresh token, courier passwords) is stored AES-256-CBC encrypted using your WordPress auth salt. Admin pages only render masked previews.",
        },
        {
          q: "What couriers are supported today?",
          a: "Pathao, Steadfast and RedX are live and ship in every install. Additional courier integrations are on the roadmap and will arrive as automatic plugin updates.",
        },
        {
          q: "Is the community fraud blocklist GDPR-compliant?",
          a: "Phone numbers and emails are SHA-256 hashed before sync. Opt-in per site. You can withdraw your contributions at any time from the Blocklist settings.",
        },
        {
          q: "Can I cancel anytime?",
          a: "Yes. The plugin keeps working until your license expires; you simply lose automatic updates and priority support.",
        },
      ],
    },

    install: {
      eyebrow: "Get started",
      title: "Live in 5 minutes.",
      lede: "Install, activate your license, connect a provider, ship.",
      steps: [
        {
          t: "Install the plugin",
          s: "Upload commerce-buddy.zip from your WP dashboard or via WP-CLI.",
          code: "wp plugin install commerce-buddy.zip --activate",
        },
        {
          t: "Enter your license key",
          s: "Open Commerce Buddy → License and paste the key from your purchase email. Required for updates, courier APIs, and the fraud blocklist.",
        },
        {
          t: "Connect a provider",
          s: "Open Commerce Buddy → Meta Pixel + CAPI. Paste your Pixel ID and CAPI token, then send a test event. When you see HTTP 200 in the Event Log, you're live.",
        },
      ],
    },

    finalCta: {
      h: "Stop losing conversions, parcels, and weekends.",
      p: "Start your 14-day Pro trial. Full features, zero credit card.",
      ctaPrimary: "Start free trial",
      ctaSecondary: "Talk to a human",
    },

    contact: {
      eyebrow: "Contact",
      title: "Talk to the team behind Commerce Buddy.",
      lede: "Pre-sales, setup help, custom courier integrations — reach us on whichever channel you prefer.",
      channels: [
        { kind: "whatsapp", label: "WhatsApp", value: "+880 1842-609433", href: "https://wa.me/8801842609433", action: "Chat on WhatsApp" },
        { kind: "phone",    label: "Phone",    value: "+880 1842-609433", href: "tel:+8801842609433",        action: "Call now" },
        { kind: "facebook", label: "Facebook", value: "/CommerceBuddyWp", href: "https://www.facebook.com/CommerceBuddyWp", action: "Open page" },
      ],
      addressLabel: "Office",
      address: ["West Shewrapara, Mirpur", "Dhaka-1216, Bangladesh"],
      hoursLabel: "Support hours",
      hours: "24 × 7",
    },

    footer: {
      copy: "© 2026 Commerce Buddy · GPL-2.0-or-later",
      links: ["Docs", "Changelog", "Status", "Privacy", "Contact"],
    },

    heroShotAlt: "Commerce Buddy admin dashboard — recent tracking and courier activity",
  },

  bn: {
    nav: {
      features: "ফিচার",
      tracking: "ট্র্যাকিং",
      fraud: "ফ্রড শিল্ড",
      pricing: "প্রাইসিং",
      faq: "প্রশ্নোত্তর",
      docs: "ডকস",
      contact: "যোগাযোগ",
      trial: "ফ্রি ট্রায়াল শুরু করুন",
    },

    hero: {
      eyebrow: "কমার্স বাডি · WooCommerce প্লাগইন",
      title: ["এক প্লাগইনেই", "ট্র্যাকিং, ফ্রড আর কুরিয়ার।"],
      lede:
        "সার্ভার-সাইড Meta Pixel + CAPI, GA4, Google Ads, Pathao / Steadfast / RedX এর অটো-বুকিং আর কমিউনিটি ফ্রড ব্লকলিস্ট — সব আপনার WordPress অ্যাডমিন থেকে।",
      ctaPrimary: "১৪ দিনের ফ্রি ট্রায়াল",
      ctaSecondary: "ডেমো দেখুন",
      ctaMeta: "কার্ড লাগবে না · যেকোনো WooCommerce থিমে চলে",
      bullets: [
        "iOS 14+ এও সঠিক ট্র্যাকিং (CAPI)",
        "বাংলাদেশি স্টোরের জন্য তৈরি",
        "GPLv2 — পুরো ডেটা আপনার",
      ],
    },

    dash: { url: "wp-admin · commerce-buddy" },

    pillars: {
      head: "এক ইন্সটল। চারটি স্তম্ভ। ব্রাউজারের ওপর নির্ভর করে কিছু চোখের আড়ালে যাবে না।",
      items: [
        { t: "সার্ভার-সাইড ট্র্যাকিং", s: "Meta CAPI, GA4 Measurement Protocol, Google Ads — সবই ব্রাউজার পিক্সেলের সঙ্গে ডিডুপ্লিকেটেড।", icon: "signal" },
        { t: "কুরিয়ার অটোপাইলট", s: "Pathao, Steadfast আর RedX-এ অটো-বুকিং। স্ট্যাটাস ওয়েবহুকে ফেরত আসে।", icon: "truck" },
        { t: "COD ফ্রড শিল্ড", s: "রিয়েল-টাইম ব্লকলিস্ট + কমিউনিটি পার্সেল হিস্ট্রি। শিপ করার আগে ব্লক, হোল্ড বা ফ্ল্যাগ।", icon: "shield" },
        { t: "কার্ট রিকভারি", s: "অসমাপ্ত চেকআউট ধরে, ওয়ান-ক্লিক রিজিউম লিংকে অর্ডার ফিরিয়ে আনে।", icon: "cart" },
      ],
    },

    problem: {
      eyebrow: "কেন এই প্লাগইন",
      title: "বাংলাদেশে COD বিক্রি কঠিন। আপনার সিস্টেমকেও লড়াইয়ের জন্য তৈরি থাকতে হবে।",
      lede:
        "ব্রাউজার পিক্সেল অর্ধেক ইভেন্ট হারায়। কুরিয়ার রাত বারোটায় CSV চায়। একজন বাজে ক্রেতা ২০০ টাকার ডেলিভারি ফি পুড়িয়ে দেয়। কমার্স বাডি তিনটেই ঠিক করে।",
      bad: {
        badge: "কমার্স বাডি ছাড়া",
        h: "ট্র্যাকিং ভুল হিসাব দেয়। কুরিয়ারে অর্ডার ফাঁস হয়। RTO জমে।",
        p: "বাংলাদেশের বেশিরভাগ WooCommerce স্টোর আজও এই অবস্থায়।",
        items: [
          { t: "পিক্সেল ইভেন্ট হারিয়ে যায়", s: "iOS 14+, অ্যাড ব্লকার আর স্লো নেটওয়ার্কে ক্লায়েন্ট-সাইডে ৩০–৬০% কনভার্শন মিস হয়।" },
          { t: "হাতে হাতে কুরিয়ার বুকিং", s: "প্রতি রাতে CSV এক্সপোর্ট, ৩টা পোর্টালে লগইন, ওয়েবিল আবার কপি-পেস্ট।" },
          { t: "RTO অর্ডার জমে", s: "COD পাঠানোর আগে নম্বরের পার্সেল হিস্ট্রি দেখার কোনো উপায় নেই।" },
          { t: "অসমাপ্ত কার্ট চোখের আড়ালে", s: "চেকআউট ছেড়ে গেলে আপনি জানবেনই না — অর্ডারটাও আর ফিরবে না।" },
        ],
      },
      good: {
        badge: "কমার্স বাডি দিয়ে",
        h: "সার্ভার-সাইডে নির্ভুল ডেটা। ওয়ান-ক্লিক কন্সাইনমেন্ট। শিপ করার আগে চেক।",
        p: "সব আপনার WP অ্যাডমিনে। কোনো SaaS, জাভাস্ক্রিপ্ট ঘাঁটাঘাঁটির দরকার নেই।",
        items: [
          { t: "সার্ভার + ব্রাউজার ডিডুপ্লিকেশন", s: "দুই দিকেই এক event_id — Meta, GA4 আর Ads প্রত্যেকে নিজে নিজেই ডিডুপ্লিকেট করে।" },
          { t: "অটো-কন্সাইনমেন্ট", s: "অর্ডার Processing হলেই Pathao/Steadfast/RedX-এ বুকিং হয়ে যায়।" },
          { t: "শিপ করার আগেই ব্লক", s: "ফোন হিস্ট্রি + কমিউনিটি ব্লকলিস্ট ঝুঁকিপূর্ণ COD অর্ডার রিভিউয়ের জন্য হোল্ড করে।" },
          { t: "অসমাপ্ত কার্ট ফিরিয়ে আনুন", s: "ক্যাপচার করা চেকআউটে স্বয়ংক্রিয় রিকভারি লিংক ইমেইল হয়ে যায়।" },
        ],
      },
    },

    tracking: {
      eyebrow: "ট্র্যাকিং স্তম্ভ",
      title: "তিনটি অ্যাড প্রোভাইডার, এক ইভেন্ট স্ট্রিম।",
      lede:
        "প্রতিটি ফানেল ইভেন্ট Meta, GA4 আর Google Ads-এ একসঙ্গে যায় — একই event_id, তাই ব্রাউজার পিক্সেল আর সার্ভার API কখনো ডাবল-কাউন্ট করে না।",
      cards: [
        {
          logo: "M", logoClass: "meta",
          name: "Meta Pixel + Conversions API",
          sub: "ব্রাউজার পিক্সেল + সার্ভার-সাইড CAPI। SHA-256 হ্যাশড PII। _fbp ও _fbc কুকি ফরওয়ার্ড।",
          feats: [
            "Graph API v19.0 এন্ডপয়েন্ট",
            "ডিডুপের জন্য ডিটারমিনিস্টিক event_id",
            "test_event_code সাপোর্ট",
            "ইভেন্ট অনুযায়ী টগল",
          ],
        },
        {
          logo: "GA", logoClass: "ga",
          name: "Google Analytics 4",
          sub: "ক্লায়েন্ট-সাইড gtag/GTM ও সার্ভার-সাইড Measurement Protocol — ফুল রিডান্ড্যান্সি।",
          feats: [
            "page_view → view_item → purchase",
            "অপশনাল GTM কন্টেইনার ID",
            "GA4 DebugView ডিবাগ মোড",
            "এনক্রিপ্টেড API সিক্রেট",
          ],
        },
        {
          logo: "G", logoClass: "gads",
          name: "Google Ads কনভার্শন",
          sub: "সার্ভার-সাইড ক্লিক কনভার্শন + Enhanced Conversions, অটো OAuth রিফ্রেশ।",
          feats: [
            "Google Ads API v18",
            "_gcl_aw কুকি থেকে GCLID",
            "ইভেন্ট অনুযায়ী কনভার্শন লেবেল",
            "OAuth টোকেন অটো-রিফ্রেশ",
          ],
        },
      ],
      dedup: {
        eyebrow: "ডিডুপ্লিকেশন",
        h: "ব্রাউজারে এক event_id। সার্ভারে সেই একই event_id।",
        p: "প্রতিটি প্রোভাইডার পেয়ার মিলিয়ে কনভার্শন ঠিক একবার গণনা করে — কোনো ভুয়া ROAS নেই, iOS-এর কেনাকাটাও মিস হয় না।",
      },
    },

    couriers: {
      h: "বাংলাদেশি কুরিয়ার — সরাসরি যুক্ত।",
      p: "অটো-কন্সাইনমেন্ট তৈরি করুন আর WooCommerce অর্ডার টাইমলাইনে ডেলিভারি স্ট্যাটাস ফেরত আনুন।",
      items: [
        { name: "পাঠাও", color: "#E81F2E", letters: "PT" },
        { name: "Steadfast", color: "#0E7C66", letters: "SF" },
        { name: "RedX", color: "#EF233C", letters: "RX" },
      ],
      soonNote: "অন্যান্য কুরিয়ার ইন্টিগ্রেশন শীঘ্রই আসছে।",
      liveTag: "চালু",
    },

    fraud: {
      eyebrow: "ফ্রড প্রোটেকশন",
      title: "শিপ করার আগে ফোন নম্বরটা চেক করুন।",
      lede:
        "প্রতিটি COD অর্ডার কমিউনিটি ব্লকলিস্ট আর ৩ কুরিয়ারের ডেলিভারি হিস্ট্রির সাথে মিলিয়ে দেখা হয়। এক নজরে সিদ্ধান্ত — শিপ, হোল্ড নাকি ব্লক।",
      checks: [
        { t: "৩ কুরিয়ারের পার্সেল হিস্ট্রি", s: "এই নম্বরের জন্য Pathao, Steadfast, RedX-এর মিলিত সাকসেস / ক্যান্সেলেশন রেট।" },
        { t: "কমিউনিটি ফ্রড ব্লকলিস্ট", s: "যাচাই হওয়া RTO অপব্যবহারকারীদের শেয়ারড রেজিস্ট্রি। প্রতিটি Commerce Buddy স্টোর আপডেট দেয়।" },
        { t: "সন্দেহজনক অর্ডার অটো-হোল্ড", s: "COD বা যেকোনো কাস্টম পেমেন্ট মেথড On-hold-এ যাবে যতক্ষণ না ম্যানুয়ালি ভেরিফাই হয়।" },
        { t: "চেকআউটে ব্লক", s: "ক্রেতার ফোন, ইমেইল বা IP ব্লকলিস্টে থাকলে চেকআউটেই অর্ডার রিফিউজ।" },
      ],
      parcelAlt: "পার্সেল ডেলিভারি রিপোর্ট — ৩ কুরিয়ার মিলিয়ে ১৬টি পার্সেল, ৯৩.৭৫% সফল, কোনো ফ্রড রিপোর্ট নেই",
    },

    audience: {
      eyebrow: "অর্ডার পেজের দুই পাশের জন্য",
      title: "যাঁরা টাকা গোনেন, আর যাঁরা মিলিসেকেন্ড গোনেন — দুজনের জন্যই।",
      merchant: {
        eb: "স্টোর মালিকদের জন্য",
        h: "স্প্রেডশিট নয়, দোকানটা চালান।",
        p: "নন-টেকনিক্যাল অপারেটরের জন্য বানানো। সহজ ভাষায় স্ট্যাটাস, প্রতিটি ইন্টিগ্রেশনে এক টগল, যুক্তিসংগত ডিফল্ট সেটিংস।",
        items: [
          "প্রোভাইডার অনুযায়ী এক-টগলের ক্রেডেনশিয়াল ভল্ট",
          "ভিজ্যুয়াল ফ্রড রিপোর্ট — SQL দরকার নেই",
          "WhatsApp-এ শেয়ার করার মতো অর্ডার লিংক",
          "প্রতিটি ডিসপ্যাচে ইমেইল নোটিফিকেশন",
        ],
      },
      dev: {
        eb: "ডেভেলপার / এজেন্সিদের জন্য",
        h: "হুক, REST, এনক্রিপ্টেড সিক্রেট।",
        p: "ঠিকঠাক প্লাগইনের মতো বানানো। WP-CLI রেডি, GPLv2, প্রতিটি সিক্রেট আপনার wp_salt দিয়ে AES-256-CBC এনক্রিপ্টেড।",
        items: [
          "REST + Action Scheduler কিউ",
          "কাস্টম কুরিয়ারের জন্য Provider ইন্টারফেস",
          "প্রতিটি ইভেন্টে do_action হুক",
          "স্ট্রাকচার্ড cb_event_log টেবিল",
        ],
      },
    },

    pricing: {
      eyebrow: "প্রাইসিং",
      title: "প্রতি সাইটে একটা Pro লাইসেন্স। আপনার সুবিধামতো প্ল্যান বেছে নিন।",
      lede: "প্রতিটি প্ল্যানে একই Pro ফিচার সেট। মাস-ভিত্তিক রাখলে ফ্লেক্সিবিলিটি, দীর্ঘ মেয়াদে রাখলে সাশ্রয়।",
      plans: [
        {
          key: "monthly",
          name: "মাস-ভিত্তিক",
          amount: "৳ ১,০০০",
          per: "/ মাস",
          strike: null,
          badge: "প্রথম মাসে ২০% ছাড়",
          firstLine: "প্রথম মাস ৳ ৮০০",
          sub: "ফ্লেক্সিবল। যেকোনো সময় ক্যানসেল।",
          ribbon: null,
          cta: "মাস-ভিত্তিক শুরু করুন",
        },
        {
          key: "half",
          name: "৬ মাস",
          amount: "৳ ৫,৫০০",
          per: "/ ৬ মাস",
          strike: "৳ ৬,০০০",
          badge: "এখন ২০% ছাড় — সীমিত সময়",
          firstLine: "মাস-ভিত্তিকের তুলনায় ৳ ৫০০ সাশ্রয়",
          sub: "ছয় মাসের লাইসেন্স, একবারে পেমেন্ট।",
          ribbon: null,
          cta: "৬ মাস বেছে নিন",
        },
        {
          key: "yearly",
          name: "বার্ষিক",
          amount: "৳ ১০,০০০",
          per: "/ বছর",
          strike: "৳ ১২,০০০",
          badge: "প্রথম বছরে ২০% ছাড়",
          firstLine: "প্রথম বছর ৳ ৮,০০০",
          sub: "মাস-ভিত্তিকের তুলনায় ২ মাস ফ্রি।",
          ribbon: "সবচেয়ে সাশ্রয়ী",
          cta: "বার্ষিক বেছে নিন",
        },
      ],
      featsTitle: "প্রতিটি প্ল্যানেই থাকছে",
      feats: [
        "সব ট্র্যাকিং প্রোভাইডার — Meta CAPI, GA4, Google Ads",
        "সব কুরিয়ার ইন্টিগ্রেশন — Pathao, Steadfast, RedX",
        "কমিউনিটি ফ্রড ব্লকলিস্ট সিঙ্ক",
        "WhatsApp-এ প্রায়োরিটি সাপোর্ট",
        "মেয়াদকালীন অটোমেটিক প্লাগইন আপডেট",
        "৩০ দিনের মানি-ব্যাক গ্যারান্টি",
      ],
    },

    faq: {
      eyebrow: "প্রশ্নোত্তর",
      title: "বাংলাদেশি WooCommerce স্টোরের কাছ থেকে যেসব প্রশ্ন পাই।",
      items: [
        {
          q: "Commerce Buddy কি আমার সাইট ধীর করবে?",
          a: "না। সার্ভার-সাইড কল পেজ সেন্ড হওয়ার পরে shutdown-এ হয়। ব্রাউজার পিক্সেল async। ভারী কাজ Action Scheduler কিউ করে রাখে।",
        },
        {
          q: "আমার বর্তমান Meta Pixel / GA4 সেটাপের সাথে চলবে?",
          a: "হ্যাঁ — কোনো ডুপ্লিকেট ম্যানুয়াল ট্যাগ বন্ধ করে দিন। Commerce Buddy একটিই pixel/gtag ইনস্ট্যান্স ছাড়ে, সার্ভার কলের মতোই একই event_id, তাই Meta আর GA4 ঠিকঠাক ডিডুপ্লিকেট করে।",
        },
        {
          q: "আমার API টোকেন কি নিরাপদ?",
          a: "প্রতিটি সিক্রেট (CAPI টোকেন, GA4 API সিক্রেট, Google Ads রিফ্রেশ টোকেন, কুরিয়ার পাসওয়ার্ড) আপনার WordPress auth salt দিয়ে AES-256-CBC এনক্রিপ্টেড। অ্যাডমিন পেজে শুধু মাস্কড প্রিভিউ দেখায়।",
        },
        {
          q: "এখন কোন কুরিয়ার সাপোর্টেড?",
          a: "Pathao, Steadfast আর RedX লাইভ — প্রতিটি ইন্সটলেই থাকে। অন্যান্য কুরিয়ার ইন্টিগ্রেশন রোডম্যাপে আছে, অটো প্লাগইন আপডেটে চলে আসবে।",
        },
        {
          q: "কমিউনিটি ফ্রড ব্লকলিস্ট কি GDPR-কমপ্লায়েন্ট?",
          a: "ফোন নম্বর আর ইমেইল সিঙ্কের আগেই SHA-256 হ্যাশ করা হয়। প্রতি সাইটে অপ্ট-ইন। যেকোনো সময় Blocklist সেটিংস থেকে আপনার কন্ট্রিবিউশন তুলে নিতে পারবেন।",
        },
        {
          q: "যেকোনো সময় ক্যানসেল করা যাবে?",
          a: "হ্যাঁ। লাইসেন্সের মেয়াদ শেষ না হওয়া পর্যন্ত প্লাগইন চলতে থাকবে; শুধু অটো-আপডেট আর প্রায়োরিটি সাপোর্ট বন্ধ হবে।",
        },
      ],
    },

    install: {
      eyebrow: "শুরু করুন",
      title: "৫ মিনিটে লাইভ।",
      lede: "ইনস্টল করুন, লাইসেন্স কী বসান, প্রোভাইডার কানেক্ট করুন, শিপ করুন।",
      steps: [
        {
          t: "প্লাগইন ইনস্টল",
          s: "ড্যাশবোর্ড থেকে বা WP-CLI দিয়ে commerce-buddy.zip আপলোড করুন।",
          code: "wp plugin install commerce-buddy.zip --activate",
        },
        {
          t: "লাইসেন্স কী বসান",
          s: "Commerce Buddy → License খুলুন আর পারচেজ ইমেইলের কী বসান। আপডেট, কুরিয়ার API আর ফ্রড ব্লকলিস্টের জন্য দরকার।",
        },
        {
          t: "প্রোভাইডার কানেক্ট",
          s: "Commerce Buddy → Meta Pixel + CAPI খুলুন। Pixel ID আর CAPI টোকেন বসান, টেস্ট ইভেন্ট পাঠান। ইভেন্ট লগে HTTP 200 দেখলেই আপনি লাইভ।",
        },
      ],
    },

    finalCta: {
      h: "কনভার্শন, পার্সেল আর ছুটির দিন হারানো বন্ধ করুন।",
      p: "১৪ দিনের Pro ট্রায়াল শুরু করুন। পুরো ফিচার, কোনো কার্ড নয়।",
      ctaPrimary: "ফ্রি ট্রায়াল শুরু",
      ctaSecondary: "মানুষের সাথে কথা বলুন",
    },

    contact: {
      eyebrow: "যোগাযোগ",
      title: "Commerce Buddy টিমের সাথে কথা বলুন।",
      lede: "প্রি-সেলস, সেটাপ হেল্প, কাস্টম কুরিয়ার ইন্টিগ্রেশন — আপনার পছন্দের চ্যানেলে আমাদের পান।",
      channels: [
        { kind: "whatsapp", label: "WhatsApp", value: "+৮৮০ ১৮৪২-৬০৯৪৩৩", href: "https://wa.me/8801842609433", action: "WhatsApp-এ চ্যাট" },
        { kind: "phone",    label: "ফোন",      value: "+৮৮০ ১৮৪২-৬০৯৪৩৩", href: "tel:+8801842609433",        action: "এখনই কল করুন" },
        { kind: "facebook", label: "Facebook", value: "/CommerceBuddyWp",  href: "https://www.facebook.com/CommerceBuddyWp", action: "পেজ দেখুন" },
      ],
      addressLabel: "অফিস",
      address: ["ওয়েস্ট শেওড়াপাড়া, মিরপুর", "ঢাকা-১২১৬, বাংলাদেশ"],
      hoursLabel: "সাপোর্ট আওয়ার",
      hours: "২৪ × ৭",
    },

    footer: {
      copy: "© ২০২৬ Commerce Buddy · GPL-2.0-or-later",
      links: ["ডকস", "চেঞ্জলগ", "স্ট্যাটাস", "প্রাইভেসি", "যোগাযোগ"],
    },

    heroShotAlt: "কমার্স বাডি অ্যাডমিন ড্যাশবোর্ড — সাম্প্রতিক ট্র্যাকিং আর কুরিয়ার অ্যাক্টিভিটি",
  },
} as const;

export type T = typeof content.en;
