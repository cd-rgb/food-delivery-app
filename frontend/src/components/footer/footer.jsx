import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nobis ea ipsam aperiam deserunt enim neque laboriosam fugit libero eligendi, minus consectetur repellat provident quod placeat eius, ratione, perspiciatis rem?</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>home</li>
                        <li>about us</li>
                        <li>delivery</li>
                        <li>privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+91-9404398914</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">
                <p>Copyright 2025 Tomato.com -All Right Reserved</p>
            </div>

        </div>
    )
}

export default Footer
