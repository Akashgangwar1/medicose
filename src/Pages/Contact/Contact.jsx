import React from 'react'
import Iframe from 'react-iframe'
import pills from './pills.jpg'



const Contact = () => {


  return (
    <>
<div className=' shadow-md shadow-[#2596be] '>
  <img src={pills} alt="" />
</div>

<div className='  absolute top-20 right-10 md:right-32 md:top-36  '>
  <h3 className='font-bold md:text-[44px]'>Contact Us Medicose </h3>
</div>

      <div className=' m-5 font-semibold rounded-md  bg-blue-100 md:inline-block md:absolute md:top-80 md:right-32 z-20'>
        <h1 className=' rounded-sm text-[30px] mx-5   text-red-900  inline-block px-3 '>Contact Us</h1>
        <div>
          <div className=' p-2'>
            <input type="text" placeholder='Enter Your Frist  Name' className='border 4px border-solid border-red-400  shadow-lg shadow-red-400  px-3 w-full h-10 rounded-sm md:w-96' />
          </div>
          <div className=' p-2'>
            <input type="text" placeholder='Enter Your Secound  Name' className='border 4px border-solid border-red-400  shadow-lg shadow-red-400  px-3 w-full h-10 rounded-sm md:w-96' />
          </div>
          <div className=' p-2'>
            <input type="text" placeholder='Enter Your Mobile No.' className='border 4px border-solid border-red-400  shadow-lg shadow-red-400  px-3 w-full h-10 rounded-sm md:w-96' />
          </div>
          <div className=' p-2'>
            <input type="email" placeholder='Enter Your E-mail' className='border 4px border-solid border-red-400  shadow-lg shadow-red-400 w-full h-10 rounded-sm px-3  md:w-96' />
          </div>
          <div className=' p-2'>
            <input type="text" placeholder='Write Text' className='border 4px border-solid border-red-400  shadow-lg shadow-red-400 2px w-full  rounded-sm h-40  md:w-96 px-3' />
          </div>
          <div className='mx-3'>
            <button type='submit' className='  my-5 py-1 px-2 rounded-md border 4px border-solid border-red-400 bg-red-200 shadow-lg shadow-red-400  hover:bg-red-300'>Submit</button></div>
        </div>
      </div>

<div className=' m-4 p-5  md:h-64 font-semibold border bg-[#f5f5f5]'>
  <h1>Address : Fateganj west (bareilly)</h1>
  <h1>Area: fateganj Apposite police choky & near Bank of baroda Atm </h1>
</div>
      <div className='m-4'>
      <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2085.5924484654915!2d79.30313166345631!3d28.463447854411314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390aa66c1424cad9%3A0x153efcb142dd6019!2sFatehganj%20Pashchimi%2C%20Uttar%20Pradesh%20243501!5e0!3m2!1sen!2sin!4v1698149832122!5m2!1sen!2sin"
        
        className="w-full h-40 md:h-80 "
        display="block"
        position="relative"/>
      </div>

    </>
  )
}

export default Contact
