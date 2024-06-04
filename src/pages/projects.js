import React, { useState, useEffect } from "react"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"

import Meta from "../components/meta"

import FeatureTip from "../images/project/tipping/feature.jpg"
import LogoTip from "../images/project/tipping/icon.png"
import Feature8 from "../images/project/magic8/feature.jpg"
import Logo8 from "../images/project/magic8/icon.png"
import LogoDresden from "../images/project/dresden/logo.png"
import FeatureDresden from "../images/project/dresden/feature.jpg"
import LogoEMS from "../images/project/ems/logo.png"
import FeatureEMS from "../images/project/ems/feature.jpg"
import LogoPersonal from "../images/project/personal/logo.png"
import FeaturePersonal from "../images/project/personal/feature.jpg"
import LogoRecipeRoot from "../images/project/recipe_roots/logo.png"
import FeatureRecipeRoot from "../images/project/recipe_roots/feature.jpg"
import LogoUSM from "../images/project/usm/logo.png"
import FeatureUSM from "../images/project/usm/feature.jpg"

import "../pageScss/wearos.scss"

export default function Projects(props) {
  return (
    <div>
      <Meta
        title="Software Application Projects"
        desc="Owen Bean has been developing WearOS Apps in his free time with Android Studio and Kotlin.
              Owen Bean google play developer account is Owen Bean. There are WearOS apps and watchfaces."
      />
      <Navbar />
      <main className="wearos-main">
        <h1>Owen Bean Software Application Projects</h1>
        <p className="descrip">
          Owen Bean personal projects and school projects. 
          There no code from work because that is closed source.
        </p>
        <div className="container">
          <AppDisplay
            link="https://responsetimetrack.app/"
            title="Response Time Track"
            logo={LogoEMS}
            feature={FeatureEMS}
            desc="The Response Time Track application is for EMS and first responders to keep track of there rescue.
                  The app is available on Google and Apple as an app developed with Flutter framework.
                  It is currently being used actively from other EMS workers to keep track of their times."
          />
          <AppDisplay
            link="https://play.google.com/store/apps/details?id=com.owenbean.magic8watch"
            title="Magic 8 Watch"
            logo={Logo8}
            feature={Feature8}
            desc="Whether you can't decide where to go out to eat with your date or what should you wear for a specific outfit today, 
                    Magic 8 Watch will give you a Yes/No answer. 
                    With a Magic 8 Watch, ask a question to yourself that you can't decide. 
                    Once you have the question, simply tap on the watch to get a Yes/No answer. 
                    For multiple question, tap the watch again to get a new response."
          />
          <AppDisplay
            link="https://github.com/owenbean400/USMsocialMedia"
            title="USM Social Media School Project"
            logo={LogoUSM}
            feature={FeatureUSM}
            desc="The USM Social Media website is a group project for COS 430 Software Engineering class.
                  I was responsible for the entire front-end done in React JS,
                  developed the infrastructure and CI/CD pipelines for the project to live onto,
                  and help out with backend in Spring Boot Java."
          />
          <AppDisplay
            link="https://github.com/owenbean400/RecipeRootsApp"
            title="Recipe Roots"
            logo={LogoRecipeRoot}
            feature={FeatureRecipeRoot}
            desc="The Recipe Roots was a school project to build an application that utilizes a database.
                  Recipe Roots allow for users to save data on their family recipes directly on their phone.
                  It was built with the Flutter framework with sqfite database library to do database operations."
          />
          <AppDisplay
            link="https://play.google.com/store/apps/details?id=com.owenbean.tipping"
            title="Dresden Library Website"
            logo={LogoDresden}
            feature={FeatureDresden}
            desc="The Dresden Library is a local town library of the town I grew up in during high school.
                  I have volunteer to revamp their website to keep up to date to web technology."
          />
          <AppDisplay
            link="https://play.google.com/store/apps/details?id=com.owenbean.tipping"
            title="Tipping Calculator"
            logo={LogoTip}
            feature={FeatureTip}
            desc="The tipping calculator does the math for tipping at vast majority of
            place. Enter the percentage of the tip and the price of the service.
            Afterwards, the amount of money for the tip is calculated. The goal
            of the tipping app is to keep tipping math simple and hassle free."
          />
          <AppDisplay
            link="https://play.google.com/store/apps/details?id=com.owenbean.tipping"
            title="Personal Website"
            logo={LogoPersonal}
            feature={FeaturePersonal}
            desc="The website you are on now is my own personal website.
                  It is built on React with Gatsby JS framework."
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function AppDisplay(props) {
  return (
    <div className="app-container">
      <a href={props.link} className="link">
        <div className="title-container">
          <img src={props.logo} className="logo" />
          <h4 className="title">{props.title}</h4>
        </div>
        <img src={props.feature} className="feature" />
        <p className="desc">{props.desc}</p>
      </a>
    </div>
  )
}
