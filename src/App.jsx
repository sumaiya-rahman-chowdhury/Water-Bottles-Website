

import { useEffect, useState } from 'react'
import './App.css'
import Bottle from './Bottle';
import { addToLS, getStoredCart, rmvLocal } from '../utilities/localStorage';
import Cart from './Cart';


function App() {
  const [bottles, setBottles] = useState([])
  const [cart,setToCart] = useState([]);

  const addToCart = (bottle)=>{
    const newCart = [...cart,bottle]
    setToCart(newCart)
    console.log(bottle)
    addToLS(bottle.id)
  }
  // remove item
  const rmvCart = id =>{
    const remainingCart = cart.filter(idx=> idx.id !== id)
    setToCart(remainingCart)
    rmvLocal(id) ;
  }
  // 
  useEffect(()=>{
    fetch('bottles.json')
    .then(res=>res.json())
    .then(data=>setBottles(data))
  },[]);
  // 

  // load cart from local
  useEffect(()=>{
    if(bottles.length>0){
      const strCart = getStoredCart() ;
      const savedCart = []
    console.log(strCart);
    for(const id of strCart){
      console.log(id)
      const bottle = bottles.find(bottle=> bottle.id === id)
      if(bottle){
        savedCart.push(bottle)
      }
    }
    console.log(savedCart)
    setToCart(savedCart)
    }
  },[bottles])






  return (
    <>
     <div>
     <h1>Water Bottles</h1>
     <h2>Total :{bottles.length}</h2>
     <Cart cart={cart} rmvCart={rmvCart}></Cart>
     
     <ol>{
      cart.map(item=> <div key={item.id}>
         <li >{item.name} <button onClick={()=> rmvCart(item.id)}>-</button> </li>
      </div>) 
     }</ol>
     
      <div className='container'>
      {
        bottles.map((bottle)=><Bottle key={bottle.id} bottle={bottle} addToCart={addToCart}></Bottle>)
      }
      </div>
     </div>
    </>
  )
}

export default App
