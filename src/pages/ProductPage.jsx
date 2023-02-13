import React from 'react'
import { Outlet } from 'react-router-dom'
import Products from '../components/Products'

const ProductPage = ({isVisable,onVisible}) => {
  return (
    <div>
{isVisable ? <Outlet/> : <Products onVisible={onVisible}/>}
    </div>
  )
}

export default ProductPage