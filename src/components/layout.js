import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Scroll from "./locomotiveScroll"
// import Header from "./header"
import "./locomotive-scroll.css"
import { GlobalStyles } from "../styles/GlobalStyles"

// This `location` prop will serve as a callback on route change
const Layout = ({ children, location }) => {
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
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Scroll callbacks={location} />
      <GlobalStyles />
      <div id="container">
        <main>{children}</main>
        <footer>
          <h2>Kirill Ginko, {new Date().getFullYear()}</h2>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout