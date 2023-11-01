import React from 'react'
import cipla from '../Assets/cipla.png'
import divis from '../Assets/divis.png'
import lupin from '../Assets/lupin.png'
import sun from '../Assets/sun.png'

const Agency = () => {
  return (
    <>
    <div className=''>
   <h1  className='font-semibold text-[44px] text-center my-3 py-5'> Our Partners </h1>
       
<div className='flex px-2 gap-2 py-4 justify-evenly '>
<div><img src={cipla} alt="" /></div>
<div><img src={divis} alt="" /></div>
<div><img src={lupin} alt="" /></div>
<div><img src={sun} alt="" /></div>





</div>

    </div>
    </>
  )
}

export default Agency
