import React from 'react'
import doctor from '../Components/Assets/doctor.png'
const Symtorms = () => {
  return (
    <>
      <div className='bg-blue-200 w-full md:h-[20rem] h-[16rem] '>
        <div className='flex'>
          <div className='text-[12px] md:text-[25px] p-3'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eius eum, nam ex, assumenda nulla aspernatur modi blanditiis error illum possimus ducimus exercitationem debitis dolores ipsum atque voluptatem deserunt ipsam, animi earum?
          </div>
          <div className='  '>
            <img className='xl:h-72 xl:w-[28rem] ' src={doctor} alt="" />
          </div>
        </div>

       

          <div className='mx-5 absolute top-[13rem] md:top-64 mb-5'>
            
            <button className='border-double border-green-500 border-4 p-2 rounded-md   hover:bg-green-500 '>Get Syphtoms Checker </button>
          </div>
          
       
      </div>

    </>
  )
}

export default Symtorms
