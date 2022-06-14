import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  
  const Container = styled.div`
    display: flex;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
    text-align:justify;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>ALMOND</Logo>
          <Desc>
          ALMOND is a family of brands and businesses, making it possible for customers around the world 
          to express themselves through fashion and design, and to choose a more sustainable lifestyle. 
          We create value for people and society in general by delivering our customer offering and by 
          developing with a focus on sustainable and profitable growth.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
        <Title>SHOP</Title>
          <List>
          <ListItem>Women</ListItem>
          <ListItem>Men</ListItem>
          <ListItem>Baby</ListItem>
          <ListItem>Kids</ListItem>
          <ListItem>Almond Home</ListItem>
          <ListItem>Makeup</ListItem>
          <ListItem>Shoes</ListItem>
          <ListItem>Bags</ListItem>
          <ListItem>Jewelry</ListItem>
          <ListItem>Hats</ListItem>
          <ListItem>Scarves</ListItem>
          <ListItem>More accessories</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Mäster Smauelgatan 46A, SE-106 Stockholm, SWEDEN
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +46 8 796 55 00
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> info@almond.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;
  