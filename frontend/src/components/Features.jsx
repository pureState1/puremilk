import '../styles/Features.css';

import organicImg from '../assets/organic-farming.png';
import bioInputImg from '../assets/bio-input.png';
import milkImg from '../assets/milk-collection.png';
import pricingImg from '../assets/fair-pricing.png';
import tourismImg from '../assets/agro-tourism.png';
import deliveryImg from '../assets/milk-delivery.png';

function Features() {
  const features = [
    {
      image: organicImg,
      title: 'Organic Farming',
      description: 'Helping farmers adopt natural, regenerative practices for safe, chemical-free food.'
    },
    {
      image: bioInputImg,
      title: 'On-Farm Organic Inputs',
      description: 'Training in Jeevamrit, Beejamrit & neem-based bio-inputs for chemical-free cultivation.'
    },
    {
      image: milkImg,
      title: 'Direct Milk Collection',
      description: 'Fresh milk is collected at the farm gate — no middlemen, no dilution.'
    },
    {
      image: pricingImg,
      title: 'Fair Farmer Pricing',
      description: 'We ensure transparent pricing that rewards purity and hard work.'
    },
    {
      image: tourismImg,
      title: 'Agro-Tourism',
      description: 'We support rural entrepreneurship via farm stays, food trails, and village experiences.'
    },
    {
      image: deliveryImg,
      title: 'Doorstep Delivery',
      description: 'Integrated cold-chain logistics ensures farm-fresh delivery to your home.'
    },
  ];

  return (
    <section className="what-we-do" id="what-we-do">
      <h2>What We Do at PureState Farms</h2>
      <div className="what-grid">
        {features.map((item, idx) => (
          <div className="what-card" key={idx}>
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
