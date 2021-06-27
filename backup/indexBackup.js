import React from "react"

import Navbar from "../src/components/navbar/navbar.js"
import Section from "../src/components/section.js"
import Skills from "../src/components/skills.js"
import FlexShow from "../src/components/flexShow.js"
import StationaryButton from "../src/components/buttons/stationaryButton.js"
import PortfolioDisplay from "../src/components/portfolioDisplay.js"
import Footer from "../src/components/footer/footer.js"
import PortfolioButton from "../src/components/portfolioButtonContain"
import Meta from "../src/components/meta"
import "../pageScss/index.scss"
import SkillBar from "../src/components/skillbar"

import CodeIcon from "../images/expert/code.svg"
import ArtIcon from "../images/expert/art.svg"
import RespondsiveIcon from "../images/expert/respondsive.svg"

import HTMLLogo from "../images/skills/HTML5_Logo.png"
import CSSLogo from "../images/skills/CSS3_logo.png"
import JSLogo from "../images/skills/js.png"
import SassLogo from "../images/skills/sass.png"
import ReactLogo from "../images/skills/react.png"
import GatsbyLogo from "../images/skills/gatsby.png"
import GmailLogo from "../images/skills/gmail.png"
import LinkinLogo from "../images/skills/linkin.png"
import GithubLogo from "../images/skills/github.png"
import FreeCodeCampLogo from "../images/skills/freecodecamp.jpg"

import KnitGenerator from "../images/portfolio/bean_knit_gen.jpg"
import BeanJuicePort from "../images/portfolio/bean_juice_display.jpg"
import PortfolioPort from "../images/portfolio/portfolio_display.jpg"
import BAPLPort from "../images/portfolio/bapl_display.jpg"
import PropTypes from "prop-types"
import OwenBeanImage from "../src/components/imageFixed/owenBeanImage"
import ComputerHeaderImage from "../src/components/imageFixed/computerHeader"
import OwenBeanImageLaptop from "../src/components/imageFixed/owenBeanImageLaptop.js"

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      height: 0,
    }
    this.updatePortfolioContainer = this.updatePortfolioContainer.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.updatePortfolioContainer)
    this.updatePortfolioContainer()
  }

  updatePortfolioContainer() {
    if (typeof window !== `undefined`) {
      this.setState({
        height:
          window.innerWidth > 1200
            ? 25
            : window.innerWidth > 960
            ? 33.33
            : window.innerWidth > 500
            ? 50
            : 100,
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePortfolioContainer)
  }

  render() {
    var STYLE = {
      height: this.state.height + "vw",
      overflow: "hidden",
    }

    var portfolioImages = []
    if (typeof window !== `undefined`) {
      portfolioImages.push(
        <PortfolioDisplay
          image={BAPLPort}
          title="Bridge Academy Public Library"
        >
          <PortfolioButton>
            <StationaryButton
              title="URL"
              link="http://www.bapl.us/"
              isNewTab={true}
            />
            <StationaryButton
              title="Code on Github"
              link="https://github.com/owenbean400/dresdenLib"
              isNewTab={true}
            />
          </PortfolioButton>
        </PortfolioDisplay>
      )
      if (window.innerWidth >= 480) {
        portfolioImages.push(
          <PortfolioDisplay
            image={KnitGenerator}
            title="Knit Pattern Generator"
          >
            <PortfolioButton>
              <StationaryButton
                title="URL"
                link="https://owenbean400.github.io/doubleSidedKnittingGenerator/"
                isNewTab={true}
              />
              <StationaryButton
                title="GitHub"
                link="https://github.com/owenbean400/doubleSidedKnittingGenerator"
                isNewTab={true}
              />
            </PortfolioButton>
          </PortfolioDisplay>
        )
      }
      if (window.innerWidth >= 940) {
        portfolioImages.push(
          <PortfolioDisplay image={BeanJuicePort} title="Bean Juice Website">
            <PortfolioButton>
              <StationaryButton
                title="URL"
                link="https://owenbean400.github.io/beanjuicewebheader/"
                isNewTab={true}
              />
              <StationaryButton
                title="GitHub"
                link="https://github.com/owenbean400/beanjuicewebheader"
                isNewTab={true}
              />
            </PortfolioButton>
          </PortfolioDisplay>
        )
      }
      if (window.innerWidth >= 1180) {
        portfolioImages.push(
          <PortfolioDisplay image={PortfolioPort} title="My Portfolio">
            <PortfolioButton>
              <StationaryButton
                title="URL"
                link="https://owenbean400.github.io/webfolio/"
                isNewTab={true}
              />
              <StationaryButton
                title="GitHub"
                link="https://github.com/owenbean400/webfolio"
                isNewTab={true}
              />
            </PortfolioButton>
          </PortfolioDisplay>
        )
      }
    }

    return (
      <div className="container">
        <Meta
          desc="Owen Guaraldo Bean is a front end developer from Maine. Owen mainly programs with HTML, CSS, JS, React JS, Sass, and Gatsby JS. 
            He creates elegant websites with screen respondsive and has the ability to be scaled up. 
            Additionally, he has knowledge of Graphic Design, and is proficient with Adobe Photoshop and Adobe Illustrator. 
            Feel free to check out Owen G. Bean webpage!"
        />
        <Navbar />
        <main className="index-main">
          <div className="header-container">
            <div className="title-container">
              <h1 className="subtitle">Owen G. Bean</h1>
              <h2 className="title">Front End Developer</h2>
              <h3 className="abouttitle">
                I am a front end developer in Maine
              </h3>
              <FlexShow css={{ justifyContent: "space-between" }}>
                <StationaryButton
                  css={{ marginTop: "20px" }}
                  title="Portfolio"
                  link="/portfolio"
                />
                <StationaryButton
                  css={{ marginTop: "20px" }}
                  title="Contact"
                  link="/contact"
                />
              </FlexShow>
            </div>
            <OwenBeanImageLaptop />
          </div>
          <div className="expert-container">
            <div className="expert">
              <img
                src={CodeIcon}
                alt="front end developer of code icon from owen bean"
              />
              <p className="export-text">Code Development</p>
            </div>
            <div className="expert">
              <img
                src={RespondsiveIcon}
                alt="front end dev of responsive icon from owen bean"
              />
              <p className="export-text">Respondsive Design</p>
            </div>
            <div className="expert">
              <img
                src={ArtIcon}
                alt="front end dev of creativty icon from owen bean"
              />
              <p className="export-text">Creative Design</p>
            </div>
          </div>
          <div className="market-container">
            <div className="market-image-container">
              <ComputerHeaderImage />
            </div>
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
          <Section header="Portfolio" actionName="Portfolio" link="/portfolio">
            <FlexShow css={STYLE}>{portfolioImages}</FlexShow>
          </Section>
          <Section header="Programs" actionName="My Skills" link="/about">
            <FlexShow
              css={{
                backgroundColor: "#eeeeee",
                alignItems: "center",
                padding: "32px 0",
                gridGap: "32px",
              }}
            >
              <SkillBar
                barWidthPercent="70"
                header="HTML"
                image={HTMLLogo}
                imageAlt="Front End Dev HTML Logo"
              />
              <SkillBar
                barWidthPercent="95"
                header="CSS"
                image={CSSLogo}
                imageAlt="Front End Dev CSS Logo"
              />
              <SkillBar
                barWidthPercent="60"
                header="Javascript"
                image={JSLogo}
                imageAlt="Front End Dev Javascript Logo"
              />
              <SkillBar
                barWidthPercent="70"
                header="React JS"
                image={ReactLogo}
                imageAlt="Front End Dev ReactJS Logo"
              />
              <SkillBar
                barWidthPercent="50"
                header="GatsbyJS"
                image={GatsbyLogo}
                imageAlt="Front End Dev GatsbyJS Logo"
              />
              <SkillBar
                barWidthPercent="60"
                header="Sass"
                image={SassLogo}
                imageAlt="Front End Dev Sass Logo"
              />
            </FlexShow>
          </Section>
          <Section header="About Me" actionName="More About Me" link="/about">
            <div className="about-container">
              <OwenBeanImage />
              <p className="main-about-p">
                I am a front end web developer from Maine. I specialize with the
                React JS framework to create ui and implement these ui in
                website development. I've been experimenting with VueJS! I have
                developed my own UI and wireframe design and from a prototype.
                Addtionally, I done Graphic Design for several at CATC, and
                understand graphic design fundaments. Feel free to contact me if
                you want a front end website to be developed or to chat.
              </p>
            </div>
          </Section>
          <Section header="Contact" actionName="Contact Me" link="/contact">
            <FlexShow
              css={{ margin: "12px 0 36px 0", justifyContent: "space-evenly" }}
            >
              <Skills
                image={GmailLogo}
                altImg="Owen Bean Email Logo"
                name="Email"
                iconLink="mailto: owenbean400@gmail.com"
              />
              <Skills
                image={LinkinLogo}
                altImg="Owen Bean Linkedin Logo"
                name="LinkedIn"
                iconLink="https://www.linkedin.com/in/owen-bean/"
              />
              <Skills
                image={GithubLogo}
                altImg="Owen Bean Github Logo"
                name="GitHub"
                iconLink="https://github.com/owenbean400"
              />
              <Skills
                image={FreeCodeCampLogo}
                altImg="Owen Bean FreeCodeCamp Logo"
                name="FreeCodeCamp"
                iconLink="https://www.freecodecamp.org/fcc43fc8b50-7ee6-4f9d-893a-0c40a5d7f4fe"
              />
            </FlexShow>
          </Section>
        </main>
        <Footer />
      </div>
    )
  }
}

Home.propTypes = {
  data: PropTypes.object,
}

export default Home
