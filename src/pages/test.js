import React from "react"


import StationaryButton from "../components/buttons/stationaryButton.js"
import Navbar from "../components/navbar/navbar.js"
import Footer from "../components/footer/footer.js"
import ContentDisplay from "../components/index/contentDisplay"
import OwenBeanImageLaptop from "../components/imageFixed/owenBeanImageLaptop.js"

import Skills from "../components/skills.js"

import JSLogo from "../images/skills/js.png"

export default function Test() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "100px" }}></div>
      <ContentDisplay
        title="Owen Website"
        html="
        <h1>
          Owen G. Bean Portfolio
          <br />
          Front End Developer
        </h1>
        <button>Portfolio</button>
        <button>Contact</button>
        <img src='OwenBeanLaptop.png' />"
      >
        <h1>
          Owen G. Bean Portfolio
          <br />
          Front End Developer
        </h1>
        <div class="portfolio-grid">
          <div class="button-flow">
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
          </div>
          <OwenBeanImageLaptop />
        </div>
      </ContentDisplay>
      <ContentDisplay
        reverse={true}
        title="About Owen"
        html="
          <p> {{aboutMe.desc}} </p>
          <button>About Me</button>
        "
      >
        <p>
          I am a software developer in Maine. 
          When I was in 4th grade, I wanted to be a computer programming. 
          It's even written down on my old year book. 
          I love using the computer during my youth and tried my first
          programming in html/javascript in 9th grade. 
          It was terrible and I haven't coded much until my senior year of high school. 
          During my high school year I was into Graphic Design, 
          but when I started learning to web development, I fell in love with coding. 
          My favorite part about coding was the logical reasoning behind and the ability that coding can yeild.
          I continued on, learning more about programming languages, 
          Typescript, Java, Kotlin, and OpenEdge. 
        </p>
        <StationaryButton
          css={{ margin: "16px auto", display: "block" }}
          title="About Me"
          link="/about"
        />
      </ContentDisplay>
      <ContentDisplay title="Owen Skills" html="<h1>Test</h1>">
        <div>
          <Skills
            image={JSLogo}
            altImg="Javascript Logo"
            name="Javascript"
            iconLink="https://www.javascript.com/"
          />
        </div>
      </ContentDisplay>
      <Footer />
    </div>
  )
}

const STYLE = {
  headerDisplay: {
    
  }
}
