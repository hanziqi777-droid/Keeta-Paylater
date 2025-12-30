import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureCards from '../components/FeatureCards';
import ControlSection from '../components/ControlSection';
import PaymentPlans from '../components/PaymentPlans';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden max-w-full">
      <Header />
      <HeroSection />
      <FeatureCards />
      <ControlSection />
      <PaymentPlans />
      <Footer />
    </div>
  );
};

export default Index;
