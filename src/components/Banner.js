import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Banner() {
  return (
    <div className='relative mt-5 '>
        <div className='absolute mt-2 w-32 h-32 z-20'/>
     <Carousel
     autoPlay
     infiniteLoop
     showStatus={false}
     showIndicators={true}
     showThumbs={false}
     interval={5000}
     
     >
       <div>
          <img classname="rounded-md" loading='lazy' src='https://www.grocistore.com/admin/uploads/banners/web_banners/banner1576516931.JPG' alt='amazon' />
       </div>

       <div>
       <img loading='lazy' src='https://www.grocistore.com/admin/uploads/banners/web_banners/banner1576516931.JPG' alt='amazon' />
       </div>

       <div>
       <img loading='lazy' src='https://www.grocistore.com/admin/uploads/banners/web_banners/banner1576516931.JPG' alt='amazon' />
       </div>
     </Carousel>
    </div>
  )
}

export default Banner