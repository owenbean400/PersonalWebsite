import React from 'react';
import Button from './button.js';

const STYLE = {
    header: {
        color: '#20135c',
        fontSize: '48px',
        textAlign: 'center',
        margin: '0 0 -17px 0',
        padding: '64px 0 0 0',
        letterSpacing: '2px',
        fontWeight: '700',
    }
}

export default function Section(props){
    return(
        <div>
            <section>
                <h4 style={{...STYLE.header, ...props.css}}>{props.header}</h4>
                {props.children}
                <Button title={props.actionName}/>
            </section>
        </div>
    )
}