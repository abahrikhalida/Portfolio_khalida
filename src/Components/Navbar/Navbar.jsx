import React, { useRef, useState } from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
   
  const [menu, setMenu] =useState("home");
  const menuRef =useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-250px";
  }
  
  return (
    <div className='navbar'>
        {/* <img src={logo} alt="" /> */}
        <div className="navbar-title">
                    <h1> Khalida</h1>
                    <img src={theme_pattern} alt="" />
                </div>
        <img src={menu_open} alt=""  className='nav-mob-open'onClick={openMenu}/>
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} alt="" className='nav-mob-close' onClick={closeMenu} />
  <li>
    <AnchorLink
      href='#home'
      className='anchor-link'
      onClick={() => setMenu("home")}
    >
      Home
    </AnchorLink>
    {menu === "home" && <img src={underline} alt="" />}
  </li>
  <li>
    <AnchorLink
      href='#about'
      className='anchor-link'
      onClick={() => setMenu("about")}
    >
      About Me
    </AnchorLink>
    {menu === "about" && <img src={underline} alt="" />}
  </li>
  
  <li>
    <AnchorLink
      href='#portfolio'
      className='anchor-link'
      onClick={() => setMenu("portfolio")}
    >
      Portfolio
    </AnchorLink>
    {menu === "portfolio" && <img src={underline} alt="" />}
  </li>
  <li>
    <AnchorLink
      href='#contact'
      className='anchor-link'
      onClick={() => setMenu("contact")}
    >
      Contact
    </AnchorLink>
    {menu === "contact" && <img src={underline} alt="" />}
  </li>
</ul>

        <div className='nav-connect'> Connect With Me</div>
      
    </div>
  )
}

export default Navbar
