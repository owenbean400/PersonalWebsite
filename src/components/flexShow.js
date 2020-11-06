import React from 'react';

export default function FlexShow(props){
    const STYLE = {
        flex: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: (typeof(props.css) != "undefined" && props.css.justifyContent) ? props.css.justifyContent : 'space-around',
        }
    }

    return(
        <div style={{...props.css, ...STYLE.flex}}>
            {props.children}
        </div>
    )
}