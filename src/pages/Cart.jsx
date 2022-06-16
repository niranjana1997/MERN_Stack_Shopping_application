import React from 'react'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import LockOutlined from '@material-ui/icons/LockOutlined';
import styled from "styled-components";
import Announcements from '../components/Announcements';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  padding-bottom:30px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  font-weight:300;
  font-size:20px;
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right:30px;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left:30px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 250px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.h2`
    font-weight: 400;
`;

const ProductId = styled.span`
    font-family:"MangoSans",sans-serif;
    font-weight: 400;
`;

const ProductColor = styled.p`
    font-family:"MangoSans",sans-serif;
    font-weight:300;
`;

const ProductSize = styled.p`
    font-family:"MangoSans",sans-serif;
    font-weight:300;
`;

const Quantity = styled.p`
    font-family:"MangoSans",sans-serif;
    font-weight:300;
`;

const AdditionalInfoDiv = styled.section`
display: flex;
flex:1;
flex-direction: column;
justify-content: space-between;
clear: both;
padding:5px;
letter-spacing: .01875rem;
`

const Icon = styled.span`

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const EachRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 5px 0;
color: var(--gray-100);
`

const FreeShippingText = styled.span`
font-weight: 100;
font-size: .875rem;
font-family: "MangoSans",arial,helvetica,verdana,sans-serif;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37051302_85_D6.jpg?ts=1653044884151&imwidth=502&imdensity=2&impolicy=featured" />
                <Details>
                  <ProductName>
                  <b>Chiffon ruffle dress</b>
                  </ProductName>
                  <ProductId>
                    REF. 37051302-SUR-LM
                  </ProductId>
                  <ProductColor>Pink</ProductColor>
                  <ProductSize>
                    Size: 4
                  </ProductSize>
                  <Quantity>
                    Qty.: 1
                  </Quantity>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice>US$149.99</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            
          </Info>
          <Summary>
            <SummaryTitle>SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>US$149.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>US$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>US$-5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>US$149.99</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout</Button>
            <EachRow>
            <Icon>
            <LocalShippingOutlinedIcon/>
            </Icon>
            <AdditionalInfoDiv>
            <FreeShippingText>
            Free home delivery for orders over US$50
            </FreeShippingText>
            </AdditionalInfoDiv>
            </EachRow>
            <EachRow>
            <Icon>
            <LockOutlined/>
            </Icon>
            <AdditionalInfoDiv>
            <FreeShippingText>
            Secure payment
            </FreeShippingText>
            </AdditionalInfoDiv>
            </EachRow>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;