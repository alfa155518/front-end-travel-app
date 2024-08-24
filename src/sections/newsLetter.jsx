import useInViewAnimate from "../hooks/useInViewAnimate";
import newsletterImage from "../images/male-tourist.WebP";

function NewsLetter() {
  const [ref, inView] = useInViewAnimate();
  return (
    <section className="newsletter-container flex items-center ">
      <div
        ref={ref}
        className={`content flex-1 animate__animated ${
          inView ? "animate__fadeInLeft" : ""
        }`}>
        <h2 className="">Subscribe to our Newsletter</h2>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="email "
          />
          <button type="submit" className="send-data">
            Subscribe
          </button>
        </form>
        <p>
          We promise to keep you informed about our latest travel updates,
          special offers, and exclusive deals.
        </p>
      </div>
      <div
        className={`image flex-1 animate__animated ${
          inView ? "animate__fadeInDown" : ""
        }`}>
        <img src={newsletterImage} alt="newsletter-image" />
      </div>
    </section>
  );
}

export default NewsLetter;
