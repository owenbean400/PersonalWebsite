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
                    <FooterLinks footerlinks={['Portfolio', 'Code']}/>
                    <FooterLinks footerlinks={['Explore','Games','Blog','React UI']}/>
                    <FooterLinks footerlinks={['Me', 'About', 'Contact']}/>
                    </div>
                    <p>Copyright © {DATE.getFullYear()} Owen Bean. All rights reserved.</p>
                </footer>
            </div>
        )
    }
}

export default Footer