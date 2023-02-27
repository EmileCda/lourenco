import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { headerStore } from "../store/header.store";
import { CarouselContainer } from "../style/Carousel.style";
import { ImageCarousel } from "../type/App.type";
import jsonData from "./../data/lang.json";
export const myDataLang: any = jsonData;

export default function Carousel() {
  const maxIndex = myDataLang["carousel"].length;
  const [counter, setCounter] = useState(1);
  const interval = myDataLang["carouselInterval"];
  const myCarousel = myDataLang["carousel"];
  const { lang } = useStore(headerStore);

  useEffect(() => {
    const timer = setInterval(() => {  setCounter((counter + 1)<maxIndex ? (counter + 1):0 )    }, parseInt(interval, 10));               // clearing interval
    
    return () => clearInterval(timer);
  });

  return (
    <CarouselContainer>
      <ul>
      {myCarousel.map((myImg: ImageCarousel,index : number) =>
        index === counter ? (
          <li key={index}><img  src={myImg.url} alt={myImg[lang]} /></li>
        ) : (
          ""
        )
      )}
      </ul>
    </CarouselContainer>
  );
}
