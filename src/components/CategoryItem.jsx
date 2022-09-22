import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    flex:1;
    height:70vh ;
    margin:3px ;
    position:relative ;
`
const Img = styled.img`
    height:100% ;
    width:100% ;
    object-fit: cover ;
`
const InfoContainer = styled.div`
    width:100% ;
    height: 100%;
    position: absolute ;
    top:0 ;
    left: 0;
    display:flex ;
    justify-content: center;
    align-items: center;
    flex-direction:column ;
`
const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    `
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`


const CategoryItem = ({items}) => {
  return (
    <Container>
        <Link to={`/products/${items.cat}`} >
            <Img src={items.img} />
            <InfoContainer>
                <Title>{items.title}</Title>
                <Button>BUY NOW</Button>
            </InfoContainer>
        </Link>
    </Container>
  )
}

export default CategoryItem