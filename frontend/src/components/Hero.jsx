import '../styles/Hero.css';
import heroVideo from '../assets/hero.mp4'; // Use your own video here

function Hero() {
  return (
    <div className="hero-section">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <h1>Nature • Nutrition • Nirvana</h1>
        <p>From Pure Farms to Your Home — Clean, Conscious, and Chemical-Free</p>
        <a href="#what-we-do" className="hero-btn">Explore What We Do</a>
      </div>
    </div>
  );
}

export default Hero;
