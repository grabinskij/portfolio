import React from 'react';
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import "./style.css";


const Footer = () => {
    return (
        <footer className="footer">
            <a href="mailto:bogdan.grabinskij@gmail.com" className="footer__link">bogdan.grabinskij@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a href="#" className="social-list__link">
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="#" className="social-list__link">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="#" className="social-list__link">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;