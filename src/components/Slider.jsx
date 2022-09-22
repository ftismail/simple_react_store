import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { sliderItems } from '../data';
import styled from 'styled-components';
const Container = styled.div`
    height: 100vh;
    width:100% ;
    display:flex ;
    background-color:coral ;
    margin-top:20px ;
    position:relative ;
    overflow: hidden ;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fdf4f4;
    border-radius:50%;
    display: flex;
    align-items:center ;
    justify-content: center;
    position:absolute;
    top:0 ;
    bottom:0 ;
    left:${props=>props.direction==='left'&&'10px'};
    right:${props=>props.direction==='right'&&'10px'};
    margin:auto ;
    cursor:pointer;
    opacity:0.6 ;
    z-index:2;
`
const Wraper =styled.div`
    height:100% ;
    display:flex ;
    transform: translateX(${props=>props.slideIndex*-100}vw);
    transition: all 1s ;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex ;
    align-items: center;
    background-color:#${props=>props.bg} ;
`
const ImgContainer = styled.div`
    flex:1;
    height: 100%;
`
const Img = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex:1 ;
    padding:50px;
`
const Title = styled.h1`font-size:70px`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Btn = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`


const Silder = () => {
    const [slideIndex,setSlideIndex] = useState(0)
    const handelClick = (direction)=>{
        if(direction === 'left'){
            setSlideIndex(slideIndex >0 ? slideIndex-1 : 2 )
        }
        else{
            setSlideIndex(slideIndex <2 ? slideIndex+1 : 0 )
        }
    }
    return ( 
        <Container>
            <Arrow direction='left' onClick={()=>handelClick('left')}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wraper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Img src={item.img} /> 
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Btn>BUY NOW</Btn>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wraper>
            <Arrow direction='right' onClick={()=>handelClick('right')}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
     );
}
 
export default Silder;