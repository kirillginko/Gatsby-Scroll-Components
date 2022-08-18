import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header data-scroll data-scroll-sticky data-scroll-target="#container">
    <div className="header">
      <div>
        <h1 style={{ fontSize: `30px`, margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
