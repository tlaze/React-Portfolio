import React from 'react';

function ContactMe() {
    const styles = {
        contactStyle: {
            marginTop:'25px',
            height:'100%',
        }
    }
    return(
        <div className="container-fluid" style={styles.contactStyle}>
            <div className="row">
                <div className="col-md-12">
                    <h1>Contact Me</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                </div>
            </div>
        </div>
    )   
}

export default ContactMe;