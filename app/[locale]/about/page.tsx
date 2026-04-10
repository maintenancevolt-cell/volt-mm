import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench, Thermometer, Wind, Flame, UtensilsCrossed, Shirt, Zap,
  ArrowLeft, ArrowRight, Shield, Clock, Award, Heart, Target, Handshake,
  CircleCheck as CheckCircle2, Star,
} from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site-data';
import { locales, t, type Locale } from '@/data/i18n';
import { generateBreadcrumbSchema } from '@/lib/schema';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'en' ? 'en' : 'ar') as Locale;
  const tr = t(locale);
  return {
    title: tr.about.metaTitle,
    description: tr.about.metaDesc,
    keywords: locale === 'ar'
      ? 'شركة صيانة عمان, فولت للصيانة, من نحن, صيانة أجهزة منزلية الأردن, فنيين صيانة متخصصين'
      : 'volt maintenance about, appliance repair company amman, home appliance maintenance jordan',
    alternates: {
      canonical: `/${locale}/about/`,
      languages: { ar: '/ar/about/', en: '/en/about/', 'x-default': '/ar/about/' },
    },
    openGraph: {
      title: tr.about.metaTitle,
      description: tr.about.metaDesc,
      url: `${siteConfig.url}/${locale}/about/`,
      siteName: siteConfig.name,
      locale: locale === 'ar' ? 'ar_JO' : 'en_JO',
      type: 'website',
      images: [
        {
          url: `${siteConfig.url}/logo_png-01.png`,
          width: 800,
          height: 600,
          alt: locale === 'ar' ? 'فولت للصيانة - من نحن' : 'Volt Maintenance - About Us',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tr.about.metaTitle,
      description: tr.about.metaDesc,
      images: [`${siteConfig.url}/logo_png-01.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

const iconMap: Record<string, React.ElementType> = {
  Wrench, Thermometer, Wind, Flame, UtensilsCrossed, Shirt, Zap,
};

const valueIcons = [Target, Handshake, Heart];
const promiseIcons = [Clock, Award, Star, CheckCircle2];

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale === 'en' ? 'en' : 'ar') as Locale;
  const tr = t(locale);
  const isRTL = locale === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'ar' ? 'الرئيسية' : 'Home', url: `${siteConfig.url}/${locale}/` },
    { name: locale === 'ar' ? 'من نحن' : 'About Us', url: `${siteConfig.url}/${locale}/about/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-blue-800" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <span className="w-2 h-2 bg-gold rounded-full" />
            {locale === 'ar' ? 'تعرف علينا' : 'Get to Know Us'}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">{tr.about.heroTitle}</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">{tr.about.heroDesc}</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-10 z-20">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tr.about.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-navy mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story with side image */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
                {tr.about.storyTitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">{tr.about.storyTitle}</h2>
              <div className="space-y-5">
                {tr.about.storyParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-[1.9] text-base">{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {services.filter((s) => s.image).slice(0, 4).map((service, index) => (
                <div
                  key={service.id}
                  className={`relative rounded-2xl overflow-hidden shadow-lg ${
                    index % 2 === 0 ? 'translate-y-4' : '-translate-y-4'
                  }`}
                >
                  <Image
                    src={service.image!}
                    alt={service[locale].title}
                    width={280}
                    height={200}
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-white text-xs font-bold">{service[locale].title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              {tr.about.timeline.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
              {tr.about.timeline.title}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className={`absolute ${isRTL ? 'right-6' : 'left-6'} top-0 bottom-0 w-0.5 bg-blue-100`} />

            <div className="space-y-10">
              {tr.about.timeline.items.map((item, index) => (
                <div key={index} className={`relative flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs">{item.year}</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex-1">
                    <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              {tr.about.valuesBadge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">{tr.about.valuesTitle}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">{tr.about.valuesDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tr.about.values.map((value, index) => {
              const ValueIcon = valueIcons[index];
              return (
                <div key={value.title} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <ValueIcon className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-blue-800" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-gold bg-white/10 px-4 py-1.5 rounded-full mb-4 border border-white/20">
              {tr.about.promiseBadge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              {tr.about.promiseTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tr.about.promises.map((promise, index) => {
              const PIcon = promiseIcons[index];
              return (
                <div key={index} className="glass rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <PIcon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{promise.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{promise.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              {tr.about.servicesBadge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">{tr.about.servicesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Wrench;
              const content = service[locale];
              return (
                <Link
                  key={service.id}
                  href={`/${locale}/${service.slugs[locale]}/`}
                  className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {service.image ? (
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={content.title}
                        width={400}
                        height={160}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                    </div>
                  ) : null}
                  <div className="p-6">
                    {!service.image && (
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                        <Icon className="w-6 h-6 text-blue-500" />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-navy mb-2">{content.title}</h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{content.metaDescription}</p>
                    <span className="inline-flex items-center gap-1 text-blue-500 text-sm font-semibold group-hover:gap-2 transition-all">
                      {tr.service.learnMore}
                      <ArrowIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
