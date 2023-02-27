import { useStore } from "@nanostores/react";
import { headerStore } from "../store/header.store";
import { CPackage, Description, Image, PackageContainer,  Price, Title } from "../style/Package.style";
import { Lang, TPackage,  } from "../type/App.type";

import jsonData from "./../data/lang.json";
export const myDataLang: any = jsonData;


export default function Package() {
  const packageList = myDataLang["packages"];
  const { lang } = useStore(headerStore);
  return (
    <>
      <PackageContainer>
        {packageList.map((item : TPackage, index : number) => (
          <CPackage key={index}>
            <Title>{item["title"][lang]}</Title>
            <Description>{item["description"][lang]}</Description>
            <Image>
              <img
                src={item["image"][lang]}
                alt={item["alt"][lang]}
              />
            </Image>
            <Price>{item["price"][lang]}</Price>
          </CPackage>
        ))}
      </PackageContainer>
    </>
  );
}
