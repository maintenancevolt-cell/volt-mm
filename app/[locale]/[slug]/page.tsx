import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site-data';
import { locales, type Locale } from '@/data/i18n';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import ServicePage from '@/components/ServicePage';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const service of services) {
      const slug = service.slugs[locale];
      params.push({ locale, slug });
      const encoded = encodeURIComponent(slug);
      if (encoded !== slug) {
        params.push({ locale, slug: encoded });
      }
    }
  }
  return params;
}

function findService(slug: string) {
  return getServiceBySlug(slug) || getServiceBySlug(decodeURIComponent(slug));
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
  const locale = (params.locale === 'en' ? 'en' : 'ar') as Locale;
  const result = findService(params.slug);
  if (!result) return {};

  const { service } = result;
  const content = service[locale];

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords.join(', '),
    alternates: {
      canonical: `/${locale}/${service.slugs[locale]}/`,
      languages: {
        ar: `/ar/${service.slugs.ar}/`,
        en: `/en/${service.slugs.en}/`,
        'x-default': `/ar/${service.slugs.ar}/`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${siteConfig.url}/${locale}/${service.slugs[locale]}/`,
      siteName: siteConfig.name,
      locale: locale === 'ar' ? 'ar_JO' : 'en_JO',
      type: 'website',
      images: [
        {
          url: service.image
            ? `${siteConfig.url}${service.image}`
            : `${siteConfig.url}/logo_png-01.png`,
          width: 800,
          height: 600,
          alt: content.h1,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metaTitle,
      description: content.metaDescription,
      images: [
        service.image
          ? `${siteConfig.url}${service.image}`
          : `${siteConfig.url}/logo_png-01.png`,
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function ServiceSlugPage({ params }: { params: { locale: string; slug: string } }) {
  const locale = (params.locale === 'en' ? 'en' : 'ar') as Locale;
  const result = findService(params.slug);
  if (!result) notFound();

  const { service } = result;
  const content = service[locale];

  const serviceSchema = generateServiceSchema(service, locale);
  const faqSchema = generateFAQSchema(content.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'ar' ? 'الرئيسية' : 'Home', url: `${siteConfig.url}/${locale}/` },
    { name: content.title, url: `${siteConfig.url}/${locale}/${service.slugs[locale]}/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePage service={service} locale={locale} />
    </>
  );
}
