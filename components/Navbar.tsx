'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown, Globe, HelpCircle } from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site-data';
import { t, type Locale } from '@/data/i18n';

export default function Navbar({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const tr = t(locale);
  const otherLocale = locale === 'ar' ? 'en' : 'ar';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={`/${locale}/`} className="flex items-center group">
            <Image
              src="/logo_png-01.png"
              alt="Volt Maintenance"
              width={140}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href={`/${locale}/`}
              className="text-sm font-semibold text-gray-700 hover:text-blue-500 transition-colors"
            >
              {tr.nav.home}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-blue-500 transition-colors">
                {tr.nav.services}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`absolute top-full ${locale === 'ar' ? 'right-0' : 'left-0'} mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                  servicesOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/${locale}/${service.slugs[locale]}/`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors"
                    >
                      {service[locale].title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={`/${locale}/about/`}
              className="text-sm font-semibold text-gray-700 hover:text-blue-500 transition-colors"
            >
              {tr.nav.about}
            </Link>

            {/* FAQ / Blog — Arabic only */}
            {locale === 'ar' && (
              <Link
                href="/ar/faq/"
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-blue-500 transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                أسئلة شائعة
              </Link>
            )}

            <Link
              href={`/${locale}/contact/`}
              className="text-sm font-semibold text-gray-700 hover:text-blue-500 transition-colors"
            >
              {tr.nav.contact}
            </Link>
          </div>

          {/* Language Switcher & Call Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={`/${otherLocale}/`}
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-blue-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <Globe className="w-4 h-4" />
              {tr.langSwitch}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-500 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phoneDisplay}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            aria-label={tr.nav.menu}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-16 md:top-20 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute top-0 ${locale === 'ar' ? 'right-0' : 'left-0'} w-80 max-w-[85vw] h-full bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${
            isOpen
              ? 'translate-x-0'
              : locale === 'ar'
              ? 'translate-x-full'
              : '-translate-x-full'
          }`}
        >
          <div className="p-6 space-y-1">
            <Link
              href={`/${locale}/`}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-xl transition-colors"
            >
              {tr.nav.home}
            </Link>

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-3 px-4 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-xl transition-colors"
              >
                {tr.nav.services}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileServicesOpen ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className={`${locale === 'ar' ? 'pr-4' : 'pl-4'} space-y-0.5`}>
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/${locale}/${service.slugs[locale]}/`}
                      onClick={() => setIsOpen(false)}
                      className="block py-2.5 px-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-500 rounded-lg transition-colors"
                    >
                      {service[locale].title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={`/${locale}/about/`}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-xl transition-colors"
            >
              {tr.nav.about}
            </Link>

            {/* FAQ link — Arabic only */}
            {locale === 'ar' && (
              <Link
                href="/ar/faq/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 py-3 px-4 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-xl transition-colors"
              >
                <HelpCircle className="w-5 h-5" />
                أسئلة شائعة
              </Link>
            )}

            <Link
              href={`/${locale}/contact/`}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-xl transition-colors"
            >
              {tr.nav.contact}
            </Link>

            <Link
              href={`/${otherLocale}/`}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-3 px-4 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-xl transition-colors"
            >
              <Globe className="w-5 h-5" />
              {tr.langSwitch}
            </Link>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 bg-navy text-white py-3 rounded-xl text-base font-bold hover:bg-blue-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-success text-white py-3 rounded-xl text-base font-bold hover:bg-success-400 transition-colors"
              >
                {tr.cta.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
