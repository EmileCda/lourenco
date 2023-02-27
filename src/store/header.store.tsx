/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";
import { Lang } from "../type/App.type";

export type HeaderStore = {
  lang: Lang;
  isBurgerMennuVisible : boolean;
  isVisible : boolean,
};

export const headerStore = map<HeaderStore>({
  lang: "fr",
  isBurgerMennuVisible : false,
  isVisible : false,
});

export const setLang = action(
  headerStore,
  "setIndex",
  (store, newLang: Lang) => {
    store.setKey("lang", newLang);
  }
)
  
  export const setIsBurgerMennuVisible = action(
    headerStore,
    "setIsBurgerMennuVisible",
    (store,value : boolean) => {
      const {isBurgerMennuVisible} =store.get();
      store.setKey("isBurgerMennuVisible",   value );
      
    }
  );

  export const toggleIsVisible= action(
    headerStore,
    "toggleIsVisible",
    (store) => {
      const {isVisible} =store.get();
      store.setKey("isVisible",   !isVisible );
      console.log("itit");
      console.log(isVisible);
        
    },
  );
