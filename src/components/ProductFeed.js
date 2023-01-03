import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function ProductFeed() {
  return (
    <div className='relative mt-5'>
        <div className='absolute mt-3 w-32 h-32 z-20'/>
     <Carousel
     autoPlay
     infiniteLoop
     showStatus={false}
     showIndicators={true}
     showThumbs={false}
     interval={5000}
     
     >
       <div>
          <img classname="w-10 h-10" loading='lazy' src='https://storage.googleapis.com/putatoeapp/Image/testImage/XV3FCZH' alt='amazon' />
       </div>

       <div>
       <img classname="w-10 h-10" loading='lazy' src='https://storage.googleapis.com/putatoeapp/Image/testImage/40ARX02' alt='amazon' />
       </div>

       <div>
       <img classname="w-10 h-10" loading='lazy' src='https://storage.googleapis.com/putatoeapp/Image/testImage/61MPEEA' alt='amazon' />
       </div>
     </Carousel>
    </div>
  )
}

export default ProductFeed