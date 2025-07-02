import '../styles/MilkProduct.css';
import cowMilk from '../assets/cow-milk.png';
import buffaloMilk from '../assets/cow-milk.png';
import a2milk from '../assets/cow-milk.png';
import paneer from '../assets/paneer.png';
import ghee from '../assets/ghee.png';
import flavouredMilk from '../assets/flavoured-milk.png';
import chhena from '../assets/chhena.png';

// Coming Soon Assets
import curd from '../assets/paneer.png';
import buttermilk from '../assets/paneer.png';
import gulkand from '../assets/paneer.png';
import giftHampers from '../assets/paneer.png';

function MilkProduct() {
  const products = [
    {
      image: cowMilk,
      title: 'Classic Cow Milk',
      desc: 'Daily fresh milk sourced from healthy grass-fed cows. Light, nutritious, and ideal for families.',
      volume: '500ml / 1L',
      price: '₹35 / ₹60'
    },
    {
      image: a2milk,
      title: 'A2 Desi Cow Milk',
      desc: 'From indigenous Indian cows, A2 milk is easier to digest and packed with nutrients.',
      volume: '500ml / 1L',
      price: '₹45 / ₹80'
    },
    {
      image: buffaloMilk,
      title: 'Organic Buffalo Milk',
      desc: 'Thicker, creamier, and perfect for curd, paneer, or rich tea.',
      volume: '1L',
      price: '₹65'
    },
    {
      image: paneer,
      title: 'Vacuum-Packed Paneer',
      desc: 'Soft, crumbly, high-protein paneer made from 100% desi cow milk with no chemicals or preservatives.',
      volume: '500g / 1kg',
      price: '₹150 / ₹340'
    },
    {
      image: ghee,
      title: 'Desi Cow Ghee (Bilona Method)',
      desc: 'Golden, aromatic, deeply nourishing — perfect for cooking, Ayurvedic use, or gifting.',
      volume: '250ml / 500ml / 1L',
      price: '₹740 / ₹1509 / ₹3000'
    },
    {
      image: flavouredMilk,
      title: 'Flavoured Milk (Natural)',
      desc: 'Infused with cardamom, rose, saffron, cocoa — no synthetic flavoring. Eco glass bottles.',
      volume: '200ml',
      price: '₹40'
    },
    {
      image: chhena,
      title: 'Fresh Chhena (Soft Cheese)',
      desc: 'Perfect for sweets like rasgulla & sandesh. Made fresh on order — soft, spongy, and chemical-free.',
      volume: '250g / 500g',
      price: '₹70 / ₹130'
    }
  ];

  const upcoming = [
    {
      image: curd,
      title: 'Natural Curd',
      desc: 'Set in traditional clay pots — pure and probiotic-rich.'
    },
    {
      image: buttermilk,
      title: 'Probiotic Buttermilk',
      desc: 'Refreshing, gut-healthy — available in spiced & plain.'
    },
    {
      image: giftHampers,
      title: 'Desi Dairy Gift Hampers',
      desc: 'Beautifully curated dairy gifts — traditional and artisanal.'
    },
    {
      image: gulkand,
      title: 'Herbal Gulkand',
      desc: 'Sweetened rose preserve made from A2 milk & Ayurvedic herbs.'
    }
  ];

  return (
    <div className="milk-page">
      {/* Hero Banner */}
      <div className="milk-banner">
        <h1>Our Milk & Value-Added Dairy Products</h1>
        <p>Pure. Fresh. Nutrient-Rich — From Farm to Home.</p>
      </div>

      {/* Description */}
      <section className="milk-nutrition">
        <h2>What Makes Our Milk Special?</h2>
        <p>
          At PureState, we transform fresh, A2-rich desi cow milk into a range of nutrient-dense, artisanal,
          and chemical-free dairy products. Every product is made using traditional methods, modern hygiene
          standards, and delivered with care and authenticity.
        </p>
      </section>

      {/* Products */}
      <section className="milk-variants">
        {products.map((product, index) => (
          <div className="milk-card" key={index}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <span>{product.volume} • {product.price}</span>
            <a
              href={`https://wa.me/919511112263?text=I want to order ${encodeURIComponent(product.title)}`}
              className="order-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
            </a>
          </div>
        ))}
      </section>

      {/* Coming Soon */}
      <section className="coming-soon">
        <h2>Coming Soon from PureState</h2>
        <div className="coming-grid">
          {upcoming.map((item, i) => (
            <div className="milk-card" key={i}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="milk-cta">
        <h2>Ready to Taste the Purity?</h2>
        <a
          href="https://wa.me/919511112263?text=Hi! I’m interested in PureState dairy products. Please share more details."
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
