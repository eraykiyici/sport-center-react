import React from 'react';
import HeroSection from './components/2_HeroSection/HeroSection';
import CounterSection from './components/3_CounterSection/CounterSection';
import ClassesSection from './components/4_ClassesSection/ClassesSection';
import BmiCalculator from './components/5_BmiCalculator/BmiCalculator';
import TrainersSection from './components/6_TrainersSection/TrainersSection';
import PurchaseSection from './components/7_PurchaseSection/PurchaseSection';
import ReviewSection from './components/8_ReviewSection/ReviewSection';
import ContactSection from './components/9_ContactSection/ContactSection';
import Footer from './components/10_Footer/Footer';

function App() {
  return (
    <>
      {/* HeroSection, Navbar'ı kendi içinde barındırır */}
      <HeroSection />
      <CounterSection />
      <ClassesSection />
      <BmiCalculator />
      <TrainersSection />
      <PurchaseSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;