/* eslint-disable */ 

import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <a href="https://twitter.com/jaydeep_dey03">
        <BsTwitter />
      </a>
    </div>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <a href="https://www.linkedin.com/in/jaydeep-dey03/">
        <BsLinkedin />
      </a>
    </div>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <a href="https://www.instagram.com/the.joy_ofeverything/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
