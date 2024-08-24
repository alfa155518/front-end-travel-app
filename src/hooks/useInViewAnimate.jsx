import { useInView } from "react-intersection-observer";

function useInViewAnimate() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return [ref, inView];
}

export default useInViewAnimate;
