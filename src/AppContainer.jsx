import { useEffect } from "react";
import HeroSection from "./components/module/header/Hero";
import AmazingDiscounts from "./components/template/Home/AmazingDiscounts";
import ArticlesSection from "./components/template/Home/ArticlesSection";
import Categories from "./components/template/Home/Categories";
import ContactUs from "./components/template/Home/ContactUs";
import LatestProductContainer from "./components/template/Home/LatestProductContainer";
import SpecialProducts from "./components/template/Home/SpecialProducts";
import SpecialSale from "./components/template/Home/SpecialSale";
import SuggestedCategory from "./components/template/Home/SuggestedCategory";
import TVContainer from "./components/template/Home/TVContainer";
import WhyUs from "./components/template/Home/WhyUs";
import Aos from "aos";

export default function AppContainer() {
  useEffect(() => {
    Aos.init({
      duration: 800, // مدت انیمیشن
      easing: "ease-out-cubic",
      once: true, // فقط یک بار اجرا شود
    });
  }, []);

  return (
    <>
      <HeroSection />
      <Categories />
      <AmazingDiscounts />
      <SuggestedCategory />
      <LatestProductContainer />
      <SpecialSale />
      <ArticlesSection />
      <SpecialProducts />
      <ContactUs />
      <TVContainer />
      <WhyUs /> 
    </>
  );
}
