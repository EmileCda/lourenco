import { useStore } from "@nanostores/react";
import MediaQuery from "react-responsive";
import { headerStore } from "../store/header.store";
import { Description } from "../style/Country.style";

import Contact from "./Contact";
import FAQ from "./FAQ";
import MaputoMap from "./MaputoMap";

export default function Test() {
  const { isVisible } = useStore(headerStore);
  return (
    <>
      [{isVisible}]
    </>
  );
}


