import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';
import {
  faqArticles,
  getFAQArticleBySlug,
  type FAQArticle,
} from '@/data/faq-articles';
import { siteConfig } from '@/data/site-data';
import { generateBreadcrumbSchema } from '@/lib/schema';

const BASE = siteConfig.url;

// Service slug mapping
const serviceLinks: Record<string, { path: string; label: string }> = {
  'washing-machines': {
    path: '/ar/صيانة-غسالات-عمان/',
    label: 'صيانة غسالات عمان',
  },
  refrigerators: {
    path: '/ar/تصليح-ثلاجات-عمان/',
    label: 'تصليح ثلاجات عمان',
  },
  'air-conditioners': {
    path: '/ar/صيانة-مكيفات-عمان/',
    label: 'صيانة مكيفات عمان',
  },
  'gas-ovens': {
    path: '/ar/صيانة-افران-غاز-عمان/',
    label: 'صيانة أفران غاز عمان',
  },
  dishwashers: {
    path: '/ar/صيانة-جلايات-عمان/',
    label: 'صيانة جلايات عمان',
  },
  dryers: {
    path: '/ar/صيانة-حمصات-عمان/',
    label: 'صيانة حمصات عمان',
  },
  electrician: {
    path: '/ar/كهربائي-منزلي-عمان/',
    label: 'كهربائي منزلي عمان',
  },
  home: { path: '/ar/', label: 'فولت للصيانة - الرئيسية' },
};

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const article of faqArticles) {
    params.push({ locale: 'ar', slug: article.slug });
    const encoded = encodeURIComponent(article.slug);
    if (encoded !== article.slug) {
      params.push({ locale: 'ar', slug: encoded });
    }
    // en locale — canonical will point to ar anyway
    params.push({ locale: 'en', slug: article.slug });
  }
  return params;
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const article = getFAQArticleBySlug(params.slug);
  if (!article) return {};

  const canonicalUrl = `${BASE}/ar/faq/${article.slug}/`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: 'ar_JO',
      type: 'article',
      images: [
        {
          url: `${BASE}/logo_png-01.png`,
          width: 800,
          height: 600,
          alt: article.title,
        },
      ],
    },
    robots: {
      index: params.locale === 'ar',
      follow: true,
      googleBot: {
        index: params.locale === 'ar',
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

function ArticleBody({ article }: { article: FAQArticle }) {
  return (
    <div className="text-gray-700 leading-relaxed">
      <p className="text-lg md:text-xl leading-[1.9] text-gray-700 mb-8 font-medium">
        {article.intro}
      </p>

      {article.sections.map((section, si) => (
        <div key={si} className="mb-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-navy mb-4 mt-8 pb-2 border-b border-gray-100">
            {section.h2}
          </h2>

          {section.content && (
            <p className="text-gray-600 leading-relaxed mb-4">{section.content}</p>
          )}

          {section.items && section.items.length > 0 && (
            <div className="space-y-4">
              {section.items.map((item, ii) => (
                <div
                  key={ii}
                  className="bg-gray-50 rounded-xl p-5 border-r-4 border-blue-400"
                >
                  <h3 className="text-base font-bold text-navy mb-2">
                    {item.h3}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {section.bullets && section.bullets.length > 0 && (
            <ul className="space-y-2.5 mt-4">
              {section.bullets.map((bullet, bi) => (
                <li key={bi} className="flex items-start gap-2.5 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQArticlePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const article = getFAQArticleBySlug(params.slug);
  if (!article) notFound();

  const serviceLink = serviceLinks[article.serviceId] ?? serviceLinks.home;
  const relatedArticles = faqArticles.filter((a) =>
    article.relatedArticleSlugs.includes(a.slug),
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', url: `${BASE}/ar/` },
    { name: 'أسئلة شائعة', url: `${BASE}/ar/faq/` },
    { name: article.title, url: `${BASE}/ar/faq/${article.slug}/` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.h1,
    description: article.metaDescription,
    inLanguage: 'ar-JO',
    url: `${BASE}/ar/faq/${article.slug}/`,
    author: {
      '@type': 'Organization',
      name: siteConfig.nameAr,
      url: BASE,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE}/#localbusiness`,
      name: siteConfig.name,
    },
    datePublished: '2026-04-20',
    dateModified: '2026-04-20',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-100" aria-label="breadcrumb">
        <div className="container-custom py-3">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li>
              <Link href="/ar/" className="text-gray-500 hover:text-blue-500 transition-colors">
                الرئيسية
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/ar/faq/" className="text-gray-500 hover:text-blue-500 transition-colors">
                أسئلة شائعة
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-blue-500 font-semibold truncate max-w-[180px]">
              {article.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-blue-800" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-5">
              <HelpCircle className="w-4 h-4 text-gold" />
              <span className="text-sm text-white font-semibold">أسئلة شائعة</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
              {article.h1}
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {article.metaDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Article */}
            <article className="lg:col-span-2">
              <ArticleBody article={article} />

              {/* Service Link Banner */}
              <div className="mt-10 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-navy font-semibold mb-2">
                  تحتاج خدمة{' '}
                  <Link
                    href={serviceLink.path}
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {serviceLink.label}
                  </Link>
                  ؟
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  فريق فولت للصيانة جاهز يوصلك بنفس اليوم في عمان.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center gap-1.5 bg-navy text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    اتصل الآن: {siteConfig.phoneDisplay}
                  </a>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-success text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-success-400 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    واتساب
                  </a>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl font-bold text-navy mb-4">مقالات متعلقة</h2>
                  <div className="space-y-3">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/ar/faq/${rel.slug}/`}
                        className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                      >
                        <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-600" />
                        <div>
                          <p className="font-semibold text-navy text-sm group-hover:text-blue-600 transition-colors">
                            {rel.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">{rel.shortDescription}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to FAQ */}
              <div className="mt-8">
                <Link
                  href="/ar/faq/"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 font-semibold text-sm transition-colors"
                >
                  ← كل الأسئلة الشائعة
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* CTA Card */}
                <div className="bg-navy rounded-2xl p-6 text-white text-center">
                  <p className="font-bold text-lg mb-1">جهازك معطل؟</p>
                  <p className="text-gray-300 text-sm mb-5">
                    اتصل فينا هلق — بنوصلك بنفس اليوم في عمان
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center justify-center gap-2 bg-white text-navy py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors mb-3"
                  >
                    <Phone className="w-4 h-4" />
                    {siteConfig.phoneDisplay}
                  </a>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-success text-white py-3 rounded-xl font-bold text-sm hover:bg-success-400 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    راسلنا على واتساب
                  </a>
                </div>

                {/* Service Link */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    صفحة الخدمة
                  </p>
                  <Link
                    href={serviceLink.path}
                    className="text-sm text-blue-600 hover:text-blue-800 font-semibold underline"
                  >
                    {serviceLink.label}
                  </Link>
                </div>

                {/* All FAQs */}
                <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    المزيد
                  </p>
                  <Link
                    href="/ar/faq/"
                    className="text-sm text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    ← كل الأسئلة الشائعة
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-blue-800" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            جهازك معطل؟ اتصل فينا هلق على {siteConfig.phoneDisplay}
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            فولت للصيانة — فنيين متخصصين في عمان. بنوصلك بنفس اليوم مع قطع غيار
            أصلية وضمان شامل. أو راسلنا على واتساب.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-navy px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-success text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-success-400 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
