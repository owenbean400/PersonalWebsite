import React, { useState, useEffect } from "react"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"

import "../pageScss/repo.scss"

import WishListJSON from "../jsonData/wishList.json"
import WebContent from "../components/index/webContent"
import StationaryButton from "../components/buttons/stationaryButton"

import Meta from "../components/meta"

import HTMLLogo from "../images/skills/HTML5_Logo.png"
import CSSLogo from "../images/skills/CSS3_logo.png"
import JSLogo from "../images/skills/js.png"
import JavaLogo from "../images/skills/java.png"
import KotlinLogo from "../images/skills/kotlin.png"
import TypescriptLogo from "../images/skills/typescript.png"
import ProgressLogo from "../images/skills/progress.png"
import SassLogo from "../images/skills/sass.png"
import ReactLogo from "../images/skills/react.png"
import VueLogo from "../images/skills/vue.png"
import GatsbyLogo from "../images/skills/gatsby.png"
import PhotoshopLogo from "../images/skills/photoshop_logo.png"

const data = WishListJSON

const logoMap = new Map()
logoMap.set("JavaScript", JSLogo)
logoMap.set("Kotlin", KotlinLogo)
logoMap.set("HTML", HTMLLogo)
logoMap.set("CSS", CSSLogo)
logoMap.set("Java", JavaLogo)
logoMap.set("TypeScript", TypescriptLogo)

console.log(logoMap.get("?"))

export default function WishList(props) {
  const [repo, setRepo] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/owenbean400/repos?sort=updated`)
      .then(response => response.json())
      .then(resultData => setRepo(resultData))
  }, [])

  console.log(repo)

  const REPO_HTML =
    repo.length > 0 ? (
      repo.map(stuff => {
        return (
          <WebContent
            title={toTitle(stuff.name, true)}
            reverse={false}
            noPad={false}
            isHTML={false}
          >
            <h4>{toTitle(stuff.name, false)}</h4>
            <div className="repo-group">
              <div className="repo-owner">
                <img src={stuff.owner.avatar_url} alt="Owen Bean Github"></img>
                <h5>{stuff.owner.login}</h5>
              </div>
              <h6 className="repo-descript">{stuff.description}</h6>
            </div>
            <div className="repo-logo-group">
              {logoMap.get(stuff.language) !== undefined ? (
                <img
                  className="repo-logo-img"
                  src={logoMap.get(stuff.language)}
                  alt={stuff.language + " Logo"}
                />
              ) : undefined}
              <p className="repo-logo-program">{stuff.language}</p>
            </div>
            <p className="repo-date">
              Updated: {dateToString(stuff.updated_at)}
            </p>
            <p className="repo-date">
              Created: {dateToString(stuff.created_at)}
            </p>
            <StationaryButton
              css={{ margin: "12px 0", borderRadius: "16px" }}
              isNewTab={true}
              title="Link to Repo"
              link={stuff.html_url}
            />
          </WebContent>
        )
      })
    ) : (
      <p className="repo-load">Loading Repo API...</p>
    )

  return (
    <div>
      <Meta
        title="Owen Bean - Repo"
        desc="Owen Bean Github repositories and account. 
              Owen has been coding some personal projects and playing with languages. 
              He however can not upload code from work and school for private reasons."
      />
      <Navbar />
      <main className="repo-main">
        <h1>Owen Bean Github Repositories</h1>
        <p className="descrip">
          Owen Bean personal projects and testing out code languages. Code from
          school is private, so students can't get access. There no code from
          work because that is private.
        </p>
        <div className="repo-repos">{REPO_HTML}</div>
      </main>
      <Footer />
    </div>
  )
}

function dateToString(dt) {
  dt = new Date(dt)
  let day = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate()
  return dt.getMonth() + "/" + day + "/" + dt.getFullYear()
}

function toTitle(str, shrink) {
  let rtnStr = ""
  for (let char of str.split("")) {
    if (rtnStr.length === 0) rtnStr += char.toUpperCase()
    else if (char == "-") rtnStr += " "
    else if (char.toLowerCase() !== char) rtnStr += " " + char
    else rtnStr += char
  }
  if (rtnStr.length > 12 && shrink) {
    rtnStr = rtnStr.substring(0, 12)
    rtnStr =
      rtnStr.search(" ") > 0
        ? rtnStr.substring(0, rtnStr.lastIndexOf(" "))
        : rtnStr
    rtnStr += "..."
  }
  return rtnStr
}
