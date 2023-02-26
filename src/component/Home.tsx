import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import PackageInformation from "./PackageInformation";
import ServiceInformation from "./ServiceInformation";

export default function Home() {
  return (
    <>
      <Carousel />
        <ServiceInformation />

      <PackageInformation />
    </>
  );
}
