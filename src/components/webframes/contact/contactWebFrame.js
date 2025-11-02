import React from "react"

import ContentDisplay from "../../webTemplate/contentDisplay"
import SkillsIcon from "../../cards/skillsCard/skillsCard"
import StationaryButton from "../../buttons/stationaryButton"

import GmailLogo from "../../../images/skills/gmail.png"
import LinkinLogo from "../../../images/skills/linkin.png"
import GithubLogo from "../../../images/skills/GitHub.svg.png"

import "./contactWebFrame.sass"

export default function ContactWebFrame() {
    return (

        <ContentDisplay
            title="Contact"
            html='
              <a href="mailto:owenbean400@gmail.com"></a>
              <a href="www.linkedin.com"></a>
              <a href="www.github.com"></a>
              '
            displayCodeStart={true}
            isDisplayCodeButton={true}
        >
            <div className="contacts-container">
                <SkillsIcon
                    image={GmailLogo}
                    altImg="Owen Bean Email Logo"
                    name="Email"
                    iconLink="mailto: owenbean400@gmail.com"
                />
                <SkillsIcon
                    image={LinkinLogo}
                    altImg="Owen Bean Linkedin Logo"
                    name="LinkedIn"
                    iconLink="https://www.linkedin.com/in/owen-bean/"
                />
                <SkillsIcon
                    image={GithubLogo}
                    altImg="Owen Bean Github Logo"
                    name="GitHub"
                    iconLink="https://github.com/owenbean400"
                />
            </div>
            <StationaryButton
                css={{ margin: "16px 0 0 16px", display: "block" }}
                title="Contact"
                link="/contact"
            />
        </ContentDisplay>
    )
}