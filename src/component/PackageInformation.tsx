import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { headerStore } from "../store/header.store";
import {
  Epilog,
  Image,
  PackageInformationContainer,
  Prelude,
  Title,
} from "../style/PackageInformation.style";

import { Lang } from "../type/App.type";

import jsonData from "./../data/lang.json";
export const myDataLang: any = jsonData;
export const infoPackage = myDataLang.infoPackage;
//
// const { lang } = useStore(headerStore);
const lang: Lang = "fr";

export default function PackageInformation() {
  console.log(lang);
  return (
    <>
      <PackageInformationContainer>
        <Link to="/Packages">
          <Title>{infoPackage["title"][lang]}</Title>
          <Prelude>{infoPackage["prelude"][lang]}</Prelude>
          <Image>
            <img
              src={infoPackage["image"][lang]}
              alt={infoPackage["alt"][lang]}
            />
          </Image>
          <Epilog>{infoPackage["epilog"][lang]}</Epilog>
        </Link>
      </PackageInformationContainer>
      {/* <p>ServiceInformation</p> */}
    </>
  );
}
