import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Divisions from '../components/Divisions';
import Process from '../components/Process';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Divisions />
      <Process />
      <Footer />
    </div>
  );
}
