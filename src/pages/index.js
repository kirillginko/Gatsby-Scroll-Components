import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Buttons from "../components/Buttons"
import Titles from "../components/Titles"
import Borders from "../components/Borders"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Titles />
    <Buttons />
    <Borders />
  </Layout>
)

export default IndexPage
