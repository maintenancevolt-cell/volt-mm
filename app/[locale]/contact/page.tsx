import type { Metadata } from 'next';
import { Phone, MessageCircle, MapPin, Clock, Shield, Users, Award, Headphones } from 'lucide-react';
import { siteConfig } from '@/data/site-data';
import { locales, t, type Locale } from '@/data/i18n';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'en' ? 'en' : 'ar') as Locale;
  const tr = t(locale);
  return {
    title: tr.contact.metaTitle,
    description: tr.contact.metaDesc,
    keywords: locale === 'ar'
      ? 'اتصل بفولت للصيانة, رقم صيانة عمان, صيانة أجهزة منزلية عمان, واتساب صيانة, 0796362523'
      : 'contact volt maintenance, appliance repair amman phone, home repair jordan contact',
    alternates: {
      canonical: `/${locale}/contact/`,
      languages: { ar: '/ar/contact/', en: '/en/contact/', 'x-default': '/ar/contact/' },
    },
    openGraph: {
      title: tr.contact.metaTitle,
      description: tr.contact.metaDesc,
      url: `${siteConfig.url}/${locale}/contact/`,
      siteName: siteConfig.name,
      locale: locale === 'ar' ? 'ar_JO' : 'en_JO',
      type: 'website',
      images: [
        {
          url: `${siteConfig.url}/logo_png-01.png`,
          width: 800,
          height: 600,
          alt: locale === 'ar' ? 'اتصل بفولت للصيانة عمان' : 'Contact Volt Maintenance Amman',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tr.contact.metaTitle,
      description: tr.contact.metaDesc,
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

const trustIcons = [Users, Shield, Award, Headphones];

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale === 'en' ? 'en' : 'ar') as Locale;
  const tr = t(locale);

  const faqSchema = generateFAQSchema(tr.contact.contactFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'ar' ? 'الرئيسية' : 'Home', url: `${siteConfig.url}/${locale}/` },
    { name: locale === 'ar' ? 'اتصل بنا' : 'Contact Us', url: `${siteConfig.url}/${locale}/contact/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-blue-800" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Phone className="w-3.5 h-3.5" />
            {locale === 'ar' ? 'نحن هنا لمساعدتك' : 'We Are Here to Help'}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">{tr.contact.heroTitle}</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">{tr.contact.heroDesc}</p>
        </div>
      </section>

      <section className="relative -mt-10 z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href={`tel:${siteConfig.phone}`}
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                <Phone className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{tr.contact.callUs}</h3>
              <p className="text-sm text-gray-500 mb-3">{tr.contact.callDesc}</p>
              <span className="text-blue-500 font-bold text-lg" dir="ltr">{siteConfig.phoneDisplay}</span>
            </a>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-success-200 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-success-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-success-100 group-hover:scale-110 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{tr.contact.whatsapp}</h3>
              <p className="text-sm text-gray-500 mb-3">{tr.contact.whatsappDesc}</p>
              <span className="text-success font-bold">{tr.contact.startChat}</span>
            </a>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gold-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{tr.contact.location}</h3>
              <p className="text-sm text-gray-500 mb-3">{tr.contact.locationDesc}</p>
              <span className="text-navy font-medium text-sm">{siteConfig.address[locale]}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-navy via-navy-600 to-blue-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <span className="inline-block text-sm font-semibold text-gold bg-white/10 px-4 py-1.5 rounded-full mb-4 border border-white/20">
                {tr.contact.emergencyBadge}
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">{tr.contact.emergencyTitle}</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">{tr.contact.emergencyDesc}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-3 bg-white text-navy px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-success text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-success-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  {tr.contact.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy text-center mb-12">{tr.contact.trustTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {tr.contact.trustItems.map((item, index) => {
              const TIcon = trustIcons[index];
              return (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 mx-auto bg-blue-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                    <TIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-navy mb-1">{item.value}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-8">{tr.contact.workingHoursTitle}</h2>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-navy">{siteConfig.workingHours[locale]}</p>
                    <p className="text-sm text-gray-500">
                      {locale === 'ar' ? 'الجمعة: مغلق' : 'Friday: Closed'}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {siteConfig.workingDays.map((day) => (
                    <div key={day} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <span className="text-sm text-gray-600 font-medium">
                        {locale === 'ar' ? ({
                          Saturday: 'السبت', Sunday: 'الأحد', Monday: 'الإثنين',
                          Tuesday: 'الثلاثاء', Wednesday: 'الأربعاء', Thursday: 'الخميس',
                        } as Record<string, string>)[day] || day : day}
                      </span>
                      <span className="text-sm font-semibold text-navy">8:00 AM - 10:00 PM</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-8">{tr.contact.mapTitle}</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[400px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.5!2d${siteConfig.longitude}!3d${siteConfig.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sar!2sjo!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={tr.contact.mapTitle}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-semibold text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
                {tr.contact.faqTitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy">{tr.contact.faqTitle}</h2>
            </div>
            <FAQAccordion faqs={tr.contact.contactFaqs} />
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
