import React from 'react';
import {projects} from "../../helpers/projectList";
import Project from "../project/Project";
import "./style.css";

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <ul className="projects">
                    {projects.map((project, index) => {
                        return (
                            <Project
                                key={index}
                                title={project.title}
                                img={project.img}
                                index={index}
                            />
                        );
                    })}
                </ul>
            </div>
        </main>
    );
};

export default Projects;