import '../styles/ProductShowcase.css';
import bottle1 from '../assets/bottle1.png';
import bottle2 from '../assets/bottle2.png';
// import bottle3 from '../assets/bottle1.png';
import paneer from '../assets/paneer.png';
import ghee from '../assets/ghee.png';
import flavouredMilk from '../assets/flavoured-milk.png';
import chhena from '../assets/chhena.png';

function ProductShowcase() {
  const products = [
    {
      image: bottle1,
      title: 'Classic Cow Milk',
      volume: '500ml',
      price: { old: '₹60', new: '₹50' },
      tag: '100% Pure'
    },
    {
      image: bottle2,
      title: 'A2 Desi Milk',
      volume: '1L',
      price: { old: '₹120', new: '₹90' },
      tag: 'Rich in Nutrients'
    },
    {
      image: paneer,
      title: 'Vacuum-Packed Paneer',
      volume: '500g',
      price: { old: '₹200', new: '₹180' },
      tag: 'Farm-Fresh & Hygienic'
    },
    {
      image: paneer,
      title: 'Vacuum-Packed Paneer',
      volume: '1kg',
      price: { old: '₹400', new: '₹340' },
      tag: 'Farm-Fresh & Hygienic'
    },
    {
      image: ghee,
      title: 'A2 Desi Cow Ghee',
      volume: '250ml',
      price: { old: '₹800', new: '₹740' },
      tag: 'Traditional Bilona Method'
    },
    {
      image: ghee,
      title: 'A2 Desi Cow Ghee',
      volume: '500ml',
      price: { old: '₹1600', new: '₹1509' },
      tag: 'Traditional Bilona Method'
    },
    {
      image: ghee,
      title: 'A2 Desi Cow Ghee',
      volume: '1L',
      price: { old: '₹3200', new: '₹3000' },
      tag: 'Traditional Bilona Method'
    },
    {
      image: flavouredMilk,
      title: 'Flavoured Milk',
      volume: '200ml',
      price: { new: '₹40' },
      tag: 'Natural Flavors – Cardamom, Cocoa, Rose'
    },
    {
      image: chhena,
      title: 'Fresh Chhena',
      volume: '250g / 500g',
      price: { new: '₹70 / ₹130' },
      tag: 'Soft & Spongy for Sweets'
    }
    
  ];

  return (
    <section className="product-section">
      <h2 className="section-title">Our Milk Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="volume">{product.volume}</p>
            <p className="tag">{product.tag}</p>
            <p className="price">
  {product.price.old && (
    <span className="old-price">{product.price.old}</span>
  )}
  <span className="new-price">{product.price.new}</span>
</p>

            <a
              href={`https://wa.me/919511112263?text=${encodeURIComponent(
                `Hello! I'm interested in ordering:\n\n🧴 *${product.title}*\n📦 Quantity: ${product.volume}\n💰 Price: ${product.price}\n\nPlease share availability and delivery info.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="order-btn"
            >
              Order via WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductShowcase;
