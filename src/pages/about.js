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
          desc="I'm Owen Bean, a full-stack developer from Portland, Main with a diverse background spanning mobile, web, and backend systems. What I love most about software development is the mix of complexity and creativity; solving challenging problems and turning them into something real and meaningful."
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
