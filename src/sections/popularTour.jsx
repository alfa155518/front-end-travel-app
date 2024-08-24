import { useContext } from "react";
import { TourContext } from "../context/TourManagement";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import Tour from "../components/tour";

function PopularTour() {
  const { popularTours, allTours, isLoadingPopularTours } =
    useContext(TourContext);

  if (isLoadingPopularTours) {
    return (
      <div className="skeleton__container">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="item">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Skeleton height={30} width={250} />
              <Skeleton height={200} width={250} />
            </SkeletonTheme>
          </div>
        ))}
      </div>
    );
  }
  return (
    <section className="popular-tours py-20 my-16">
      <div className="section-name">
        <h3>Our Popular Tours</h3>
      </div>
      <div className="popular-tours-content  mx-10">
        {popularTours <= 0 ? (
          <Tour tours={allTours} />
        ) : (
          <Tour tours={popularTours} />
        )}
      </div>
    </section>
  );
}

export default PopularTour;
