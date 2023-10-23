import React from 'react'

import PharmacistData from "../Components/PharmacistData/PharmacistData"
import Causel from '../Components/Crausel/Causel'
import Agency from '../Components/AgencyData/Agency'
import Symtorms from './Symtorms'
import Footer from './Footer'


const Home = () => {
  return (
    <>

      <Causel />
      <Symtorms />
      <PharmacistData />
      <Agency />
     <Footer />

    </>
  )
}

export default Home
