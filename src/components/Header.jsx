import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const baseUrl = import.meta.env.BASE_URL;
  const location = useLocation();
  const isHowToUsePage = location.pathname === '/how-to-use';
  const isHomePage = location.pathname === '/' || location.pathname === '';

  return (
    <header className="relative bg-white" style={{ overflow: 'visible' }}>
      {/* 黄色背景椭圆 - 只在首页显示 */}
      {isHomePage && (
        <div 
          className="absolute rounded-full"
          style={{
            position: 'absolute',
            width: '100vw',
            height: '60.15vw',
            left: '50%',
            top: '-73px',
            transform: 'translateX(-50%)',
            background: '#FFE200',
            zIndex: 0
          }}
        ></div>
      )}
      
      {/* 顶部导航栏 */}
      <nav className="relative z-10 w-full max-w-full h-[60px] bg-[#F9F9FA] flex items-center justify-between px-5 overflow-x-hidden">
        {/* Logo */}
        <Link to="/" className="w-[140px] h-[33px] flex items-center flex-shrink-0">
          <img 
            src={`${baseUrl}7.png`} 
            alt="Keeta Credito Logo" 
            className="mx-auto object-cover max-w-full"
          />
        </Link>

        {/* 导航菜单 */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 flex-shrink-0">
          <div className="relative">
            <Link to="/" className="text-[14px] leading-[20px] text-black hover:text-gray-600 whitespace-nowrap">
              {t.aboutKeeta}
            </Link>
            {isHomePage && (
              <div className="absolute top-[18px] left-1/2 transform -translate-x-1/2 w-[100px] h-[4px] bg-[#FFE200] border-2 border-[#FFE200]"></div>
            )}
          </div>
          
          <div className="relative inline-block">
            <Link to="/how-to-use" className="text-[14px] leading-[20px] text-black hover:text-gray-600 whitespace-nowrap">
              {t.howToUse}
            </Link>
            {isHowToUsePage && (
              <div className="absolute top-[18px] left-0 w-full h-[4px] bg-[#FFE200] border-2 border-[#FFE200]"></div>
            )}
          </div>
          
          <a href="#" className="text-[14px] leading-[20px] text-black hover:text-gray-600 whitespace-nowrap">
            {t.downloadKeeta}
          </a>

          {/* 语言选择器 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center bg-[#1D1D1F] rounded-[16.5px] px-4 py-2 space-x-2 flex-shrink-0 cursor-pointer hover:bg-[#2D2D2F] transition-colors">
                <Globe className="w-[22px] h-[22px] text-[#FBFBFC]" />
                <span className="text-[14px] leading-[20px] text-[#FBFBFC] whitespace-nowrap">
                  {t.selectLanguage}
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
              <DropdownMenuItem 
                onClick={() => setLanguage('en')}
                className="cursor-pointer flex items-center justify-between"
              >
                <span>English</span>
                {language === 'en' && <Check className="h-4 w-4 ml-2" />}
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage('pt')}
                className="cursor-pointer flex items-center justify-between"
              >
                <span>Português</span>
                {language === 'pt' && <Check className="h-4 w-4 ml-2" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
