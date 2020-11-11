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

import Conspiracy from '../images/graphic_portfolio/conspiracy.jpg';
import StrawBuried from '../images/graphic_portfolio/strawburiedad1.jpg';
import TravelWriter from '../images/graphic_portfolio/travelwriterad2.jpg';
import WaterMelon from '../images/graphic_portfolio/watermelon.jpg';

const amountOfRows = 1;

const STYLE = {
    main: {
        margin: '48px 0 64px 0',
    }
}

class Portfolio extends React.Component{
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
                height: (window.innerWidth > 1200) ? 25 : (window.innerWidth > 960) ? 33.33 : (window.innerWidth > 768) ? 50 : 100,
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
                    title="Portfolio"
                    desc="My portfolio of front end development and graphic designs"
                />
                <Navbar />
                <main style={STYLE.main}>
                    <Section header="Website Portfolio" actionName="More Websites" link="/websites">
                        <FlexShow css={STYLE_CHANGE}>
                            <PortfolioDisplay image={ReliableBoardPort} title="Reliable Board Webpage"/>
                            <PortfolioDisplay image={HereTheScoopPort} title="Here The Scoop Website"/>
                            <PortfolioDisplay image={BeanJuicePort} title="Bean Juice Website"/>
                            <PortfolioDisplay image={PortfolioPort} title="My Portfolio"/>
                        </FlexShow>
                    </Section>
                    <Section header="Graphic Design Portfolio" actionName="More Graphics" link="/graphics">
                        <FlexShow css={STYLE_CHANGE}>
                            <PortfolioDisplay image={Conspiracy} title="Conspiracy Cruises"/>
                            <PortfolioDisplay image={WaterMelon} title="Summer Water"/>
                            <PortfolioDisplay image={StrawBuried} title="Straw Buried"/>
                            <PortfolioDisplay image={TravelWriter} title="Travel Writers"/>
                        </FlexShow>
                    </Section>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Portfolio