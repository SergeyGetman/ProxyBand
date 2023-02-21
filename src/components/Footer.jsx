import React from 'react';
import "../index.css"
import Logo from "../images/logoCompany.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Proxy Band<img style={{height: "50px"}} src={Logo} alt="logo"/></h3>

                    <p className="footer-links">
                        <a href="#">Home</a>
                        ·
                        <a href="#">Blog</a>
                        ·
                        <a href="#">Pricing</a>
                        ·
                        <a href="#">About</a>
                        ·
                        <a href="#">Faq</a>
                        ·
                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name">Proxy Band</p>

                    <div className="footer-icons">

                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>

                    </div>

                </div>

                <div className="footer-right">

                    <p>Contact Us</p>

                    <form action="#" method="post">

                        <input type="text" name="email" placeholder="Email" />
                            <textarea name="message" placeholder="Message"></textarea>
                            <button style={{display: "initial"}}>Send</button>

                    </form>

                </div>

            </footer>
        </div>
);
};

export default Footer;