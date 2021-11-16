import React from 'react';

function AboutMe() {
    const styles = {
        bioStyle: {
            marginTop:'7em',
        }
    }
    return(
        <div className="container-fluid" style={styles.bioStyle}>
            <div className="row">
                <div className="col-md-12">
                    <h1>About Me</h1>
                    <img src="/assets/images/profilePic.jpg" alt="Tom"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>
                        I am a full stack software developer. Working with teams developed a mindset that supporting each member and putting in the effort to excel individualy leads to success.
                        During college I became an EMT and tested my skills in teamwork, multitasking, and staying calm under pressure in diverse and challenging environments.
                        I worked in that field for nine years and went back to school to obtain my Paramedic Certification. I will be forever grateful for the skills learned and life experience gained during that time of my life.
                        I am excited about this career switch and looking forward to future opportunities.
                    </h3>
                    <ul>Technologies</ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>React.js</li>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;