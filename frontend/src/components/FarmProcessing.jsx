import '../styles/FarmProcessing.css';
import processingImg from '../assets/farm-processing.png'; // Replace with actual image

function FarmProcessing() {
  return (
    <section className="farm-processing">
      <div className="processing-container reverse-layout">
        <div className="processing-image">
          <img src={processingImg} alt="Farm-level Processing Unit" />
        </div>
        <div className="processing-text">
          <h2>Farm-Level Food Processing</h2>
          <p>
            We invest in <strong>hygienic, small-scale food processing units</strong> at the farm or cluster level to ensure:
          </p>
          <ul>
            <li>🥛 Milk pasteurization & value-added products like <strong>Paneer, Ghee & Curd</strong></li>
            <li>🌾 Cleaning and packaging of grains & pulses</li>
            <li>🥥 Cold-pressed oils, pickles, and health mixes</li>
          </ul>
          <p>
            Every product is processed under <strong>Good Manufacturing Practices (GMP)</strong> to ensure
            safety, hygiene, extended shelf life — while retaining traditional taste and nutrition.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FarmProcessing;
