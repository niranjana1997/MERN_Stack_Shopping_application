import { Badge } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import logo from "../assets/Logo.png"
//import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
    height: 80px;
    background-color: white;
`
// display:flex; // To make it horizontal
// justify-content:space-between; // to make space between the values
const Padding = styled.div`
    padding: 20px 30px;
    display:flex;
    justify-content:space-between;

`

const Input = styled.input`
    border:none;
    height:25px;
`

const Left = styled.div`
    flex: 1;
    display:flex;
    align-items:center
`
const Center = styled.div`
    flex:1;
    text-align:center;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`
const SearchContainer = styled.div`
    border: 0.5px solid #8f8570;
    display:flex;
    align-items:center;
    margin-left:25px
    padding:10px;
`
// const Logo = styled.h1`
//     font-weight:bold;
// `

const Image = styled.img`
    height:50px;
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    font-weight:bolder
`
const Navbar = () => {
  return (
    <Container>
        <Padding>
        <Left>
            <MenuItem>Women</MenuItem>
            <MenuItem>Men</MenuItem>
            <MenuItem>Teen</MenuItem>
            <MenuItem>Kids</MenuItem>
            <MenuItem>Home</MenuItem>
                
        </Left>
        <Center>
        <Image src={logo}/>
        </Center>
        <Right>
            <SearchContainer>
                <Search style={{color:"#8f8570",fontSize:16}}/>
                <Input/>
            </SearchContainer>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
                <Badge badgeContent={4} color="#f1ebdf">
                    <ShoppingCartOutlined/>
                </Badge>
            </MenuItem>
        </Right>
        </Padding>
    </Container>
  )
}

export default Navbar