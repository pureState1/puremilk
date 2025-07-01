import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      {/* Page Banner */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>We’re here to answer your queries and take your orders!</p>
      </div>

      {/* Address & Info */}
      <section className="contact-info">
        <div className="info-text">
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> 5th Floor, CDC Building, BHU, Varanasi – 221005</p>
          <p><strong>Phone:</strong> +91 9511112263</p>
          <p><strong>Email:</strong> purestatefarms@gmail.com</p>
        </div>

        {/* Embedded Google Map */}
        <div className="map-container">
          <iframe
            title="AgroMilk Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.917058504733!2d82.98963551504045!3d25.267718083858047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33b5b79cf8ef%3A0x6e65e69708df78b9!2sCDC%20Building%2C%20IIT%20BHU!5e0!3m2!1sen!2sin!4v1627893148771!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
