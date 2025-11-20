import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import AutomationImpact from '@/components/AutomationImpact';
import Solutions from '@/components/Solutions';
import CourseFilter from '@/components/CourseFilter';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'O Futuro do Trabalho | Transformação Digital Profissional',
  description: 'Descubra como se adaptar às transformações tecnológicas e permanecer competitivo no mercado de trabalho com cursos profissionalizantes.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main id="main-content">
        <Hero />
        <Problem />
        <AutomationImpact />
        <Solutions />
        <CourseFilter />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
