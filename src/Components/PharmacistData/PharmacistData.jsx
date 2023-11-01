import React from 'react'
import vikas from '../PharmacistData/vikas.jpeg'

const PharmacistData = () => {
    return (

        <>

            <div className=' bg-green-200 w-[100%] h-[35rem] md:h-[28rem]'>
                <div className='font-bold text-[30px] text-center'>
                    Our Pharamacists
                </div>

                < div class="flex md:gap-4  md:justify-evenly">
                 

                    <div className='border w-full border-black rounded-md m-4 p-3 md:flex '>
                        <img className='rounded-md md:h-48 ' src={vikas} alt="" />
                   
                    
                     <div className='hover:scale-105 md:m-7'>
                        <h1 className=' font-semibold '>Vikas Gamgwar</h1>
                        <h1 className='font-bold'>B.pharama </h1>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo laborum ducimus?</p>
                        </div>
                    </div>
                   

                   
                   
                    <div className='border w-full border-black rounded-md m-4 p-3 md:flex'>
                        <img className='rounded-md md:h-48 ' src={vikas} alt="" />
                   
                    
                     <div className=' md:m-7 hover:scale-105'>
                        <h1 className=' font-semibold '>Vikas Gamgwar</h1>
                        <h1 className='font-bold'>B.pharama </h1>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo laborum ducimus?</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default PharmacistData
