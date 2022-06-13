import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    heright:70vh;
    margin:3px;
    position:relative;
`;
// if using position absolute in child class, parent should be position relative
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;

// will fit the image container
const Info = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:gray;
    cursor:pointer;
    font-weight:600;
`;

const Title = styled.h1`
    color:white;
    margin-bottom:20px;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem