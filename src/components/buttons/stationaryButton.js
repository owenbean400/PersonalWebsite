import React from 'react';
import { Link } from 'gatsby';
import './buttons.scss';

export default function StationaryButton(props){
    if(typeof(props.isNewTab) != "undefined" && props.isNewTab){
        return(
            <div>
                <a href={props.link} target="_blank">
                    <button className="stationary-button" style={props.css} type={(typeof(props.buttonType) != "undefined") ? props.buttonType : "button"}>{props.title}</button>
                </a>
            </div>
        )
    }
    else{
        return(
                    <div>
                        <Link to={props.link}>
                            <button className="stationary-button" style={props.css}>{props.title}</button>
                        </Link>
                    </div>
                )
    }
}