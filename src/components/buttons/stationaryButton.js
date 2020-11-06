import React from 'react';
import { Link } from 'gatsby';
import './buttons.scss';

export default function StationaryButton(props){
    return(
        <div>
            <Link to={props.link}>
                <button className="stationary-button" style={props.css}>{props.title}</button>
            </Link>
        </div>
    )
}