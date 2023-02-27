/**
 * contact form
 *
 *
 */
import {
  ContactContainer,
  InputContainer,
  Title,
} from "../style/contact.style";
import { Lang } from "../type/App.type";
import jsonData from "./../data/lang.json";
export const myDataLang: any = jsonData;
const lang: Lang = "fr";

type inputProps = {
  label: string;
  myValue: string;
};

export function MyInput({ label, myValue }: inputProps) {
  return (
    <>
      <InputContainer>
        <label htmlFor={label}>{label}</label>
        <input type="text" id={label} name={label}  />
      </InputContainer>
    </>
  );
}

export default function Contact() {
  const labelContact = myDataLang["contact"];
  return (
    <>
      <ContactContainer>
        <Title>{labelContact.title[lang]}</Title>

        <MyInput
          label={labelContact.name[lang]}
          myValue={labelContact.name[lang]}
        />
        <MyInput
          label={labelContact.phone[lang]}
          myValue={labelContact.phone[lang]}
        />
        <MyInput
          label={labelContact.email[lang]}
          myValue={labelContact.email[lang]}
        />
        <MyInput
          label={labelContact.subject[lang]}
          myValue={labelContact.subject[lang]}
        />

        <Title>{labelContact.ourEmail[lang]}</Title>
      </ContactContainer>
    </>
  );
}
