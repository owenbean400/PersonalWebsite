import React, { useState, useEffect } from "react"

export default function HTMLContent(props) {
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 960)

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsPhone(window.innerWidth <= 960)
    )
    return () =>
      window.removeEventListener("resize", () =>
        setIsPhone(window.innerWidth < 960)
      )
  })

  let htmlArr = []
  console.log(typeof props.html === "string")
  let htmlString = props.html
  if (typeof htmlString === "string") {
    while (htmlString.trim().length !== 0) {
      console.log("html: " + htmlString)
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
  console.log(htmlArr)

  return (
    <div
      class="html-container"
      style={
        !isPhone
          ? props.reverse
            ? { borderRadius: "0 32px 32px 0" }
            : { borderRadius: "32px 0 0 32px" }
          : { display: "none" }
      }
    >
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
  )
}
