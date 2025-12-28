import React from 'react';
import { Globe } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-white">
      {/* 黄色背景椭圆 */}
      <div className="absolute w-[2000px] h-[1203px] left-1/2 top-[-253px] transform -translate-x-1/2 bg-[#FFE200] rounded-full"></div>
      
      {/* 顶部导航栏 */}
      <nav className="relative z-10 w-full h-[60px] bg-[#F9F9FA] flex items-center justify-between px-5">
        {/* Logo */}
        <div className="w-[140px] h-[33px] flex items-center">
          <img 
            src="https://photo.bj.ide.test.sankuai.com/?keyword=keeta,logo&width=140&height=33" 
            alt="Keeta Credito Logo" 
            className="mx-auto object-cover"
          />
        </div>

        {/* 导航菜单 */}
        <div className="flex items-center space-x-8">
          <div className="relative">
            <a href="#" className="text-[14px] leading-[20px] text-black hover:text-gray-600">
              关于Keeta信用
            </a>
            <div className="absolute top-[18px] left-1/2 transform -translate-x-1/2 w-[40px] h-[4px] bg-[#FFE200] border-2 border-[#FFE200]"></div>
          </div>
          
          <a href="#" className="text-[14px] leading-[20px] text-black hover:text-gray-600">
            如何使用
          </a>
          
          <a href="#" className="text-[14px] leading-[20px] text-black hover:text-gray-600">
            下载Keeta
          </a>

          {/* 语言选择器 */}
          <div className="flex items-center bg-[#1D1D1F] rounded-[16.5px] px-4 py-2 space-x-2">
            <Globe className="w-[22px] h-[22px] text-[#FBFBFC]" />
            <span className="text-[14px] leading-[20px] text-[#FBFBFC]">
              选择语言
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
