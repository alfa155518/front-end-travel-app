import LazyLoad from "react-lazy-load";
import useInViewAnimate from "../hooks/useInViewAnimate";
import gallery_1 from "../images/gallery/gallery-01.WebP";
import gallery_2 from "../images/gallery/gallery-02.WebP";
import gallery_3 from "../images/gallery/gallery-03.WebP";
import gallery_4 from "../images/gallery/gallery-04.WebP";
import gallery_5 from "../images/gallery/gallery-05.WebP";
import gallery_6 from "../images/gallery/gallery-06.WebP";
import gallery_7 from "../images/gallery/gallery-07.WebP";
import gallery_8 from "../images/gallery/gallery-08.WebP";

function Gallery() {
  const [ref, inView] = useInViewAnimate();
  return (
    <>
      <div className="section-name">
        <h3>Our Unforgettable Gallery</h3>
      </div>
      <section className="gallery px-[1rem]">
        <div
          ref={ref}
          className={`gallery-item animate__animated  ${
            inView ? "animate__backInUp" : ""
          }`}>
          <LazyLoad>
            <img
              src={gallery_1}
              alt="gallery img"
              className="scale-up-hor-center"
            />
          </LazyLoad>
        </div>
        <div
          ref={ref}
          className={`gallery-item animate__animated ${
            inView ? "animate__backInUp" : ""
          }`}>
          <LazyLoad>
            <img
              src={gallery_2}
              alt="gallery img"
              className="scale-up-hor-center"
            />
          </LazyLoad>
        </div>
        <div
          ref={ref}
          className={`gallery-item animate__animated  ${
            inView ? "animate__backInUp" : ""
          }`}>
          <LazyLoad>
            <img
              src={gallery_3}
              alt="gallery img"
              className="scale-up-hor-center"
            />
          </LazyLoad>
        </div>
        <div
          ref={ref}
          className={`gallery-item animate__animated ${
            inView ? "animate__backInUp" : ""
          }`}>
          <LazyLoad>
            <img
              src={gallery_4}
              alt="gallery img"
              className="scale-up-hor-center"
            />
          </LazyLoad>
        </div>
        <div
          ref={ref}
          className={`gallery-item animate__animated ${
            inView ? "animate__backInUp" : ""
          }`}>
          <LazyLoad>
            <img
              src={gallery_5}
              alt="gallery img"
              className="scale-up-hor-center"
            />
          </LazyLoad>
        </div>
        <div
          ref={ref}
          className={`gallery-item animate__animated ${
            inView ? "animate__backInUp" : ""
          }`}>
          <LazyLoad>
            <img
              src={gallery_6}
              alt="gallery img"
              className="scale-up-hor-center"
            />
          </LazyLoad>
        </div>
        <div
          ref={ref}
          className={`gallery-item animate__animated ${
            inView ? "animate__backInUp" : ""
          }`}>
          <LazyLoad>
            <img
              src={gallery_7}
              alt="gallery img"
              className="scale-up-hor-center"
            />
          </LazyLoad>
        </div>
        <div
          ref={ref}
          className={`gallery-item animate__animated ${
            inView ? "animate__backInUp" : ""
          }`}>
          <LazyLoad>
            <img
              src={gallery_8}
              alt="gallery img"
              className="scale-up-hor-center"
            />
          </LazyLoad>
        </div>
      </section>
    </>
  );
}

export default Gallery;
