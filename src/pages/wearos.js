import React, { useState, useEffect } from "react"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"

import Meta from "../components/meta"

import FeatureTip from "../images/wearos/tipping/feature.jpg"
import LogoTip from "../images/wearos/tipping/ic_launcher.png"
import Feature8 from "../images/wearos/magic8/feature.jpg"
import Logo8 from "../images/wearos/magic8/icon.png"

import "../pageScss/wearos.scss"

export default function WearOS(props) {
  return (
    <div>
      <Meta
        title="WearOS Apps"
        desc="Owen Bean has been developing WearOS Apps in his free time with Android Studio and Kotlin.
              Owen Bean google play developer account is Owen Bean. There are WearOS apps and watchfaces."
      />
      <Navbar />
      <main className="wearos-main">
        <h1>Owen Bean WearOS Apps</h1>
        <p className="descrip">
          Owen Bean personal projects and testing out code languages. Code from
          school is private, so students can't get access. There no code from
          work because that is private.
        </p>
        <div className="container">
          <WearOSApp
            link="https://play.google.com/store/apps/details?id=com.owenbean.tipping"
            title="Tipping Calculator"
            logo={LogoTip}
            feature={FeatureTip}
            desc="The tipping calculator does the math for tipping at vast majority of
            place. Enter the percentage of the tip and the price of the service.
            Afterwards, the amount of money for the tip is calculated. The goal
            of the tipping app is to keep tipping math simple and hassle free."
          />
          <WearOSApp
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
        </div>
      </main>
      <Footer />
    </div>
  )
}

function WearOSApp(props) {
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
