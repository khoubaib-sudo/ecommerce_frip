import React from 'react';
import {Link , Button} from 'next/link';
import { AiFillInstagram, AiFillFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="icons">
        <a target="_blank" href="https://instagram.com/">
          <AiFillInstagram />
        </a>
        <a target="_blank" href="https://facebook.com/">
          <AiFillFacebook />
        </a>
      </p>
    </div>
  )
}

export default Footer