import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>


            <div className="footer-container">
                <div className="row">
                    <div className="footer-col">
                        <h4 className="footer-heading">Company</h4>
                        <li><a href="">About us</a></li>
                        <li><a href="">Our Service</a></li>
                        <li><a href="">Policy</a></li>
                        <li><a href="">Archive</a></li>
                        <li><a href="">Popular</a></li>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">company</h4>
                        <li><a href="">Ecommerce</a></li>
                        <li><a href="">Cookie Preferences</a></li>
                        <li><a href="">Customers</a></li>
                        <li><a href="">Accessibility</a></li>
                        <li><a href="">Archive</a></li>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">company</h4>
                        <li><a href="">SEO</a></li>
                        <li><a href="">Interactions</a></li>
                        <li><a href="">Interactions</a></li>
                        <li><a href="">Popular</a></li>
                        <li><a href="">Interactions</a></li>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">Follow US</h4>
                        <li><a href="">facebok</a></li>
                        <li><a href="">twiter</a></li>
                        <li><a href="">youtube</a></li>
                        <li><a href="">linkdin</a></li>
                        <li><a href="">github</a></li>
                    </div>
                </div>
                <p className='copyright-text'>&copy; copyright 2022 </p>
            </div>
        </div>
    );
};

export default Footer;