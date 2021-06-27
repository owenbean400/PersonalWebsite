import React from "react"

export default function TitleBoard(props) {
  const STYLE = {
    container: {
      display: "block",
      margin: "64px auto",
      backgroundColor: "whitesmoke",
      borderRadius: "16px",
      width: "fit-content",
    },
    title: {
      padding: "32px",
      textAlign: "center",
      whiteSpace: "nowrap",
    },
  }

  return (
    <div style={STYLE.container}>
      <h2 style={STYLE.title}>{props.title}</h2>
    </div>
  )
}
