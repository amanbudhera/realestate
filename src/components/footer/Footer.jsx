import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section className='f-wraper'>
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" width={120} alt="logo" />
                <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing <br />elit. Animi voluptate atque illo explicabo.</span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className="secondaryText">125 New York, FL 3532,USA</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer