import React from "react"
import Navbar from '../components/navbar/navbar.js';
import Section from '../components/section.js';
import Skills from '../components/skills.js';
import FlexShow from '../components/flexShow.js';
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

const AMOUNT_ROWS_PORTFOLIO = 1;

class Home extends React.Component{
  constructor() {
      super();
      this.state = {
        css: {
          height: (window.innerWidth > 1200) ? 25 : (window.innerWidth > 960) ? 33.33 : (window.innerWidth > 768) ? 50 : 100,
        }
      }
      this.updatePortfolioContainer = this.updatePortfolioContainer.bind(this);
  }

  updatePortfolioContainer() {
    this.setState({
          height: (window.innerWidth > 1200) ? 25 : (window.innerWidth > 960) ? 33.33 : (window.innerWidth > 768) ? 50 : 100,
    })
  }

  componentDidMount(){
    window.addEventListener('resize', this.updatePortfolioContainer);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updatePortfolioContainer);
  }

  render(){
    var STYLE = {
      height: ((window.innerWidth > 1200) ? 25 : (window.innerWidth > 960) ? 33.33 : (window.innerWidth > 768) ? 50 : 100) * AMOUNT_ROWS_PORTFOLIO + 'vw',
      overflow: 'hidden',
    }

    return(
      <div>
        <Navbar />
        <main className="index-main">
          <div className="header-container">
            <div className="title-container">
              <h1 className="title">Front End Developer</h1>
              <h3 className="subtitle">Coding Beatiful Designs!</h3>
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
              <PortfolioDisplay />
              <PortfolioDisplay />
              <PortfolioDisplay />
              <PortfolioDisplay />
              <PortfolioDisplay />
              <PortfolioDisplay />
              <PortfolioDisplay />
              <PortfolioDisplay />
              <PortfolioDisplay />
              <PortfolioDisplay />
              <PortfolioDisplay />
              <PortfolioDisplay />
            </FlexShow>
          </Section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Home