import React, { useState, useEffect } from "react"
import NavbarTool from "./navbarTool"

export default function WebContent(props) {
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 960)
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsPhone(window.innerWidth <= 960)
    )
    return () =>
      window.removeEventListener("resize", () =>
        setIsPhone(window.innerWidth < 960)
      )
  })

  return (
    <div
      class="web-content"
      style={{
        gridColumnStart: !isPhone && !props.reverse ? "2" : "1", 
        gridRowStart: "1", 
        position: isActive ? "fixed" : "inherit",
        top: "64px",
        left: 0,
        maxWidth: isActive ? "100vw" : "500px",
        width: isActive ? "100vw" : "auto",
        height: isActive ? "100vh" : "auto",
        borderRadius: isActive ? "0px" : "",
      }}
    >
      <NavbarTool title={props.title} setActive={setActive} isActive={isActive}/>
      <div style={{padding: "16px"}}>
        {props.children}
      </div>
    </div>
  )
}

