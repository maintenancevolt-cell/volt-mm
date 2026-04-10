'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: readonly FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`bg-white rounded-2xl border transition-all duration-300 ${
            openIndex === index ? 'border-blue-200 shadow-md' : 'border-gray-100'
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex items-center justify-between w-full p-5 text-right"
            aria-expanded={openIndex === index}
          >
            <span className="text-base font-bold text-navy pr-0 pl-4">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-blue-500 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div
              className={`px-5 pb-5 border-r-4 mr-5 transition-colors duration-300 ${
                openIndex === index ? 'border-blue-500' : 'border-transparent'
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
