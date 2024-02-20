import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            
            
              <Image
                src="/images/ecowitty_logo.png"
                width={200}
                height={100}
                alt="Ecowitty Logo"
              />
              <h6>
              <span>Eco</span>witty
            <span> -  </span>
            <p>Your Equity in Nature </p></h6>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Socials</li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Whatsapp</a></li>
              <li><a href="#">Email</a></li>
              <li><a href="#">Call Us</a></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Why Ecowitty</a></li>
              <li><a href="#">Contact</a></li>
           
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="#">ecowitty@gmail.com</a></li>
              <li><a href="#">Hotline: +91 7204914788</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY DASCII.COM - © 2024. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer