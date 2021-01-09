import { Link } from 'gatsby';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import '../pageScss/blog.sass';

export default function Blog({ data }) {
    const { register, watch, errors } = useForm();
    const BLOG_POSTS = JSON.parse(JSON.stringify(data, null, 4));
    var links = [];
    var linksCount = 0;

    for(let i = 0; i < data.allMarkdownRemark.edges.length; i++){
      var titleSearch = data.allMarkdownRemark.edges[i].node.frontmatter.title.toLowerCase().split(" ");
      const date = data.allMarkdownRemark.edges[i].node.frontmatter.date.split("-");
      for(let i = 0; i < date.length; i++){
        titleSearch.push(date[i]);
      }
      titleSearch.push(data.allMarkdownRemark.edges[i].node.frontmatter.date);
      var isFound = true;
      if(watch("search") != undefined){
        var searchValue = watch("search").toLowerCase().split(" ");
        isFound = checkIfFound(titleSearch, searchValue);
      }
      if(isFound){
        links.push(
            <div className="blog-card" key={data.allMarkdownRemark.edges[i].node.frontmatter.title}>
                <Link to={data.allMarkdownRemark.edges[i].node.fields.slug}>{data.allMarkdownRemark.edges[i].node.frontmatter.title}</Link>
                <div className="blog-info">
                  <p>{data.allMarkdownRemark.edges[i].node.frontmatter.date}</p>
                  <p>Word Count: {data.allMarkdownRemark.edges[i].node.wordCount.words}</p>
                </div>
            </div>
        )
        linksCount++;
      }
      else{
        links.push(null);
      }
      if(links.length > 16){
        break;
      }
    }

    return(
        <div>
            <Navbar />
            <main className="blog-main">
                <h1>Blog Posts</h1>
                <form>
                  <input name="search" type="text" ref={register} defaultValue="" className="blog-search-bar" placeholder="Search for Blog"/>
                </form>
                <div className="blog-link-container">
                  {links}
                </div>
    {(linksCount < 4) ? (linksCount < 1) ? <p style={{height: '200px', width: '300px', margin: '32px auto', display: 'block'}}>Nothing was found...</p> : <div style={{height: '120px', width: '100px'}}></div> : null}
            </main>
            <Footer />
        </div>
    )
}


export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          fields {
            slug
          }
          wordCount {
            words
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`

function checkIfFound(title, search){
  for(let i = 0; i < title.length; i++){
    for(let j = 0; j < search.length; j++){
      var checkCharacter = true;
      for(let k = 0; k < search[j].length; k++){
        if(search[j].charAt(k) != title[i].charAt(k)){
          checkCharacter = false;
        }
      }
      if(checkCharacter){
        return true;
      }
    }
  }
  return false;
}