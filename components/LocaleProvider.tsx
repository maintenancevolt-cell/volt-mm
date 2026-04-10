'use client';

import { useEffect } from 'react';

export default function LocaleProvider({ locale, children }: { locale: string; children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = locale === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = locale === 'ar'
      ? 'var(--font-cairo), sans-serif'
      : 'var(--font-cairo), sans-serif';
  }, [locale]);

  return <>{children}</>;
}
