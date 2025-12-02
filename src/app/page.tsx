import HeroSection from '@/components/Home/hero-section'
import HowItsWorks from '@/components/Home/HowItsWorks'
import ProductsSection from '@/components/Home/Products-section'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

function page() {
  return (
    <>
    <MaxWidthWrapper>
      <HeroSection/>
      <ProductsSection/>
      <HowItsWorks/>
    </MaxWidthWrapper>
    </>
  )
}

export default page