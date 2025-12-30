import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import BlurText from './BlurText';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const baseUrl = import.meta.env.BASE_URL;

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section className="relative w-full max-w-full h-[632px] bg-[#989898] overflow-hidden">
      {/* 背景图片 */}
      <img 
        src={`${baseUrl}1.png`} 
        alt="Restaurant background" 
        className="absolute inset-0 w-full h-full object-cover z-0"
        onError={(e) => {
          console.error('Image load failed:', e.target.src);
        }}
      />
      
      {/* 视频背景 */}
      <video
        src={`${baseUrl}1.mp4`}
        className="absolute inset-0 w-full h-full object-cover z-[1]"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* 文字内容 */}
      <h1 
        className="absolute z-10 text-white whitespace-nowrap"
        style={{
          width: 'auto',
          height: '50px',
          left: '122px',
          top: '460px',
          fontFamily: "'PingFang SC', sans-serif",
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '50px',
          lineHeight: '50px',
          color: '#FFFFFF'
        }}
      >
        <BlurText
          text={t.dineFirstPayLater}
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
      </h1>
      <h2 
        className="absolute z-10 text-white whitespace-nowrap"
        style={{
          width: 'auto',
          height: '50px',
          left: '122px',
          top: '522px',
          fontFamily: "'PingFang SC', sans-serif",
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '50px',
          lineHeight: '50px',
          color: '#FFFFFF'
        }}
      >
        <BlurText
          text={t.cardFreeInstallment}
          delay={400}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
      </h2>
    </section>
  );
};

export default HeroSection;
