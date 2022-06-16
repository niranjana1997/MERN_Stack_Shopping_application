import React from 'react'
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import styled from 'styled-components';
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const SmallHeading = styled.h4`
    padding-top:15px;
    padding-bottom:15px;
`

const SmallPara = styled.div`
  	align-items:justify;
`

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src="https://static.zara.net/photos///2022/V/0/1/p/1044/002/800/2/w/750/1044002800_2_1_1.jpg?ts=1646741310432" />
        </ImgContainer>
        <InfoContainer>
          <Title>MIDI HALTER DRESS</Title>
          <Desc>
          <SmallHeading>MATERIALS</SmallHeading>
          <SmallPara>We work with monitoring programs to guarantee compliance with the health, safety, and quality standards for our products. 
          
          The Green to Wear 2.0 standard aims to minimize the environmental impact of textile manufacturing. To do this, we have developed Inditex’s The List program which helps us guarantee both the purity of production processes and the health and safety of our garments. 
          </SmallPara>
          <SmallHeading>OUTER SHELL</SmallHeading>
          <SmallPara>
          95% cotton · 5% elastane
          </SmallPara>
          </Desc>
          <Price>35.90 USD</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer />
    </Container>

  )
}
export default SingleProduct