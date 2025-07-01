import '../styles/MilkProduct.css';
import cowMilk from '../assets/cow-milk.png';
import buffaloMilk from '../assets/cow-milk.png';
import a2milk from '../assets/cow-milk.png';

function MilkProduct() {
  return (
    <div className="milk-page">
      {/* Hero Banner */}
      <div className="milk-banner">
        <h1>Our Milk</h1>
        <p>Pure. Fresh. Nutrient-Rich — From Farm to Home.</p>
      </div>

      {/* Nutritional Info */}
      <section className="milk-nutrition">
        <h2>What Makes Our Milk Special?</h2>
        <p>
          Our milk is 100% natural, sourced directly from well-cared-for cows and buffaloes. 
          It contains no preservatives or synthetic additives. Rich in calcium, proteins, and essential vitamins,
          our milk supports strong bones, a healthy gut, and boosted immunity.
        </p>
      </section>

      {/* Milk Variants */}
      <section className="milk-variants">
        <div className="milk-card">
          <img src={cowMilk} alt="Cow Milk" />
          <h3>Classic Cow Milk</h3>
          <p>Daily fresh milk sourced from healthy grass-fed cows. Light, nutritious, and ideal for families.</p>
          <span>Available: 500ml / 1L • ₹35 / ₹60</span>
        </div>
        <div className="milk-card">
          <img src={a2milk} alt="A2 Desi Milk" />
          <h3>A2 Desi Milk</h3>
          <p>From indigenous Indian cows, A2 milk is easier to digest and packed with nutrients.</p>
          <span>Available: 500ml / 1L • ₹45 / ₹80</span>
        </div>
        <div className="milk-card">
          <img src={buffaloMilk} alt="Buffalo Milk" />
          <h3>Organic Buffalo Milk</h3>
          <p>Thicker, creamier, and perfect for making curd, paneer, or rich tea.</p>
          <span>Available: 1L • ₹65</span>
        </div>
      </section>

      {/* CTA */}
      <section className="milk-cta">
        <h2>Ready to Taste the Purity?</h2>
        <a 
          href="https://wa.me/919999999999?text=I%20want%20to%20order%20milk"
          target="_blank"
          rel="noreferrer"
          className="cta-btn"
        >
          Order via WhatsApp
        </a>
      </section>
    </div>
  );
}

export default MilkProduct;
