import React from 'react';
import FooterLinks from './footerlinks';
import './footer.scss'

const DATE = new Date();

class Footer extends React.Component{


    render(){

        return(
            <div>
                <footer>
                    <div className="links-container">
                    <FooterLinks footerlinks={['Portfolio', 'Websites', 'Graphics']}/>
                    <FooterLinks footerlinks={['Explore','Games','Blog','React UI']}/>
                    <FooterLinks footerlinks={['Contact', 'About']}/>
                    </div>
                    <p>Copyright © {DATE.getFullYear()} Owen Bean. All rights reserved.</p>
                </footer>
            </div>
        )
    }
}

export default Footer