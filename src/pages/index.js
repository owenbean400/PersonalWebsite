import React, {useEffect} from "react"
import Navbar from '../components/navbar/navbar.js';
import Section from '../components/section.js';
import Skills from '../components/skills.js';
import FlexShow from '../components/flexShow.js';
import StationaryButton from '../components/buttons/stationaryButton.js';
import PortfolioDisplay from '../components/portfolioDisplay.js';
import Footer from '../components/footer/footer.js';
import OwenBean from '../images/owenbean.png';
import ComputerImg from '../images/computerHeader.jpg';
import '../pageScss/index.scss';

import HTMLLogo from '../images/skills/HTML5_Logo.png';
import CSSLogo from '../images/skills/CSS3_logo.png';
import JSLogo from '../images/skills/js.png';
import SassLogo from '../images/skills/sass.png';
import ReactLogo from '../images/skills/react.png';
import GatsbyLogo from '../images/skills/gatsby.png'

import ReliableBoardPort from '../images/portfolio/reliable_board_display.jpg';
import HereTheScoopPort from '../images/portfolio/here_the_scoop_display.jpg';
import BeanJuicePort from '../images/portfolio/bean_juice_display.jpg';
import PortfolioPort from '../images/portfolio/portfolio_display.jpg';

const AMOUNT_ROWS_PORTFOLIO = 1;

class Home extends React.Component{
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
    var STYLE = {
      height: this.state.height + 'vw',
      overflow: 'hidden',
    }

    return(
      <div>
        <Navbar />
        <main className="index-main">
          <div className="header-container">
            <div className="title-container">
              <h1 className="title">Owen G. Bean</h1>
              <h3 className="subtitle">Front End Developer</h3>
              <h5 className="abouttitle">aka code the visuals of websites</h5>
              <StationaryButton css={{marginTop: '12px'}} title="Contact Me"/>
            </div>
            <img className="owenbean-img" src={OwenBean}/>
          </div>
          <div className="market-container">
            <img src={ComputerImg} className="market-image" alt="computer"/>
            <div className="market-info-container">
              <h2>Developing Website Front Ends</h2>
              <ul>
                <li>Attracting People with Elegant and Customized Websites</li>
                <li>Easily Scalable Websites with UI Components</li>
                <li>Responsive Development for Computers and Phones</li>
                <li>Improved Web Load Time with Optimized File Size</li>
              </ul>
            </div>
          </div>
          <Section header="Programs" actionName="My Skills">
            <FlexShow css={{backgroundColor: '#eeeeee', alignItems: 'center', padding: '32px 0'}}>
              <Skills image={HTMLLogo} altImg="HTML Logo" name="Hypertext Markup Language" iconLink="https://developer.mozilla.org/en-US/docs/Web/HTML"/>
              <Skills image={CSSLogo} altImg="HTML Logo" name="Cascading Style Sheets" iconLink="https://www.w3.org/Style/CSS/Overview.en.html"/>
              <Skills image={JSLogo} altImg="HTML Logo" name="Javascript" iconLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>
              <Skills image={SassLogo} altImg="HTML Logo" name="Syntactically Awesome Style Sheet" iconLink="https://sass-lang.com/"/>
              <Skills image={ReactLogo} altImg="HTML Logo" name="React JS" iconLink="https://reactjs.org/"/>
              <Skills image={GatsbyLogo} altImg="HTML Logo" name="Gatsby JS" iconLink="https://www.gatsbyjs.com/"/>
            </FlexShow>
          </Section>
          <Section header="Portfolio" actionName="Portfolio">
            <FlexShow css={STYLE}>
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

export default Home