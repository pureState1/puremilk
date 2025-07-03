import DoorstepDelivery from "../components/DoorstepDelivery";
import FarmProcessing from "../components/FarmProcessing";
import Features from "../components/Features";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import RuralHatt from "../components/RuralHatt";
import Testimonials from "../components/Testimonials";
import VisionSection from "../components/VisionSection";

function Home() {
    return (
      <main className="page">
        <Hero/>
        <Features/>
        <RuralHatt/>
        <FarmProcessing/>
        <DoorstepDelivery/>
        <VisionSection/>
        <ProductShowcase/>
        <Testimonials/>
      </main>
    );
  }
  
  export default Home;
  