import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'


const Footer = () => {
    return (
      <footer className="footer w-full p-10 bg-base-200 text-base-content mt-5">
  <aside>
    <img src={logo} className='w-32 h-10 ml-10' alt="" />
    <p> <Link to='/' className="btn btn-ghost text-xl">Fix<span className='text-2xl font-semibold text-green-500'>it</span>Genius</Link>.<br/> Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;