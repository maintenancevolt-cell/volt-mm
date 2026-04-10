import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site-data';
import { t, type Locale } from '@/data/i18n';

export default function CTASection({ locale }: { locale: Locale }) {
  const tr = t(locale);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-blue-800" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          {tr.cta.title}
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {tr.cta.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center justify-center gap-3 bg-white text-navy px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            {tr.cta.call}: {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-success text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-success-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            {tr.cta.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
