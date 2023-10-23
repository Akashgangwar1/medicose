import React from 'react'

const contact = () => {
  return (
    <>
      <div className=' m-5 font-semibold center'>
        <h1>Contact Us</h1>
        <div>
          <div className=' p-2'>
            <input type="text" placeholder='Enter Your Name' className='border border-solid 2px  px-3 w-full h-10  md:w-96' />
          </div>
          <div className=' p-2'>
            <input type="email" placeholder='Enter Your E-mail' className='border border-solid 2px w-full h-10  px-3  md:w-96' />
          </div>
          <div className=' p-2'>
            <input type="text" placeholder='Write Text' className='border border-solid 2px w-full   h-40  md:w-96 px-3' />
          </div>
          <div><button type='submit'>Submit</button></div>
        </div>
      </div>

    </>
  )
}

export default contact
