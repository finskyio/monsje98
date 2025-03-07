import Footer from '../components/Footer';
import ExpandingPhoto from '../components/Philosophy/ExpandingPhoto';
import ExpandingText from '../components/Philosophy/ExpandingText';
import Hero from '../components/Philosophy/Hero';

export default function PhilosophyPage() {
  return (
    <>
      <ExpandingPhoto />
      <div className="hidden md:block">
        <ExpandingText />
      </div>
      <Hero />
      <Footer />
    </>
  );
}
