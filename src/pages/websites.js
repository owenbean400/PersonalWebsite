import React from 'react';

import Navbar from '../components/navbar/navbar.js';
import Footer from '../components/footer/footer.js';
import Meta from '../components/meta';

import Section from '../components/section.js';
import FlexShow from '../components/flexShow.js';
import PortfolioDisplay from '../components/portfolioDisplay.js';

import ReliableBoardPort from '../images/portfolio/reliable_board_display.jpg';
import HereTheScoopPort from '../images/portfolio/here_the_scoop_display.jpg';
import BeanJuicePort from '../images/portfolio/bean_juice_display.jpg';
import PortfolioPort from '../images/portfolio/portfolio_display.jpg';

const amountOfRows = 1;

const STYLE = {
    main: {
        margin: '48px 0 0 0',
    }
}

class Websites extends React.Component{
    constructor() {
        super();
        this.state = {
            height: 0,
        }
        this.updatePortfolioContainer = this.updatePortfolioContainer.bind(this);
    }

    componentDidMount(){
        window.addEventListener('resize', this.updatePortfolioContainer);
        this.updatePortfolioContainer();
    }

    
    updatePortfolioContainer() {
        if (typeof window !== `undefined`){
        this.setState({
                height: (window.innerWidth > 1200) ? 25 : (window.innerWidth > 960) ? 33.33 : (window.innerWidth > 500) ? 50 : 100,
        })
        }
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updatePortfolioContainer);
    }

    render(){
        var STYLE_CHANGE = {
        height: this.state.height * amountOfRows + 'vw',
        overflow: 'hidden',
        }

        return(
            <div>
                <Meta 
                    title="Website Portfolio"
                    desc="My Front End Development and UI Design portfolio"
                />
                <Navbar />
                <main style={STYLE.main}>
                    <Section header="Website Code Portfolio">
                        <FlexShow css={STYLE_CHANGE}>
                            <PortfolioDisplay image={ReliableBoardPort} title="Reliable Board Webpage"/>
                            <PortfolioDisplay image={HereTheScoopPort} title="Here The Scoop Website"/>
                            <PortfolioDisplay image={BeanJuicePort} title="Bean Juice Website"/>
                            <PortfolioDisplay image={PortfolioPort} title="My Portfolio"/>
                        </FlexShow>
                    </Section>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Websites