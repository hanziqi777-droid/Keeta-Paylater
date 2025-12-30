import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const PaymentPlans = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedPlan, setSelectedPlan] = useState('monthly'); // 默认选中 Monthly plans
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 轮播图片索引

  // 轮播图片数组
  const monthlyImages = ['/6.1.png', '/6.2.png'];
  const allImages = ['/6.1.png', '/6.2.png', '/6.3.png'];

  // 预加载所有图片
  useEffect(() => {
    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // 当选中 Monthly plans 时，实现图片轮播
  useEffect(() => {
    if (selectedPlan === 'monthly') {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % monthlyImages.length);
      }, 2500); // 每2.5秒切换一次

      return () => clearInterval(interval);
    } else {
      // 切换到 Pay in full 时，重置索引
      setCurrentImageIndex(0);
    }
  }, [selectedPlan, monthlyImages.length]);

  // 使用 useMemo 缓存当前图片路径
  const currentImage = useMemo(() => {
    if (selectedPlan === 'monthly') {
      return monthlyImages[currentImageIndex];
    } else {
      return '/6.3.png';
    }
  }, [selectedPlan, currentImageIndex, monthlyImages]);

  // 处理按钮点击事件
  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <section className="relative w-full max-w-full py-20 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-5">
        {/* 标题部分 */}
        <div className="text-left mb-16">
          <h2 className="text-[36px] leading-[50px] font-medium text-[#222222] mb-4">
            {t.getMoreWaysToPay}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧付款选项 */}
          <div className="space-y-8 flex flex-col items-center">
            {/* 月付计划 */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePlanChange('monthly');
              }}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
              className={`text-center flex items-center justify-center transition-all duration-300 cursor-pointer ${
                selectedPlan === 'monthly' ? 'bg-[#FFE200]' : 'bg-[#ECECEC]'
              }`}
              style={{
                width: '301px',
                height: '66px',
                borderRadius: '33.5px',
                border: 'none',
                outline: 'none',
                background: selectedPlan === 'monthly' ? '#FFE200' : '#ECECEC'
              }}
            >
              <h3 className={`text-[24px] leading-[34px] text-[#222222] ${
                selectedPlan === 'monthly' ? 'font-medium' : 'font-normal'
              }`}>
                {t.monthlyPlans}
              </h3>
            </button>

            {/* 全额付款 */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePlanChange('full');
              }}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
              className={`text-center flex items-center justify-center transition-all duration-300 cursor-pointer ${
                selectedPlan === 'full' ? 'bg-[#FFE200]' : 'bg-[#ECECEC]'
              }`}
              style={{
                width: '301px',
                height: '66px',
                borderRadius: '33.5px',
                border: 'none',
                outline: 'none',
                background: selectedPlan === 'full' ? '#FFE200' : '#ECECEC'
              }}
            >
              <h3 className={`text-[24px] leading-[34px] text-[#222222] ${
                selectedPlan === 'full' ? 'font-medium' : 'font-normal'
              }`}>
                {t.payInFull}
              </h3>
            </button>
          </div>

          {/* 右侧图片 */}
          <div className="relative w-full flex items-center justify-center" style={{ width: '589px', height: '576px', margin: '0 auto' }}>
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImage}
                src={currentImage}
                alt="Payment plans interface"
                className="object-cover rounded-[33px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlans;
