import React from 'react'
import doctor from '../Components/Assets/doctor.png'
const Symtorms = () => {
  return (
    <>
      <div className='bg-blue-200 w-full md:h-[20rem] h-[16rem] '>
        <div className='flex'>
          <div className='text-[12px] md:text-[25px] p-3'>
          Your health is our top priority. We are committed to providing accurate and up-to-date information to assist you in understanding your symptoms. We ensure that our platform is easy to use, reliable, and backed by credible medical resources.
          </div>
          <div className='  '>
            <img className='xl:h-72 xl:w-[28rem] ' src={doctor} alt="" />
          </div>
        </div>

       

          <div className='mx-5 absolute top-[30rem] md:top-[41rem] mb-5'>
            
            <button className='border-double border-green-500 border-4  rounded-md   hover:bg-green-500 '> <a className='p-2' href="https://symptomate.com/interview/0">Get Syphtoms Checker </a></button>
          </div>
          
       
      </div>

    </>
  )
}

export default Symtorms
