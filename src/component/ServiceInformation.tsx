import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { headerStore } from "../store/header.store";
import {
  Epilog,
  Image,
  Prelude,
  ServiceInformationContainer,
  Title,
} from "../style/ServiceInformation.style";
import { Lang } from "../type/App.type";

import jsonData from "./../data/lang.json";
export const myDataLang: any = jsonData;
export const infoService = myDataLang.infoService;
// 
// const { lang } = useStore(headerStore);
const lang : Lang = "fr";

export default function ServiceInformation() {
  console.log(lang)
  return (
    <>
      <ServiceInformationContainer>
      <Link to="/Services">

        <Title>{infoService["title"][lang]}</Title>
        <Prelude>{infoService["prelude"][lang]}</Prelude>
        <Image><img src={infoService['image'][lang]} alt={infoService['alt'][lang]}  />
          
          </Image>
        <Epilog>{infoService["epilog"][lang]}</Epilog>
        </Link>
      </ServiceInformationContainer>

    </>
  );
}
