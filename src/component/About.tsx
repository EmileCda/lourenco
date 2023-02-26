import { useStore } from "@nanostores/react";
import { carouselStore } from "../store/carousel.store";

export default function About() {
  const { counter } = useStore(carouselStore);
  return (
    <>
      <p>about : {counter}
      
      Fifth page : Contact / Map / FAQ (Frequently Asked Question).

Email : contact@existentia.com</p>
    </>
  );
}
