import React from "react"

import ContentDisplay from "../../webTemplate/contentDisplay"

import ResumePDF from "../../../images/resume/owen_bean_resume.pdf"

import "./resumeWebFrame.sass"

export default function ResumeWebFrame() {
    return (
    <ContentDisplay
    title="Resume"
    html='
    <iframe src="resume.pdf"></iframe>'
    displayCodeStart={false}
    isDisplayCodeButton={true}
    >
        <iframe
        className="resume-iframe"
        src={ResumePDF}
        title="Owen Bean Resume"
        ></iframe>
    </ContentDisplay>);
}