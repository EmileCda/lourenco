export type Lang = "fr" | "en" | "pr";

export type ImageCarousel = {
  fr: string;
  pr: string;
  en: string;
  url: string;
};

export type JsonLink = {
  en: Lang;
  pr: Lang;
  fr: Lang;
  link: string;
};

export type JsonService = {
  en: string[] ;
  pr: string[] ;
  fr: string[] ;
  link: string;
};

export type TroisLang={
  en: string ;
  pr: string ;
  fr: string ;

}


export type TService = {
  title : TroisLang;
  prelude :TroisLang;
  epilog : TroisLang;
  image : TroisLang;
  alt :TroisLang;
 
}