import servicesImg_1 from "../images/weather.WebP";
import servicesImg_2 from "../images/guide.WebP";
import servicesImg_3 from "../images/customization.WebP";

function Services() {
  return (
    <section className="services">
      <div className="section-name">
        <h3>We Offer Our Best Services</h3>
      </div>
      <div className="services-content">
        <div className="service-item animate__animated animate__">
          <div className="services-img">
            <img src={servicesImg_1} alt="services-img" />
          </div>
          <h4 className="services-name">Calculate Weather</h4>
          <p>
            Discover the beauty of the unknown with every step you take, as each
            tour becomes a new chapter in your travel story.
          </p>
        </div>
        <div className="service-item animate__animated animate__">
          <div className="services-img">
            <img src={servicesImg_2} alt="services-img" />
          </div>
          <h4 className="services-name">Best Tour Guide</h4>
          <p>
            Let your wanderlust guide you to breathtaking landscapes, vibrant
            cultures, and unforgettable adventures on every tour.
          </p>
        </div>
        <div className="service-item animate__animated animate__">
          <div className="services-img">
            <img src={servicesImg_3} alt="services-img" />
          </div>
          <h4 className="services-name">Customization</h4>
          <p>
            Let your wanderlust guide you to breathtaking landscapes, vibrant
            cultures, and unforgettable adventures on every tour.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
