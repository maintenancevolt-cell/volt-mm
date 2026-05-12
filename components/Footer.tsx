import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig, serviceAreas } from '@/data/site-data';
import { t, type Locale } from '@/data/i18n';

export default function Footer({ locale }: { locale: Locale }) {
  const tr = t(locale);
  const areas = serviceAreas[locale];

  return (
    <footer className="bg-navy text-white">
      <div className="h-1 bg-gold" />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href={`/${locale}/`} className="inline-block mb-4">
              <Image
                src="/logo_png-01.webp"
                alt="Volt Maintenance"
                width={160}
                height={56}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {tr.footer.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center hover:bg-success/30 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-success-300" />
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5 text-blue-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-white mb-4">{tr.footer.servicesTitle}</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${locale}/${service.slugs[locale]}/`}
                    className="text-sm text-gray-300 hover:text-gold transition-colors"
                  >
                    {service[locale].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white mb-4">{tr.footer.areasTitle}</h3>
            <div className="flex flex-wrap gap-1.5">
              {areas.map((area) => (
                <span key={area} className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-full">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-white mb-4">{tr.footer.contactTitle}</h3>
            <div className="space-y-4">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">{siteConfig.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">{siteConfig.address[locale]}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-sm">{siteConfig.workingHours[locale]}</span>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <Link href={`/${locale}/about/`} className="block text-sm text-gray-300 hover:text-gold transition-colors">
                {tr.nav.about}
              </Link>
              <Link href={`/${locale}/contact/`} className="block text-sm text-gray-300 hover:text-gold transition-colors">
                {tr.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            {tr.footer.copyright} {new Date().getFullYear()} - {locale === 'ar' ? siteConfig.nameAr : siteConfig.name}
          </p>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/`} className="text-xs text-gray-400 hover:text-gold transition-colors">
              {tr.nav.home}
            </Link>
            <Link href={`/${locale}/about/`} className="text-xs text-gray-400 hover:text-gold transition-colors">
              {tr.nav.about}
            </Link>
            <Link href={`/${locale}/contact/`} className="text-xs text-gray-400 hover:text-gold transition-colors">
              {tr.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
