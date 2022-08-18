import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Starter data-scroll-section>
      <h1>Loco-motive Starter </h1>
    </Starter>
  </Layout>
)

const Starter = styled.div`
  display: flex;
  margin: 1rem;
`

export default IndexPage
