import React from "react"

export default function NavbarTool(props) {
  return (
    <div class="navbar-tool">
      <h5>{props.title}</h5>
      <div class="circle-container">
        <div class="circle green" onClick={() => props.setActive(!props.isActive)}></div>
        <div class="circle yellow" onClick={() => props.setActive(!props.isActive)}></div>
        <div class="circle red" onClick={() => props.setActive(false)}></div>
      </div>
    </div>
  )
}
