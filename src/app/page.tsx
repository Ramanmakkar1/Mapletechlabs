import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnersMarquee from '@/components/PartnersMarquee';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import WhyUs from '@/components/WhyUs';
import FeaturedAwards from '@/components/FeaturedAwards';
import TechStack from '@/components/TechStack';
import SuccessMetrics from '@/components/SuccessMetrics';
import PortfolioSection from '@/components/PortfolioSection';
import IndustriesSection from '@/components/IndustriesSection';
import ComparisonTable from '@/components/ComparisonTable';
import AdvancedLabs from '@/components/AdvancedLabs';
import TestimonialsSection from '@/components/TestimonialsSection';
import InsightsSection from '@/components/InsightsSection';
import FAQSection from '@/components/FAQSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickySidebar from '@/components/StickySidebar';
import ScrollUI from '@/components/ScrollUI';

export default function Home() {
  return (
    <>
      <Navbar />
      <StickySidebar />
      <ScrollUI />
      <main>
        <Hero />
        <PartnersMarquee />
        <ServicesSection />
        <ProcessSection />
        <WhyUs />
        <FeaturedAwards />
        <TechStack />
        <SuccessMetrics />
        <PortfolioSection />
        <IndustriesSection />
        <ComparisonTable />
        <AdvancedLabs />
        <TestimonialsSection />
        <InsightsSection />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
