import React from 'react'
import './Hero.css'
import CountUp from 'react-countup'
import {HiLocationMarker} from 'react-icons/hi'
const Hero = () => {
  return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"/>
                        <h1
                        >Discover <br />Most Sutable <br />Property</h1>
                    </div>
                    <div className='flexColStart hero-des'>
                        <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color='var(--blue)' size={25} />
                        
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter">
                            <span>
                                <CountUp start={5800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Product</span>
                        </div>
                        <div className="flexColCenter">
                            <span>
                                <CountUp start={500} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColCenter">
                            <span>
                                <CountUp end={28}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Product</span>
                        </div>
                    </div>
                </div>
                <div className="flexCenter hero-right">
                    <div className="imag-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero