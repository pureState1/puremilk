import '../styles/ServicesDetail.css';
import contractImg from '../assets/contract-farming.png';
import tourismImg from '../assets/agro-tourism.png';
import advisoryImg from '../assets/farmer-advisory.png';
import infraImg from '../assets/infrastructure.png';

function ServicesDetail() {
  return (
    <div className="services-detail-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Empowering Farmers, Connecting Consumers</p>
      </div>

      <div className="services-list">
        <div className="service-block">
          <img src={contractImg} alt="Contract Farming" />
          <div>
            <h2>1. Contract Farming</h2>
            <p>
              We partner with farmers under pre-agreed terms to grow high-quality crops or produce.
              Our system ensures planned procurement, technical support, and guaranteed buyback at fair prices.
              This builds trust, reduces market risk, and boosts productivity for farmers.
            </p>
          </div>
        </div>

        <div className="service-block reverse">
          <img src={tourismImg} alt="Agro Tourism" />
          <div>
            <h2>2. Agro Tourism</h2>
            <p>
              PureState promotes rural tourism by supporting farm stays, guided village visits,
              natural food trails, and traditional cooking sessions. This brings sustainable income
              to farmers and educates urban visitors about where their food comes from.
            </p>
          </div>
        </div>

        <div className="service-block">
          <img src={advisoryImg} alt="Farmer Advisory" />
          <div>
            <h2>3. Farmer Advisory Services</h2>
            <p>
              Our team trains and guides farmers in:
              natural farming, crop selection, organic input preparation, weather advisories,
              and post-harvest handling. With on-call and onsite support, we ensure continuous learning.
            </p>
          </div>
        </div>

        <div className="service-block reverse">
          <img src={infraImg} alt="Infrastructure Development" />
          <div>
            <h2>4. Infrastructure Development</h2>
            <p>
              We help set up essential farm infrastructure like:
              solar-powered sheds, organic input units, small-scale processing facilities,
              water conservation systems, and composting pits — empowering self-sufficient farming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDetail;
