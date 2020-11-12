import React from 'react';
import SideButton from './buttons/sideButton.js';

const STYLE = {
    header: {
        color: '#20135c',
        fontSize: '48px',
        textAlign: 'center',
        margin: '0 0 24px 0',
        padding: '32px 0 0 0',
        letterSpacing: '2px',
        fontWeight: '700',
    },
    section: {
        margin: '24px 0 0 0',
    }
}

export default function Section(props){
    var marginBottom = 0;
    if(typeof(props.actionName) != "undefined" && props.actionName != ""){
        marginBottom = '64px'
    }
    return(
        <div>
            <section style={{...STYLE.section, ...props.cssContainer, marginBottom}}>
                <h4 style={{...STYLE.header, ...props.css}}>{props.header}</h4>
                {props.children}
                <SideButton title={props.actionName} link={props.link}/>
            </section>
        </div>
    )
}