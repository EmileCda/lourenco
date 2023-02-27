import { useStore } from "@nanostores/react";
import { headerStore } from "../store/header.store";
import {
  CServices,
  Epilog,
  Image,
  Prelude,
  ServicesContainer,
  Title,
} from "../style/Services.style";
import { Lang, TService } from "../type/App.type";

import jsonData from "./../data/lang.json";
export const myDataLang: any = jsonData;


export default function Services() {
const { lang } = useStore(headerStore);
const servicesList = myDataLang["services"];
  return (
    <>
      <ServicesContainer>
        {servicesList.map((item : TService, index : number) => (
          <CServices key={index}>
            <Title>{item["title"][lang]}</Title>
            <Prelude>{item["prelude"][lang]}</Prelude>
            <Image>
              <img
                src={item["image"][lang]}
                alt={item["alt"][lang]}
              />
            </Image>
            <Epilog>{item["epilog"][lang]}</Epilog>
          </CServices>
        ))}
      </ServicesContainer>
    </>
  );
}
