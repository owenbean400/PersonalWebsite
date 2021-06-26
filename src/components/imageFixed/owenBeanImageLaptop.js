import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const STYLE = {
  display: "block",
  margin: "0",
}

const OwenBeanImageLaptop = ({ data }, source) => (
  <div>
    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: { eq: "owenbeanLaptop.png" }) {
            id
            childImageSharp {
              fixed(
                width: 200
                quality: 90
                traceSVG: {
                  color: "#151035"
                  blackOnWhite: true
                  threshold: 200
                }
              ) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <Img
          fixed={data.image.childImageSharp.fixed}
          style={STYLE}
          draggable={false}
          alt="Owen G. Bean Front End Developer out of Laptop"
          durationFadeIn={500}
        />
      )}
    />
  </div>
)

export default OwenBeanImageLaptop
