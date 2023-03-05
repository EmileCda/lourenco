import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { headerStore } from "../store/header.store";
import {
  Epilog,
  Image,
  InformationArayContainer,
  InformationContainer,
  Prelude,
  Title,
} from "../style/home.style";
import Carousel from "./Carousel";
import PackageInformation from "./PackageInformation";
import ServiceInformation from "./ServiceInformation";

import jsonData from "./../data/lang.json";
import { useMediaQuery } from "react-responsive";
export const myDataLang: any = jsonData;

type InformationProps = {
  name: string;
};

export function Information({ name }: InformationProps) {
  const { lang } = useStore(headerStore);
  const information = myDataLang[name];

  return (
    <>
      <InformationContainer>
        <Link to="/Packages">
          <Title>{information["title"][lang]}</Title>
          <Prelude>{information["prelude"][lang]}</Prelude>
          <Image>
            <img
              src={information["image"][lang]}
              alt={information["alt"][lang]}
            />
          </Image>
          <Epilog>{information["epilog"][lang]}</Epilog>
        </Link>
      </InformationContainer>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Carousel />
      <InformationArayContainer  isSmall={useMediaQuery({ minWidth: 768 }) }>
        <Information name={"infoService"} />
        <Information name={"infoPackage"} />
      </InformationArayContainer>
    </>
  );
}
