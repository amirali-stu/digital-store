import HeroSection from "./components/module/header/Hero";
import AmazingDiscounts from "./components/template/Home/AmazingDiscounts";
import Categories from "./components/template/Home/Categories";
import LatestProducts from "./components/template/Home/LatestProducts";
import SuggestedCategory from "./components/template/Home/SuggestedCategory";

export default function AppContainer() {
  return (
    <div className="container">
      <HeroSection />
      <Categories />
      <AmazingDiscounts />
      <SuggestedCategory />
      <LatestProducts />
    </div>
  );
}
