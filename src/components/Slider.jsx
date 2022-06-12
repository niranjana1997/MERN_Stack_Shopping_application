import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

const Container = styled.div`
    width:100%;
    height: 100vh;
    dislay:flex;
    position: relative;
`

// CSS - arrow used to navigate through the slider 
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position: absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:${props => props.direction ==="left" && "10px"};
    right:${props => props.direction ==="right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
`

// CSS - to move image left to right
const Wrapper = styled.div`
    height:100%;
`

const Slide = styled.div`
`
export const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow> 
        <Wrapper>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>   
    </Container>
  )
}

export default Slider