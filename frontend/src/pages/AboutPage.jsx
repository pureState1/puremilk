import '../styles/AboutPage.css';
import aboutImage from '../assets/desi_cow.png';
import FounderImg from '../assets/Founder_ceo.jpg';
import ceoImg from '../assets/ceo.png';
import itImg from '../assets/it_specialist.jpg';
import designerImg from '../assets/designer.jpg';

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

      {/* Meet the Team */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
        <div className="team-card">
            <img src={FounderImg} alt="Founder" />
            <h3>Sunaina Singh</h3>
            <p className="role">Founder & CEO</p>
            <p>
              “At PureState, our purpose goes beyond milk — it's about rebuilding trust in what we eat,
              supporting honest farmers, and healing our soil. Thank you for being part of this journey.”
            </p>
          </div>
          <div className="team-card">
            <img src={ceoImg} alt="Founder" />
            <h3>Mithilesh Singh</h3>
            <p className="role">Co-Founder</p>
            <p>
            "At PureState, we set out to restore trust in food, support honest farmers, and heal the soil. Grateful to have you with us on this mission."
            </p>
          </div>
          <div className="team-card">
            <img src={itImg} alt="IT Specialist" />
            <h3>Sumit Raj</h3>
            <p className="role">IT Specialist & Developer</p>
            <p>
              Focused on crafting seamless digital experiences for our platform —
              from farm to your fingertips.
            </p>
          </div>
          <div className="team-card">
            <img src={designerImg} alt="Designer" />
            <h3>Ravi Shankar</h3>
            <p className="role">Design, Video & Marketing</p>
            <p>
              Telling PureState’s story through visuals, motion, and media — blending creativity with purpose.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
