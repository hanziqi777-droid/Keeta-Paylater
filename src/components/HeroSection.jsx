import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[632px] bg-gray-400 overflow-hidden">
      {/* 背景图片 */}
      <img 
        src="https://photo.bj.ide.test.sankuai.com/?keyword=restaurant,dining&width=1440&height=632" 
        alt="餐厅背景" 
        className="mx-auto object-cover w-full h-full"
      />
      
      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* 文字内容 */}
      <div className="absolute left-[122px] top-[500px] z-10">
        <h1 className="text-[36px] leading-[50px] font-bold text-white mb-4">
          先用餐，后付款
        </h1>
        <h2 className="text-[36px] leading-[50px] font-bold text-white">
          无卡分期付款选项
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
