import React from 'react';
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import { Badge } from '@material-ui/core';
const Container = styled.div``
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    justify-content: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: .5px solid lightgray;
    border-radius: 20px;
    margin-left:25px ;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    border: none;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

function Navbar() {
    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input type="text" placeholder='Search' />
                        <Search style={{color:'gray', fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>Logo</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sigin</MenuItem>
                    <MenuItem>
                        <Badge color='primary' badgeContent={4} >
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
     );
}

export default Navbar;