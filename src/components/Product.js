import { Divider } from '@mui/material'
import React from 'react'

const Product = () => {
  return (
    <div className='cursor-pointer'>
        <div className='text-3xl font-semibold bg-teal-200 text-teal-900 m-5 p-3 rounded-sm'>
            <h1>Popular Service <br />
                Products
            </h1>
        </div>
        <div className='mt-2 items-center text-2xl font-semibold text-gray-400 p-5'>
         <h3>Daily Needs</h3>
         <Divider className='p-3 w-50'/>
        </div>
        <div className=' flex gap-3 mt-2 justify-between p-5 rounded-md w-full h-full overflow-x-scroll' >
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://foodexindia.com/m/wp-content/uploads/2021/12/Rasila-Tomato-F.jpg' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Chatpate Kurkure</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://foodexindia.com/m/wp-content/uploads/2019/11/bikaneribhujiaf.jpeg' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Namkeen</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://foodexindia.com/m/wp-content/uploads/2021/12/mastbaharF.jpeg' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Mixed Fruit</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://foodexindia.com/m/wp-content/uploads/2021/12/aloo-bhujiafront-new.jpeg' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Aloo Bhujia</span>
          </div>
          <div className='p-5 items-center  rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://foodexindia.com/m/wp-content/uploads/2021/12/Foodex-Navratan-Mixture.jpg' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Snacks</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://foodexindia.com/m/wp-content/uploads/2021/12/matar-masala-front-min.jpg' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Matar Masala</span>
          </div>
        </div>
        <div className='mt-2 items-center text-2xl font-semibold text-gray-400 p-5'>
         <h3>Construction</h3>
         <Divider className='p-3 w-50'/>
        </div>
        <div className=' flex gap-3 mt-2 justify-between p-3 rounded-md w-50 h-50 overflow-x-scroll' >
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://storage.googleapis.com/putatoeapp/Image/testImage/F68P45Q' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Almond Milk</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://storage.googleapis.com/putatoeapp/Image/testImage/B5HXAAQ' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Almond Milk</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://storage.googleapis.com/putatoeapp/Image/testImage/B7PV29F' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Almond Milk</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://storage.googleapis.com/putatoeapp/Image/testImage/GJLF8VZ' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Almond Milk</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://storage.googleapis.com/putatoeapp/Image/testImage/ATRH32W' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Almond Milk</span>
          </div>
        </div>
        <div className='mt-2 items-center text-2xl font-semibold text-gray-400 p-5'>
         <h3>Consultancy</h3>
         <Divider className='p-3 w-50'/>
        </div>
        <div className=' flex gap-3 mt-2 justify-between p-3 rounded-md w-full h-full overflow-x-scroll' >
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://img.theweek.in/content/dam/week/news/sci-tech/images/2018/5/1/income-tax-india.jpg' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Almond Milk</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://4.imimg.com/data4/VF/HU/GLADMIN-2/669_actuarial_and_risk_management-125x125.jpg' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Almond Milk</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFM6aYfccs3rb-NGD2FlXK9c6xyNujmhsCdg&usqp=CAU' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Almond Milk</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://storage.googleapis.com/putatoeapp/Image/testImage/6UD1K6I' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Almond Milk</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://storage.googleapis.com/putatoeapp/Image/testImage/6UD1K6I' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Almond Milk</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://storage.googleapis.com/putatoeapp/Image/testImage/8VIJA1T' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Almond Milk</span>
          </div>
        </div>
        <div className='mt-2 items-center text-2xl font-semibold text-gray-400 p-5'>
         <h3>Health</h3>
         <Divider className='p-3 w-50'/>
        </div>
        <div className='flex mt-2 justify-between p-3 rounded-md w-full h-full' >
          <div className='items-center rounded-md bg-white'>
          <img className="p-2" src='https://storage.googleapis.com/putatoeapp/Image/testImage/BGDN7OD' alt="pimg" />
          <span className='p-1 text-sm font-semibold'>Almond Milk</span>
          </div>
        </div>
        <div className='mt-2 items-center text-2xl font-semibold text-gray-400 p-5'>
         <h3>Laundry</h3>
         <Divider className='p-3 w-50'/>
        </div>
        <div className=' flex gap-5 mt-2 items-center rounded-md overflow-x-hidden p-3' >
          <div className='p-5 items-center rounded-md bg-white  w-50 h-60 '>
          <img className="p-2 w-full h-full " src='https://pickmylaundry.in/images/Woolen/Blanket_Double_Canva.png' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Blanket</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white w-50 h-60 '>
          <img className="p-2 w-full h-full " src='https://images-na.ssl-images-amazon.com/images/I/61IP7-onheL.jpg' alt="pimg" />
          <span className='p-2 text-sm font-semibold'>Coat</span>
          </div>
        </div>
        <div className='mt-2 items-center text-2xl font-semibold text-gray-400 p-5'>
         <h3>Sports</h3>
         <Divider className='p-3 w-50'/>
        </div>
        <div className=' flex mt-2 p-3 rounded-md w-50 h-60 overflow-x-scroll' >
          <div className='items-center rounded-md bg-white'>
          <img className="p-2" src='https://storage.googleapis.com/putatoeapp/Image/testImage/P5GCUXF' alt="pimg" />
          <span className='p-1 text-sm font-semibold'>Almond Milk</span>
          </div>
        </div>
        <div className='text-3xl font-semibold bg-teal-200 text-teal-900 m-5 p-2 rounded-sm'>
            <h1>All Popular Service <br />
                Providers
            </h1>
        </div>
        <div className='mt-2 items-center text-2xl font-semibold text-gray-400 p-5'>
         <h3>Cleaning & Household Needs</h3>
         <Divider className='p-3 w-50'/>
        </div>
        <div className=' flex gap-3 mt-2 items-center p-3 rounded-md overflow-x-scroll w-full h-full' >
          <div className='p-5 items-center rounded-md bg-white w-50 h-full'>
          <img className="p-2 w-full h-full" src='https://storage.googleapis.com/putatoeapp/Image/testImage/TXK9RL5' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Chatpate Kurkure</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://storage.googleapis.com/putatoeapp/Image/testImage/6KV3V5S' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Namkeen</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://storage.googleapis.com/putatoeapp/Image/testImage/P826TNO' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Mixed Fruit</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://storage.googleapis.com/putatoeapp/Image/testImage/P826TNO' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Aloo Bhujia</span>
          </div>
          
        </div>
        <div className='mt-2 items-center text-2xl font-semibold text-gray-400 p-5'>
         <h3>Education</h3>
         <Divider className='p-3 w-50'/>
        </div>
        <div className=' flex gap-3 mt-2 justify-between p-5 rounded-md w-full h-full overflow-x-scroll' >
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://i.ibb.co/K030t8y/images-27.jpg' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Chatpate Kurkure</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://i.ibb.co/X3Q2KCW/Screenshot-20200604-234323-1.jpg' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Namkeen</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://i.ibb.co/svHp9zd/Screenshot-20200604-234653-1.jpg' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Mixed Fruit</span>
          </div>
          <div className='p-5 items-center rounded-md bg-white  w-full h-full'>
          <img className="p-2 w-full h-full" src='https://i.ibb.co/XtnVbms/Screenshot-20200604-235010-1.jpg' alt="pimg" />
          <span className='p-0 text-sm font-semibold'>Aloo Bhujia</span>
          </div>
          
        </div>
    </div>
  )
}

export default Product