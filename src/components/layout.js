import React, { useEffect } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import Header from "./header"
import Scroll from "./locomotiveScroll"
import "./locomotive-scroll.css"
import { GlobalStyles } from "../styles/GlobalStyles"
import gsap from "gsap"

const Layout = ({ children, location }) => {
  useEffect(() => {
    gsap.to("html", {
      "--color1": "blue",
      "--color2": "red",
      scrollTrigger: {
        pin: true,
        trigger: ".gradient",
        scroller: ".container",
        end: "+=1000",
        scrub: true,
      },
    })
  }, [])
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <GlobalStyles />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Scroll callbacks={location} />
      <div classname="container" id="container">
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
