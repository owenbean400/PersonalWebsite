import React from "react"

export default function WebContent(props) {

  function webRenderStyles () {
    let webRenderStyle = {}

    if (props.backgroundImage) {
      webRenderStyle["backgroundImage"] = `url(${props.backgroundImage})`;
    }

    if (props.backgroundColor) {
      webRenderStyle["backgroundColor"] = props.backgroundColor;
    }

    if (props.backgroundPosition) {
      webRenderStyle["backgroundPosition"] = props.backgroundPosition;
    }

    if (props.backgroundRepeat) {
      webRenderStyle["backgroundRepeat"] = props.backgroundRepeat;
    }

    if (props.backgroundSize) {
      webRenderStyle["backgroundSize"] = props.backgroundSize;
    }

    return webRenderStyle;
  }

  return (
    <div
      className="web-render"
      style={webRenderStyles()}
    >
      <div style={{ padding: "16px" }}>
        {props.children}
      </div>
      <button className="button-show-code" style={{ display: (props.isDisplayCodeButton ? "block" : "none") }} onClick={() => props.setIsDisplayCode(true)}></button>
    </div>
  )
}
