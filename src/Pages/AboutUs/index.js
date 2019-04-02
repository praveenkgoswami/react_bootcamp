import React from 'react';
import CommonComponentHOC from '../../HOC/commonComponentHOC'

const AboutUs = () => {
  return (
    <div className="container text-center">
      <h2>Know More About Us</h2>
      <div>
        What we do?
      </div>
    </div>
  )
}

export default CommonComponentHOC(AboutUs);