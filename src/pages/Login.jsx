import React from 'react'

import styled from "styled-components";
import videoRegister from "../images/RegisterVideo.mp4"
import VideoBg from "reactjs-videobg";
import Women from "../images/Women.mp4"
import Men from "../images/Men.mp4"
import logo from "../images/Logo.png"

const Image = styled.img`
    height:75px;
    padding:20px
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  color:white;
  text-align:center;
  background-color: #0000002b;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction:column;
`;

const Input = styled.input`
  flex:1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  font-weight:bolder;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  padding:5px;
`;

const Button = styled.button`
  width: 40%;
  border: 1px black;
  padding: 15px 20px;
  background-color: #f1ebdf;
  color: black;
  cursor: pointer;
  font-weight: 600;
`;
const Login = () => {
  return (
    <Container>
    <VideoBg>
    <VideoBg.Source src={Women} type="video/mp4" />
    </VideoBg>
      <Wrapper>
      <Image src={logo}/>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="EMAIL" />
          <Input placeholder="PASSWORD" />
          <Link>
            FORGOT YOUR PASSWORD?
          </Link>
          <Link>
            CREATE ACCOUNT
          </Link>
        </Form>
        <Button>ENTER</Button>
      </Wrapper>
    </Container>
  );
};


export default Login;