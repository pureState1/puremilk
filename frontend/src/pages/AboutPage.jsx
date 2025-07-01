import '../styles/AboutPage.css';
import aboutImage from '../assets/farm.png';

function AboutPage() {
  return (
    <div className="about-page">
      {/* Banner */}
      <div className="about-banner">
        <h1>About Us</h1>
        <p>Rooted in nature. Committed to purity.</p>
      </div>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="about-story-content">
          <img src={aboutImage} alt="Our Farm" />
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              PureState was born from a simple belief: everyone deserves clean, nutritious,
              and natural milk — just like our ancestors had. Our journey started with a
              group of farmers who cared deeply about the land, the animals, and your health.
            </p>
            <p>
              Today, we serve families across the region with milk that is free from hormones,
              preservatives, and stress. Straight from the udder to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-values">
        <div className="value-card">
          <h3>Our Mission</h3>
          <p>
            To deliver pure, chemical-free milk while supporting ethical farming and
            empowering local dairy farmers.
          </p>
        </div>
        <div className="value-card">
          <h3>Our Vision</h3>
          <p>
            To become a trusted household name in sustainable dairy, nourishing lives
            while respecting nature.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
