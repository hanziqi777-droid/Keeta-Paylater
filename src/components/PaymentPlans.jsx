import React from 'react';

const PaymentPlans = () => {
  return (
    <section className="relative w-full py-20">
      <div className="max-w-[1440px] mx-auto px-5">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] leading-[50px] font-bold text-[#222222] mb-4">
            获得更多Keeta信用的支付方式
          </h2>
          <p className="text-[14px] leading-[20px] text-black">
            根据您的购买金额，您将看到不同的计划选项。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧付款选项 */}
          <div className="space-y-8">
            {/* 月付计划 */}
            <div className="bg-[#FFE200] rounded-[33.5px] p-8 text-center">
              <h3 className="text-[24px] leading-[34px] font-bold text-[#222222]">
                月度计划
              </h3>
            </div>

            {/* 全额付款 */}
            <div className="bg-[#ECECEC] rounded-[33.5px] p-8 text-center">
              <h3 className="text-[24px] leading-[34px] font-normal text-[#222222]">
                全额付款
              </h3>
            </div>
          </div>

          {/* 右侧图片 */}
          <div className="relative">
            <img 
              src="https://photo.bj.ide.test.sankuai.com/?keyword=payment,plans,mobile&width=589&height=576" 
              alt="付款计划界面" 
              className="mx-auto object-cover rounded-[33px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlans;
