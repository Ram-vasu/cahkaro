import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Brands from "./components/Brands";
import FlashDeal from "./components/FlashDeal";
import BrandsWiseDeal from "./components/BrandWiseDeals/Index";
import TopSellingProducts from "./components/TopSellingProducts";
import InviteBanner from "./components/InviteBanner";
import Coupon from "./Coupon";
import EcomPlatformCoupon from "./EcomPlatformCoupon";
import AccordiantDesign from "./components/AccordiantDesign";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  const brandwiseData = {
    "Ajio - Top Deals": [
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/clove-oral-care-coupons-1735634904.jpg", // Example logo URL
        title: "Diabetic care 1 month plan month plan",
        subtitle: "+ FREE Glucometer & 10 strips",
        price: "₹99",
        oldPrice: "₹999",
        discount: "70% off",
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/cleevo-1747298880.png", // Example product image
        cta: "Grab deal",
      },
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/bajaj-prime-coupons-1742820629.png",
        title: "Any 5 home & hygiene products",
        subtitle: "@ ₹196",
        price: "₹196",
        oldPrice: null,
        discount: "70% off",
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/puer-1747038021.png",
        cta: "Grab deal",
      },
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/colorsqueen-coupons-1732082250.png",
        title: "Any cosy hoodie for men",
        subtitle: null,
        price: "₹975",
        oldPrice: "₹2,599",
        discount: "70% off",
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/colors%20queen-1747399684.png",
        cta: "Grab deal",
      },
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/puer-coupon-codes-1735638968.jpg",
        title: "Annual gold membership",
        subtitle: null,
        price: "₹1,000",
        oldPrice: "₹2,400",
        discount: null,
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/bajaj%20prime%201-1744884840.png",
        cta: "Grab deal",
      },
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/cleevo-offers-1745231039.png",
        title: "Annual gold membership",
        subtitle: null,
        price: "₹1,000",
        oldPrice: "₹2,400",
        discount: null,
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/CLOVE%2011%202%20(1)-1745507182.png",
        cta: "Grab deal",
      },
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/clove-oral-care-coupons-1735634904.jpg",
        title:
          "Clove Oral Care: Buy Ultimate Mouthwash 250ml each worth Rs. 645 at Rs. 57 Only",
        subtitle: null,
        price: "₹57",
        oldPrice: "₹645",
        discount: "Lowest Price Ever",
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/CLOVE%2011%202%20(1)-1745507182.png",
        cta: "Grab Deal",
        isFlash: true,
      },
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/puer-coupon-codes-1735638968.jpg",
        title:
          "Puer: Buy Liquid Detergent 1000ml Pack of 2 worth Rs. 1000 at Rs. 296",
        subtitle: null,
        price: "₹296",
        oldPrice: "₹1,000",
        discount: "Completely Natural",
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/puer-1747038021.png",
        cta: "Grab Deal",
        isFlash: true,
      },
    ],
    "Myntra - Top Deals": [
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/clove-oral-care-coupons-1735634904.jpg", // Example logo URL
        title: "Diabetic care 1 month plan month plan",
        subtitle: "+ FREE Glucometer & 10 strips",
        price: "₹99",
        oldPrice: "₹999",
        discount: "70% off",
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/cleevo-1747298880.png", // Example product image
        cta: "Grab deal",
      },
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/bajaj-prime-coupons-1742820629.png",
        title: "Any 5 home & hygiene products",
        subtitle: "@ ₹196",
        price: "₹196",
        oldPrice: null,
        discount: "70% off",
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/puer-1747038021.png",
        cta: "Grab deal",
      },
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/colorsqueen-coupons-1732082250.png",
        title: "Any cosy hoodie for men",
        subtitle: null,
        price: "₹975",
        oldPrice: "₹2,599",
        discount: "70% off",
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/colors%20queen-1747399684.png",
        cta: "Grab deal",
      },
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/puer-coupon-codes-1735638968.jpg",
        title: "Annual gold membership",
        subtitle: null,
        price: "₹1,000",
        oldPrice: "₹2,400",
        discount: null,
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/bajaj%20prime%201-1744884840.png",
        cta: "Grab deal",
      },
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/cleevo-offers-1745231039.png",
        title: "Annual gold membership",
        subtitle: null,
        price: "₹1,000",
        oldPrice: "₹2,400",
        discount: null,
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/CLOVE%2011%202%20(1)-1745507182.png",
        cta: "Grab deal",
      },
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/clove-oral-care-coupons-1735634904.jpg",
        title:
          "Clove Oral Care: Buy Ultimate Mouthwash 250ml each worth Rs. 645 at Rs. 57 Only",
        subtitle: null,
        price: "₹57",
        oldPrice: "₹645",
        discount: "Lowest Price Ever",
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/CLOVE%2011%202%20(1)-1745507182.png",
        cta: "Grab Deal",
        isFlash: true,
      },
      {
        logo: "https://asset20.ckassets.com/resources/image/stores/puer-coupon-codes-1735638968.jpg",
        title:
          "Puer: Buy Liquid Detergent 1000ml Pack of 2 worth Rs. 1000 at Rs. 296",
        subtitle: null,
        price: "₹296",
        oldPrice: "₹1,000",
        discount: "Completely Natural",
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/puer-1747038021.png",
        cta: "Grab Deal",
        isFlash: true,
      },
    ],
  };
  const popularSaleandCoupons = {
    "Popular Sales Online": [
      {
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/amazon-sale-1740478243.jpg",
        alt: "Highest Cashback Rated",
        label: "Highest Cashback Rated",
      },
      {
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/flipkart-sale-1740478270.jpg",
        alt: "Trusted by 2 Crore+ Indians",
        label: "Trusted by 2 Crore+ Indians",
      },
      {
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/buykaro-sale-1740478337.jpg",
        alt: "₹1000 Crore Cashback Paid",
        label: "₹1000 Crore Cashback Paid",
      },
    ],
    "Don't Take Our Word": [
      {
        image:
          "https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/dont-take-our-word-one.png",
        alt: "Highest Cashback Rated",
        label: "Highest Cashback Rated",
      },
      {
        image:
          "https://asset22.ckassets.com/resources/image/staticpage_images/ratan-tata-1740462315.png",
        alt: "Trusted by 2 Crore+ Indians",
        label: "Trusted by 2 Crore+ Indians",
      },
      {
        image:
          "https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/dont-take-our-word-three.png",
        alt: "₹1000 Crore Cashback Paid",
        label: "₹1000 Crore Cashback Paid",
      },
    ],
  };
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Brands />
      <FlashDeal />
      {Object.keys(brandwiseData).map((brand, index) => (
        <BrandsWiseDeal
          key={index}
          brandName={brand}
          deals={brandwiseData[brand]}
        />
      ))}
      {/* <BrandsWiseDeal /> */}
      <TopSellingProducts />
      <InviteBanner />
      <Coupon title="" card="" />
      <EcomPlatformCoupon title="" card="" />
      {Object.keys(popularSaleandCoupons).map((brand, index) => (
        <Coupon key={index} title={brand} card={popularSaleandCoupons[brand]} />
      ))}
      <AccordiantDesign />
      <Review />
      <Footer />
      {/* <MenuContainerleft /> */}
    </>
  );
}

export default App;
