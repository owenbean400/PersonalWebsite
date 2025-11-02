import React from "react"

import ContentDisplay from "../../webTemplate/contentDisplay"
import SchoolCard from "../../cards/educationCard/schoolCard"

import USMLogo from "../../../images/schools/usm.png"
import SMCCLogo from "../../../images/schools/smcc.png"
import FreeCodeCampLogo from "../../../images/schools/freecodecamp.jpg"
import CATCLogo from "../../../images/schools/catc.png"
import HalldaleLogo from "../../../images/schools/halldale.png"

import "./educationWebFrame.sass"

export default function EducationWebFrame() {
    return (
          <ContentDisplay
            title="Education"
            html='
              <p>USM</p>
              <p>SMCC</p>
              <p>FreeCodeCamp</p>
              <p>CATC</p>
              <p>Hall-Dale</p>
              '
            displayCodeStart={false}
            isDisplayCodeButton={true}
          >
            <div className="educations-container">
              <SchoolCard
                schoolName="USM"
                major="Bachelor Degree in Computer Science"
                gpa="3.225"
                link="https://usm.maine.edu/"
                image={USMLogo}
                imageAlt="USM Logo"
              />
              <SchoolCard
                schoolName="SMCC"
                major="Computer Science Degree"
                gpa="3.92"
                link="https://www.smccme.edu/"
                image={SMCCLogo}
                imageAlt="SMCC Logo"
              />
              <SchoolCard
                schoolName="FreeCodeCamp"
                major="Online Front End Learning"
                gpa="Completed 2 modules"
                link="https://www.freecodecamp.org/fcc43fc8b50-7ee6-4f9d-893a-0c40a5d7f4fe"
                image={FreeCodeCampLogo}
                imageAlt="FreeCodeCamp Logo"
              />
              <SchoolCard
                schoolName="CATC"
                major="Graphic Design"
                gpa="98/100"
                link="http://capitalarea.mainecte.org/"
                image={CATCLogo}
                imageAlt="CATC Logo"
              />
              <SchoolCard
                schoolName="Hall-Dale"
                major="High School Diploma"
                gpa="3.82"
                link="https://www.kidsrsu.org/o/hdmhs"
                image={HalldaleLogo}
                imageAlt="Hall-Dale Logo"
              />
            </div>
          </ContentDisplay>
    )
}