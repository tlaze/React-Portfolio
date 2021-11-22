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
                        I am a full stack software developer certified from Georgia Tech University. Working with teams developed a mindset that supporting each member and putting in the effort to excel individually leads to success.
                        During college I became an EMT and tested my skills in teamwork, multitasking, and staying calm under pressure in diverse and challenging environments.
                        I worked in that field for nine years and went back to school to obtain my Paramedic Certification. I will be forever grateful for the skills learned and life experience gained during that time of my life.
                        I am excited about this career switch and looking forward to future opportunities.
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center my-5">
                    <h2>Technologies Used</h2>
                    <Marquee speed={150} gradient={false} pauseOnHover={true} className="my-5">
                        <h2>|  HTML  |  CSS  |  Javascript  |  Bootstrap  |  Node.js  |  Express.js   |   NPM   |  MongoDB  |   Mongoose   |   Progressive Web Applications   |  React.js  |   
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