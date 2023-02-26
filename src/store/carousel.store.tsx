/**
 * storing index for carousel
 *
 *
 */

import { action, map } from "nanostores";
import { maxIndex } from "../component/Carousel";

export type CarouselStore = {
  counter: number;
};

export const carouselStore = map<CarouselStore>({
  counter: 0,
});

export const setCounter = action(carouselStore, "setCounter", (store) => {
  const { counter } = store.get();
  const newCounter =  counter + 1;
  store.setKey("counter", newCounter >= maxIndex ? 0 : newCounter);
});
