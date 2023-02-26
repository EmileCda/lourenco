import { ServiceInformationContainer } from "../style/ServiceInformation.style";
import {
  Epilog,
  Image,
  Prelude,
  ServicesContainer,
  Title,
  Zervices,
} from "../style/Services.style";
import { Lang, TService } from "../type/App.type";

import jsonData from "./../data/lang.json";
export const myDataLang: any = jsonData;
export const infoService = myDataLang.infoService;

// const { lang } = useStore(headerStore);
const lang: Lang = "fr";

export default function Services() {
  const servicesList = myDataLang["services"];
  const numbers = [4, 9, 16, 25];
  const value = servicesList[0];
  console.log(value);
  console.log(value.title);
  console.log(lang);
  console.log(value.title["fr"]);
  const max = servicesList.lenght;
  const index = 1;
  return (
    <>
      <ServicesContainer>
        {servicesList.map((item, index) => (
          <Zervices>
            <Title>{item["title"][lang]}</Title>
            <Prelude>{item["prelude"][lang]}</Prelude>
            <Image>
              <img
                src={item["image"][lang]}
                alt={item["alt"][lang]}
              />
            </Image>
            <Epilog>{item["epilog"][lang]}</Epilog>
          </Zervices>
        ))}
      </ServicesContainer>
    </>
  );
}
