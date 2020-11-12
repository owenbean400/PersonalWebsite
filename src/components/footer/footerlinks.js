import React from 'react';
import { Link } from 'gatsby';

class FooterLinks extends React.Component{

    render(){

        const LINKS = this.props.footerlinks.map((string) => 
        <Link className="footer-link" style={{color: 'white'}} to={`/${string.toLowerCase().replace(/\s/g, '')}`} key={string}>{string}</Link>
    );

        return(
            <div>
                <div className="footer-links-container">
                    {LINKS}
                </div>
            </div>
        )
    }
}

export default FooterLinks