import React from "react"

import StationaryButton from "../components/buttons/stationaryButton.js"
import Navbar from "../components/navbar/navbar.js"
import Footer from "../components/footer/footer.js"
import ContentDisplay from "../components/index/contentDisplay"
import OwenBeanImageLaptop from "../components/imageFixed/owenBeanImageLaptop.js"

import Skills from "../components/skills.js"

import HTMLLogo from "../images/skills/HTML5_logo.png"
import CSSLogo from "../images/skills/CSS3_logo.png"
import JSLogo from "../images/skills/js.png"
import JavaLogo from "../images/skills/java.png"
import KotlinLogo from "../images/skills/kotlin.png"
import ProgressLogo from "../images/skills/progress.png"
import SassLogo from "../images/skills/sass.png"
import ReactLogo from "../images/skills/react.png"
import VueLogo from "../images/skills/vue.png"
import GatsbyLogo from "../images/skills/gatsby.png"
import PhotoshopLogo from "../images/skills/photoshop_logo.png"
import GmailLogo from "../images/skills/gmail.png"
import LinkinLogo from "../images/skills/linkin.png"
import GithubLogo from "../images/skills/github.png"
import FreeCodeCampLogo from "../images/skills/freecodecamp.jpg"

import Meta from "../components/meta.js"

import "../pageScss/index.scss"

export default function Test() {
  return (
    <div>
      <Navbar />
      <Meta
        desc="Owen Guaraldo Bean is a software developer from Maine. 
              Owen loves to code with several different program language.
              Feel free to check out Owen G. Bean webpage!"
      />
      <div style={{ marginTop: "100px" }}></div>
      <ContentDisplay
        title="Owen Website"
        html="
        <h1>
          Owen G. Bean Portfolio
          <br />
          Software Developer
        </h1>
        <button>Repo</button>
        <button>Contact</button>
        <img src='OwenBeanLaptop.png' />"
        reverse={true}
      >
        <h1>
          Owen G. Bean Portfolio
          <br />
          Software Developer
        </h1>
        <div class="portfolio-grid">
          <div class="button-flow">
            <StationaryButton
              css={{ marginTop: "20px" }}
              title="Repo"
              link="/repo"
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
        title="About Owen"
        html="
          <p> {{aboutMe.desc}} </p>
          <button>About Me</button>
        "
      >
        <p>
          I am a software developer. I am currently doing Dev Ops at work,
          developing on Flutter on the weekend, and at USM to finish computer
          science degree. In the past, I've worked onto Angular, C# full stack
          and general programming with Java. For websites, I've built the front
          end with Angular, React, and Gastby JS framework.
        </p>
        <StationaryButton
          css={{ margin: "16px auto", display: "block" }}
          title="About Me"
          link="/about"
        />
      </ContentDisplay>
      <ContentDisplay
        title="Owen Skills"
        html='
          <img src="logo.png"></img>
      '
        reverse={true}
      >
        <HeadSkills></HeadSkills>
        <StationaryButton
          css={{ margin: "16px auto", display: "block" }}
          title="Skills"
          link="/about"
        />
      </ContentDisplay>
      <ContentDisplay
        title="Owen Contact"
        html='
          <a href="mailto:owenbean400@gmail.com"></a>
          <a href="www.linkedin.com"></a>
          <a href="www.github.com"></a>
          <a href="freecodecamp"></a>
      '
        reverse={false}
      >
        <HeadContact></HeadContact>
        <StationaryButton
          css={{ margin: "16px auto", display: "block" }}
          title="Contact"
          link="/contact"
        />
      </ContentDisplay>
      <Footer />
    </div>
  )
}

function HeadSkills() {
  let STYLE = {
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    item: {
      margin: "16px",
    },
  }

  return (
    <div style={STYLE.container}>
      <Skills
        style={STYLE.item}
        image={JSLogo}
        altImg="Javascript Logo"
        name="Javascript"
        iconLink="https://www.javascript.com/"
      />
      <Skills
        style={STYLE.item}
        image={CSSLogo}
        altImg="CSS Logo"
        name="CSS"
        iconLink="https://www.w3.org/Style/CSS/Overview.en.html"
      />
      <Skills
        style={STYLE.item}
        image={HTMLLogo}
        altImg="HTML Logo"
        name="HTML"
        iconLink="https://html.spec.whatwg.org/"
      />
      <Skills
        style={STYLE.item}
        image={JavaLogo}
        altImg="Java Logo"
        name="Java"
        iconLink="https://www.java.com/en/"
      />
      <Skills
        style={STYLE.item}
        image={KotlinLogo}
        altImg="Kotlin Logo"
        name="Kotlin"
        iconLink="https://kotlinlang.org/"
      />
      <Skills
        style={STYLE.item}
        image={ProgressLogo}
        altImg="Progress OpenEdge Logo"
        name="Progress OpenEdge"
        iconLink="https://www.progress.com/openedge"
      />
      <Skills
        style={STYLE.item}
        image={ReactLogo}
        altImg="React Logo"
        name="React"
        iconLink="https://reactjs.org/"
      />
      <Skills
        style={STYLE.item}
        image={VueLogo}
        altImg="Vue Logo"
        name="Vue"
        iconLink="https://vuejs.org/"
      />
      <Skills
        style={STYLE.item}
        image={GatsbyLogo}
        altImg="Gatsby Logo"
        name="Gatsby"
        iconLink="https://www.gatsbyjs.com/"
      />
      <Skills
        style={STYLE.item}
        image={SassLogo}
        altImg="Sass Logo"
        name="Sass"
        iconLink="https://sass-lang.com/"
      />
      <Skills
        style={STYLE.item}
        image={PhotoshopLogo}
        altImg="Photoshop Logo"
        name="Photoshop"
        iconLink="https://www.adobe.com/"
      />
    </div>
  )
}

function HeadContact() {
  let STYLE = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
    },
    item: {
      margin: "16px",
    },
  }

  return (
    <div style={STYLE.container}>
      <Skills
        style={STYLE.item}
        image={GmailLogo}
        altImg="Owen Bean Email Logo"
        name="Email"
        iconLink="mailto: owenbean400@gmail.com"
      />
      <Skills
        style={STYLE.item}
        image={LinkinLogo}
        altImg="Owen Bean Linkedin Logo"
        name="LinkedIn"
        iconLink="https://www.linkedin.com/in/owen-bean/"
      />
      <Skills
        style={STYLE.item}
        image={GithubLogo}
        altImg="Owen Bean Github Logo"
        name="GitHub"
        iconLink="https://github.com/owenbean400"
      />
      <Skills
        style={STYLE.item}
        image={FreeCodeCampLogo}
        altImg="Owen Bean FreeCodeCamp Logo"
        name="FreeCodeCamp"
        iconLink="https://www.freecodecamp.org/fcc43fc8b50-7ee6-4f9d-893a-0c40a5d7f4fe"
      />
    </div>
  )
}
