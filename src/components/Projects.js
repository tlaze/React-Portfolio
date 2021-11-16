import React from 'react';
import '../styles/Project.css';

function Projects() {
    const styles = {
        projectStyle: {
            marginTop:'7em',
        }
    }
    return(
        <div className="container-fluid" style={styles.projectStyle}>
            <div className="row">
                <div className="col-md-12 mb-5">
                    <h1>Projects</h1>
                </div>

                <div className="row">
                    <a href="https://cryptic-thicket-49114.herokuapp.com/" rel="noreferrer" className="project col-md-3 offset-2 my-3" id="project1">
                        <h4 className="projectTitle text-center" id="project1Title">Tech Blog</h4>
                    </a>
                    <a href="https://never-alone-platform.herokuapp.com/" rel="noreferrer" className="project col-md-3 offset-2 my-3" id="project2">
                        <h4 className="projectTitle text-center" id="project1Title">Never Alone</h4>
                    </a>
                </div>
                <div className="row my-3">
                    <a href="https://tlaze.github.io/password-generator/" className="project col-md-3 offset-2 my-3" id="project3" rel="noreferrer">
                        <h4 className="projectTitle text-center">Password Generator</h4>
                    </a>   
                    <a href="https://tlaze.github.io/weather-dashboard/" className="project col-md-3 offset-2 my-3" id="project4" rel="noreferrer">
                        <h4 className="projectTitle text-center">Weather Dashboard</h4>
                    </a>  
                </div>
                <div className="row my-3">
                    <a href="https://caitlinw29.github.io/pokeBattle/" className="project col-md-3 offset-2 my-3" rel="noreferrer" id="project5">
                        <h4 className="projectTitle text-center">Poke Battle</h4>
                    </a>
                    <a href="https://young-reef-24740.herokuapp.com/?id=618dc96fb6b8940016e40ab4" className="project col-md-3 offset-2 my-3" rel="noreferrer" id="project6">
                        <h4 className="projectTitle text-center">Workout Tracker</h4>
                    </a>
                </div>
            </div>
        </div>
    )   
}

export default Projects;