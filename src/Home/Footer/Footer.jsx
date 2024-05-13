import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import facebook from'../../assets/logo/icons8-facebook-48.png'
import linkilden from'../../assets/logo/icons8-linkedin-48.png'
const Footer = () => {
    return (
      <>
      <footer className="footer w-full p-10 bg-base-200 text-base-content mt-5">
  <aside>
    <img src={logo} className='w-32 h-10 ml-10' alt="" />
    <p> <Link to='/' className="btn btn-ghost text-xl">Fix<span className='text-2xl font-semibold text-green-500'>it</span>Genius</Link>.<br/> Providing reliable tech since 1992</p>
    <div className="space-y-3 ml-8">
				<div className="uppercase dark:text-gray-900 text-2xl font-semibold">Social media</div>
				<div className="flex justify-start space-x-3">
					<a rel="noopener noreferrer" href="https://www.facebook.com/TuinextOfficialAccount/" title="Facebook" className="flex items-center p-1">
						<img src={facebook} alt="" />
					</a>
					<a rel="noopener noreferrer" href="https://www.linkedin.com/in/mizanur-rahman-23675321b/" title="Twitter" className="flex items-center p-1">
						<img className='' src={linkilden} alt="" />
					</a>
			
				</div>
			</div>
		
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
<p className="bg-sky-100 py-5 text-center text-black">&copy; 2024 <span>Mizanur Rahman</span>. All Rights Reserved.</p>
</>
    );
};

export default Footer;