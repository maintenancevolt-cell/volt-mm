import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import { faqArticles } from '@/data/faq-articles';
import { siteConfig } from '@/data/site-data';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

const BASE = siteConfig.url;

export function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }];
}

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const canonicalUrl = `${BASE}/ar/faq/`;

  if (params.locale === 'en') {
    return {
      title: 'FAQ | Volt Maintenance Amman',
      alternates: { canonical: canonicalUrl },
      robots: { index: false, follow: true },
    };
  }

  return {
    title: 'أسئلة شائعة - صيانة الأجهزة المنزلية بعمان | فولت للصيانة',
    description:
      'إجابات على أسئلة الأردنيين عن صيانة الغسالات والثلاجات والمكيفات والأفران والجلايات. اعرف التكاليف والأسباب والحلول بالعامية الأردنية.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: 'أسئلة شائعة - صيانة أجهزة منزلية عمان | فولت للصيانة',
      description:
        'إجابات شاملة لأشهر أسئلة الأردنيين عن صيانة الأجهزة المنزلية في عمان.',
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: 'ar_JO',
      type: 'website',
      images: [
        {
          url: `${BASE}/logo_png-01.webp`,
          width: 800,
          height: 600,
          alt: 'فولت للصيانة - أسئلة شائعة',
        },
      ],
    },
    robots: { index: true, follow: true },
  };
}

// Top 6 FAQs for FAQPage schema
const schemaFAQs = [
  {
    question: 'غسالتي ما بتشتغل - شو أعمل؟',
    answer:
      'أول شي تأكد من الكهربا والقابس، بعدين تحقق من باب الغسالة إنه مقفول صح، ونظف الفلتر، وجرب تعيد تشغيل الجهاز. إذا ما زبطت اتصل بفني متخصص على 0796362523.',
  },
  {
    question: 'كم تكلف صيانة الغسالة الأوتوماتيك بالأردن؟',
    answer:
      'الأسعار تختلف حسب العطل: تغيير سير من 20-35 دينار، رولمان من 35-70 دينار، لوحة إلكترونية من 30-130 دينار. السعر الكامل بتعرفه بعد الفحص.',
  },
  {
    question: 'ثلاجتي ما بتبرد - شو السبب؟',
    answer:
      'أشهر الأسباب: نقص الفريون، عطل في الضاغط، ثرموستات خربان، أو ختم الباب تالف. نظف الملفات الخلفية وتأكد من الباب. إذا ما تحسنت اتصل على 0796362523.',
  },
  {
    question: 'المكيف شغال بس ما بيبرد - شو المشكلة؟',
    answer:
      'أول شي نظف الفلاتر وتأكد من إعداد COOL مش FAN فقط. الأسباب الشائعة: فريون ناقص، فلتر مسدود، أو مشكلة في الكومبريسور الخارجي.',
  },
  {
    question: 'كم مرة لازم أعمل صيانة للمكيف بالسنة؟',
    answer:
      'مرتين بالسنة على الأقل: مرة قبل الصيف (مارس-أبريل) ومرة قبل الشتاء (أكتوبر). الصيانة الدورية بتوفر الكهربا وبتطوّل عمر الجهاز.',
  },
  {
    question: 'كهربا البيت وقعت - شو أعمل؟',
    answer:
      'روح للوحة القواطع وشوف أي قاطع وقع. أوقف الأجهزة الكبيرة وارفع القاطع. إذا رجع يوقع، افصل الأجهزة واحد واحد. إذا في شرر أو رائحة حرق اتصل بكهربائي فوراً.',
  },
];

export default function FAQIndexPage({
  params,
}: {
  params: { locale: string };
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: params.locale === 'ar' ? 'الرئيسية' : 'Home',
      url: `${BASE}/${params.locale}/`,
    },
    { name: 'أسئلة شائعة', url: `${BASE}/ar/faq/` },
  ]);
  const faqPageSchema = generateFAQSchema(schemaFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-100" aria-label="breadcrumb">
        <div className="container-custom py-3">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href={`/${params.locale}/`} className="text-gray-500 hover:text-blue-500 transition-colors">
                {params.locale === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-blue-500 font-semibold">أسئلة شائعة</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-blue-800" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span className="text-sm text-white font-semibold">أسئلة وأجوبة</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            أسئلة شائعة عن صيانة الأجهزة المنزلية
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            إجابات واضحة بالعامية الأردنية على أكثر الأسئلة اللي بتسألها الناس عن صيانة أجهزتهم في عمان
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {faqArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/ar/faq/${article.slug}/`}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors mt-0.5">
                    <HelpCircle className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-bold text-navy mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {article.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-blue-500 text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                      اقرأ المقال
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
            ما لاقيت جواب سؤالك؟
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            اتصل فينا مباشرة وبيجاوبك فني متخصص على أي سؤال عندك — خدمة في نفس اليوم بعمان
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              اتصل: {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-success text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-success-400 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </a>
          </div>
          <div className="mt-8">
            <Link
              href="/ar/"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
