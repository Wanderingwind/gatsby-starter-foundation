import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({ data }) => (

  <div className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg shadow-sm">
    {data.frontmatter.featuredImage ?
      (
        <Link to={data.frontmatter.slug}>
          <Img
            fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.frontmatter.title + ' - Featured image'}
            className="featured-image"
          />
        </Link>
      ) : ""
    }
    <div className="p-5 border border-t-0">
      <p className="metamb-3 text-xs font-semibold tracking-wide uppercase">
        <time>{data.frontmatter.date}</time>
      </p>
      <h2 className="title inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
        <Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link>
      </h2>
      <p className="meta mb-2 text-gray-700">
        {data.frontmatter.summary}
      </p>
      <Link className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" to={data.frontmatter.slug}>Continue reading</Link>

    </div>
  </div>

)

export default PostCard