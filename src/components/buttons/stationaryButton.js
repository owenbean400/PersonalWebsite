import React from 'react';
import './buttons.scss';

export default function StationaryButton(props){
    return(
        <div>
            <a>
                <button className="stationary-button" style={props.css}>{props.title}</button>
            </a>
        </div>
    )
}