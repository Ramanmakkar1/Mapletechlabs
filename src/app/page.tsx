import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import About from '@/components/About';
import Industries from '@/components/Industries';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <main>
          <Hero />
          <Services />
          <About />
          <Industries />
          <FAQ />
          <Contact />
        </main>
      </SmoothScroll>
      <Footer />
    </>
  );
}

