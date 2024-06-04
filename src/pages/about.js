import React from "react"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import Section from "../components/section"
import Meta from "../components/meta"
import Skills from "../components/skills"
import FlexShow from "../components/flexShow"

import FirebaseLogo from "../images/skills/firebase.png"
import GitlabLogo from "../images/skills/gitlab.png"
import GithubLogo from "../images/skills/GitHub.svg.png"
import GoogleCloudLogo from "../images/skills/google_cloud.png"
import XcodeLogo from "../images/skills/xcode.png"
import AndroidLogo from "../images/skills/android.png"
import AnsibleLogo from "../images/skills/Ansible_logo.svg.png"
import FastlaneLogo from "../images/skills/fastlane.svg"

import HalldaleLogo from "../images/schools/halldale.png"
import CATCLogo from "../images/schools/catc.png"
import SMCCLogo from "../images/schools/smcc.png"
import USMLogo from "../images/schools/usm.png"

import Resume from "../images/resume/owen_bean_resume.pdf"
import OwenBeanImage from "../components/imageFixed/owenBeanImage"

import GmailLogo from "../images/skills/gmail.png"
import LinkinLogo from "../images/skills/linkin.png"
import FreeCodeCampLogo from "../images/skills/freecodecamp.jpg"

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
              DevOps engineer after transition from doing software development work.
              I've originally done a bunch of different software development work of full stack sites and mobile apps.
              Transitioned into DevOps work starting with mobile apps as I got into fastlane library script for deploying apps.
              That is where I was doing mobile DevOps works. From there, I transitioned doing DevOps work for full stack web application.
              </p>
              <StationaryButton title="Contact" link="/contact" />
            </div>
            <OwenBeanImage />
          </div>
          <Section header="Skills">
            <div className="skills-container">
              <Skills
                style={STYLE.item}
                image={GitlabLogo}
                altImg="Gitlab Logo"
                name="Gitlab"
                iconLink="https://docs.gitlab.com/ee/ci/"
              />
              <Skills
                style={STYLE.item}
                image={GithubLogo}
                altImg="Github Logo"
                name="Github"
                iconLink="https://docs.github.com/en/actions"
              />
              <Skills
                style={STYLE.item}
                image={FastlaneLogo}
                altImg="Fastlane Logo"
                name="Fastlane"
                iconLink="https://docs.fastlane.tools/"
              />
              <Skills
                style={STYLE.item}
                image={GoogleCloudLogo}
                altImg="Google Cloud Logo"
                name="Google Cloud"
                iconLink="https://cloud.google.com/docs"
              />
              <Skills
                style={STYLE.item}
                image={XcodeLogo}
                altImg="Xcode Logo"
                name="Xcode"
                iconLink="https://developer.apple.com/documentation/xcode"
              />
              <Skills
                style={STYLE.item}
                image={AndroidLogo}
                altImg="Android Logo"
                name="Android"
                iconLink="https://developer.android.com/"
              />
              <Skills
                style={STYLE.item}
                image={FirebaseLogo}
                altImg="Firebase Logo"
                name="Firebase"
                iconLink="https://firebase.google.com/docs"
              />
              <Skills
                style={STYLE.item}
                image={AnsibleLogo}
                altImg="Ansible Logo"
                name="Ansible"
                iconLink="https://docs.ansible.com/"
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
                schoolName="USM"
                major="Bachelor Degree in Computer Science"
                gpa="3.225"
                accomplishments={["Honors"]}
                link="https://usm.maine.edu/"
                image={USMLogo}
                imageAlt="USM Logo"
              />
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
                gpa="98/100"
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
            </FlexShow>
          </Section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default About
