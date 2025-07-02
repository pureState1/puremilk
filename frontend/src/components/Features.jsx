import '../styles/Features.css';
import { GiMilkCarton, GiCow, GiHealthNormal } from 'react-icons/gi';

function Features() {
  return (
    <section className="features-section">
      <h2 className="section-title">Why Choose PureState?</h2>
      <div className="features-container">
        <div className="feature-card">
          <GiCow className="feature-icon" />
          <h3>Farm-Fresh Milk</h3>
          <p>Directly sourced from organically fed cows without any preservatives.</p>
        </div>
        <div className="feature-card">
          <GiHealthNormal className="feature-icon" />
          <h3>Highly Nutritious</h3>
          <p>Rich in calcium, vitamins, and proteins for better health and immunity.</p>
        </div>
        <div className="feature-card">
          <GiMilkCarton className="feature-icon" />
          <h3>Eco-Friendly Packaging</h3>
          <p>Delivered in recyclable bottles to reduce environmental impact.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
