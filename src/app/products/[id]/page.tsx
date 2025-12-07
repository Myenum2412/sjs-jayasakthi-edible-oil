import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

export default function page({ params }: { params: { id: string } }) {
  return (
    <MaxWidthWrapper>
        <div >
            <h1>Product Details {params.id}</h1>
        </div>
    </MaxWidthWrapper>
  )
}
