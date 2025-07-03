import '../styles/VisionSection.css';
import visionIcon from '../assets/vision-icon.png'; // Optional custom icon

function VisionSection() {
  return (
    <section className="vision-section">
      <div className="vision-container">
        <div className="vision-content">
          <img src={visionIcon} alt="Vision Icon" className="vision-icon" />
          <h2>Our Vision</h2>
          <p className="quote">
            “To create a <strong>regenerative rural economy</strong> where farming is a respected profession,
            food is pure and local, and every consumer becomes a co-creator of a <strong>healthy planet</strong>.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
