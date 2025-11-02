import React from "react"

import StationaryButton from "../components/buttons/stationaryButton.js"
import Navbar from "../components/navbar/navbar.js"
import Footer from "../components/footer/footer.js"
import ContentDisplay from "../components/index/contentDisplay"
import OwenBeanComputer from "../images/owenComputerView.jpg";

import Skills from "../components/skills.js"

import GmailLogo from "../images/skills/gmail.png"
import LinkinLogo from "../images/skills/linkin.png"

import FirebaseLogo from "../images/skills/firebase.png"
import GithubLogo from "../images/skills/GitHub.svg.png"
import XcodeLogo from "../images/skills/xcode.png"
import AndroidLogo from "../images/skills/android.png"
import FastlaneLogo from "../images/skills/fastlane.svg"

import HTMLLogo from "../images/skills/HTML5_logo.png"
import CSSLogo from "../images/skills/CSS3_logo.png";
import JavaScriptLogo from "../images/skills/js.png";
import DartLogo from "../images/skills/dart.png";
import ProgressOpenedgeLogo from "../images/skills/progress.png"
import JavaLogo from "../images/skills/java.png"

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
        title=""
        html='
        <h1>Owen G. Bean</h1>
        <h2>Full Stack Engineer</h2>'
        reverse={true}
        displayCodeStart={true}
        isDisplayCodeButton={true}
        backgroundImage={OwenBeanComputer}
        backgroundColor="#000"
        backgroundPosition="right bottom"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      >
        <div className="owen-header-container">
          <h1 style={{ color: "white", margin: "0px" }}>Owen G. Bean</h1>
          <h2 style={{ color: "white", fontWeight: "normal", fontSize: "20px", margin: "0px" }}>Full Stack Engineer</h2>
        </div>
      </ContentDisplay>
      <ContentDisplay
        title="About Owen"
        html="
          <p> {{aboutMe.desc}} </p>
          <button>About Me</button>
        "
        displayCodeStart={false}
        isDisplayCodeButton={true}
      >
        <p>Hey there! I'm Owen Bean, a full-stack developer with a diverse background spanning mobile, web, and backend systems. What I love most about software development is the mix of complexity and creativity; solving challenging problems and turning them into something real and meaningful.</p>
        <p>I've worked across the stack and have a background in DevOps, where I automated multi-configuration mobile app builds and streamlined deployment pipelines for C# API applications running on IIS farms. Outside of work, I enjoy creating mobile apps, web projects, and API integrations, many of which are featured on the projects page.</p>
        <p>My career in software really took off during my time at the University of Southern Maine, where I studied Computer Science and developed GUI and full-stack applications using Progress OpenEdge. But it all started even earlier back in high school, when I discovered frontend development and graphic design at a trade school. That early passion for building and design still drives everything I create today.</p>
        <StationaryButton
          css={{ margin: "16px auto", display: "block" }}
          title="About Me"
          link="/about"
        />
      </ContentDisplay>
      <ContentDisplay
        title="Owen Skills"
        html='
          <img src="fastlane.png"></img>
          <p>Fastlane</p>
          <img src="xcode.png"></img>
          <p>Xcode</p>
          <img src="android.png"></img>
          <p>Android</p>
          <img src="dart.png"></img>
          <p>Dart</p>
          <img src="html.png"></img>
          <p>HTML5</p>
          <img src="css.png"></img>
          <p>CSS</p>
          <img src="javascript.png"></img>
          <p>Javascript</p>
          <img src="firebase.png"></img>
          <p>Firebase</p>
          <img src="csharp.png"></img>
          <p>C#</p>
          <img src="progressopenedge.png"></img>
          <p>Progress OpenEdge</p>
          <img src="java.png"></img>
          <p>Java</p>
      '
        reverse={true}
        displayCodeStart={false}
        isDisplayCodeButton={true}
      >
        <HeadSkills></HeadSkills>
      </ContentDisplay>
      <ContentDisplay
        title="Owen Contact"
        html='
          <a href="mailto:owenbean400@gmail.com"></a>
          <a href="www.linkedin.com"></a>
          <a href="www.github.com"></a>
          '
        reverse={false}
        displayCodeStart={true}
        isDisplayCodeButton={true}
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
        image={FastlaneLogo}
        altImg="Fastlane Logo"
        name="Fastlane"
        iconLink="https://docs.fastlane.tools/"
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
        image={DartLogo}
        altImg="Dart Logo"
        name="Dart"
        iconLink="https://dart.dev/"
      />
      <Skills
        style={STYLE.item}
        image={HTMLLogo}
        altImg="HTML5 Logo"
        name="HTML5"
        iconLink="https://html.spec.whatwg.org/"
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
        image={JavaScriptLogo}
        altImg="Javascript Logo"
        name="Javascript"
        iconLink="https://www.javascript.com/"
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
        image={FirebaseLogo}
        altImg="C# Logo"
        name="C#"
        iconLink="https://firebase.google.com/docs"
      />
      <Skills
        style={STYLE.item}
        image={ProgressOpenedgeLogo}
        altImg="Progress OpenEdge Logo"
        name="Progress OpenEdge"
        iconLink="https://www.progress.com/openedge"
      />
      <Skills
        style={STYLE.item}
        image={JavaLogo}
        altImg="Java Logo"
        name="Java"
        iconLink="https://www.java.com/en/"
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
