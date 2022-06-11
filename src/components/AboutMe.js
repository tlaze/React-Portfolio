import React from 'react';
import Marquee from "react-fast-marquee";
import profPic from '../assets/images/profilePic.jpg';

function AboutMe() {
    const styles = {
        picStyle: {
            height: '200x',
            width: '200px',
            borderRadius: '25%',
            border: '5px solid #d2dbde',
        },
    }
    return(
        <div className="container-fluid my-5">
                <h1>About Me</h1>
            <div className="row">
                <div className="col-md-3 text-center my-5">
                    <img src={profPic} alt="Me" style={styles.picStyle}></img>
                </div>
                <div className="col-md-9 text-center my-5">
                    <h3>
                        Earned Full Stack Software Developer certification from Georgia Tech University.
                        <br></br>
                        <br></br>
                        <br></br>
                        Effective team leader of successful people through managing challenges.
                        <br></br>
                        <br></br>
                        <br></br>
                        Succeeded in managing my time across challenging areas at school and work as an Emergency Medical Technician (EMT).
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center my-5">
                    <h2>Knowledge Base</h2>
                    <Marquee speed={150} gradient={false} pauseOnHover={true} className="my-5">
                        <h2>  HTML  |  CSS  |  Javascript  |  Bootstrap  |  Node.js  |  Express.js   |   NPM   |  MongoDB  |   Mongoose   |   Progressive Web Applications   |  React.js  |   
                            MySQL   |   JQuery   |   APIs   |   Git   |   Handlebars.js   |   Local Storage   |   Python   |   Java   |   GraphQL   |   BCrypt   |   Sessions   |
                               Redux   |   Apollo   |   
                        </h2>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;