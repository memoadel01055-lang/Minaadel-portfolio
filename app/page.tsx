import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import CameraSystems from "@/components/CameraSystems";
import Workflow from "@/components/Workflow";
import Projects from "@/components/Projects";
import ProductionArchive from "@/components/ProductionArchive";
import Gallery from "@/components/Gallery";
import DITSetup from "@/components/DITSetup";
import Showreel from "@/components/Showreel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <main>

  <h1 className="text-red-600 text-6xl">

    PAGE TEST MINA

  </h1>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <CameraSystems />
      <Workflow />
      <Projects />
      <ProductionArchive />
      <Gallery />
      <DITSetup />
      <Showreel />
      <Contact />
      <Footer />
      <WhatsApp />
    </main>
  );
}