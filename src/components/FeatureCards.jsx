import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      title: "分三个月付款。",
      description: "首付后，剩余款项可分期支付。",
      image: "https://photo.bj.ide.test.sankuai.com/?keyword=payment,installment&width=292&height=200",
      position: { left: 122, top: 746 }
    },
    {
      id: 2,
      title: "安心支付。",
      description: "Keeta信用保障您的信息安全和支付安全。",
      image: "https://photo.bj.ide.test.sankuai.com/?keyword=security,protection&width=268&height=206",
      position: { left: 536, top: 746 }
    },
    {
      id: 3,
      title: "免费查看您的计划。",
      description: "查看您可以消费的内容或探索计划，不会影响您的信用。",
      image: "https://photo.bj.ide.test.sankuai.com/?keyword=planning,check&width=193&height=183",
      position: { left: 950, top: 746 }
    }
  ];

  return (
    <section className="relative w-full py-20">
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-[#F9F9FA] rounded-[24px] p-8 h-[378px] flex flex-col items-center justify-center text-center"
            >
              <div className="mb-6">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="mx-auto object-cover rounded-lg"
                />
              </div>
              <h3 className="text-[22px] leading-[31px] font-normal text-black mb-4">
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
