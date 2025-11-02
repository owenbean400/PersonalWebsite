import React from "react"

import ContentDisplay from "../../webTemplate/contentDisplay"
import Skills from "../../cards/skillsCard/skillsCard"

import FastlaneLogo from "../../../images/skills/fastlane.svg"
import XcodeLogo from "../../../images/skills/xcode.png"
import AndroidLogo from "../../../images/skills/android.png"
import DartLogo from "../../../images/skills/dart.png";
import HTMLLogo from "../../../images/skills/HTML5_logo.png"
import CSSLogo from "../../../images/skills/CSS3_logo.png";
import JavaScriptLogo from "../../../images/skills/js.png";
import FirebaseLogo from "../../../images/skills/firebase.png"
import ProgressOpenedgeLogo from "../../../images/skills/progress.png"
import JavaLogo from "../../../images/skills/java.png"
import CSharpLogo from "../../../images/skills/csharp.png"

import "./skillsWebFrame.sass"

export default function SkillsWebFrame() {
    return (
        <ContentDisplay
            title="Skills"
            html='
                <img src="fastlane.png"></img>
                <p>Fastlane</p>
                <img src="xcode.png"></img>
                <p>Xcode</p>
                <img src="android.png"></img>
                <p>Android</p>
                <img src="dart.png"></img>
                <p>Dart</p>
                <img src="html.png"></img>
                <p>HTML5</p>
                <img src="css.png"></img>
                <p>CSS</p>
                <img src="javascript.png"></img>
                <p>Javascript</p>
                <img src="firebase.png"></img>
                <p>Firebase</p>
                <img src="csharp.png"></img>
                <p>C#</p>
                <img src="progressopenedge.png"></img>
                <p>Progress OpenEdge</p>
                <img src="java.png"></img>
                <p>Java</p>
            '
            displayCodeStart={false}
            isDisplayCodeButton={true}
        >
            <div className="skills-container">
                <Skills
                    image={FastlaneLogo}
                    altImg="Fastlane Logo"
                    name="Fastlane"
                    iconLink="https://docs.fastlane.tools/"
                />
                <Skills
                    image={XcodeLogo}
                    altImg="Xcode Logo"
                    name="Xcode"
                    iconLink="https://developer.apple.com/documentation/xcode"
                />
                <Skills
                    image={AndroidLogo}
                    altImg="Android Logo"
                    name="Android"
                    iconLink="https://developer.android.com/"
                />
                <Skills
                    image={DartLogo}
                    altImg="Dart Logo"
                    name="Dart"
                    iconLink="https://dart.dev/"
                />
                <Skills
                    image={HTMLLogo}
                    altImg="HTML5 Logo"
                    name="HTML5"
                    iconLink="https://html.spec.whatwg.org/"
                />
                <Skills
                    image={CSSLogo}
                    altImg="CSS Logo"
                    name="CSS"
                    iconLink="https://www.w3.org/Style/CSS/Overview.en.html"
                />
                <Skills
                    image={JavaScriptLogo}
                    altImg="Javascript Logo"
                    name="Javascript"
                    iconLink="https://www.javascript.com/"
                />
                <Skills
                    image={FirebaseLogo}
                    altImg="Firebase Logo"
                    name="Firebase"
                    iconLink="https://firebase.google.com/docs"
                />
                <Skills
                    image={CSharpLogo}
                    altImg="C# Logo"
                    name="C#"
                    iconLink="https://learn.microsoft.com/en-us/dotnet/csharp/"
                />
                <Skills
                    image={ProgressOpenedgeLogo}
                    altImg="Progress OpenEdge Logo"
                    name="Progress OpenEdge"
                    iconLink="https://www.progress.com/openedge"
                />
                <Skills
                    image={JavaLogo}
                    altImg="Java Logo"
                    name="Java"
                    iconLink="https://www.java.com/en/"
                />
            </div>
        </ContentDisplay>);
}