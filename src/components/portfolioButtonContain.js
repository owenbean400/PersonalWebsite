import React from 'react';
import StationaryButton from './buttons/stationaryButton.js';

const STYLE = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'auto',
        gridGap: '12px',
        justifyContent: 'center',
        margin: '24px'
    }
}

export default function PortfolioButton(props){
    return(
            <div style={STYLE.container}>
                {props.children}
            </div>
        )
}