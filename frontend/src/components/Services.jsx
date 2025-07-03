import '../styles/Services.css';

import contractImg from '../assets/contract-farming.png';
import tourismImg from '../assets/agro-tourism.png';
import advisoryImg from '../assets/farmer-advisory.png';
import infraImg from '../assets/infrastructure.png';

function Services() {
  const services = [
    {
      image: contractImg,
      title: 'Contract Farming',
      description: 'Long-term partnerships with farmers for planned, quality crop production under agreed terms.'
    },
    {
      image: tourismImg,
      title: 'Agro Tourism',
      description: 'Rural farm-stays, food trails, and guided visits for urban families to reconnect with real food origins.'
    },
    {
      image: advisoryImg,
      title: 'Farmer Advisory Services',
      description: 'Training & guidance on natural farming, crop planning, input usage, and market linkage.'
    },
    {
      image: infraImg,
      title: 'Infrastructure Development',
      description: 'Onsite support to set up sheds, irrigation systems, food processing units and solar equipment.'
    }
  ];

  return (
    <section className="services-section" id="our-services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
