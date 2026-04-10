import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, MessageCircle, Users, Clock, Shield, Award, MapPin,
  Wrench, Thermometer, Wind, Flame, UtensilsCrossed, Shirt, Zap,
  CircleCheck as CheckCircle2, Headphones, ArrowLeft, ArrowRight,
  Star, BadgeCheck, PhoneCall, Sparkles,
} from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig, serviceAreas } from '@/data/site-data';
import { locales, t, type Locale } from '@/data/i18n';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'en' ? 'en' : 'ar') as Locale;
  const tr = t(locale);
  return {
    title: tr.home.metaTitle,
    description: tr.home.metaDesc,
    keywords: locale === 'ar'
      ? 'صيانة أجهزة منزلية, صيانة غسالات, تصليح ثلاجات, صيانة مكيفات, كهربائي منزلي, عمان, الأردن'
      : 'home appliance repair, washing machine repair, refrigerator repair, ac repair, electrician, amman, jordan',
    alternates: {
      canonical: `/${locale}/`,
      languages: { ar: '/ar/', en: '/en/' },
    },
    openGraph: {
      title: tr.home.metaTitle,
      description: tr.home.metaDesc,
      url: `${siteConfig.url}/${locale}/`,
      siteName: siteConfig.name,
      locale: locale === 'ar' ? 'ar_JO' : 'en_JO',
      type: 'website',
      images: [
        {
          url: `${siteConfig.url}/logo_png-01.png`,
          width: 800,
          height: 600,
          alt: locale === 'ar'
            ? 'فولت للصيانة - أفضل شركة صيانة أجهزة منزلية في عمان'
            : 'Volt Maintenance - Best Home Appliance Repair in Amman',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tr.home.metaTitle,
      description: tr.home.metaDesc,
      images: [`${siteConfig.url}/logo_png-01.png`],
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

const iconMap: Record<string, React.ElementType> = {
  Wrench, Thermometer, Wind, Flame, UtensilsCrossed, Shirt, Zap,
};

const statIcons = [Users, Award, Clock, Shield];
const whyUsIcons = [CheckCircle2, Headphones, Shield, Award];
const guaranteeIcons = [BadgeCheck, Shield, Sparkles, PhoneCall];

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = (params.locale === 'en' ? 'en' : 'ar') as Locale;
  const tr = t(locale);
  const areas = serviceAreas[locale];
  const isRTL = locale === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const statsArray = [
    tr.home.stats.clients,
    tr.home.stats.experience,
    tr.home.stats.availability,
    tr.home.stats.guarantee,
  ];

  const servicesWithImages = services.filter((s) => s.image);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-blue-800" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <span className="w-2 h-2 bg-success rounded-full" />
                {tr.home.badge}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                {tr.home.title1}
                <br />
                <span className="text-gold">{tr.home.title2}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                {tr.home.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-3 bg-white text-navy px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  {tr.cta.call}: {siteConfig.phoneDisplay}
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-success text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-success-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  {tr.cta.whatsapp}
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {servicesWithImages.map((service, index) => (
                  <div
                    key={service.id}
                    className={`relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 ${
                      index === 0 ? 'translate-y-4' : index === 1 ? '-translate-y-4' : index === 2 ? 'translate-y-2' : '-translate-y-2'
                    }`}
                  >
                    <Image
                      src={service.image!}
                      alt={`${service[locale].title} - فولت للصيانة عمان`}
                      width={300}
                      height={300}
                      priority={index < 2}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-white text-sm font-bold">{service[locale].title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom relative z-10 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsArray.map((stat, index) => {
              const StatIcon = statIcons[index];
              return (
                <div key={stat.label} className="glass rounded-2xl p-5 text-center hover:bg-white/15 transition-all duration-300">
                  <StatIcon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              {tr.home.servicesSection.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              {tr.home.servicesSection.title}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              {tr.home.servicesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Wrench;
              const content = service[locale];
              const brands = service.brands[locale];
              return (
                <Link
                  key={service.id}
                  href={`/${locale}/${service.slugs[locale]}/`}
                  className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {service.image ? (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${content.title} في عمان - فولت للصيانة`}
                        width={400}
                        height={192}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-white">{content.title}</h3>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 pb-0">
                      <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-blue-500 transition-colors">{content.title}</h3>
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">{content.metaDescription}</p>
                    {brands.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {brands.slice(0, 4).map((brand) => (
                          <span key={brand} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full">{brand}</span>
                        ))}
                        {brands.length > 4 && (
                          <span className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full">+{brands.length - 4}</span>
                        )}
                      </div>
                    )}
                    <span className="inline-flex items-center gap-1 text-blue-500 text-sm font-semibold group-hover:gap-2 transition-all">
                      {tr.home.servicesSection.learnMore}
                      <ArrowIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work - Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              {tr.home.process.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              {tr.home.process.title}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              {tr.home.process.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tr.home.process.steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {index < 2 && (
                  <div className={`hidden md:block absolute top-12 ${isRTL ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} w-full h-[2px] bg-gradient-to-r from-blue-200 to-blue-100 z-0`} />
                )}
                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-lg group-hover:border-blue-300 group-hover:shadow-xl transition-all duration-300">
                    <span className="text-3xl font-black text-blue-500">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              {tr.home.whyUs.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              {tr.home.whyUs.title}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              {tr.home.whyUs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tr.home.whyUs.items.map((item, index) => {
              const ItemIcon = whyUsIcons[index];
              return (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                      <ItemIcon className="w-7 h-7 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-gold bg-gold-50 px-4 py-1.5 rounded-full mb-4">
              {tr.home.testimonials.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              {tr.home.testimonials.title}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              {tr.home.testimonials.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tr.home.testimonials.items.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-6xl font-serif text-blue-50 leading-none select-none">&ldquo;</div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">{review.text}</p>
                  <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-navy text-sm">{review.name}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-blue-800" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-gold bg-white/10 px-4 py-1.5 rounded-full mb-4 border border-white/20">
              {tr.home.guarantee.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              {tr.home.guarantee.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tr.home.guarantee.items.map((item, index) => {
              const GIcon = guaranteeIcons[index];
              return (
                <div key={index} className="glass rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <GIcon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              {tr.home.areas.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              {tr.home.areas.title}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              {tr.home.areas.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 bg-white text-navy px-5 py-3 rounded-full text-sm font-medium border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <MapPin className="w-4 h-4 text-blue-500" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
