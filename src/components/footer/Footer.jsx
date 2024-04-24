import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'


function Footer() {
  return (
    <div className="footer container">
        <div className="footer_content">
            <div className="footer_social">
                <div className="hr_line"></div>
                <div className="footer_logo">
                    <img src={assets.logo2} alt="" />
                    <div className="footer_follow">
                        <h2>Follow us: </h2>
                        <a href="">
                            <i class='bx bxl-twitter'></i>
                        </a>
                        <a href="">
                            <i class='bx bxl-linkedin'></i>
                        </a>
                    </div>
                </div>
                <div className="hr_line"></div>
            </div>
            <div className="footer_contact">
                <div className="footer_no">
                    <h2>Contact</h2>
                    <a href=''><span>111 111 111</span> <span>Call<i class='bx bxs-phone-call'></i></span></a>
                    <a href=''><span>contact.messbox@.com</span> <span>Email<i class='bx bxs-envelope'></i></span></a>
                </div>
                {/* <div className="footer_pages">
                    <h2>Pages</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">locate mess</a></li>
                        <li><a href="">add mess</a></li>
                        <li><a href="">about us</a></li>
                    </ul>
                </div>
                 */}
            </div>
        </div>
    </div>
  )
}

export default Footer
