import React from 'react';
import { Link } from 'gatsby';

class FooterLinks extends React.Component{

    render(){

        const LINKS = this.props.footerlinks.map((string) => 
        <Link to={`/${string.toLowerCase().replace(/\s/g, '')}`}><li style={{color: 'white'}}>{string}</li></Link>
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