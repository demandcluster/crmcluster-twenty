import { Cta } from '@/components/Cta';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Nav } from '@/components/Nav';
import { PoweredByTwenty } from '@/components/PoweredByTwenty';
import { Usps } from '@/components/Usps';
import { WhyEu } from '@/components/WhyEu';

const HomePage = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <Usps />
      <WhyEu />
      <PoweredByTwenty />
      <Cta />
    </main>
    <Footer />
  </>
);

export default HomePage;
