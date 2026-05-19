# First Presbyterian Church of Montgomery

Astro 5 + Tailwind CSS 3 site for **First Presbyterian Church of Montgomery**, NY.
Deployment target: **Replit Autoscale** (scales to zero — see deploy section).

Built per CRSTweb doctrine — Cornerstone Services, Inc.

---

## Stack

| Layer        | Choice                              |
| ------------ | ----------------------------------- |
| Framework    | Astro 4.16 (hybrid output)          |
| Styling      | Tailwind CSS 3.4                    |
| Adapter      | `@astrojs/node` (standalone)        |
| Sitemap      | `@astrojs/sitemap`                  |
| Fonts        | Cormorant Garamond, DM Sans, DM Mono (Google) |
| Forms        | POST → `/api/submit-form` → CRM webhook (env: `CRM_WEBHOOK_URL`) |

> **Doctrine reminder:** the CRM platform is **never** named by brand in client-facing output. In code and copy, call it "CRM" / "automation platform."

---

## Getting started

```bash
npm install
npm run dev          # 0.0.0.0:5000 — Replit-friendly
npm run build        # production build
npm run preview      # serve dist/
```

---

## Project map

```
src/
├── data/site.ts          ← single source of truth: CHURCH, NAV, FOOTER, HERO,
│                            UPCOMING_EVENT, PASTOR, LIVESTREAM, NEW_HERE,
│                            STAFF, LIFE_CATEGORIES, FEATURED_REVIEW, MARQUEE_ITEMS
├── lib/seo.ts            ← canonical(), homepageSchema(), articleSchema(), faqSchema()
├── styles/global.css     ← tokens, triangle pattern, buttons, eyebrows, marquee
├── layouts/BaseLayout    ← <html>, head, OG/Twitter, JSON-LD slot, Header + Footer
├── components/
│   ├── Header.astro        ← navy, steeple logo, social + DONATE HERE + nav
│   ├── Footer.astro        ← near-black with steeple pattern, 4 columns
│   ├── PageHero.astro      ← reusable for inner pages (About, Worship, etc.)
│   ├── UpcomingEvent.astro ← crimson bar with date block + live countdown
│   ├── Marquee.astro       ← navy band, gold dots, ghosted backdrop text
│   └── GetNotified.astro   ← crimson newsletter band (above every footer)
├── pages/
│   ├── index.astro       ← homepage (10 sections per Figma)
│   └── api/submit-form.ts
└── public/
    ├── favicon.svg
    ├── robots.txt
    └── images/
        └── logo-steeple.svg  ← FPCM steeple roundel (already in repo)
```

---

## Pages

| Page | Path | Mockup | Status |
|------|------|--------|--------|
| Home | `/` | HOMEPAGE.jpg + Figma | ✓ built |
| I'm New | `/im-new` | IM-NEW.jpg | ✓ built |
| About Us | `/about` | ABOUT.jpg | ✓ built |
| Worship | `/worship` | WORSHIP.jpg | ✓ built |
| Ministries | `/ministries` | MINISTRIES.jpg | ✓ built |
| Events & Gallery | `/events` | (no mockup) | ✓ stub (coming-soon) |
| Giving | `/giving` | (no mockup) | ✓ stub (QR code + mail) |
| Contact Us | `/contact` | CONTACT.jpg | ✓ built |
| Thank You | `/thank-you` | (form confirmation) | ✓ built |

---

## Notable content corrections (from Handbook2025.pdf + Cynthia–Sean DOCX)

| Field | Was | Now |
|---|---|---|
| Pastor | "Rev. Neill McKay" | **Vacant** — currently in pastoral search. Homepage uses "Our Elders" framing. |
| Heather Benedict role | Financial Treasurer | **Financial Secretary** |
| Marcia Woodall role | Choir Director | **Music Director / Organist** |
| Women's Circle | Women's Circle | **Westminster Guild** |
| Presbyterian Hunger Program | Generic name | **Town of Montgomery Food Pantry** |
| Office hours | n/a | **9:00 AM – 1:00 PM** (Mon–Fri; reduced because no pastor) |
| Programs removed per client | — | Thrift Shop, Stephen Ministry, Friendly Visitors (not in nav/code) |

---

## Homepage section order (matches Figma prototype)

1. **Hero** — full-bleed Bible/cross photo, "Grace Has Been Waiting For You", single "Join Us Here" CTA
2. **Upcoming Event bar** — crimson band, date block, live countdown timer
3. **Message from The Pastor** — Rev. Neill McKay, real 2026 vision quote, asymmetric-cornered portrait with red caption band
4. **Sunday Services Livestream** — navy bg, 1 large + 2 small video tiles with vintage corner marks, "Watch More Here" CTA
5. **New Here?** — Discover FPC welcome block with church exterior photo
6. **Staff & Leadership** — crimson band with 5 circular portraits (Carol, Heather, Marcia, Wendy, Cynthia)
7. **Life at First Presbyterian** — 4 category cards (Ministries / Worship / Events & Gallery / Giving) with asymmetric rounded corners
8. **Reviews** — navy bg, featured testimonial + B&W portrait
9. **Marquee** — "Christ Center · Community Driven · Worship · …" with gold dots
10. **Get Notified** — crimson signup band

---

## Doctrine checkpoints baked in

- [x] `trailingSlash: 'never'` in `astro.config.mjs`
- [x] Canonical handling centralized in `src/lib/seo.ts`
- [x] **LocalBusiness / Church schema on homepage ONLY**
- [x] No `AggregateRating` schema anywhere
- [x] Named author byline (Rev. Neill McKay) on pastor section for E-E-A-T
- [x] Soft form validation on `/api/submit-form` — never blocks the user
- [x] Honeypot field (`_hp`) on every form
- [x] Footer credit: "Website designed and developed by CRST Web Services, a part of Cornerstone Services, Inc."

When new pages are added:
- [ ] Article / Service / FAQPage JSON-LD on cluster pages
- [ ] Geo H1 with primary keyword + city/region on Tier 1 service pages
- [ ] Add `redirects` block in `astro.config.mjs` for any URL changes (single-hop only)

---

## Image checklist — drop into `public/images/`

The scaffold references these paths. Replace placeholders before launch.

| Path                                | Spec                                                  | Status |
| ----------------------------------- | ----------------------------------------------------- | ------ |
| `logo-steeple.svg`                  | FPCM steeple roundel                                  | ✓ wired |
| `hero-choir.png`                    | Youth choir in sanctuary — hero background            | ✓ wired |
| `new-here-church.png`               | FPCM church exterior — "New Here?" section            | ✓ wired |
| `branding-embroidery.png`           | Embroidered FPCM branding (decorative; unused so far) | ✓ in repo |
| `staff-group.jpg`                   | 8-person staff group photo — use on About page        | ✓ in repo |
| `pastor-neill-mckay.jpg`            | 800×1000 portrait, Rev. Neill McKay in robes          | NEEDED — client |
| `livestream-sabbath-evening.jpg`    | 1280×720, YouTube thumb — Sabbath Evening             | NEEDED — pull from YT API or client |
| `livestream-sabbath-morning.jpg`    | 1280×720, YouTube thumb — Sabbath Morning             | NEEDED |
| `livestream-sunday-school.jpg`      | 1280×720, YouTube thumb — Sunday School               | NEEDED |
| `staff-carol.jpg`                   | 600×600, Carol Jellema (Secretary)                    | NEEDED — client |
| `staff-heather.jpg`                 | 600×600, Heather Benedict (Financial Treasurer)       | NEEDED |
| `staff-marcia.jpg`                  | 600×600, Marcia Woodall (Choir Director)              | NEEDED |
| `staff-wendy.jpg`                   | 600×600, Wendy McNutt (Treasurer)                     | NEEDED |
| `staff-cynthia.jpg`                 | 600×600, Cynthia Nokland (Clerk of Session)           | NEEDED |
| `life-ministries.jpg`               | 800×1000, Bible/study (Ministries card)               | NEEDED |
| `life-worship.jpg`                  | 800×1000, instruments/worship (Worship card)          | NEEDED |
| `life-events.jpg`                   | 800×1000, gathering (Events & Gallery card)           | NEEDED |
| `life-giving.jpg`                   | 800×1000, sanctuary interior (Giving card)            | NEEDED |
| `review-portrait.jpg`               | 1200×1500, B&W portrait for testimonial               | NEEDED |
| `og-default.jpg`                    | 1200×630, social share image                          | NEEDED |

---

## Deploy to Replit — Autoscale (scales to zero)

The repo includes a `.replit` file pre-configured for **Autoscale deployment** — the instance spins up on incoming request and spins down when idle. No always-on VM cost.

1. **Push to GitHub** — `git init && git add . && git commit -m "scaffold" && git push`
2. **Import to Replit** — New Repl → Import from GitHub
3. **Set secret:** `CRM_WEBHOOK_URL` (from CRM platform; never log brand name in client output)
4. **Click Deploy** — Replit picks up `.replit` automatically:
   - `deploymentTarget = "autoscale"`
   - Build: `npm run build`
   - Run: `npm run start` (which is `node dist/server/entry.mjs` on the PORT Replit provides)
5. **Domain** — point `fpcmontgomery.org` at the Replit deployment URL via CNAME, then add the custom domain in the Replit deployment settings.
6. **Old hosting** — keep live in parallel until post-launch verification sign-off.

> **Why Autoscale vs Reserved VM:** church-site traffic is typically low and bursty (Sundays, event announcements). Autoscale bills per request + compute time rather than a flat $20/month always-on VM. For a site this size, Autoscale is usually a fraction of the cost.

> **Cold-start note:** the first request after idle takes ~1–2 s for the Node server to wake. For static-feeling marketing pages this is fine. If you need always-warm, switch `deploymentTarget` back to `"reserved-vm"` in `.replit`.

---

## Next pages to build (mockups available)

- `/im-new`
- `/about`
- `/worship`
- `/ministries`
- `/contact`
- `/events` (Events & Gallery)
- `/giving` (no mockup — flag with client)

Reuse `PageHero` for the inner hero strip; reuse `GetNotified` above every footer.
