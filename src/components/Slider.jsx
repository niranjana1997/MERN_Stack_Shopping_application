import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import {sliderItems} from "../data.js"
import { useState } from "react";

// overflow:hidden; // to prevent overflowing of content

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

// CSS - arrow used to navigate through the slider 
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;


// CSS - to move image left to right
// diaplay: flex - to make the content vertical
// transform:translateX(0vw) - move the slider along X-Axis
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color: #${props=>props.bg}
`;

const ImageContainer = styled.div`
    flex:1;
    height:100%;
`;
const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    padding:50px;
    flex:1
`;

const Title = styled.h1`
    font-size:70px;
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:2px;
`;

const Button = styled.button`
    padding: 10px;
    font-size:20px;
    background-color: transparent;
    cursor:pointer;
`;

export const Slider = () => {
    // setting 
    const [slideIndex,setSlideIndex] = useState(0);
    const arrowClick = (direction) => {
        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }    
    };
    return (
    <Container>
        <Arrow direction="left" onClick={()=>arrowClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow> 
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item =>(
        <Slide bg={item.bg} key={item.id}>
        <ImageContainer>
            <Image src={item.img}/>

        </ImageContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
            <Button>Shop now</Button>
        </InfoContainer>
        </Slide>
        ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>arrowClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>   
    </Container>
  )
}

export default Slider