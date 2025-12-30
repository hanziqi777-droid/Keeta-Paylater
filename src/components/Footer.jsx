import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="w-full max-w-full bg-[#222222] py-8 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="text-center">
          <p className="text-[14px] leading-[20px] text-white">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
