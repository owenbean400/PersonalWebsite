import React from "react"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import Section from "../components/section"
import Meta from "../components/meta"
import Skills from "../components/skills"
import FlexShow from "../components/flexShow"

import HTMLLogo from "../images/skills/HTML5_Logo.png"
import CSSLogo from "../images/skills/CSS3_logo.png"
import JSLogo from "../images/skills/js.png"
import JavaLogo from "../images/skills/java.png"
import KotlinLogo from "../images/skills/kotlin.png"
import ProgressLogo from "../images/skills/progress.png"
import SassLogo from "../images/skills/sass.png"
import ReactLogo from "../images/skills/react.png"
import GatsbyLogo from "../images/skills/gatsby.png"

import HalldaleLogo from "../images/schools/halldale.png"
import CATCLogo from "../images/schools/catc.png"
import SMCCLogo from "../images/schools/smcc.png"

import Resume from "../images/resume/owen_bean_resume.pdf"
import OwenBeanImage from "../components/imageFixed/owenBeanImage"

import GmailLogo from "../images/skills/gmail.png"
import LinkinLogo from "../images/skills/linkin.png"
import FreeCodeCampLogo from "../images/skills/freecodecamp.jpg"
import GithubLogo from "../images/skills/github.png"

import "../pageScss/about.scss"
import SchoolCard from "../components/schoolCard"
import StationaryButton from "../components/buttons/stationaryButton"

const STYLE = {
  main: {
    margin: "96px 0",
  },
}

class About extends React.Component {
  render() {
    return (
      <div>
        <Meta
          title="About Me"
          desc="Owen Guaraldo Bean is a Software developer from Maine. 
              Owen loves to code with several different program language.
              Feel free to check out Owen G. Bean webpage!"
        />
        <Navbar />
        <main style={STYLE.main}>
          <div className="about-container">
            <div>
              <h1> About Owen Bean</h1>
              <p className="about-info">
                I am a software developer. I am currently doing Dev Ops at work,
                developing on Flutter on the weekend, and at USM to finish
                computer science degree. In the past, I've worked onto Angular,
                C# full stack and general programming with Java. For websites,
                I've built the front end with Angular, React, and Gastby JS
                framework.
              </p>
              <StationaryButton title="Contact" link="/contact" />
            </div>
            <OwenBeanImage />
          </div>
          <Section header="Skills">
            <div className="skills-container">
              <Skills
                style={STYLE.item}
                image={ProgressLogo}
                altImg="Progress OpenEdge Logo"
                name="Progress OpenEdge"
                iconLink="https://www.progress.com/openedge"
              />
              <Skills
                style={STYLE.item}
                image={JSLogo}
                altImg="Javascript Logo"
                name="Javascript"
                iconLink="https://www.javascript.com/"
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
                image={ReactLogo}
                altImg="React Logo"
                name="React"
                iconLink="https://reactjs.org/"
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
            </div>
          </Section>
          <Section header="Resume">
            <div>
              <iframe
                className="resume"
                src={Resume}
                title="Owen Bean Resume"
              ></iframe>
            </div>
          </Section>
          <Section header="Education">
            <div className="education-container">
              <SchoolCard
                schoolName="SMCC"
                major="Computer Science Degree"
                gpa="3.92"
                accomplishments={["Honors"]}
                link="https://www.smccme.edu/"
                image={SMCCLogo}
                imageAlt="SMCC Logo"
              />
              <SchoolCard
                schoolName="FreeCodeCamp"
                major="Online Front End Learning"
                gpa="Completed 2 modules"
                accomplishments={["2 Certificates"]}
                link="https://www.freecodecamp.org/fcc43fc8b50-7ee6-4f9d-893a-0c40a5d7f4fe"
                image={FreeCodeCampLogo}
                imageAlt="FreeCodeCamp Logo"
              />
              <SchoolCard
                schoolName="CATC"
                major="Graphic Design"
                gpa="98"
                accomplishments={["NTHS"]}
                link="http://capitalarea.mainecte.org/"
                image={CATCLogo}
                imageAlt="CATC Logo"
              />
              <SchoolCard
                schoolName="Hall-Dale"
                major="High School Diploma"
                gpa="3.82"
                accomplishments={["Summa Cum Laude"]}
                link="https://www.kidsrsu.org/o/hdmhs"
                image={HalldaleLogo}
                imageAlt="Hall-Dale Logo"
              />
            </div>
          </Section>
          <Section header="Contact" actionName="Contact Me" link="/contact">
            <FlexShow
              css={{
                margin: "12px 0 36px 0",
                justifyContent: "space-evenly",
              }}
            >
              <Skills
                image={GmailLogo}
                altImg="Email Logo"
                name="Email"
                iconLink="mailto: owenbean400@gmail.com"
              />
              <Skills
                image={LinkinLogo}
                altImg="LinkedIn Logo"
                name="LinkedIn"
                iconLink="https://www.linkedin.com/in/owen-bean/"
              />
              <Skills
                image={GithubLogo}
                altImg="Github Logo"
                name="GitHub"
                iconLink="https://github.com/owenbean400"
              />
              <Skills
                image={FreeCodeCampLogo}
                altImg="FreeCodeCamp Logo"
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

export default About
