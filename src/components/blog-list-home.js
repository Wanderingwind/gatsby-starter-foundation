import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import PostCard from "./post-card"

const PostMaker = ({ data }) => (
  <section className="home-posts">
    <div className="grids col-1 sm-2 lg-3">
      {data}
    </div>

    <div className="text-center">
      <Link to="/blog" className="text-center inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">See all articles<span className="icon -right"><RiArrowRightSLine /></span></Link>

    </div>
  </section>
)

export default function BlogListHome() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { eq: "blog-post" } } }
            limit: 6
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  summary
                  slug
                  title
                  author
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
              }
            }
          }
        }`
      }

      render={data => {
        const posts = data.allMarkdownRemark.edges
          .filter(edge => !!edge.node.frontmatter.date)
          .map(edge =>
            <PostCard key={edge.node.id} data={edge.node} />
          )
        return <PostMaker data={posts} />
      }
      }
    />
  )
}