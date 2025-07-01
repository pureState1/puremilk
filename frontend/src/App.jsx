import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/AboutPage';
import MilkProduct from './pages/MilkProduct';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/milk" element={<MilkProduct />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
