import React from "react"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import Meta from "../components/meta"

import "../pageScss/about.scss"

import ResumeWebFrame from "../components/webframes/resume/resumeWebFrame"
import SkillsWebFrame from "../components/webframes/skills/skillsWebFrame"
import EducationWebFrame from "../components/webframes/education/educationWebFrame"
import ContactWebFrame from "../components/webframes/contact/contactWebFrame"
import AboutDetailWebFrame from "../components/webframes/about/aboutDetailWebFrame"

class About extends React.Component {
  render() {
    return (
      <div>
        <Meta
          title="About Me"
          desc="Owen Guaraldo Bean is a DevOps Engineer from Maine. 
              Owen loves to develop pipelines!
              Feel free to check out Owen G. Bean webpage!"
        />
        <Navbar />
        <main className="about-main">
          <AboutDetailWebFrame />
          <SkillsWebFrame />
          <ResumeWebFrame />
          <EducationWebFrame />
          <ContactWebFrame />
        </main>
        <Footer />
      </div>
    )
  }
}

export default About
