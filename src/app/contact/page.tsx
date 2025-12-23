import ContactPageSection from '@/components/Contact/ContactPageSection'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Faq2 from '@/components/mvpblocks/faq-2'
import React from 'react'

export default function page() {
  return (
    <>
      <MaxWidthWrapper>
        <ContactPageSection />
        <Faq2 />
      </MaxWidthWrapper>
    </>
  )
}

