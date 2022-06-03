/* eslint-disable */

import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import navbarImg from '../../assets/navbar.png'
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false)

 

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/" className="logo" style={{ textDecoration: 'noneww' }}>
          <img src={navbarImg} alt="" style={{ position: 'absolute', top: '2px', height: '70px', width: '200px' }} />
        </a>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      <a href="https://drive.google.com/file/d/1kDgUEmuGUy5mcnjpEgKtN64yegmqcDbf/view?usp=sharing" target={`_blank`}> <button style={{padding: '1rem 1rem', borderRadius: '10px', border: 'none', backgroundColor: '#313bac', fontWeight: '900', color: 'white', transition: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)', cursor: 'pointer  '}} type="button" className="p-text">{!loading ? 'Download Resume' : 'Downloading...'}</button></a>
    </nav>
  );
};

export default Navbar;
