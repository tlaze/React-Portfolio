import React from 'react';
import Marquee from "react-fast-marquee";
import profPic from '../assets/images/profilePic.jpg';

function AboutMe() {
    const styles = {
        picStyle: {
            height: '200x',
            width: '200px',
            borderRadius: '15%',
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
                <div className="col-md-9 text-center my-3">
                    <h4>
                        Welcome! Thank you for checking out my portfolio.
                        <br></br>
                        <br></br>
                        I have been a software developer for 2 years.
                        <br></br>
                        Below are a some technologies and frameworks I have worked with.
                        <br></br>
                        <br></br>
                        My latest position at Revature focused on Agile project developement
                        <br></br>
                        with a focus on Java, Spring, and Angular
                        <br></br>
                        <br></br>
                        I earned a Full Stack Software Developer certification from Georgia Tech University.
                        <br></br>
                        Tech stack involved React for front-end development and Express.js for back-end.
                        <br></br>
                        <br></br>
                        Prior to entering this field I worked for 10 years in Emergency Medical Services.
                        <br></br>
                        Enhancing my abilities to perform effectively under pressure,
                        <br></br>
                        lead teams, and pursue continuous self-improvement.
                        <br></br>
                        <br></br>
                        Any questions? Feel free to use the contact me page.
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center my-5">
                    <h2>Knowledge Base</h2>
                    <Marquee speed={150} gradient={false} pauseOnHover={true} className="my-5">
                        <h2>|  HTML  |  CSS  |  JavaScript  |  Bootstrap  |  Express   |   NPM   |  React  |   
                            MySQL   |   Typescript   |   Python   |   Java   |   Angular   |   Spring/SpringBoot   |  Amazon Web Services   
                        </h2>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;