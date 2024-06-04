import React from "react"

import StationaryButton from "../components/buttons/stationaryButton.js"
import Navbar from "../components/navbar/navbar.js"
import Footer from "../components/footer/footer.js"
import ContentDisplay from "../components/index/contentDisplay"
import OwenBeanImageLaptop from "../components/imageFixed/owenBeanImageLaptop.js"

import Skills from "../components/skills.js"

import GmailLogo from "../images/skills/gmail.png"
import LinkinLogo from "../images/skills/linkin.png"

import FirebaseLogo from "../images/skills/firebase.png"
import GitlabLogo from "../images/skills/gitlab.png"
import GithubLogo from "../images/skills/GitHub.svg.png"
import GoogleCloudLogo from "../images/skills/google_cloud.png"
import XcodeLogo from "../images/skills/xcode.png"
import AndroidLogo from "../images/skills/android.png"
import AnsibleLogo from "../images/skills/Ansible_logo.svg.png"
import FastlaneLogo from "../images/skills/fastlane.svg"

import Meta from "../components/meta.js"

import "../pageScss/index.scss"

export default function Test() {
  return (
    <div>
      <Navbar />
      <Meta
        desc="Owen Guaraldo Bean is a DevOps Engineer from Maine. 
              Owen loves to develop pipelines!"
      />
      <div style={{ marginTop: "100px" }}></div>
      <ContentDisplay
        title="Owen Website"
        html="
        <h1>
          Owen G. Bean
          <br />
          DevOps Engineer
        </h1>
        <button>Repo</button>
        <button>Contact</button>
        <img src='OwenBeanLaptop.png' />"
        reverse={true}
      >
        <h1>
          Owen G. Bean
          <br />
          DevOps Engineer
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
          DevOps engineer after transition from doing software development work.
          I've originally done a bunch of different software development work of full stack sites and mobile apps.
          Transitioned into DevOps work starting with mobile apps as I got into fastlane library script for deploying apps.
          That is where I was doing mobile DevOps works. From there, I transitioned doing DevOps work for full stack web application.
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
          <p>DevOps Toolings</p>
          <p>Various Scripting and Programming Languages</p>
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
    </div>
  )
}
