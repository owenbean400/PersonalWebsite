import React from 'react';
import FooterLinks from './footerlinks';
import StationaryButton from '../buttons/stationaryButton';
import './footer.scss'

const DATE = new Date();

class Footer extends React.Component{


    render(){

        return(
            <div>
                <div className="action-container">
                    <StationaryButton title="Portfolio" link="/portfolio"/>
                    <StationaryButton title="About" link="/about"/>
                    <StationaryButton title="Contact" link="/contact"/>
                </div>
                <footer>
                    <div className="links-container">
                    <FooterLinks footerlinks={['Portfolio', 'Websites', 'Graphics']}/>
                    <FooterLinks footerlinks={['Explore','Games']}/>
                    <FooterLinks footerlinks={['Contact', 'About']}/>
                    </div>
                    <p>Copyright © {DATE.getFullYear()} Owen Bean. All rights reserved.</p>
                </footer>
            </div>
        )
    }
}

export default Footer