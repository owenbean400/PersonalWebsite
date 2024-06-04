import React from "react"
import { Link } from "gatsby"
import Navlinks from "./navlinks.js"
import Hamburger from "./hamburger.js"
import Sidebar from "./sidebar.js"
import "./navbar.scss"

const LINKS = {
  repo: ["Repo", "Projects"],
  blog: ["Blog", "Games"],
  about: ["About", "Contact"],
}

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      css: {
        top: "-100vh",
      },
    }
    this.showSide = this.showSide.bind(this)
    this.hideSide = this.hideSide.bind(this)
  }

  showSide = () => {
    this.setState(state => ({
      css: {
        top: 0,
      },
    }))
  }

  hideSide = () => {
    this.setState(state => ({
      css: {
        top: "-100vh",
      },
    }))
  }

  render() {
    var navLinksHTML = []
    for (let i = 0; i < Object.keys(LINKS).length; i++) {
      navLinksHTML.push(
        <Navlinks
          className="nav-links-container"
          links={LINKS[Object.keys(LINKS)[i]]}
          key={LINKS[Object.keys(LINKS)[i]]}
        />
      )
    }

    return (
      <div>
        <nav>
          <h1>
            <Link to="/">Owen Bean</Link>
          </h1>
          <div className="spacer"></div>
          {navLinksHTML}
          <Hamburger clickMe={this.showSide} />
          <Sidebar
            sidelinks={Object.keys(LINKS)}
            sidebarCss={this.state.css}
            clickHide={this.hideSide}
          />
        </nav>
      </div>
    )
  }
}

export default Navbar
