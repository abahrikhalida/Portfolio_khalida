import React from 'react'
import './Hero.css'
import profile from '../../assets/p.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {

  return (
    <div>
      <div  id='home' className='hero'>
        <img src={profile} alt="" />
        <h1> <span>I'm Khalida Abahri ,</span> full-stack developer based in Algeria.</h1>
        <p> I am a full-stack developer from Boumerdes, Algeria with 5 years of expercience</p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink href='#contact' offset={50} className='anchor-link'>
              
                Connect with me
              
            </AnchorLink>
            </div>
            <div className="hero-resume"> My resume</div>
        </div>
      </div>

    </div>
  )
}

export default Hero
