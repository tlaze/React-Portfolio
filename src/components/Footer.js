import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {

    const hoverOn = e => {
        e.target.style.color = 'white';
    }

    const hoverOff = e => {
        e.target.style.color = '#051f40';
    }

    const styles = {
        footerStyle: {
            background: '#d2dbde',
            position: 'fixed',
            bottom: 0,
            height: '65px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        footerIcons: {
            marginLeft: '20px',
            marginRight: '20px',
            color:'#051f40',
        },
    }
    return(
        <footer style={styles.footerStyle}>
            <a href='https://github.com/tlaze' target='blank' style={styles.footerIcons} onMouseOver={hoverOn} onMouseLeave={hoverOff}><FontAwesomeIcon icon={faGithubSquare} size="3x" /></a>
            <a href='https://www.linkedin.com/in/tlaze' target='blank' style={styles.footerIcons} onMouseOver={hoverOn} onMouseLeave={hoverOff}><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
            <a href='/' style={styles.footerIcons} onMouseOver={hoverOn} onMouseLeave={hoverOff}><FontAwesomeIcon icon={faPhoneSquareAlt} size="3x" /></a>
            <a href='/' style={styles.footerIcons} onMouseOver={hoverOn} onMouseLeave={hoverOff}><FontAwesomeIcon icon={faEnvelope} size="3x" /></a>
        </footer>
    )
}
export default Footer;