import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about.JPG'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1> About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> I am a final-year Information Systems and Web student, passionate about backend and mobile development. I have experience working with microservices, API integration, and database management, allowing me to build scalable and reliable systems.</p>
                    <p>I focus on creating efficient, secure, and well-structured web and mobile solutions. Motivated by continuous learning, I constantly explore and master new technologies to deliver high-quality, modern applications.</p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p> HTML & CSS </p> <hr style={{ width:"50%"}}/> </div>
                    <div className="about-skill"><p> React Js</p><hr style={{ width:"70%"}}/></div>
                    <div className="about-skill"><p> Javascript</p><hr style={{ width:"60%"}}/></div>
                    <div className="about-skill"><p> Django</p><hr style={{ width:"50%"}}/></div>

                </div>
            </div>
        </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>5+</h1>
            <p> ACADEMIC & PERSONAL PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p> PROJECTS COMPLITED</p>
        </div>
        

      </div>
    </div>
  )
}

export default About
