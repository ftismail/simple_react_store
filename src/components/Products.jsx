import axios from 'axios';
import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({sort,filter,cat}) => {
  const [products, setProducts] = useState([]);
  const [productsFiltred, setProductsFiltred] = useState([]);

  useEffect(() => {
    cat &&
    setProductsFiltred(
      products.filter((item)=>Object.entries(filter).every(([key,value])=>
        item[key].includes(value)
      ))
    )
  }, [products,cat,filter]);

  useEffect(() => {
    const getsProducts = async ()=>{
      try {
        const res = await axios.get(
          cat
          ?`http://localhost:5000/api/products?category=${cat}`
          :'http://localhost:5000/api/products')
        setProducts(res.data)
      } catch (error) {}
    }
    getsProducts()
  }, [cat]);

  useEffect(() => {
    if (sort === "newest") {
     setProductsFiltred((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
     setProductsFiltred((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
     setProductsFiltred((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
        {cat?
            productsFiltred.map((item)=>(
            <Product item={item} key={item.id} />))
            :products.slice(0,8).map((item)=>(
              <Product item={item} key={item.id} />))
          }
    </Container>
  )
}

export default Products