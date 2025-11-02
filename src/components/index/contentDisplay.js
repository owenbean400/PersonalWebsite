import React, { useState, useEffect } from "react"
import WebContent from "./webContent"
import HTMLContent from "./htmlContent"
import NavbarTool from "./navbarTool"
import "./content.sass"

export default function ContentDisplay(props) {
    const [isFullScreenDisplay, setIsFullScreenDisplay] = useState(false);
    const [isPhone, setIsPhone] = useState(true)
    const [isDisplayCode, setIsDisplayCode] = useState((window.innerWidth <= 768 || !props.isDisplayCodeButton) ? false : props.displayCodeStart ?? false);
    const MAX_WIDTH = props.maxWidth ?? 960;
    const MARGIN_BORDER = props.margin ?? "32px auto";

    useEffect(() => {
        setIsPhone(window.innerWidth <= 768);
        window.addEventListener("resize", () =>
            setIsPhone(window.innerWidth <= 768)
        )
        return () =>
            window.removeEventListener("resize", () =>
                setIsPhone(window.innerWidth < 768)
            )
    })

    function webContentStyle() {
        let webContentstyles = {}

        webContentstyles["top"] = "64px";
        webContentstyles["left"] = "0px";

        if (isDisplayCode) {
            webContentstyles["gridTemplateColumns"] = "auto 320px";
        } else {
            webContentstyles["gridTemplateColumns"] = "auto";
        }

        if (isFullScreenDisplay) {
            webContentstyles["height"] = "100%";
        }

        return webContentstyles;
    }

    function webFrameStyle() {
        let webFrameStyles = {}

        webFrameStyles["top"] = "64px";
        webFrameStyles["left"] = "0px";


        if (isFullScreenDisplay) {
            webFrameStyles["position"] = "fixed";
            webFrameStyles["margin"] = "0px";
            webFrameStyles["width"] = "100%";
            webFrameStyles["height"] = "calc(100vh - 112px)";
            webFrameStyles["zIndex"] = "1";
        } else {
            webFrameStyles["position"] = "inherit";
            webFrameStyles["borderRadius"] = "8px";
            if (isPhone) {
                webFrameStyles["margin"] = "16px 0";
                webFrameStyles["width"] = "100%";
            } else {
                webFrameStyles["margin"] = MARGIN_BORDER;
                webFrameStyles["width"] = "calc(100% - 64px)";
                webFrameStyles["maxWidth"] = MAX_WIDTH + "px";
            }
        }

        return webFrameStyles;
    }

    return (
        <div class="webframe-container" style={webFrameStyle()}>
            <NavbarTool
                title={props.title}
                isPhone={isPhone}
                setIsFullScreenDisplay={setIsFullScreenDisplay}
                isFullScreenDisplay={isFullScreenDisplay}
            />
            <div
                class="web-content"
                style={webContentStyle()}
            >
                <WebContent
                    title={props.title}
                    isDisplayCodeButton={props.isDisplayCodeButton && !isDisplayCode}
                    isDisplayCode={isDisplayCode}
                    setIsDisplayCode={setIsDisplayCode}
                >
                    {props.children}
                </WebContent>
                <HTMLContent
                    title={props.title}
                    html={props.html}
                    isDisplayCodeButton={props.isDisplayCodeButton && isDisplayCode}
                    isDisplayCode={isDisplayCode}
                    setIsDisplayCode={setIsDisplayCode}>
                </HTMLContent>
            </div>
        </div>
    )
}