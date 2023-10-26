import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";



const Footer = () => {
  return (
    <>
      <div className='text-white bg-black h-60 p-4  '>

        <div className=' divide-y divide-solid divide-white'>
          <table className='text-center '>
            <tr className='text-center px-3  md:px-10'>
              <th className='px-3  md:px-10'>Tools</th>
              <th className='px-3  md:px-10'>Bussiness</th>
              <th className='px-3  md:px-10'>State</th>
            </tr>
            <tr className=''>
              <td>Symturms Checker</td>
              <td>healthcare</td>
              <td>UP</td>
            </tr>
            <tr>
              <td>Medicines Information</td>
              <td>Hospitals</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Brand to salt checker</td>
              <td>industry</td>
              <td>Delhi</td>
            </tr>
          </table>

          <div className='flex justify-between px-4 mt-5 pt-5'>
            <div>
              <h1>Copyright 2023.medicose. All Rights Reserved Developed By Akash Gangwar</h1>
            </div>

            <div className='flex'>
              <div> <a href="/"><AiFillLinkedin /> </a> </div>
              <div> <a href="/"> <AiFillFacebook /> </a> </div>
              <div> <a href="/"> <AiFillInstagram /> </a> </div>
              <div> <a href="/"> <AiOutlineTwitter /> </a></div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
