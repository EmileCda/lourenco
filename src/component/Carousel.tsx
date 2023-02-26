import { useStore } from "@nanostores/react";
import { carouselStore } from "../store/carousel.store";
import { headerStore } from "../store/header.store";
import { CarouselContainer } from "../style/Carousel.style";
import { ImageCarousel } from "../type/App.type";
import jsonData from "./../data/lang.json";

export const myDataLang: any = jsonData;

export const maxIndex = myDataLang["carousel"].length;
export const interval = myDataLang["carouselInterval"];

export default function Carousel() {
  const myCarousel = myDataLang["carousel"];
  const { lang } = useStore(headerStore);
  const { counter } = useStore(carouselStore);
  return (
    <CarouselContainer>
      {counter}
      {myCarousel.map((myImg: ImageCarousel,index : number) =>
        index === counter ? (
          <img  src={myImg.url} alt={myImg[lang]} />
        ) : (
          ""
        )
      )}
    </CarouselContainer>
  );
}
