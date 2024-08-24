import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

function Hero() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Traveling Opens The Door",
        "And opens your mind to new perspectives",
        "To Creating Memorize",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section className="hero w-[100%] h-[90vh] bg-cover bg-no-repeat mb-20">
      <div className="text">
        <strong ref={el} className="typed text-center" />
        <article className="mt-10 pt-10 text-balance text-center">
          Travel opens your mind to new perspectives, enriches your soul with
          unforgettable experiences, and allows you to connect with the world in
          ways you never imagined.
        </article>
        <button className="send-data m-auto">
          <Link>View Tours</Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
