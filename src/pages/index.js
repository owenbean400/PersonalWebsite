import React from "react"

import Navbar from "../components/navbar/navbar.js"
import Footer from "../components/footer/footer.js"

import Meta from "../components/meta.js"

import "../pageScss/index.scss"

import HeaderWebFrame from "../components/webframes/header/headerWebFrame.js"
import AboutShortWebFrame  from "../components/webframes/about/aboutShortWebFrame.js"
import ContactWebFrame from "../components/webframes/contact/contactWebFrame.js"
import ProjectWebFrame from "../components/webframes/projects/projectsWebFrame.js"

export default function Test() {
  return (
    <div>
      <Navbar />
      <Meta
        desc="I'm Owen Bean, a full-stack developer from Portland, Main with a diverse background spanning mobile, web, and backend systems. What I love most about software development is the mix of complexity and creativity; solving challenging problems and turning them into something real and meaningful."
      />
      <div style={{ marginTop: "100px" }}></div>
      <HeaderWebFrame />
      <AboutShortWebFrame />
      <ProjectWebFrame />
      <ContactWebFrame />
      <Footer />
    </div>
  )
}