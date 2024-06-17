import React, { useEffect } from 'react'
import SectionHowItWork from '@/components/SectionHowItWork/SectionHowItWork'
import BackgroundSection from '@/components/BackgroundSection/BackgroundSection'
import SectionPromo1 from '@/components/SectionPromo1'
import SectionHero2 from '@/components/SectionHero/SectionHero2'
import SectionSliderLargeProduct from '@/components/SectionSliderLargeProduct'
import SectionSliderProductCard from '@/components/SectionSliderProductCard'
import DiscoverMoreSlider from '@/components/DiscoverMoreSlider'
import SectionGridMoreExplore from '@/components/SectionGridMoreExplore/SectionGridMoreExplore'
import SectionPromo2 from '@/components/SectionPromo2'
import SectionSliderCategories from '@/components/SectionSliderCategories/SectionSliderCategories'
import SectionPromo3 from '@/components/SectionPromo3'
import SectionClientSay from '@/components/SectionClientSay/SectionClientSay'
import Heading from '@/components/Heading/Heading'
import ButtonSecondary from '@/shared/Button/ButtonSecondary'
import SectionGridFeatureItems from '@/components/SectionGridFeatureItems'
import SectionMagazine5 from '@/app/blog/SectionMagazine5'

import { fetchProduct } from '@/data/data'
// import { product_list } from "@/data/data";
import { API_SERVER_CONFIG } from '@/config/API_config'

async function PageHome () {
  // do use effect to pass data to this return
  let products = await fetchProduct(
    new URL(API_SERVER_CONFIG.product_list),
    new URL(API_SERVER_CONFIG.product_varients)
  )
  return (
    <div className='nc-PageHome relative overflow-hidden'>
      {/* slider first part */}
      <SectionHero2 />

      <div className='mt-24 lg:mt-32'>
        <DiscoverMoreSlider />
      </div>

      <div className='container relative space-y-24 my-24 lg:space-y-32 lg:my-32'>
        <SectionSliderProductCard data={products} />

        <div className='py-24 lg:py-32 border-t border-b border-slate-200 dark:border-slate-700'>
          <SectionHowItWork />
        </div>
        <SectionPromo1 />

        <div className='relative py-24 lg:py-32'>
          <BackgroundSection />
          <SectionGridMoreExplore />
        </div>

        <SectionSliderProductCard
          heading='Best Sellers'
          subHeading='Best selling of the month'
        />

        <SectionPromo2 />

        <SectionSliderLargeProduct cardStyle='style2' />

        <SectionSliderCategories />

        <SectionPromo3 />

        <SectionGridFeatureItems />

        <div className='relative py-24 lg:py-32'>
          <BackgroundSection />
          <div>
            <Heading rightDescText='From the Ciseco blog'>
              The latest news
            </Heading>
            <SectionMagazine5 />
            <div className='flex mt-16 justify-center'>
              <ButtonSecondary>Show all blog articles</ButtonSecondary>
            </div>
          </div>
        </div>
        <SectionClientSay />
      </div>
    </div>
  )
}

export default PageHome
