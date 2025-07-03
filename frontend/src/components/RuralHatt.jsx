import '../styles/RuralHatt.css';
import hattImg from '../assets/rural-hatt.png'; // Replace with your image

function RuralHatt() {
  return (
    <section className="rural-hatt">
      <div className="hatt-container">
        <div className="hatt-text">
          <h2>Rural Hatt – Local Produce, Local Prosperity</h2>
          <p>
            We are setting up <strong>PureState Rural Hatt</strong> — a village-level market where:
          </p>
          <ul>
            <li>✅ Local farmers sell their produce directly</li>
            <li>✅ Consumers get certified, fresh, seasonal food</li>
            <li>✅ Youth are engaged in retail, food services, marketing</li>
          </ul>
          <p>
            It’s more than a market — it’s a rural movement that supports fair trade, builds farmer identity,
            and promotes community-driven commerce.
          </p>
        </div>
        <div className="hatt-image">
          <img src={hattImg} alt="Rural Hatt at PureState" />
        </div>
      </div>
    </section>
  );
}

export default RuralHatt;
