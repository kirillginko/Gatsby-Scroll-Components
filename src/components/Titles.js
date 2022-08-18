import React, { useEffect } from "react"
import styled from "styled-components"
import { gsap, Expo } from "gsap"

function Titles() {
  useEffect(() => {
    gsap.from(".title", {
      duration: 2,
      y: "200",
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 0.02,
      stagger: 0.2,
    })
  }, [])

  return (
    <Container data-scroll-section>
      <Name>
        <h1 className="title" style={{ paddingRight: "3rem" }}>
          Kirill
        </h1>
        <h1 className="title">Ginko</h1>
      </Name>
      <h2 className="title">Number 01</h2>
      <h3 className="title">ABCDE 02</h3>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  overflow: hidden;
`
const Name = styled.div`
  display: flex;
  flex-direction: row;
`

export default Titles
