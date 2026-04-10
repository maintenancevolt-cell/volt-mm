import { siteConfig, serviceAreas } from '@/data/site-data';
import { services, type Service } from '@/data/services';
import type { Locale } from '@/data/i18n';

export function generateLocalBusinessSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    alternateName: siteConfig.nameAr,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    description: siteConfig.description[locale],
    image: `${siteConfig.url}/logo_png-01.png`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo_png-01.png`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'المدينة الرياضية - حي الخرابشة',
      addressLocality: siteConfig.addressLocality,
      addressRegion: 'عمان',
      addressCountry: siteConfig.addressCountry,
      postalCode: '11954',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude,
    },
    areaServed: serviceAreas[locale].map((area) => ({
      '@type': 'City',
      name: area,
    })),
    openingHoursSpecification: siteConfig.workingDays.map((day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: siteConfig.opensAt,
      closes: siteConfig.closesAt,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'ar' ? 'خدمات صيانة الأجهزة المنزلية' : 'Home Appliance Maintenance Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service[locale].title,
          url: `${siteConfig.url}/${locale}/${service.slugs[locale]}/`,
        },
      })),
    },
    // Update ratingCount with real review data as you collect them
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '$$',
    currenciesAccepted: 'JOD',
    paymentAccepted: 'Cash',
  };
}

export function generateWebSiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: locale === 'ar' ? 'فولت للصيانة' : 'Volt Maintenance',
    alternateName: locale === 'ar' ? 'Volt Maintenance' : 'فولت للصيانة',
    url: siteConfig.url,
    description: siteConfig.description[locale],
    inLanguage: locale === 'ar' ? 'ar-JO' : 'en-JO',
    publisher: {
      '@id': `${siteConfig.url}/#localbusiness`,
    },
  };
}

export function generateServiceSchema(service: Service, locale: Locale) {
  const content = service[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: content.h1,
    description: content.metaDescription,
    url: `${siteConfig.url}/${locale}/${service.slugs[locale]}/`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      alternateName: siteConfig.nameAr,
      telephone: siteConfig.phone,
      url: siteConfig.url,
    },
    areaServed: serviceAreas[locale].map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceType: content.title,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${siteConfig.url}/${locale}/${service.slugs[locale]}/`,
      servicePhone: siteConfig.phone,
    },
  };
}

export function generateFAQSchema(faqs: readonly { readonly question: string; readonly answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
