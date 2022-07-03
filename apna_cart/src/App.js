import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react"; // importing useState hook
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 40000,
      name: "One Plus 8t",
      quantity: 0,
    },
    {
      price: 50000,
      name: "Iphone",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products); // useState ke andar wo likho jisko change karna hai
  // agar array ko change krna hai to array paas karo, object ko karna hai to object pass karo

  let [totalAmount, setTotalAmount] = useState(0);

  const Increment = (index) => {
    // always use arrow functions inside functional components
    let newProductList = [...productList]; // this copies the productList in newProductList
    let newTotalAmount = totalAmount; // we cant change the totalAmount state directly... first we have to copy it to a new variable and then change the state

    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
    
  };

  const Decrement = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
   
  };

  const resetQuantity = ()=>{
    let newProductList = [...productList];
    newProductList.map((product)=>{
      product.quantity = 0;

    })

    setProductList(newProductList);
    setTotalAmount(0);
  }

  const remove = (index)=>{
    let newProductList = [...productList];
    newProductList.splice(index,1);
    setProductList(newProductList);
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    setTotalAmount(newTotalAmount);
  }

  const addItem = (name,price)=>{
    let newProductList = [...productList];
    newProductList.push(
      {
        price : price,
        name : name,
        quantity : 0
      }
    );
    setProductList(newProductList);

  }
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        {/* 'mt' means margin top */}
        <AddItem addItem = {addItem}/>
        <ProductList
          productList={productList}
          Increment={Increment}
          Decrement={Decrement}
          remove = {remove}
        />
      </main>

      <Footer totalAmount = {totalAmount} resetQuantity = {resetQuantity}/>
    </>
  );
}

export default App;

// hooks are used in functional component if we want to use states
// if we want to use states in class based components we have to make objects
