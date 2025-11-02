import React from "react"

import ContentDisplay from "../../webTemplate/contentDisplay"

export default function AboutDetailWebFrame() {
    return (
        <ContentDisplay
            title="About Owen"
            html="
            <p> {{aboutMe.desc}} </p>
            <button>About Me</button>"
            displayCodeStart={false}
            isDisplayCodeButton={true}
        >
            <p>Hey there! I'm Owen Bean, a full-stack developer with a diverse background spanning mobile, web, and backend systems. What I love most about software development is the mix of complexity and creativity; solving challenging problems and turning them into something real and meaningful.</p>
            <p>I've worked across the stack and have a background in DevOps, where I automated multi-configuration mobile app builds and streamlined deployment pipelines for C# API applications running on IIS farms. Outside of work, I enjoy creating mobile apps, web projects, and API integrations, many of which are featured on the projects page.</p>
            <p>My career in software really took off during my time at the University of Southern Maine, where I studied Computer Science and developed GUI and full-stack applications using Progress OpenEdge. But it all started even earlier back in high school, when I discovered frontend development and graphic design at a trade school. That early passion for building and design still drives everything I create today.</p>
        </ContentDisplay>
    )
}