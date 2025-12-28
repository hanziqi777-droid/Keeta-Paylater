import React from 'react';

const ControlSection = () => {
  return (
    <section className="relative w-full py-20">
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧图片 */}
          <div className="relative">
            <img 
              src="https://photo.bj.ide.test.sankuai.com/?keyword=mobile,app,control&width=545&height=693" 
              alt="移动应用控制界面" 
              className="mx-auto object-cover rounded-[272.5px] rounded-b-[24px]"
            />
          </div>

          {/* 右侧内容 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[30px] leading-[42px] font-bold text-[#222222] mb-6">
                保持控制。
              </h2>
              <p className="text-[14px] leading-[20px] text-black text-center max-w-[312px] mx-auto">
                跟踪您的付款并重新安排付款日期，这样您就可以控制预算。
              </p>
            </div>

            <div>
              <h3 className="text-[36px] leading-[50px] font-bold text-[#222222] mb-4">
                管理您的支出，同时获得所需的一切—Keeta信用让这一切变得简单。
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlSection;
