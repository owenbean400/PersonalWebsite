import React from 'react';

const STYLE = {
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
}

export default function FlexShow(props){
    return(
        <div style={{...props.css, ...STYLE.flex}}>
            {props.children}
        </div>
    )
}