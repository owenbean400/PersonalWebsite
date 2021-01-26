import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const STYLE = {
}

const ComputerHeaderImage = ({data}, source) => (
    <div>
        <StaticQuery 
            query = {graphql`
                query {
                    image: file(relativePath: {eq: "computerHeader.jpg"}) {
                    id
                    childImageSharp {
                        fluid(traceSVG: {color: "#222222", threshold: 230}) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                    }
                }
            `}
            render={data => (
                <Img fluid={data.image.childImageSharp.fluid} style={STYLE} loading="lazy" draggable={false} alt="Computer Designs of front end developments" durationFadeIn={700}/>
            )}
        />
    </div>
);

export default ComputerHeaderImage