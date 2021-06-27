import React from "react"

class SkillsIcon extends React.Component {
  constructor() {
    super()
    this.state = {
      displayingInfo: false,
    }
    this.hideInfoHover = this.hideInfoHover.bind(this)
    this.displayInfoHover = this.displayInfoHover.bind(this)
  }

  hideInfoHover(e) {
    this.setState({
      displayingInfo: false,
      scrollY: window.scrollY,
    })
  }

  displayInfoHover(e) {
    this.setState({
      displayingInfo: true,
      mousePositionX: e.clientX,
      mousePositionY: e.clientY,
      scrollY: window.scrollY,
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.updatePortfolioContainer)
    this.hideInfoHover()
  }

  render() {
    const STYLE = {
      image: {
        height: "48px",
        width: "auto",
      },
      infoContainer: {
        padding: "16px",
        position: "absolute",
        backgroundColor: "rgba(21, 16, 53, 0.8)",
        boxShadow: "3px 3px 10px 3px rgba(0,0,0,0.1)",
        border: "white 3px double",
        color: "white",
        top: this.state.scrollY + this.state.mousePositionY - 100 + "px",
        left: this.state.mousePositionX - 20 + "px",
        display: this.state.displayingInfo ? "block" : "none",
      },
    }

    return (
      <div style={this.props.style}>
        <a href={this.props.iconLink} target="_blank" rel="noreferrer">
          <img
            height="48px"
            width="auto"
            style={STYLE.image}
            src={this.props.image}
            alt={this.props.altImg}
            onMouseOver={this.displayInfoHover}
            onFocus={this.displayInfoHover}
            onMouseLeave={this.hideInfoHover}
          />
        </a>
        <div style={STYLE.infoContainer}>{this.props.name}</div>
      </div>
    )
  }
}

export default SkillsIcon
