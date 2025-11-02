import React from "react"

export default function HTMLContent(props) {
  let htmlArr = []
  let htmlString = props.html
  if (typeof htmlString === "string") {
    while (htmlString.trim().length !== 0) {
      if (htmlString.search("<") === 0) {
        htmlArr.push(htmlString.substring(0, htmlString.search(">") + 1))
        htmlString = htmlString.substring(
          htmlString.search(">") + 1,
          htmlString.length
        )
      } else {
        htmlArr.push(htmlString.substring(0, htmlString.search("<")))
        htmlString = htmlString.substring(
          htmlString.search("<"),
          htmlString.length
        )
      }
    }
  }

  htmlArr = htmlArr.map(str => {
    if (str.search("<") === 0) {
      if (str.search("/") !== -1) {
        return (
          <span class="tag" key={str}>
            {str} <br />
          </span>
        )
      }
      return (
        <span class="tag" key={str}>
          &emsp;&emsp;{str}
        </span>
      )
    } else {
      return (
        <span class="word" key={str}>
          {str}
        </span>
      )
    }
  })

  return (
    <div
        class="html-view-container"
        style={
            props.isDisplayCode
            ? { display: "grid", gridTemplateColumns: "16px auto" }
            : { display: "none" }
        }
        >
        <button className="button-show-code" style={{ display: (props.isDisplayCodeButton ? "block" : "none") }} onClick={() => props.setIsDisplayCode(false)}></button>
        <div
            class="html-content-container">
            <span class="tag">{"<html>"}</span>
            <br />
            <span class="tag">&emsp;{"<head>"}</span>
            <br />
            <span class="tag">&emsp;&emsp;{"<title>"}</span>
            <span class="word">{props.title}</span>
            <span class="tag">{"</title>"}</span>
            <br />
            <span class="tag">&emsp;{"</head>"}</span>
            <br />
            <span class="tag">&emsp;{"<body>"}</span>
            <br />
            <span class="word">{htmlArr}</span>
            <span class="tag">&emsp;{"</body>"}</span>
            <br />
            <span class="tag">{"</html>"}</span>
        </div>
    </div>
  )
}
