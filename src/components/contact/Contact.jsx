import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates, harum veniam sapiente nulla reiciendis sint expedita pariatur quibusdam maiores.</span>
                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>0123123123</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>0123123123</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                        </div>
                    
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video call</span>
                                    <span className='secondaryText'>0123123123</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video call Now</div>
                        </div>
                        <div className="flexCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>0123123123</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="imag-container">
                <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact