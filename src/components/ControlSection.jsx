import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import TiltedCard from './TiltedCard';
const ControlSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="relative w-full max-w-full py-20 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧图片 */}
          <div className="relative flex justify-center">
            <TiltedCard
              imageSrc={`${baseUrl}5.png`}
              altText="Mobile app control interface"
              captionText="Mobile app control interface"
              containerHeight="693px"
              containerWidth="545px"
              imageHeight="693px"
              imageWidth="545px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
          </div>

          {/* 右侧内容 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[36px] leading-[50px] font-medium text-[#222222] mb-4">
                {t.manageYourSpending}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlSection;
