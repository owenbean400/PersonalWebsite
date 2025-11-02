import React from "react"

import ContentDisplay from "../../webTemplate/contentDisplay"
import StationaryButton from "../../buttons/stationaryButton"

export default function AboutShortWebFrame() {
    return (
        <ContentDisplay
            title="About Owen"
            html="
                <p> {{aboutMe.desc}} </p>
                <button>About Me</button>"
            displayCodeStart={false}
            isDisplayCodeButton={true}
        >
            <p>Hey there! I'm Owen Bean, a full-stack developer with a diverse background spanning mobile, web, and backend systems. What I love most about software development is the mix of complexity and creativity; solving challenging problems and turning them into something real and meaningful... View more about me on about page.</p>
            <StationaryButton
                css={{ margin: "16px 0 0 0", display: "block" }}
                title="About Me"
                link="/about"
            />
        </ContentDisplay>
    )
}