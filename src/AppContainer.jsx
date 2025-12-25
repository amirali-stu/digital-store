import HeroSection from "./components/module/header/Hero";
import AmazingDiscounts from "./components/template/Home/AmazingDiscounts";
import ArticlesSection from "./components/template/Home/ArticlesSection";
import Categories from "./components/template/Home/Categories";
import ContactUs from "./components/template/Home/ContactUs";
import LatestProductContainer from "./components/template/Home/LatestProductContainer";
import SpecialProducts from "./components/template/Home/SpecialProducts";
import SpecialSale from "./components/template/Home/SpecialSale";
import SuggestedCategory from "./components/template/Home/SuggestedCategory";

export default function AppContainer() {
  return (
    <div className="container">
      <HeroSection />
      <Categories />
      <AmazingDiscounts />
      <SuggestedCategory />
      <LatestProductContainer />
      <SpecialSale />
      <ArticlesSection />
      <SpecialProducts />
      <ContactUs />
    </div>
  );
}
