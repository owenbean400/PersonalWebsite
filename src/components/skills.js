import React from "react"
import "./skills.sass"

class SkillsIcon extends React.Component {

  render() {

    return (
      <a className="skill-container" href={this.props.iconLink} target="_blank" rel="noreferrer">
        <img
          src={this.props.image}
          alt={this.props.altImg}
        />
        <p>{this.props.name}</p>
      </a>
    )
  }
}

export default SkillsIcon
