import { useEffect, useState } from 'react'
import './App.css'
import Bottle from './Bottle';

function App() {
  const [bottles, setBottles] = useState([])
  useEffect(()=>{
    fetch('bottles.json')
    .then(res=>res.json())
    .then(data=>setBottles(data))
  },[]);
  return (
    <>
     <div>
     <h1>Water Bottles</h1>
      <div className='container'>
      {
        bottles.map((bottle)=><Bottle key={bottle.id} bottle={bottle}></Bottle>)
      }
      </div>
     </div>
    </>
  )
}

export default App
