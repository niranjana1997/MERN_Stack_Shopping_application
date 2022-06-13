import { Badge } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
//import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
    height: 50px;
    //background-color: black;
`

const Padding = styled.div`
    padding: 10px 20px;
    display:flex; // To make it horizontal
    justify-content:space-between; // to make space between the values

`

const Input = styled.input`
border:none;
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
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px
    padding:5px;
`
const Logo = styled.h1`
    font-weight:bold;
`
const Language = styled.span`
    font-size: 14px;
    cursor:pointer;
`

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
`
const Navbar = () => {
  return (
    <Container>
        <Padding>
        <Left>
            <Language>EN</Language>
                <SearchContainer>
                <Search style={{color:"#e79c4b",fontSize:16}}/>
                <Input/>
                </SearchContainer>
        </Left>
        <Center><Logo>Almond</Logo></Center>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
                <Badge badgeContent={4} color="e79c4b">
                    <ShoppingCartOutlined/>
                </Badge>
            </MenuItem>
        </Right>
        </Padding>
    </Container>
  )
}

export default Navbar