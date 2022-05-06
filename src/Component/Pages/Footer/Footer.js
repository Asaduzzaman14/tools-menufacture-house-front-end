import React from 'react';
import './Footer.css'

const Footer = () => {
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
                <p className='copyright-text'>&copy; copyright 2022 </p>
            </div>
        </div>
    );
};

export default Footer;