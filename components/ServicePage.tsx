import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MessageCircle, ChevronLeft, ChevronRight, MapPin,
  Wrench, Thermometer, Wind, Flame, UtensilsCrossed, Shirt, Zap,
  TriangleAlert as AlertTriangle, CircleCheck as CheckCircle2, ArrowLeft, ArrowRight,
  Shield, Clock, Award, Star, HelpCircle,
} from 'lucide-react';
import { type Service, getRelatedServices, getServiceContent, getServiceSlug, getServiceBrands } from '@/data/services';
import { siteConfig, serviceAreas } from '@/data/site-data';
import { t, type Locale } from '@/data/i18n';
import { getFAQArticlesByServiceId } from '@/data/faq-articles';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';

const iconMap: Record<string, React.ElementType> = {
  Wrench, Thermometer, Wind, Flame, UtensilsCrossed, Shirt, Zap,
};

const trustIconMap: Record<string, React.ElementType> = {
  Shield, Clock, Award,
};

export default function ServicePage({ service, locale }: { service: Service; locale: Locale }) {
  const Icon = iconMap[service.icon] || Wrench;
  const content = getServiceContent(service, locale);
  const brands = getServiceBrands(service, locale);
  const relatedServices = getRelatedServices(service.relatedIds);
  const tr = t(locale);
  const areas = serviceAreas[locale];
  const isRTL = locale === 'ar';
  const BreadcrumbChevron = isRTL ? ChevronLeft : ChevronRight;
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      <nav className="bg-gray-50 border-b border-gray-100" aria-label="breadcrumb">
        <div className="container-custom py-3">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href={`/${locale}/`} className="text-gray-500 hover:text-blue-500 transition-colors">
                {tr.service.breadcrumbHome}
              </Link>
            </li>
            <li><BreadcrumbChevron className="w-4 h-4 text-gray-400" /></li>
            <li className="text-blue-500 font-semibold">{content.title}</li>
          </ol>
        </div>
      </nav>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-blue-800" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className={`grid grid-cols-1 ${service.image ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
            <div className={service.image ? '' : 'max-w-3xl'}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                <Icon className="w-8 h-8 text-gold" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{content.h1}</h1>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl">{content.metaDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center gap-3 bg-white text-navy px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
                  <Phone className="w-5 h-5" />
                  {tr.cta.call}: {siteConfig.phoneDisplay}
                </a>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-success text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-success-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
                  <MessageCircle className="w-5 h-5" />
                  {tr.cta.whatsapp}
                </a>
              </div>
            </div>

            {service.image && (
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                    <Image
                      src={service.image}
                      alt={content.h1}
                      width={560}
                      height={420}
                      className="w-full h-[400px] object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-success-50 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-navy">{locale === 'ar' ? 'ضمان شامل' : 'Full Warranty'}</p>
                        <p className="text-xs text-gray-500">{locale === 'ar' ? 'قطع غيار أصلية' : 'Genuine Parts'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              {tr.service.processBadge}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy">{tr.service.processTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {tr.service.processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 text-center h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
                {index < tr.service.processSteps.length - 1 && (
                  <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${isRTL ? '-left-3' : '-right-3'} z-10`}>
                    <ArrowIcon className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {brands.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy text-center mb-3">{tr.service.brandsTitle}</h2>
            <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">{tr.service.brandsDesc}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {brands.map((brand) => (
                <div key={brand} className="bg-white px-6 py-3 rounded-xl border border-gray-100 text-sm font-semibold text-navy shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy text-center mb-3">{tr.service.issuesTitle}</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">{tr.service.issuesDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.commonIssues.map((issue, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1.5">{issue.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{issue.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-blue-800" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-gold/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-gold bg-white/10 px-4 py-1.5 rounded-full mb-4 border border-white/20">
              {tr.service.trustBadge}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tr.service.trustItems.map((item, index) => {
              const TrustIcon = trustIconMap[item.icon] || Shield;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <TrustIcon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-8">{tr.service.contentTitle}</h2>
            <div className="space-y-6">
              {content.content.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-[1.9] text-base md:text-lg">{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tr.service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-navy font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy text-center mb-3">{tr.service.areasTitle}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            {tr.service.areasDescPrefix} {content.title} {tr.service.areasDescSuffix}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {areas.map((area) => (
              <span key={area} className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <MapPin className="w-3.5 h-3.5" />
                {content.title} - {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy text-center mb-3">{tr.service.faqTitle}</h2>
            <p className="text-gray-500 text-center mb-10">{tr.service.faqDesc}</p>
            <FAQAccordion faqs={content.faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy text-center mb-3">{tr.service.relatedTitle}</h2>
          <p className="text-gray-500 text-center mb-10">{tr.service.relatedDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((related) => {
              const RelatedIcon = iconMap[related.icon] || Wrench;
              const relatedContent = getServiceContent(related, locale);
              return (
                <Link key={related.id} href={`/${locale}/${related.slugs[locale]}/`} className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  {related.image ? (
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={relatedContent.title}
                        width={400}
                        height={160}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                    </div>
                  ) : null}
                  <div className="p-6">
                    {!related.image && (
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                        <RelatedIcon className="w-6 h-6 text-blue-500" />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-navy mb-2">{relatedContent.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{relatedContent.metaDescription}</p>
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

      {/* Related FAQ Articles — Arabic only */}
      {locale === 'ar' && (() => {
        const faqItems = getFAQArticlesByServiceId(service.id);
        if (faqItems.length === 0) return null;
        return (
          <section className="py-16 md:py-20 bg-blue-50">
            <div className="container-custom">
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy text-center mb-3">
                مقالات متعلقة
              </h2>
              <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
                إجابات بالعامية الأردنية على أشهر أسئلتكم عن هاد الجهاز
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {faqItems.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/ar/faq/${article.slug}/`}
                    className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-600" />
                    <div>
                      <p className="font-bold text-navy text-sm group-hover:text-blue-600 transition-colors mb-1">
                        {article.title}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {article.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      <CTASection locale={locale} />
    </>
  );
}
