import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='portfolio' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return (
                    <a 
                        key={index} 
                        href={work.w_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="work-link"
                    >
                        <img src={work.w_img} alt={work.w_name}/>
                        <div className="work-overlay">
                            <h3>{work.w_name}</h3>
                            <p>View on GitHub</p>
                        </div>
                    </a>
                )
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork