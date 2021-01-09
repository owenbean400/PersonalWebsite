import React from 'react';
import { graphql, Link } from 'gatsby';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

export default function BlogPost({ data }){
    const post = data.markdownRemark
    return(
        <div>
            <Navbar/>
                <main style={STYLE.container}>
                    <div style={STYLE.headerContainer}>
                        <h1 style={STYLE.header}>{post.frontmatter.title}</h1>
                        <p style={STYLE.date}>{post.frontmatter.date}</p>
                    </div>
                <div style={STYLE.context} dangerouslySetInnerHTML={{__html: post.html}}/>
                <Link to="/blog/" style={STYLE.link}>Back to Blogs</Link>
                </main>
            <Footer/>
        </div>
    )
}

const STYLE = {
    container: {
        padding: '80px 24px 24px 24px',
    },
    headerContainer: {
        textAlign: 'center',
    },
    date: {
        fontSize: '12px',
        margin: 0,
    },
    header: {
        fontSize: '36px',
        margin: 0,
    },
    context: {
        fontSize: '18px',
        textAlign: 'left',
        maxWidth: '780px',
        display: 'block',
        margin: '0 auto'
    },
    link: {
        fontSize: '14px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'block',
        margin: '64px auto 120px auto'
    }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`