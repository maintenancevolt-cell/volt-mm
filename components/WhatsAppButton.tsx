'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site-data';

export default function WhatsAppButton({ tooltip }: { tooltip: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      <div
        className={`bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        {tooltip}
      </div>
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 bg-success rounded-full flex items-center justify-center shadow-lg hover:bg-success-400 transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-glow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
