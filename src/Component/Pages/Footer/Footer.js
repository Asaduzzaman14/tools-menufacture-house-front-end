import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

import './Footer.css'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()
    console.log(year);

    return (
        <div>


            <div className="footer-container">
                <div className="row">
                    <div className="footer-col">
                        <h4 className="footer-heading">Company</h4>
                        <li><span>About us</span></li>
                        <li><span>Our Service</span></li>
                        <li><span>Policy</span></li>
                        <li><span>Archive</span></li>
                        <li><span>Popular</span></li>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">company</h4>
                        <li><span>Ecommerce</span></li>
                        <li><span>Cookie Preferences</span></li>
                        <li><span>Customers</span></li>
                        <li><span>Accessibility</span></li>
                        <li><span>Archive</span></li>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">company</h4>
                        <li><span>SEO</span></li>
                        <li><span>Interactions</span></li>
                        <li><span>Interactions</span></li>
                        <li><span>Popular</span></li>
                        <li><span>Interactions</span></li>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">Follow US</h4>
                        <li><span>facebok</span></li>
                        <li><span>twiter</span></li>
                        <li><span>youtube</span></li>
                        <li><span>linkdin</span></li>
                        <li><span>github</span></li>
                    </div>
                </div>

                <hr className='mt-4 text-white' />
                <p className='copyright-text'>&copy; copyright {year} </p>
                <div className='footer_icons'>
                    <Link to={''}><BsFacebook></BsFacebook></Link>
                    <Link to={''}><AiFillLinkedin></AiFillLinkedin></Link>
                    <Link to={''}><BsGithub></BsGithub></Link>
                    <Link to={''}><BsFacebook></BsFacebook></Link>
                    <Link to={''}><AiFillLinkedin></AiFillLinkedin></Link>
                    <Link to={''}><BsGithub></BsGithub></Link>

                </div>
            </div>
        </div>
    );
};

export default Footer;