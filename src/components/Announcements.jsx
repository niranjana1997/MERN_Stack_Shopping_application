import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    background-color:#e79c4b;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:bolder;
`
const Announcements = () => {
  return (
    <Container>
    Free shipping over US$50 and free returns - NEW! Now pay in 4 interest-free installments with Klarna.
    </Container>
  )
}

export default Announcements