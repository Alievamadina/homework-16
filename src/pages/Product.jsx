import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Product = () => {
    const {productId} = useParams()
  return (
    <Container>
        <p>Product {productId}</p>
    </Container>
  )
}

export default Product
const Container = styled.div`
font-size: 20px;
  width: 600px;
  background-color: #fff;
  margin: 0 auto;
  height: 250px;
  text-align: left;
`