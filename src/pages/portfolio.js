import React from "react"

import Navbar from "../components/navbar/navbar.js"
import Footer from "../components/footer/footer.js"
import Meta from "../components/meta"

import Section from "../components/section.js"
import FlexShow from "../components/flexShow.js"
import PortfolioDisplay from "../components/portfolioDisplay.js"
import StationaryButton from "../components/buttons/stationaryButton.js"
import PortfolioButton from "../components/portfolioButtonContain"

import KnitGenerator from "../images/portfolio/bean_knit_gen.jpg"
import BAPLPort from "../images/portfolio/bapl_display.jpg"
import BeanJuicePort from "../images/portfolio/bean_juice_display.jpg"
import PortfolioPort from "../images/portfolio/portfolio_display.jpg"

const amountOfRows = 1

const STYLE = {
  main: {
    margin: "48px 0 64px 0",
  },
}

class Portfolio extends React.Component {
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
    var STYLE_CHANGE = {
      height: this.state.height * amountOfRows + "vw",
      overflow: "hidden",
    }

    return (
      <div>
        <Meta
          title="Portfolio"
          desc="Owen G. Bean portfolio of front end development and graphic designs"
        />
        <Navbar />
        <main style={STYLE.main}>
          <Section
            header="Website Portfolio"
            actionName="More Websites"
            link="/websites"
          >
            <FlexShow css={STYLE_CHANGE}>
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
              <PortfolioDisplay
                image={BeanJuicePort}
                title="Bean Juice Website"
              >
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
            </FlexShow>
          </Section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Portfolio
