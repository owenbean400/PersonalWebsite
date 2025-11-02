import React from "react"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"

import Meta from "../components/meta"

import ProjectCard from "../components/cards/projectCard/projectCard"

import DartLogo from "../images/skills/dart.png"
import JavascriptLogo from "../images/skills/js.png"
import HTMLLogo from "../images/skills/HTML5_logo.png"
import CSSLogo from "../images/skills/CSS3_logo.png"
import FastlaneLogo from "../images/skills/fastlane.svg"
import RubyLogo from "../images/skills/ruby.png"
import KotlinLogo from "../images/skills/kotlin.png"
import JavaLogo from "../images/skills/java.png"
import AWSLogo from "../images/skills/aws.png"
import PythonLogo from "../images/skills/python.png"

import "../pageScss/projects.scss"

export default function Projects(props) {
  return (
    <div>
      <Meta
        title="Software Application Projects"
        desc="Owen Bean has been developing software application projects in his free time or for school."
      />
      <Navbar />
      <main className="projects-main">
        <h1>Owen Bean Software Application Projects</h1>
        <p className="descrip">
          Owen Bean personal projects and school projects. 
          There no code from work because that is closed source.
        </p>
        <div className="container">
          <ProjectCard
              title="Response Time Track"
              description="The Response Time Track application is for EMS and first responders to keep track of there rescue."
              technologies={[
                  {
                      name: "dart",
                      imgSrc: DartLogo,
                      imgAlt: "Dart Logo"
                  },
                  {
                      name: "javascript",
                      imgSrc: JavascriptLogo,
                      imgAlt: "Javascript"
                  }]}
              links={[
                  {
                      display: "Website",
                      href: "https://responsetimetrack.app/"
                  },
                  {
                      display: "Google App",
                      href: "https://responsetimetrack.app/"
                  },
                  {
                      display: "Apple App",
                      href: "https://responsetimetrack.app/"
                  },
              ]}
          />
          <ProjectCard
              title="Fastlane Google Data Safety Automation"
              description="Fastlane Google data safety sheet plugin for CI/CD."
              technologies={[
                  {
                      name: "ruby",
                      imgSrc: RubyLogo,
                      imgAlt: "Ruby"
                  },
                  {
                      name: "fastlane",
                      imgSrc: FastlaneLogo,
                      imgAlt: "Fastlane"
                  }]}
              links={[
                  {
                      display: "Repo",
                      href: "https://github.com/owenbean400/fastlane-plugin-google_data_safety?tab=readme-ov-file"
                  },
                  {
                      display: "Gems",
                      href: "https://rubygems.org/gems/fastlane-plugin-google_data_safety"
                  },
              ]}
          />
          <ProjectCard
              title="Valorant Website"
              description="Website for player to showcase rank history, clips, AI chatbot, and about them."
              technologies={[
                  {
                      name: "javascript",
                      imgSrc: JavascriptLogo,
                      imgAlt: "Javascript"
                  },
                  {
                      name: "golang",
                      imgSrc: DartLogo,
                      imgAlt: "Javascript"
                  }, 
                  {
                      name: "html",
                      imgSrc: HTMLLogo,
                      imgAlt: "Javascript"
                  },
                  {
                      name: "css",
                      imgSrc: CSSLogo,
                      imgAlt: "Javascript"
                  },
                  {
                      name: "aws",
                      imgSrc: AWSLogo,
                      imgAlt: "AWS"
                  }]}
              links={[
                  {
                      display: "BeanBaller Website",
                      href: "https://www.beanballer.com/"
                  },
                  {
                      display: "FE Repo",
                      href: "https://github.com/owenbean400/beanballer-valorant-rank-web"
                  },
                  {
                      display: "API Repo",
                      href: "https://github.com/owenbean400/valorant-rank-aws-api"
                  },
                  {
                      display: "AI Chatbot Repo",
                      href: "https://github.com/owenbean400/valorant-rank-ai-aws-lamda"
                  }
              ]}
          />
          <ProjectCard
              title="Magic 8 Watch"
              description="Android watch app for getting random responses from a push of the watch."
              technologies={[
                  {
                      name: "kotlin",
                      imgSrc: KotlinLogo,
                      imgAlt: "Kotlin"
                  }]}
              links={[
                  {
                      display: "Google App",
                      href: "https://play.google.com/store/apps/details?id=com.owenbean.ems"
                  },
                  {
                      display: "Repo",
                      href: ""
                  },
              ]}
          />
          <ProjectCard
              title="Recipe Roots"
              description="The Recipe Roots is a Flutter-based school project that lets users save and manage family recipes locally using the sqflite database."
              technologies={[
                  {
                      name: "dart",
                      imgSrc: DartLogo,
                      imgAlt: "Dart"
                  },
                  {
                      name: "python",
                      imgSrc: PythonLogo,
                      imgAlt: "Python"
                  },
                ]}
              links={[
                  {
                      display: "App Repo",
                      href: "https://github.com/owenbean400/RecipeRootsApp"
                  },
                  {
                      display: "Google App",
                      href: "https://play.google.com/store/apps/details?id=com.owenbean.reciperoots"
                  },
                  {
                      display: "Apple App",
                      href: "https://apps.apple.com/us/app/recipe-roots/id6470327080"
                  },
              ]}
          />
          <ProjectCard
              title="Dresden Library Webpage"
              description="The Dresden Library is my hometown library, where I volunteered to modernize their website with up-to-date web technologies."
              technologies={[
                  {
                      name: "html",
                      imgSrc: HTMLLogo,
                      imgAlt: "HMTL"
                  },
                  {
                      name: "css",
                      imgSrc: CSSLogo,
                      imgAlt: "CSS"
                  },
                  {
                      name: "javascript",
                      imgSrc: JavascriptLogo,
                      imgAlt: "Javascript"
                  },
                ]}
              links={[
                  {
                      display: "Website",
                      href: "https://www.bapl.us/"
                  },
              ]}
          />
          <ProjectCard
              title="USM Social Media School Project"
              description="The USM Social Media website was a school group project where I handled the React front end, built the infrastructure and CI/CD pipelines, and contributed to the Spring Boot backend."
              technologies={[
                  {
                      name: "html",
                      imgSrc: HTMLLogo,
                      imgAlt: "HMTL"
                  },
                  {
                      name: "css",
                      imgSrc: CSSLogo,
                      imgAlt: "CSS"
                  },
                  {
                      name: "javascript",
                      imgSrc: JavascriptLogo,
                      imgAlt: "Javascript"
                  },
                  {
                      name: "java",
                      imgSrc: JavaLogo,
                      imgAlt: "Java"
                  },
                ]}
              links={[
                  {
                      display: "FE Repo",
                      href: "https://github.com/owenbean400/USMSocialMediaFrontEnd"
                  },
                  {
                      display: "BE Repo",
                      href: "https://github.com/myattaw/USMSocialSpring"
                  }
              ]}
          />
          <ProjectCard
              title="Tipping Calculator Watch"
              description="Tipping Calculator watch app."
              technologies={[
                  {
                      name: "kotlin",
                      imgSrc: KotlinLogo,
                      imgAlt: "Kotlin"
                  }
                ]}
              links={[
                  {
                      display: "Google App",
                      href: "https://play.google.com/store/apps/details?id=com.owenbean.tipping"
                  }
              ]}
          />
          <ProjectCard
              title="Personal Website"
              description="This website."
              technologies={[
                  {
                      name: "html",
                      imgSrc: HTMLLogo,
                      imgAlt: "Html"
                  },
                  {
                      name: "css",
                      imgSrc: CSSLogo,
                      imgAlt: "Html"
                  },
                  {
                      name: "javascript",
                      imgSrc: JavascriptLogo,
                      imgAlt: "Javascript"
                  },
                ]}
              links={[
                  {
                      display: "Website",
                      href: "https://github.com/owenbean400/PersonalWebsite"
                  },
                  {
                      display: "FE Repo",
                      href: "https://www.owengbean.com"
                  }
              ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
