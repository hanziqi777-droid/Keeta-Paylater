import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const HowToUse = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="relative w-full min-h-screen bg-[#F4F4F4] overflow-x-hidden">
      <Header />
      
      {/* 主要内容区域 */}
      <div className="relative w-full max-w-[1440px] mx-auto px-5 py-[120px]" style={{ minHeight: 'calc(2238px - 60px)' }}>
        {/* Step 1 */}
        <div className="relative mb-[100px]">
          <div className="flex flex-row items-center gap-[15px] mb-[60px]">
            <img 
              src={`${baseUrl}step1.png`} 
              alt="Step 1" 
              className="w-[92px] h-[45px] flex-none object-contain"
            />
            <h2 className="text-[32px] leading-[45px] font-semibold text-[#222222]">
              {t.activateKeetaCredito || 'Activate Keeta Crédito'}
            </h2>
          </div>
          <div className="w-full flex justify-end" style={{ marginRight: 'calc(-1.25rem - 5px)', width: 'calc(100% + 1.25rem + 5px)' }}>
            <img 
              src={`${baseUrl}step11.png`} 
              alt="Step 1 illustration" 
              className="w-full max-w-[1157px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative mb-[100px]">
          <div className="flex flex-row items-center justify-end gap-[15px] mb-[60px]">
            <img 
              src={`${baseUrl}step2.png`} 
              alt="Step 2" 
              className="w-[92px] h-[45px] flex-none object-contain"
            />
            <h2 className="text-[32px] leading-[45px] font-semibold text-[#222222]">
              {t.selectKeetaCreditoPay || 'Select Keeta Crédito & Pay'}
            </h2>
          </div>
          <div className="w-full flex justify-start" style={{ marginLeft: 'calc(-1.25rem - 5px)', width: 'calc(100% + 1.25rem + 5px)' }}>
            <img 
              src={`${baseUrl}step22.png`} 
              alt="Step 2 illustration" 
              className="w-full max-w-[1157px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative mb-[100px]">
          <div className="flex flex-row items-center gap-[15px] mb-[60px]">
            <img 
              src={`${baseUrl}step3.png`} 
              alt="Step 3" 
              className="w-[92px] h-[45px] flex-none object-contain"
            />
            <h2 className="text-[32px] leading-[45px] font-semibold text-[#222222]">
              {t.repayInKeetaCredito || 'Repay in Keeta Crédito'}
            </h2>
          </div>
          <div className="w-full flex justify-end" style={{ marginRight: 'calc(-1.25rem - 5px)', width: 'calc(100% + 1.25rem + 5px)' }}>
            <img 
              src={`${baseUrl}step33.png`} 
              alt="Step 3 illustration" 
              className="w-full max-w-[1157px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowToUse;

