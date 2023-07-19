import React from 'react';
import '../styles/Project.css';

function Projects() {

    return(
        <div className="container-fluid my-5" >
            <div className="row">
                <div className="col-md-12 mb-3">
                    <h1>Projects</h1>
                </div>
                <div className="col-mid-12 text-center mb-5">
                    <h4>For a full list if projects, check out my <a href="https://github.com/tlaze?tab=repositories" target ="_blank">GitHub Repository</a></h4>
                    <h6></h6>
                </div>
                {/* Each project displays its description next to it */}
                <div className="row">
                    <div className="project col-md-4 offset-md-2 my-3" id="project1">
                        <a href="https://tom-blog-ad9726927b47.herokuapp.com/" target="blank" rel="noreferrer"><h4 className="projectTitle text-center">Deployed Project</h4></a>
                        <a href="https://github.com/tlaze/tech-blog" target="blank" rel="noreferrer"><h4 className="gitHubLink text-center">GitHub Repo</h4></a>
                    </div>
                    <div className="col-md-4 offset-md-1 my-3 text-center">
                        <h6>This application allows users to view, create, update, and delete posts.
                        They are also able to add comments on to other user's posts. 
                        This is only possible if users are logged into their account.
                        This application uses sessions to keep track of each user's post information
                        and logs them out after a period of inactivity.
                        </h6>
                        <h4>Technology Used</h4>
                        <ul type="none">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Handlebars.js</li>
                            <li>Express-Session</li>
                            <li>MySQL2</li>
                            <li>Sequelize</li>
                            <li>bCrypt</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                    <div className="project col-md-4 offset-md-2 my-3" id="project2">
                        <a href="https://never-alone-platform.herokuapp.com/" target="blank" rel="noreferrer"><h4 className="projectTitle text-center">Never Alone</h4></a>
                        <a href="https://github.com/tlaze/NeverAlone" target="blank" rel="noreferrer"><h4 className="gitHubLink text-center">GitHub Repo</h4></a>
                    </div>
                    <div className="col-md-4 offset-md-1 my-3 text-center">
                        <h6>This project was created by 4 member team with the goal of creating a 
                            social media website geared towards mental health. My responsibilities
                            included development of posts and its modifications. I was also
                            involved with developing the application so it was mobile responsive. </h6>
                        <h4>Technology Used</h4>
                        <ul type="none">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Handlebars.js</li>
                            <li>Express-Session</li>
                            <li>MySQL2</li>
                            <li>Sequelize</li>
                            <li>bCrypt</li>
                            <li>NodeMailer</li>
                        </ul>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="project col-md-4 offset-md-2 my-3" id="project3">
                        <a href="https://tlaze.github.io/password-generator/" target="blank" rel="noreferrer"><h4 className="projectTitle text-center">Password Generator</h4></a>
                        <a href="https://github.com/tlaze/password-generator" target="blank" rel="noreferrer"><h4 className="gitHubLink text-center">GitHub Repo</h4></a>
                    </div>
                    <div className="col-md-4 offset-md-1 my-3 text-center">
                        <h6>This application generates a secure password depending on the user's personal
                            preferences. User's have the option to include uppercase, lowercase, numerals,
                            and/or special characters. Once the user completes the prompts, the password is generated
                            for them to copy.
                        </h6>
                        <h4>Technology Used</h4>
                        <ul type="none">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </div> 
                    <div className="project col-md-4 offset-md-2 my-3" id="project4">
                        <a href="https://tlaze.github.io/weather-dashboard/" target="blank" rel="noreferrer"><h4 className="projectTitle text-center">Weather Dashboard</h4></a>
                        <a href="https://github.com/tlaze/weather-dashboard" target="blank" rel="noreferrer"><h4 className="gitHubLink text-center">GitHub Repo</h4></a>
                    </div>  
                    <div className="col-md-4 offset-md-1 my-3 text-center">
                        <h6>Using OpenWeatherOneAPI to fetch data, this application allows users to search a city for it's current weather
                            as well as it's 5 day forecast. Previous searches are saved and will display it's information again 
                            when clicked.
                        </h6>
                        <h4>Technology Used</h4>
                        <ul type="none">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>JQuery</li>
                            <li>OpenWeatherOneAPI</li>
                            <li>Local Storage</li>
                        </ul>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="project col-md-4 offset-md-2 my-3" id="project5">
                        <a href="https://caitlinw29.github.io/pokeBattle/" target="blank" rel="noreferrer"><h4 className="projectTitle text-center">Poke Battle</h4></a>
                        <a href="https://github.com/tlaze/pokeBattle" target="blank" rel="noreferrer"><h4 className="gitHubLink text-center">GitHub Repo</h4></a>
                    </div>
                    <div className="col-md-4 offset-md-1 my-3 text-center">
                        <h6>This 4 member project allows users to relive childhood nostalgia by battling 1st Generation Pokemon.
                            My role in this project was fetching data from PokeAPI to store Pokemon Types and Moves for attacking. As well
                            as calculating User and CP damage. At the start of the battle, 4 moves are randomly chosen
                            based on the Pokemon's type (Electric, Water, Fire, ect..). Battle ends when one Pokemon's HP drains to 0. 
                        </h6>
                        <h4>Technology Used</h4>
                        <ul type="none">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>JQuery</li>
                            <li>PokeAPI</li>
                            <li>Local Storage</li>
                        </ul>
                    </div>
                    <div className="project col-md-4 offset-md-2 my-3" id="project6">
                        <a href="https://young-reef-24740.herokuapp.com/?id=618dc96fb6b8940016e40ab4" target="blank" rel="noreferrer"><h4 className="projectTitle text-center">Workout Tracker</h4></a>
                        <a href="https://github.com/tlaze/Workout-Tracker" target="blank" rel="noreferrer"><h4 className="gitHubLink text-center">GitHub Repo</h4></a>                 
                    </div>
                    <div className="col-md-4 offset-md-1 my-3 text-center">
                        <h6>This application allows users to keep track of the exercises while working out. 
                            They have the option to track cardio or resistance exercices. Once complete, users 
                            can open the dashboard to view graphs of all their workouts.
                        </h6>
                        <h4>Technology Used</h4>
                        <ul type="none">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Javascript</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDb</li>
                            <li>Mongoose</li>
                            <li>MongoDb</li>
                            <li>Morgan</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )   
}
export default Projects;