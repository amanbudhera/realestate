import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
    const [menueopen,setMenueopen]= useState(false);
    const getMenuStyles = (menueopen) =>{
        if (document.documentElement.clientWidth <= 800){
            return {right: !menueopen && '-100%'}
        }
    }
  return (
    <>
        <section className='h-wrapper'>
            <div className="flexCenter  paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100}/>
                <OutsideClickHandler onOutsideClick={()=>{
                    setMenueopen(false)
                }}>
                <div className='flexCenter h-menu' style={getMenuStyles(menueopen)}>
                    <a href="">Reaidencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className='button'>
                        <a href="">Contact</a>
                    </button>
                </div>
                </OutsideClickHandler>
            <div className='menu-icon' onClick={()=>setMenueopen((prev)=>!prev)}>
                <BiMenuAltRight size={30}/>
            </div>
            </div>
        </section>
    </>
  )
}

export default Header