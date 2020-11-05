import React from 'react';

class FooterLinks extends React.Component{

    render(){

        const LINKS = this.props.footerlinks.map((string) => 
        <li style={{color: 'white'}}>{string}</li>
    );

        return(
            <div>
                <ul className="footer-links-container">
                    {LINKS}
                </ul>
            </div>
        )
    }
}

export default FooterLinks