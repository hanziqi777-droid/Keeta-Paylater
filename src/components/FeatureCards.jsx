import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const FeatureCards = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      id: 1,
      title: t.payOverThreeMonths,
      description: t.payOverThreeMonthsDesc,
      image: "/2.png",
      position: { left: 122, top: 746 }
    },
    {
      id: 2,
      title: t.securePayments,
      description: t.securePaymentsDesc,
      image: "/3.png",
      position: { left: 536, top: 746 }
    },
    {
      id: 3,
      title: t.seeWhatYouCanSpend,
      description: t.seeWhatYouCanSpendDesc,
      image: "/4.png",
      position: { left: 950, top: 746 }
    }
  ];

  return (
    <section className="relative w-full max-w-full pt-[120px] pb-20 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-[#F9F9FA] rounded-[24px] py-[70px] px-[48px] flex flex-col items-center justify-center text-center"
            >
              <div className="mb-6">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className={`mx-auto object-cover rounded-lg transition-all duration-300 ease-in-out ${
                    feature.id === 1 
                      ? 'transform rotate-0 hover:rotate-[30deg]' 
                      : feature.id === 2 
                      ? 'transform rotate-0 hover:rotate-[-26.44deg]' 
                      : feature.id === 3
                      ? 'transform rotate-0 hover:rotate-[30deg]'
                      : ''
                  }`}
                />
              </div>
              <h3 className="text-[22px] leading-[31px] font-medium text-black mb-4">
                {feature.title}
              </h3>
              <p className="text-[14px] leading-[20px] text-black max-w-[288px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
