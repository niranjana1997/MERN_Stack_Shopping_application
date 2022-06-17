
import styled from "styled-components";
import videoRegister from "../assets/RegisterVideo.mp4"
import VideoBg from "reactjs-videobg";
import Women from "../assets/Women.mp4"
import Men from "../assets/Men.mp4"
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import logo from "../assets/Logo.png"

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
  width: 40%;
  padding: 20px;
  color:white;
  text-align:center;
  background-color: #0000002b;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  align-items:center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  color:black;
  font-weight:bolder;
`;

const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0px;
  font-weight: 600;
`;

const Button = styled.button`
  width: 40%;
  border: 1px black;
  padding: 15px 20px;
  background-color: #f1ebdf;
  color: black;
  cursor: pointer;
  text-align: center;
  display: block;
  margin: 0 auto;
  font-weight: 600;
`;
const Register = () => {
  return (
    <Container>
    <VideoBg>
    <VideoBg.Source src={Women} type="video/mp4" />
    </VideoBg>
      <Wrapper>
      <Image src={logo}/>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="EMAIL" />
          <Input placeholder="PHONE NUMBER" />
          <Input placeholder="PASSWORD" />
          <Input placeholder="CONFIRM PASSWORD" />
          <Input placeholder="NAME" />
          <Input placeholder="LAST NAME" />
          <Agreement>
            I ACCEPT THE <u>PRIVACY STATEMENT</u>
          </Agreement>
        </Form>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;