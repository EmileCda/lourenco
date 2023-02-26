/**
 * contact form
 * 
 * 
 */
import { ContactContainer,  InputContainer,  Title } from "../style/contact.style";
import { Lang } from "../type/App.type";
import jsonData from "./../data/lang.json";
export const myDataLang: any = jsonData;
const lang: Lang = "fr";

type inputProps ={
label : string,
value : string,

}

export function MyInput({label,value} : inputProps){

  return(
    <>
    <InputContainer>
    <label for={label}>{label}</label>
    <input type="text" id={label} name={label} value={value} />
    </InputContainer>
    </>
    
  )
}



export default function Contact() {
  const labelContact = myDataLang["contact"] ;
  return (
    <>

<ContactContainer>

<Title>{labelContact.title[lang]}</Title>

<MyInput label={labelContact.name[lang]} value= {labelContact.name[lang]} />
<MyInput label={labelContact.phone[lang]} value= {labelContact.phone[lang]} />
<MyInput label={labelContact.email[lang]} value= {labelContact.email[lang]} />
<MyInput label={labelContact.subject[lang]} value= {labelContact.subject[lang]} />

<Title>{labelContact.ourEmail[lang]}</Title>


</ContactContainer>

    </>
  );
}
