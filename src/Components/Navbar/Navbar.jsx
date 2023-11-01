import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [Navbar, setNavbar] = useState(false);

    const Toggle = () => {
        if (Navbar === true) {
            setNavbar(false);
          
        }
        else {
            setNavbar(true);
        }
    }

    return (
        <>
            <div className='md:flex md:justify-between bg-slate-700 w-full h-14 text-lg items-center text-white font-semibold '>

                <div className=' px-4 absolute md:static top-2'>
                    <h1>Medicose Pharma</h1>
                </div>

                <div className='absolute  p-3 right-3 md:hidden cursor-pointer' onClick={Toggle}  > |||</div>
              
                <div>
                    <ul className={`md:flex gap-8 px-4  bg-slate-700  md:static absolute w-full   ${Navbar ? "top-[45px]" : "-top-[140px]"}  transition-all duration-500 `}>
                        <li className='hover:bg-slate-950 px-2 py-1 rounded-md cursor-pointer' > <Link to="/" >Home</Link> </li>
                        <li className='hover:bg-slate-950 px-2 py-1 rounded-md cursor-pointer'>  <Link to="About" >About Us</Link></li>
                        <li className='hover:bg-slate-950 px-2 py-1 rounded-md cursor-pointer'>  <Link to="Contact" >Contact Us</Link></li>
                        <li className='hover:bg-slate-950 px-2 py-1 rounded-md cursor-pointer'>  <Link to="Services" >Services</Link></li>

                    </ul>
                </div>

            </div>

        </>
    )
}

export default Navbar
