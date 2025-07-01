import '../styles/Hero.css';
import bgImage from '../assets/hero-bg.png'; // or video if you use video instead
// import heroVideo from '../assets/hero.mp4';

function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
        {/* 🔁 Video Background */}
      {/* <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Pure. Fresh. Nutritious.</h1>
          <p>Experience farm-fresh milk, delivered to your doorstep.</p>
          <a
            href="https://wa.me/919511112263?text=I%20want%20to%20order%20milk"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            Order Milk Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
