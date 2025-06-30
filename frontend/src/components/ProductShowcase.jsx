import '../styles/ProductShowcase.css';
import bottle1 from '../assets/bottle1.png';
import bottle2 from '../assets/bottle1.png';
import bottle3 from '../assets/bottle1.png';

function ProductShowcase() {
  const products = [
    {
      image: bottle1,
      title: 'Classic Cow Milk',
      volume: '500ml',
      price: '₹35',
      tag: '100% Pure'
    },
    {
      image: bottle2,
      title: 'A2 Desi Milk',
      volume: '1L',
      price: '₹70',
      tag: 'Rich in Nutrients'
    },
    {
      image: bottle3,
      title: 'Organic Buffalo Milk',
      volume: '1L',
      price: '₹65',
      tag: 'Thick & Creamy'
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
            <p className="price">{product.price}</p>
            <a
              href={`https://wa.me/919999999999?text=I%20want%20to%20order%20${encodeURIComponent(product.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="order-btn"
            >
              Order Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductShowcase;
