import React from "react"
import Navbar from "../components/navbar/navbar.js"
import Footer from "../components/footer/footer.js"
import Meta from "../components/meta"
import "../pageScss/FinalEssay.scss"
import Pie from "../components/PieSVG.js"
import * as d3 from "d3"
import { rgb } from "d3"

export const data = [
  { date: 1, value: 63 },
  { date: 2, value: 37 },
]
class FinalEssay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      team1Hover: false,
      team2Hover: false,
    }
  }

  render() {
    return (
      <div>
        <Meta title="Final Essay" desc="Owen G. Bean" />
        <main class="final-main">
          <div className="final-title">
            <h1>Software Developers can be Extroverts</h1>
            <LegendKey />
          </div>
          <p>
            When thinking about software developers, the first thing that comes
            to mind are anti-social people who want to spend all day behind a
            computer. They may be pail from never seeing the sun. Never going
            out to parties as they prefer to be inside. They want to be alone
            with their computers. However, not every programmer loves to be
            introverted. Because programmers love developing code on a computer
            doesn’t justify their wanting to be talkative. Extroverted
            developers are within schools and workplaces and can be helpful to a
            development team. Any software developer can be extroverted.
          </p>
          <div className="content-split">
            <div style={{ margin: "16px auto" }} className="pie-chart">
              <p style={{ margin: "0 0 8px 0" }}>
                Luiz Fernando's Survey Respondents
              </p>
              <Pie
                data={data}
                width={280}
                height={280}
                innerRadius={70}
                outerRadius={120}
              />
            </div>
            <p>
              At the University of Informatics Sciences, the majority of the
              software developers with over 2 years of development experience
              are extroverts. The University of Informatics Science is a school
              in Cuba with a computer science degree. Luiz Fernando’s survey of
              100 students and teachers from University who are software
              developers resulted in twice as many extroverts than there are
              introverts. With 63% of software developers at the school
              extroverted, the majority of developers indicate that they don’t
              want to lock themself with no human interactions{" "}
              <a href="https://doi.org/https://doi.org/10.1016/j.chb.2015.05.050">
                (Capretz et al.)
              </a>
              . The University of Informatics Sciences’ software developers are
              dominanted by extroverts.
            </p>
          </div>
          <p>
            Even though University has mostly extroverts for software
            developers, the translation of extroverts and introverts over to the
            workplace still has extroverts represented. There is a range of
            extroverts and introverts working in IT careers. A survey study done
            by Martyna Wybraniak-Kujawa compared people’s occupations with their
            Myers-Briggs test scores. He has classified individuals from the
            survey based on red, green, blue, and yellow. The main focus is on
            extroverts being yellow and red, and introverts being green and
            blue. The survey involved 458 people with 297 taken into account due
            to some people not having over a year of experience. 30% of the
            respondents were from Poland and the rest from the US{" "}
            <a href="https://doi.org/https://doi.org/10.1016/j.procs.2022.09.482">
              (Wybraniak-Kujawa et al. 4192-4194)
            </a>
            .
          </p>
          <p>
            As a result of the survey, Martyna Wybraniak-Kujawa confirms the
            myth of all programmers are introverted, ”This stereotype mostly
            applies to programmers, but the label of isolated introverts has
            been assigned to the entire industry. This is not entirely true”
            <a href="https://doi.org/https://doi.org/10.1016/j.procs.2022.09.482">
              (4196)
            </a>
            . The survey result of 46% of IT personnel is extroverts. Even
            though there are more introverts than extroverts, there is still a
            decent percentage of extroverts. Therefore, there is an opportunity
            for software developers to be extroverts in those careers.
            Extroverts took the majority in occupations of data science, project
            management, and IT specialist, which these information technology
            careers benefit from great communication. Provided that introverts
            are in the majority since 46% is a small difference, extroverts
            still have a spot in the workplace{" "}
            <a href="https://doi.org/https://doi.org/10.1016/j.procs.2022.09.482">
              (4196)
            </a>
            .
          </p>
          <p style={{ margin: "16px 0 0 0" }}>
            Martyna Wybraniak-Kujawa Survey
          </p>
          <div
            style={{ display: "flex", margin: "0 0 32px 0" }}
            className="bar-graph-sideway"
          >
            <div
              style={{
                width: "54%",
                height: "32px",
                backgroundColor: "rgb(255, 127, 14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <p style={{ color: "white", padding: "0 16px" }}>
                54% Introverts in IT careers
              </p>
            </div>
            <div
              style={{
                width: "46%",
                height: "32px",
                backgroundColor: "rgb(41, 119, 180)",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <p style={{ color: "white", padding: "0 16px" }}>
                46% Extroverts in IT careers
              </p>
            </div>
          </div>
          <div className="content-split">
            <p>
              Now since there are extroverts in IT careers, how beneficial it is
              to have extroverts and introverts on the same team. John H.
              Bradley and Frederic J. Hebert looked into a case study of two
              informational system teams from a middle-sized company.{" "}
              <span
                style={{ color: this.state.team1Hover ? "gray" : "black" }}
                onMouseOver={() => this.setState({ team1Hover: true })}
                onMouseLeave={() => this.setState({ team1Hover: false })}
              >
                One team had 20% extroverts{" "}
              </span>{" "}
              <span
                style={{ color: this.state.team2Hover ? "gray" : "black" }}
                onMouseOver={() => this.setState({ team2Hover: true })}
                onMouseLeave={() => this.setState({ team2Hover: false })}
              >
                compared to the other team having 50% extroverts
              </span>
              .
              <span
                style={{ color: this.state.team2Hover ? "gray" : "black" }}
                onMouseOver={() => this.setState({ team2Hover: true })}
                onMouseLeave={() => this.setState({ team2Hover: false })}
              >
                {" "}
                The members with a 50% extroverts and introverts produced a
                higher quality system in a shorter amount of time{" "}
              </span>{" "}
              than{" "}
              <span
                style={{ color: this.state.team1Hover ? "gray" : "black" }}
                onMouseOver={() => this.setState({ team1Hover: true })}
                onMouseLeave={() => this.setState({ team1Hover: false })}
              >
                the team with 20% extroverts
              </span>{" "}
              <a href="https://web.archive.org/web/20170830060321id_/https://sharepoint.louisville.edu/sites/sphis/tlr/Shared%20Documents/Personality%20Type%20Team%20Performance.pdf">
                (Bradley and Hebert 347-348)
              </a>
              . Kroeger and Thuesen point out that ”introverts may have
              inhibited successful intra-team communication”{" "}
              <a href="https://web.archive.org/web/20170830060321id_/https://sharepoint.louisville.edu/sites/sphis/tlr/Shared%20Documents/Personality%20Type%20Team%20Performance.pdf">
                (qtd in. 348)
              </a>
              . When it comes to team-based software developers, having a
              handful of extroverts improves the communication between team
              members. Therefore, communication has led to better overall team
              performance. Being an extroverted developer mixed in with a group
              of introverts may help the team communication dynamics.
            </p>
            <div style={{ margin: "16px auto 0 auto" }}>
              <span>Company Informational Team</span>
              <div style={{ display: "flex", margin: "16px 0 0 0" }}>
                <div
                  onMouseOver={() => this.setState({ team1Hover: true })}
                  onMouseLeave={() => this.setState({ team1Hover: false })}
                  style={{
                    width: "40px",
                    height: "200px",
                    margin: "0 16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "120px",
                      backgroundColor: this.state.team1Hover
                        ? "rgb(255, 157, 54)"
                        : "rgb(255, 127, 14)",
                      color: "white",
                      fontSize: "10px",
                      textAlign: "center",
                      paddingTop: "4px",
                    }}
                  >
                    80%
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "30px",
                      backgroundColor: this.state.team1Hover
                        ? "rgb(31, 149, 210)"
                        : "rgb(41, 119, 180)",
                      color: "white",
                      fontSize: "10px",
                      textAlign: "center",
                      paddingTop: "4px",
                    }}
                  >
                    20%
                  </div>
                  <div style={{ textAlign: "center", margin: "8px 0 0 0" }}>
                    1
                  </div>
                </div>
                <div
                  style={{ width: "40px", height: "200px", margin: "0 16px" }}
                  onMouseOver={() => this.setState({ team2Hover: true })}
                  onMouseLeave={() => this.setState({ team2Hover: false })}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "75px",
                      backgroundColor: this.state.team2Hover
                        ? "rgb(255, 157, 54)"
                        : "rgb(255, 127, 14)",
                      color: "white",
                      fontSize: "10px",
                      textAlign: "center",
                      paddingTop: "4px",
                    }}
                  >
                    50%
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "75px",
                      backgroundColor: this.state.team2Hover
                        ? "rgb(31, 149, 210)"
                        : "rgb(41, 119, 180)",
                      color: "white",
                      fontSize: "10px",
                      textAlign: "center",
                      paddingTop: "4px",
                    }}
                  >
                    50%
                  </div>
                  <div style={{ textAlign: "center", margin: "8px 0 0 0" }}>
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            As much as people may think software developers are introverted,
            there are extroverted developers across the world. People shouldn’t
            be discouraged from programming because they like talking with other
            people, partying, or doing group social activities. Extroverted
            developers are important for the team’s communication and ease of
            conversation. They’re the passageway of an isolated group of
            programmers to the outside world.
          </p>
          <p style={{ margin: "128px 0 0 0" }}>
            <a href="https://web.archive.org/web/20170830060321id_/https://sharepoint.louisville.edu/sites/sphis/tlr/Shared%20Documents/Personality%20Type%20Team%20Performance.pdf">
              Bradley, John H, and Frederic J Hebert. “The effect of personality
              type on team performance”. Journal of Management Development,
              1997.
            </a>
          </p>
          <p>
            <a href="https://doi.org/https://doi.org/10.1016/j.chb.2015.05.050">
              Capretz, Luiz Fernando, et al. “Influence of personality types in
              software tasks choices”. Computers in Human Behavior, vol. 52,
              2015, pp. 373–78.
              https://doi.org/https://doi.org/10.1016/j.chb.2015.05.050.
            </a>
          </p>
          <p>
            <a href="https://doi.org/https://doi.org/10.1016/j.procs.2022.09.482">
              Wybraniak-Kujawa, Martyna, et al. “Human personality in IT
              projects”. Procedia Computer Science, vol. 207, 2022,
              Knowledge-Based and Intelligent Information Engineering Systems:
              Proceedings of the 26th International Conference KES2022, pp.
              4190–99.
              https://doi.org/https://doi.org/10.1016/j.procs.2022.09.482
            </a>
          </p>
        </main>
      </div>
    )
  }
}

const LegendKey = props => (
  <div style={{ width: "200px" }}>
    <p style={{ margin: "0 8px 4px 8px" }}>Chart Color Key:</p>
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "24px",
          height: "24px",
          backgroundColor: "rgb(255, 127, 14)",
          margin: "8px",
        }}
      ></div>
      <p style={{ margin: "0" }}> : Introvert</p>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "24px",
          height: "24px",
          backgroundColor: "rgb(41, 119, 180)",
          margin: "8px",
        }}
      ></div>
      <p style={{ margin: "0" }}> : Extrovert</p>
    </div>
  </div>
)

export default FinalEssay

// Your all around
