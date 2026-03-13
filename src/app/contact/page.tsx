import Navbar from '@/components/Navbar';
import ContactPage from '@/components/ContactPage';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us | Mapletech Labs',
  description: 'Get in touch with Mapletech Labs. Request a proposal, talk to a senior engineer, or explore business partnerships. We respond within 4 business hours.',
};

export default function ContactRoute() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
