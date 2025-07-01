import '../styles/About.css';
import aboutImage from '../assets/about.png'; // Replace with your image

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="AgroMilk Farm" />
        </div>
        <div className="about-text">
          <h2>About PureState</h2>
          <p>
            At PureState, we believe in delivering the freshest and most nutritious milk
            directly from our farms to your home. Our cows are grass-fed, well-cared for,
            and raised without harmful additives, ensuring you get only the best quality.
          </p>
          <p>
            We're not just a milk supplier — we're a community-driven initiative committed to
            health, sustainability, and empowering local dairy farmers.
          </p>
          <a href="/about" className="about-btn">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default About;
