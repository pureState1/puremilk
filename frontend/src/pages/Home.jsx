import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import Testimonials from "../components/Testimonials";

function Home() {
    return (
      <main className="page">
        <Hero/>
        <Features/>
        <About/>
        <ProductShowcase/>
        <Testimonials/>
      </main>
    );
  }
  
  export default Home;
  