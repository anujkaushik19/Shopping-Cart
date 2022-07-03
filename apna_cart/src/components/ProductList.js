import React from 'react';
import Product from './Product.js';


export default function ProductList(props) {
    
  return (
    props.productList.length > 0? // this is called conditional rendering
    props.productList.map((product,i) =>{
      return <Product product = {product} key={i} Increment = {props.Increment} Decrement = {props.Decrement}index = {i} remove = {props.remove}/>// we cant use the key prop directly
    })
    : <h1>No Products are there in the cart</h1>
  )
   
    
  
}
