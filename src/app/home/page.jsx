import React from 'react'

import Carousel from '../../components/Carousel/carousel'
import ShowcaseGallery from '../../components/ShowcaseGallery/ShowcaseGallery'
import Perfil from '../../components/Perfil/Perfil'

const page = () => {
  return (
    <div>
        <Carousel />
        <ShowcaseGallery />
        <Perfil />
    </div>
  )
}

export default page