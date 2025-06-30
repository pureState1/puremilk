import '../styles/Testimonials.css';
import user1 from '../assets/user1.png';
import user2 from '../assets/UIUXdesginer.png';
import user3 from '../assets/user1.png';

function Testimonials() {
  const reviews = [
    {
      image: user1,
      name: 'Anita Sharma',
      comment: 'The milk quality is top-notch! Feels like I’m back in my village. Fresh and thick.',
    },
    {
      image: user2,
      name: 'Ravi Verma',
      comment: 'AgroMilk is now a part of our daily routine. My kids love the taste!',
    },
    {
      image: user3,
      name: 'Priya Menon',
      comment: 'I appreciate the eco-friendly bottles and timely delivery. Highly recommend it.',
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <img src={review.image} alt={review.name} />
            <h4>{review.name}</h4>
            <p>"{review.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
