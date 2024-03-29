import React from 'react'
import './ContactUs.css'
import logo from '../Images/logo.svg'
import ContactUsbg from '../Images/ContactUsbg.jpg'
import address from '../ContactUs/svg/address.svg'
import email from '../ContactUs/svg/email.svg'
import phone from '../ContactUs/svg/phone.svg'



function ContactUs() {
    return (

        <div className="ContactUsBox">
            <img src={ContactUsbg} alt='bg' className='contactus' />
            <div className="boxContainer">
                <div className="contactText">
                    <p className='text-center'>
                        We would love to hear from you! If you have any questions, comments or suggestions, please feel free to get in touch with us using the contact form below.
                        We will do our best to respond to your inquiry as soon as possible. Thank you for visiting our website!
                    </p>
                </div>
                <div className="box">

                    <div className="BoxLeft">
                        <div className="address">
                            <div className="addressIcon">
                                <img src={address} alt='address' />
                            </div>
                            <div className="footerRow">
                                <p><strong>Address</strong></p>
                                <img src={logo} alt='logo' className='ftlogo' />
                                CORPORATE INTERACTION CLUB
                                <br />
                                Ground Floor, Student Activity Center <br />
                                IIT Roorkee, Roorkee <br />
                                Uttarakhand, India - 247667
                                <img src={email} alt='email' /> <p>cig@iitr.ac.in</p>
                            </div>
                        </div>
                        <div className="email">
                            <div className="emailIcon">
                                <img src={email} alt='email' />
                            </div>
                            <div className="emailAddress">
                                <p><strong>Email</strong></p>
                                <p>cig@iitr.ac.in</p>
                            </div>
                        </div>
                        <div className="phone">
                            <div className="phoneIcon">
                                <img src={phone} alt='phone' />
                            </div>
                            <div className="phoneNo">
                                <p><strong>Phone</strong></p>
                                <p>Prof. Sai R. Meka(Ass. Dean)</p>
                                <p>+91 1332 285378</p>
                                <p>Aman Vishwakarma(Chairperson)</p>
                                <p>+91 9569802087</p>
                            </div>
                        </div>
                    </div>
                    <div className="BoxRight">
                        <div className="contactright">
                            <h4>Contact Us</h4>
                            <div>
                                <form action="/" method="POST">
                                    <div className="form">
                                        <div className="formcss">
                                            <input
                                                name="Name"
                                                className="inputbox"
                                                type="text"
                                                placeholder="Name"
                                            />
                                            <input
                                                name="Number"
                                                className="inputbox"
                                                type="text"
                                                placeholder="Contact"
                                            />
                                            <input
                                                name="Email"
                                                className="inputbox"
                                                type="email"
                                                placeholder="Email ID"
                                            />
                                        </div>
                                        <div className="massageBox">
                                            <textarea
                                                name="Message"
                                                className="textarea"
                                                id=""
                                                cols="30"
                                                rows="6"
                                            >
                                                Message
                                            </textarea>
                                            <button type="submit" className="formbutton">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactUs