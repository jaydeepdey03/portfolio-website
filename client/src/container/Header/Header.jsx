/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
import { client } from '../../client';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {

  const [resumeLink, setResumeLink] = useState([])

  useEffect(() => {
    const query = `*[_type=='resume']{"fileURL":file.asset->url}`

    client.fetch(query).then((data) => {
    })
  }, [])

  return (<div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    ></motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      {/* <img src={images.profile} alt="profile_bg" /> */}
      {/* <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      /> */}
      <div className="app__header-badge" style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Jaydeep</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">A passionate frontend React and NextJS developer from India</p>
          {/* <p className="p-text"></p> */}
        </div>
          <a href="https://drive.google.com/file/d/1fOYSVSNHIo1R24COQ0W1iNItClA8lODF/view?usp=sharing" target={`_blank`}> <button style={{ padding: '1rem 1rem', borderRadius: '10px', border: 'none', marginTop: '4rem', backgroundColor: '#313bac', fontWeight: '900', color: 'white', transition: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)', cursor: 'pointer  ' }} type="button" className="p-text">{'Download Resume'}</button></a>
      </div>
    </motion.div>


    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.javascript, images.react, images.nextjs].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>)
};

export default AppWrap(Header, 'home');
