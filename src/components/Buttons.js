import React, { useEffect } from "react"
import styled from "styled-components"
import { gsap, Expo } from "gsap"
import Arrow from "../images/arrow.png"

const Buttons = () => {
  useEffect(() => {
    gsap.from(".btn", {
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
      <Container>
        <Btn className="btn">Landing</Btn>
        <Btn className="btn">Take Off</Btn>
        <Btn className="btn">Location</Btn>
      </Container>
      <ImageContainer>
        <ArrowImg className="btn" src={Arrow} />
        <Star className="btn">*</Star>
      </ImageContainer>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 1rem;
`
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0rem 1rem;
`
const ArrowImg = styled.img`
  width: 10rem;
  height: 10rem;
`
const Star = styled.div`
  font-size: 15rem;
  height: 10rem;
  width: min-content;
  margin: 0rem 1rem;
`

const Btn = styled.div`
  margin: 0 0.8em 1em 0;
  padding: 0.3em 0.6em;
  font-size: calc(3vmax * 9 / 16);
  color: black;
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
`

export default Buttons
