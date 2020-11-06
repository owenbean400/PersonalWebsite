import React from 'react';

import Navbar from '../components/navbar/navbar.js';
import Footer from '../components/footer/footer.js';

import Section from '../components/section.js';
import FlexShow from '../components/flexShow.js';
import PortfolioDisplay from '../components/portfolioDisplay.js';

import Conspiracy from '../images/graphic_portfolio/conspiracy.jpg';
import StrawBuried from '../images/graphic_portfolio/strawburiedad1.jpg';
import TravelWriter from '../images/graphic_portfolio/travelwriterad2.jpg';
import WaterMelon from '../images/graphic_portfolio/watermelon.jpg';
import BeanCan from '../images/graphic_portfolio/beancan.jpg';
import BeanJuice from '../images/graphic_portfolio/beanjuice.jpg';
import BulldogLogo from '../images/graphic_portfolio/bulldog_logo.jpg';
import Firefly from '../images/graphic_portfolio/firefly.jpg';
import PlaneLogo from '../images/graphic_portfolio/myPlane_logo.jpg';
import Pineapple from '../images/graphic_portfolio/pineapple.jpg';
import RoyalDog from '../images/graphic_portfolio/rolatydog.jpg';
import TravelLogo from '../images/graphic_portfolio/travel_logo.jpg';

const amountOfRows = 3;

const STYLE = {
    main: {
        margin: '48px 0 0 0',
    }
}

class Graphics extends React.Component{
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
                <Navbar />
                <main style={STYLE.main}>
                    <Section header="Graphic Design Portfolio">
                        <FlexShow css={STYLE_CHANGE}>
                            <PortfolioDisplay image={Conspiracy} title="Conspiracy Cruises"/>
                            <PortfolioDisplay image={WaterMelon} title="Summer Water"/>
                            <PortfolioDisplay image={StrawBuried} title="Straw Buried"/>
                            <PortfolioDisplay image={TravelWriter} title="Travel Writers"/>
                            <PortfolioDisplay image={PlaneLogo} title="My Planes Logo"/>
                            <PortfolioDisplay image={BeanJuice} title="Bean Juice"/>
                            <PortfolioDisplay image={Pineapple} title="Summer Pineapple"/>
                            <PortfolioDisplay image={BulldogLogo} title="Hall-Dale Bulldog"/>
                            <PortfolioDisplay image={Firefly} title="Firefly Festival"/>
                            <PortfolioDisplay image={TravelLogo} title="Travel Writers"/>
                            <PortfolioDisplay image={BeanCan} title="Bean Can"/>
                            <PortfolioDisplay image={RoyalDog} title="Royal Labrendar"/>
                        </FlexShow>
                    </Section>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Graphics