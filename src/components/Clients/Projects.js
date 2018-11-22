import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import './clients.css';

var projects = [
    {
        "title": "OMG Brochure",
        "status": "Pending"
    },
    {
        "title": "OMG Stickers",
        "status": "Ongoing"
    }
];

class Projects extends Component {
    render() {
        return(
            <div>
                <h2>Client Name</h2>
                <div className="flex-container">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        );
    }
}

export default Projects;