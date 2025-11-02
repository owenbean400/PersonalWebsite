import React from "react"

export default function NavbarTool(props) {
  return (
    <div
      class="navbar-tool"
      style={{
        borderRadius: (props.isFullScreenDisplay || props.isPhone) ? "0px" : "8px 8px 0px 0px"
      }}
      onDoubleClick={() => props.setIsFullScreenDisplay(!props.isFullScreenDisplay)}>
      <h5>{props.title}</h5>
      <div class="circle-container">
        <div class="circle green" onClick={() => props.setIsFullScreenDisplay(true)}></div>
        <div class="circle yellow" onClick={() => props.setIsFullScreenDisplay(!props.isFullScreenDisplay)}></div>
        <div class="circle red" onClick={() => props.setIsFullScreenDisplay(false)}></div>
      </div>
    </div>
  )
}
