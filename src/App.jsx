import { useEffect, useState } from 'react'
import './App.css'
import Bottle from './Bottle';

function App() {
  const [bottles, setBottles] = useState([])
  const [cart,setToCart] = useState([]);

  const addToCart = (bottle)=>{
    const newCart = [...cart,bottle]
    setToCart(newCart)
    console.log(bottle)
  }
  useEffect(()=>{
    fetch('bottles.json')
    .then(res=>res.json())
    .then(data=>setBottles(data))
  },[]);
  return (
    <>
     <div>
     <h1>Water Bottles</h1>
     <h2>Total :{bottles.length}</h2>
     <h1>{cart.length}</h1>
     
     <ol>{
      cart.map(item=> <li key={item.id}>{item.name}</li>) 
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
