import React, { useEffect } from "react"
import styled from "styled-components"
import { gsap, Expo } from "gsap"

function Borders() {
  useEffect(() => {
    gsap.from(".border", {
      duration: 3,
      x: "-1000",
      opacity: 1,
      ease: Expo.easeInOut,
      delay: 0.05,
      stagger: 0.05,
    })
    gsap.from(".border__right", {
      duration: 3,
      x: "1000",
      opacity: 1,
      ease: Expo.easeInOut,
      delay: 0.05,
      stagger: 0.05,
    })
    gsap.from(".numb", {
      duration: 3,
      y: "200",
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 0.05,
      stagger: 0.05,
    })
  }, [])

  return (
    <>
      <Container className="container" data-scroll-section>
        <ContainerLeft>
          <BorderContainer>
            <Numb className="numb">(01)</Numb>
            <Border className="border" />
          </BorderContainer>
        </ContainerLeft>
        <ContainerRight>
          <BorderContainer>
            <Numb className="numb">(02)</Numb>
            <Border className="border__right" />
          </BorderContainer>
        </ContainerRight>
      </Container>
    </>
  )
}

const Container = styled.div`
  margin: 1rem 1rem;
  height: 100vh;
`
const ContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
`
const ContainerRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Numb = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 1rem;
  padding-bottom: 0.2rem;
  font-size: calc(4vmax * 9 / 16);
`
const Border = styled.div`
  border-top: 2px solid black;
  width: 45vw;
`
export default Borders
