import React from 'react'
import styled from 'styled-components'
import { mostLikedProducts } from '../data'
import Product from './Product'

// flex-wrap:wrap - to display only 4 images  
// justify-content:space-between - 
const Container = styled.div`
    display:flex;
    padding:20px;
    flex-wrap:wrap;
    justify-content:space-between;
`;

const Products = () => {
  return (
    <Container>
    {mostLikedProducts.map(item=>(
      <Product item={item} key={item.id}/>
    ))}
    </Container>
  )
}
export default Products

