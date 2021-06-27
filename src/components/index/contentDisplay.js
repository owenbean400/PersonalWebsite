import React from "react"
import WebContent from "./webContent"
import HTMLContent from "./htmlContent"
import "./content.sass"

export default function ContentDisplay(props) {
  return (
    <div class="display-content">
      <HTMLContent
        title={props.title}
        html={props.html}
        reverse={props.reverse}
      />
      <WebContent
        title={props.title}
        reverse={props.reverse}
        noPad={props.noPad}
        isHTML={true}
      >
        {props.children}
      </WebContent>
    </div>
  )
}
