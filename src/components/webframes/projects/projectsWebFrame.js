import React from "react";

import ProjectCard from "../../cards/projectCard/projectCard";
import ContentDisplay from "../../webTemplate/contentDisplay";
import StationaryButton from "../../buttons/stationaryButton";

import DartLogo from "../../../images/skills/dart.png"
import JavascriptLogo from "../../../images/skills/js.png"
import HTMLLogo from "../../../images/skills/HTML5_logo.png"
import CSSLogo from "../../../images/skills/CSS3_logo.png"
import FastlaneLogo from "../../../images/skills/fastlane.svg"
import RubyLogo from "../../../images/skills/ruby.png"
import AWSLogo from "../../../images/skills/aws.png"

import "./projectsWebFrame.sass"

export default function ProjectWebFrame() {
    return (
        <ContentDisplay
            title="Featured Projects"
            html='
            <p>Response Time Track</p>
            <p>Fastlane Google Data Safety</p>
            <p>Valorant Website</p>
            <p>Magic 8 Watch</p>'
            displayCodeStart={false}
            isDisplayCodeButton={true}
        >
            <div className="projects-container">
                <ProjectCard
                    title="Response Time Track"
                    description="The Response Time Track application is for EMS and first responders to keep track of there rescue."
                    technologies={[
                        {
                            name: "dart",
                            imgSrc: DartLogo,
                            imgAlt: "Dart Logo"
                        },
                        {
                            name: "javascript",
                            imgSrc: JavascriptLogo,
                            imgAlt: "Javascript"
                        }]}
                    links={[
                        {
                            display: "Website",
                            href: "https://responsetimetrack.app/"
                        },
                        {
                            display: "Google App",
                            href: "https://responsetimetrack.app/"
                        },
                        {
                            display: "Apple App",
                            href: "https://responsetimetrack.app/"
                        },
                    ]}
                />
                <ProjectCard
                    title="Fastlane Google Data Safety Automation"
                    description="Fastlane Google data safety sheet plugin for CI/CD."
                    technologies={[
                        {
                            name: "ruby",
                            imgSrc: RubyLogo,
                            imgAlt: "Ruby"
                        },
                        {
                            name: "fastlane",
                            imgSrc: FastlaneLogo,
                            imgAlt: "Fastlane"
                        }]}
                    links={[
                        {
                            display: "Repo",
                            href: "https://github.com/owenbean400/fastlane-plugin-google_data_safety?tab=readme-ov-file"
                        },
                        {
                            display: "Gems",
                            href: "https://rubygems.org/gems/fastlane-plugin-google_data_safety"
                        },
                    ]}
                />
                <ProjectCard
                    title="Valorant Website"
                    description="Website for player to showcase rank history, clips, AI chatbot, and about them."
                    technologies={[
                        {
                            name: "javascript",
                            imgSrc: JavascriptLogo,
                            imgAlt: "Javascript"
                        },
                        {
                            name: "golang",
                            imgSrc: DartLogo,
                            imgAlt: "Javascript"
                        }, 
                        {
                            name: "html",
                            imgSrc: HTMLLogo,
                            imgAlt: "Javascript"
                        },
                        {
                            name: "css",
                            imgSrc: CSSLogo,
                            imgAlt: "Javascript"
                        },
                        {
                            name: "aws",
                            imgSrc: AWSLogo,
                            imgAlt: "AWS"
                        }]}
                    links={[
                        {
                            display: "BeanBaller Website",
                            href: "https://www.beanballer.com/"
                        },
                        {
                            display: "FE Repo",
                            href: "https://github.com/owenbean400/beanballer-valorant-rank-web"
                        },
                        {
                            display: "API Repo",
                            href: "https://github.com/owenbean400/valorant-rank-aws-api"
                        },
                        {
                            display: "AI Chatbot Repo",
                            href: "https://github.com/owenbean400/valorant-rank-ai-aws-lamda"
                        }
                    ]}
                />
            </div><StationaryButton
                css={{ margin: "8px", display: "block" }}
                title="Projects"
                link="/projects"
            />
        </ContentDisplay>
    )
}