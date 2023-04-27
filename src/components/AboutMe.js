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
                        Welcome! Thank you for checking out my portfolio.
                        <br></br>
                        <br></br>
                        I am currently employed at Revature as a software developer with a focus on Java, Spring, and Angular.
                        <br></br>
                        <br></br>
                        I earned a Full Stack Software Developer certification from Georgia Tech University.
                        <br></br>
                        Tech stack involved React for front-end development and Express.js for back-end.
                        <br></br>
                        <br></br>
                        Prior to entering this field I worked for 10 years in Emergency Medical Services.
                        <br></br>
                        Skills developed from previous experience include effective leadership and teamwork, logical thinking under stress, as well as 
                        a drive to always improve myself.
                        <br></br>
                        <br></br>
                        Any questions? Feel free to use the contact me page.
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center my-5">
                    <h2>Knowledge Base</h2>
                    <Marquee speed={150} gradient={false} pauseOnHover={true} className="my-5">
                        <h2>|  HTML  |  CSS  |  Javascript  |  Bootstrap  |  Node.js  |  Express.js   |   NPM   |  React.js  |   
                            MySQL   |   Typescript   |   Python   |   Java   |   Angular   |   Spring   |  AWS   
                        </h2>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;