import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../styles/footer.css';

function Footer() {

    return(
        <footer className="footerStyle">
            <a href='https://github.com/tlaze' target='blank' className="footerIcons"><FontAwesomeIcon icon={faGithubSquare} size="3x" /></a>
            <a href='https://www.linkedin.com/in/tlaze' target='blank' className="footerIcons"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
            <a href='/' className="footerIcons"><FontAwesomeIcon icon={faPhoneSquareAlt} size="3x" /></a>
            <a href='/' className="footerIcons"><FontAwesomeIcon icon={faEnvelope} size="3x" /></a>
        </footer>
    )
}
export default Footer;