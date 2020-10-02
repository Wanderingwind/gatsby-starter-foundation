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
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-20 lg:max-w-xl lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="27df4f81-c854-45de-942a-fe90f7a300f9"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Writer.</span>
              </span>{' '}
              Teacher. Mother.
              <br className="hidden md:block" />
              A bit of a {' '}
              <span className="inline-block text-purple-accent-700">
                book-pusher.
              </span>
            </h2>
            <div className="text-base text-gray-700 md:text-lg" dangerouslySetInnerHTML={{ __html: html }} />

          </div>
          <div className="flex items-center">
            <Link to={frontmatter.cta.ctaLink} className="inline-flex mr-0 md:mr-4 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-accent-700 hover:bg-purple-800 focus:shadow-outline focus:outline-none">{frontmatter.cta.ctaText}<span className="icon -right"><RiArrowRightSLine /></span></Link>
            <Link to="/about" className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">About Me</Link>
          </div>
        </div>

        {Image ? (
          <Img
            fluid={Image}
            alt={frontmatter.title + ' - Featured image'}
            className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-0 md:max-w-xl featured-image gatsby-image-wrapper"
          />
        ) : ""}

      </div>

      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="max-w-xl mb-2 md:mx-auto sm:text-center lg:max-w-2xl md:mb-2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-pink-50 uppercase rounded-full bg-pink-300">
              Recent
          </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Articles</span>
            </span>{' '}
          blogs, reviews, random thoughts and such
        </h2>

        </div>

      </div>

      <BlogListHome />
    </Layout>
  )
}

export default HomePage
