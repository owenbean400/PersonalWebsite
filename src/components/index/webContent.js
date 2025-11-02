import React from "react"

export default function WebContent(props) {
  return (
    <div
      className="web-render"
    >
      <div style={{ padding: "16px" }}>
        {props.children}
      </div>
      <button className="button-show-code" style={{ display: (props.isDisplayCodeButton ? "block" : "none") }} onClick={() => props.setIsDisplayCode(true)}></button>
    </div>
  )
}
