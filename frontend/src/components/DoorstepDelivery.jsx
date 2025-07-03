import '../styles/DoorstepDelivery.css';
import deliveryImg from '../assets/milk-delivery.png'; // Replace with real image

function DoorstepDelivery() {
  return (
    <section className="delivery-section">
    <div className="delivery-container image-right">
      <div className="delivery-text">
        <h2>Doorstep Delivery – Pure Food, No Middlemen</h2>
        <p>
          Through our <strong>integrated cold-chain logistics</strong> and <strong>tech-enabled delivery system</strong>, 
          PureState products are delivered fresh, safe, and directly from farms to your home.
        </p>
        <ul>
          <li>✅ Maintains freshness, nutrition and safety</li>
          <li>✅ Eliminates middlemen, ensuring fair farmer pay</li>
          <li>✅ Traceable, transparent supply chain</li>
        </ul>
        <p className="supply-chain">
          Your food travels from:  
          <span className="chain">Soil → Farm → Processing → Home</span>
        </p>
      </div>
      <div className="delivery-image">
        <img src={deliveryImg} alt="PureState Delivery Truck" />
      </div>
    </div>
  </section>
  );
}

export default DoorstepDelivery;
