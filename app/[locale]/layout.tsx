import type { Metadata } from 'next';
import { locales, type Locale } from '@/data/i18n';
import { siteConfig } from '@/data/site-data';
import { generateLocalBusinessSchema, generateWebSiteSchema } from '@/lib/schema';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LocaleProvider from '@/components/LocaleProvider';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'en' ? 'en' : 'ar') as Locale;
  return {
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        ar: '/ar/',
        en: '/en/',
        'x-default': '/ar/',
      },
    },
    openGraph: {
      images: [
        {
          url: `${siteConfig.url}/logo_png-01.png`,
          width: 800,
          height: 600,
          alt: 'Volt Maintenance - صيانة فولت',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`${siteConfig.url}/logo_png-01.png`],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'ar') as Locale;
  const localBusinessSchema = generateLocalBusinessSchema(locale);
  const webSiteSchema = generateWebSiteSchema(locale);
  const tr = { ar: 'تواصل واتساب', en: 'Chat on WhatsApp' };

  return (
    <LocaleProvider locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Navbar locale={locale} />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer locale={locale} />
      <WhatsAppButton tooltip={tr[locale]} />
    </LocaleProvider>
  );
}
