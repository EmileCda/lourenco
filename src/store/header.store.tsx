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
};

export const headerStore = map<HeaderStore>({
  lang: "fr",
  isBurgerMennuVisible : false,
});

export const setLang = action(
  headerStore,
  "setIndex",
  (store, newLang: Lang) => {
    store.setKey("lang", newLang);
  }
)
  
  export const toggleIsBurgerMennuVisible = action(
    headerStore,
    "toggleIsBurgerMennuVisible",
    (store) => {
      const {isBurgerMennuVisible} =store.get();
      store.setKey("isBurgerMennuVisible",   !isBurgerMennuVisible );
      
    }
  );
