import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

// overflow:hidden; // to prevent overflowing of content

const Container = styled.div`
    width:100%;
    height: 100vh;
    dislay:flex;
    position: relative;
    overflow:hidden;
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
// diaplay: flex - to make the content vertical
// transform:translateX(0vw) - move the slider along X-Axis
const Wrapper = styled.div`
    height:100%;
    display:flex; 
    transform:translateX(0vw);
`

const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color: #${props=>props.bg}
`

const ImageContainer = styled.div`
    flex:1;
    height:100%;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    padding:50px;
    flex:1
`
const Title = styled.h1`
    font-size:70px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:2px;
`

const Button = styled.button`
    padding: 10px;
    font-size:20px;
    background-color: transparent;
    cursor:pointer;
`
const arrowClick = (direction) => {

}

export const Slider = () => {
  return (
    <Container>
        <Arrow direction="left" onClick={()=>arrowClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow> 
        <Wrapper>
        <Slide bg="blue">
        <ImageContainer>
            <Image src="https://lp2.hm.com/hmgoepprod?set=width[1920],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/ladies_s05/april_2022/1065d/1065D-3x2-the-summer-collection.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]"/>

        </ImageContainer>
        <InfoContainer>
            <Title>Summer Fashion Refresh</Title>
            <Description>Define the season in bold colors & easy, breezy silhouettes</Description>
            <Button>Shop now</Button>
        </InfoContainer>
        </Slide>
        <Slide>
            <ImageContainer>
                <Image src="https://lp2.hm.com/hmgoepprod?set=width[1920],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/ladies_s05/april_2022/1065d/1065D-3x2-the-summer-collection.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]"/>

            </ImageContainer>
            <InfoContainer>
                <Title>Winter Fashion Refresh</Title>
                <Description>Define the season in bold colors & easy, breezy silhouettes</Description>
                <Button>Shop now</Button>
            </InfoContainer>
            </Slide>
            <Slide>
            <ImageContainer>
                <Image src="https://lp2.hm.com/hmgoepprod?set=width[1920],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/ladies_s05/april_2022/1065d/1065D-3x2-the-summer-collection.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]"/>

            </ImageContainer>
            <InfoContainer>
                <Title>Spring Fashion Refresh</Title>
                <Description>Define the season in bold colors & easy, breezy silhouettes</Description>
                <Button>Shop now</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={()=>arrowClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>   
    </Container>
  )
}

export default Slider