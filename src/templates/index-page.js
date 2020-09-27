import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 380, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""
  return (
    <Layout>
      <SEO />
      <div className="flex flex-col justify-between max-w-xl px-4 mx-auto pb-16 lg:pt-16 lg:flex-row md:px-1 lg:max-w-screen-xl">
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-20 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Writer. Teacher. Mother.
              <br className="hidden md:block" />
              A bit of a {' '}
              <span className="inline-block text-deep-purple-accent-400">
                book-pusher.
              </span>
            </h2>
            <div className="text-base text-gray-700 md:text-lg" dangerouslySetInnerHTML={{ __html: html }} />

          </div>
          <div className="flex items-center">
            <Link to={frontmatter.cta.ctaLink} className="inline-flex mr-0 md:mr-4 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">{frontmatter.cta.ctaText}<span class="icon -right"><RiArrowRightSLine /></span></Link>
            <Link to="/about" className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">About Me</Link>
          </div>
        </div>

        {Image ? (
          <Img
            fluid={Image}
            alt={frontmatter.title + ' - Featured image'}
            className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-lg featured-image"
          />
        ) : ""}

      </div>

      <BlogListHome />
    </Layout>
  )
}

export default HomePage
