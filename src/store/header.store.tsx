/**
 * storing lang selected from Header
 *
 *
 */

import { action, map } from "nanostores";
import { Lang } from "../type/App.type";

export type HeaderStore = {
  lang: Lang;
};

export const headerStore = map<HeaderStore>({
  lang: "fr",
});

export const setLang = action(
  headerStore,
  "setIndex",
  (store, newLang: Lang) => {
    store.setKey("lang", newLang);
  }
);
