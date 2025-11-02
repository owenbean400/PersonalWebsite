import React from "react";

import "./projectCard.sass"

export default function ProjectCard(props) {
    return(
        <div className="project-card-container">
            <p className="project-card-title">{props.title}</p>
            <p className="project-card-description">{props.description}</p>
            <ul className="project-card-technologies-list">
                {(props.technologies || []).map((technology) => <li className="project-card-technology"><img className="project-card-technology-image" src={technology.imgSrc} alt={technology.imgAlt}/><p className="project-card-technology-txt">{technology.name}</p></li>)}
            </ul>
            <ul className="project-card-links">
                {(props.links || []).map((link) => <li className="project-card-link-list"><a className="project-card-link-link" href={link.href}>{link.display}</a></li>)}
            </ul>
        </div>
    )
}