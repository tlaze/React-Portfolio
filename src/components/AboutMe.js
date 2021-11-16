import React from 'react';

function aboutMe() {

    const styles = {
        bioStyle: {
            marginTop: '10%',
        }
    }
    return(
        <div className="container-fluid" style={styles.bioStyle}>
            <div class="row">
                <div className="col-md-12">
                    <h1>About Me</h1>
                    <img src="/assets/images/avatar.jpg" alt="Tom"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>
                        I am a full stack software developer. Growing up I played a sports all year round. Working with teams developed a mindset that supporting each member and putting in the effort to excel individualy leads to success.
                        During college I became an EMT and used those skills in a diverse and challenging environment.
                        I worked in that field for nine years and went back to school to obtain my Paramedic Certification. I will be forever grateful for the skills learned and life experience gained during that time of my life.
                        Now, I am looking to switch career paths into software develpment. As I gain experience in this field,
                        I intend to update these projects to become more efficient and add new ones with the end goal of working towards something that makes a difference in people's lives.
                        Thank you for taking the time to read this! I hope you enjoy my works.</h3>
                </div>
            </div>
        </div>
    )
}

export default aboutMe;