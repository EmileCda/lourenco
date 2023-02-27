import { useStore } from "@nanostores/react";
import { Description, GastronomyContainer, Img, Title } from "../style/Country.style";
import { Lang, TSubject } from "../type/App.type";
import { headerStore } from "../store/header.store";

import jsonData from "./../data/lang.json";
export const myDataLang: any = jsonData;
// const { lang } = useStore(headerStore);

// const lang = "fr";

// -------------------------------------------------------------
export function DisplayInformation(subject: TSubject) {
const { lang } = useStore(headerStore);
return (
    <>
      <Title>{subject.title[lang]}</Title>
      <Description>{subject.prelude[lang]}</Description>
      <Img src={subject.image[lang]} alt={subject.alt[lang]} />
      <Description>{subject.epilog[lang]}</Description>
    </>
  );
}
// -------------------------------------------------------------
export function AboutMozambique() {
  const dataCountry = myDataLang["country"];
  return DisplayInformation(dataCountry);
}
// -------------------------------------------------------------
export function Tourisme() {
  const dataTourisme = myDataLang["Tourisme"];
  return DisplayInformation(dataTourisme);
}
// -------------------------------------------------------------
export function Gastronomy() {
  const dataGastronomy = myDataLang["gastronomy"];
  const { lang } = useStore(headerStore);

  return (
    <>
      <GastronomyContainer>
      <Title>{dataGastronomy.chapterTitle[lang]}</Title>
      <ul>
      {dataGastronomy.dish.map((item: TSubject, index: number) =>
        <li key={index}>
        {DisplayInformation(item)}
        </li>
      )}

      </ul>
      </GastronomyContainer>
    </>
  );
}
// -------------------------------------------------------------
export function NaturalResource() {
  const dataResource = myDataLang["resources"];
  return DisplayInformation(dataResource);
}
// -------------------------------------------------------------
export default function Country() {
  return (
    <>
      <AboutMozambique />
      <Gastronomy />
      <NaturalResource />
      <Tourisme />
    </>
  );
}
