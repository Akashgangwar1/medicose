import React, { useState, useEffect } from 'react'
import minimalistic from '../Assets/minimalistic.jpg'
import pills from '../Assets/pills.jpg'
import space from '../Assets/space.jpg'

const Causel = () => {
  
  
  
  const [imageIndex, setImageIndex] = useState(0);
  const images = [{minimalistic} ,{pills},{space}]
 

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return <img src={images[imageIndex]} alt="Slideshow" />;
};

export default Causel;
