import React from "react"

import ContentDisplay from "../../webTemplate/contentDisplay"

import OwenBeanComputer from "../../../images/owenComputerView.jpg";

import "./headerWebFrame.sass"

export default function HeaderWebFrame() {
    return (
        <ContentDisplay
        title=""
        html='
        <h1>Owen G. Bean</h1>
        <h2>Full Stack Engineer</h2>'
        reverse={true}
        displayCodeStart={true}
        isDisplayCodeButton={true}
        backgroundImage={OwenBeanComputer}
        backgroundColor="#000"
        backgroundPosition="right bottom"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        >
        <div className="owen-header-container">
            <h1 className="owen-title-txt">Owen G. Bean</h1>
            <h2 className="owen-subtitle-txt">Full Stack Engineer</h2>
        </div>
        </ContentDisplay>
    )
}