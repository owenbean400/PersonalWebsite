import React from 'react';

const Hamburger = (props) => {
    return(
        <div className="hamburger-container" onClick={props.clickMe}>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
        </div>
    )
}

export default Hamburger