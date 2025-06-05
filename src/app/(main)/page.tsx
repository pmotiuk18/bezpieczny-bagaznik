import { MainConfigurator } from "@/components/partials/homepage/configurator/main-configurator";
import { ProductPromotionSection } from "@/components/partials/homepage/product-promotion-section";
import { RoofRackInfoSection } from "@/components/partials/homepage/roof-rack-info-section";

const Home = () => {
  return (
    <>
      <MainConfigurator />
      <ProductPromotionSection />
      <RoofRackInfoSection />
    </>
  );
};

export default Home;
