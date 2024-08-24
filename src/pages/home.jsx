import NavBar from "../layout/navBar";
import Hero from "../sections/hero";
import Services from "../sections/services";
import PopularTour from "../sections/popularTour";
import Experience from "../sections/experience";
import Gallery from "../sections/gallery";
import NewsLetter from "../sections/newsLetter";
import Footer from "../layout/footer";
import "../sass/pages/home.scss";

function Home() {
  return (
    <section className="home-page">
      <NavBar />
      <Hero />
      <Services />
      <PopularTour />
      <Experience />
      <Gallery />
      <NewsLetter />
      <Footer />
    </section>
  );
}

export default Home;
