import React from 'react'

import PharmacistData from "../Components/PharmacistData/PharmacistData"
import Carousel from '../Components/Crausel/Carousel'
import Agency from '../Components/AgencyData/Agency'
import Symtorms from './Symtorms'



const Home = () => {
  return (
    <>

      <Carousel />
      <Symtorms />
      <PharmacistData />
      <Agency />
  

    </>
  )
}

export default Home
