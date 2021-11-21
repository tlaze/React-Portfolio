import React from 'react';
import '../styles/Project.css';

function Projects() {

    return(
        <div className="container-fluid my-5" >
            <div className="row">
                <div className="col-md-12 mb-5">
                    <h1>Projects</h1>
                </div>

                <div className="row">
                    <div className="project col-md-4 offset-md-2 my-3" id="project1">
                        <a href="https://cryptic-thicket-49114.herokuapp.com/" target="blank" rel="noreferrer"><h4 className="projectTitle text-center">Tech Blog</h4></a>
                        <a href="https://github.com/tlaze/tech-blog" target="blank" rel="noreferrer"><h4 className="gitHubLink text-center">GitHub Repo</h4></a>
                    </div>

                    <div className="project col-md-4 offset-md-1 my-3" id="project2">
                        <a href="https://never-alone-platform.herokuapp.com/" target="blank" rel="noreferrer"><h4 className="projectTitle text-center">Never Alone</h4></a>
                        <a href="https://github.com/tlaze/NeverAlone" target="blank" rel="noreferrer"><h4 className="gitHubLink text-center">GitHub Repo</h4></a>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="project col-md-4 offset-md-2 my-3" id="project3">
                        <a href="https://tlaze.github.io/password-generator/" target="blank" rel="noreferrer"><h4 className="projectTitle text-center">Password Generator</h4></a>
                        <a href="https://github.com/tlaze/password-generator" target="blank" rel="noreferrer"><h4 className="gitHubLink text-center">GitHub Repo</h4></a>
                    </div>   

                    <div className="project col-md-4 offset-md-1 my-3" id="project4">
                        <a href="https://tlaze.github.io/weather-dashboard/" target="blank" rel="noreferrer"><h4 className="projectTitle text-center">Weather Dashboard</h4></a>
                        <a href="https://github.com/tlaze/weather-dashboard" target="blank" rel="noreferrer"><h4 className="gitHubLink text-center">GitHub Repo</h4></a>
                    </div>  
                </div>
                <div className="row my-3">
                    <div className="project col-md-4 offset-md-2 my-3" id="project5">
                        <a href="https://caitlinw29.github.io/pokeBattle/" target="blank" rel="noreferrer"><h4 className="projectTitle text-center">Poke Battle</h4></a>
                        <a href="https://github.com/tlaze/pokeBattle" target="blank" rel="noreferrer"><h4 className="gitHubLink text-center">GitHub Repo</h4></a>
                    </div>

                    <div className="project col-md-4 offset-md-1 my-3" id="project6">
                        <a href="https://young-reef-24740.herokuapp.com/?id=618dc96fb6b8940016e40ab4" target="blank" rel="noreferrer"><h4 className="projectTitle text-center">Workout Tracker</h4></a>
                        <a href="https://github.com/tlaze/Workout-Tracker" target="blank" rel="noreferrer"><h4 className="gitHubLink text-center">GitHub Repo</h4></a>                 
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Projects;