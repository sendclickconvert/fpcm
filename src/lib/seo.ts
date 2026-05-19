/**
 * Centralized SEO helpers per CRSTweb doctrine.
 *
 * Rules:
 *  - No trailing slash on canonical URLs.
 *  - LocalBusiness / Church schema on homepage ONLY.
 *  - Article / Service / FAQPage JSON-LD on cluster pages.
 *  - Soft regulatory language on any Part 199 references.
 *  - Single-hop redirects only — handled in astro.config.mjs.
 */

import { CHURCH } from '../data/site';

/** Build a canonical URL from a pathname, stripping trailing slash. */
export function canonical(pathname: string): string {
  const clean = pathname.replace(/\/$/, '') || '/';
  return new URL(clean, CHURCH.url).toString();
}

/** Absolute URL for an og image path. */
export function absoluteOgImage(path: string): string {
  return new URL(path, CHURCH.url).toString();
}

/**
 * Homepage schema — Church + WebSite graph.
 * Per doctrine: LocalBusiness-style schema on homepage ONLY. No AggregateRating.
 */
export function homepageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Church', 'PlaceOfWorship', 'LocalBusiness'],
        '@id': `${CHURCH.url}/#church`,
        name: CHURCH.name,
        alternateName: CHURCH.shortName,
        description: CHURCH.description,
        url: CHURCH.url,
        email: CHURCH.email,
        telephone: CHURCH.phone,
        foundingDate: CHURCH.founded,
        address: {
          '@type': 'PostalAddress',
          streetAddress: CHURCH.address.street,
          addressLocality: CHURCH.address.city,
          addressRegion: CHURCH.address.region,
          postalCode: CHURCH.address.postalCode,
          addressCountry: CHURCH.address.country,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '13:00',
            description: 'Church office hours (reduced during pastoral search)',
          },
        ],
        event: {
          '@type': 'Event',
          name: 'Sunday Worship Service',
          eventSchedule: {
            '@type': 'Schedule',
            byDay: 'https://schema.org/Sunday',
            startTime: '10:00',
          },
          location: {
            '@type': 'Place',
            name: CHURCH.name,
            address: {
              '@type': 'PostalAddress',
              streetAddress: CHURCH.address.street,
              addressLocality: CHURCH.address.city,
              addressRegion: CHURCH.address.region,
              postalCode: CHURCH.address.postalCode,
            },
          },
        },
        sameAs: Object.values(CHURCH.social),
      },
      {
        '@type': 'WebSite',
        '@id': `${CHURCH.url}/#website`,
        url: CHURCH.url,
        name: CHURCH.name,
        description: CHURCH.description,
        publisher: { '@id': `${CHURCH.url}/#church` },
      },
    ],
  };
}

/**
 * Article schema — for cluster spoke pages (ministry articles, blog posts).
 * Per doctrine: Article / Service / FAQPage JSON-LD on cluster pages.
 */
export function articleSchema(args: {
  title: string;
  description: string;
  path: string;
  author: { name: string; url?: string };
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: args.title,
    description: args.description,
    url: canonical(args.path),
    author: {
      '@type': 'Person',
      name: args.author.name,
      ...(args.author.url ? { url: args.author.url } : {}),
    },
    publisher: {
      '@type': 'Organization',
      name: CHURCH.name,
      url: CHURCH.url,
    },
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    ...(args.image ? { image: absoluteOgImage(args.image) } : {}),
  };
}

/** FAQPage schema — render FAQs expanded by default. */
export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: i.answer,
      },
    })),
  };
}
