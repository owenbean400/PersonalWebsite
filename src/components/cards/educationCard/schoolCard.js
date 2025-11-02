import React from 'react';
import "./schoolCard.sass";

export default function SchoolCard(props) {
    return(
        <a className="education-container" href={props.link} target="_blank" rel="noreferrer">
            <div className="education-header-container">
                <h6 className="education-school-name-txt">{props.schoolName}</h6>
                <img className="education-school-logo-img" src={props.image} alt={props.imageAlt}/>
            </div>
            <p className="education-major-txt">{props.major}</p>
            <p className="education-gpa-txt">GPA: {props.gpa}</p>
        </a>
    )
}