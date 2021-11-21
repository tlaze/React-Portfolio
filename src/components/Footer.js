import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../styles/footer.css';
import { Modal, Button } from 'react-bootstrap';


function PhoneModal(props) {
    return (
      <Modal {...props} size="sm" aria-labelledby="phone-modal" centered>
        <Modal.Header>
          <Modal.Title id="phone-modal">
            Cell Phone
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>315-778-6632</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="bg-primary">Close</Button>
        </Modal.Footer>
      </Modal>
    );
}


function EmailModal(props) {
    return (
      <Modal {...props} size="sm" aria-labelledby="email-modal" centered>
        <Modal.Header>
          <Modal.Title id="email-modal">
            Email
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>tomlazore@gmail.com</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="bg-primary">Close</Button>
        </Modal.Footer>
      </Modal>
    );
}


function Footer() {
    const [phoneModalShow, setPhoneModalShow] = useState(false);
    const [emailModalShow, setEmailModalShow] = useState(false);
    return(

        <footer className="footerStyle">
            <a href='https://github.com/tlaze' target='blank' className="footerIcons"><FontAwesomeIcon icon={faGithubSquare} size="3x" /></a>
            <a href='https://www.linkedin.com/in/tlaze' target='blank' className="footerIcons"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
            <Button className="footerIcons" onClick={() => setPhoneModalShow(true)}><FontAwesomeIcon icon={faPhoneSquareAlt} size="3x"/></Button>
            <Button className="footerIcons" onClick={() => setEmailModalShow(true)}><FontAwesomeIcon icon={faEnvelope} size="3x"/></Button>
            <PhoneModal show={phoneModalShow} onHide={() => setPhoneModalShow(false)} />
            <EmailModal show={emailModalShow} onHide={() => setEmailModalShow(false)} />
        </footer>
    )
}
export default Footer;