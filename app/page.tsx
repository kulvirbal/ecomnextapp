import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts"
import HeroContainer from "@/components/home/HeroContainer"
import { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <HeroContainer />
      <Suspense fallback={<LoadingContainer />} >
        <FeaturedProducts />
      </Suspense>
    </>
  )
}

export default HomePage
