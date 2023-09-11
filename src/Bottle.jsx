import React from 'react';
import  './Bottle.css'
const Bottle = ({bottle}) => {
    console.log(bottle)
    return (
        <div className='card'>
           <h5>{bottle.name}</h5>
            <img src={bottle.img} alt="" />
           
            <h6>Seller : {bottle.seller}</h6>
            <p>Price : {bottle.price}</p>
           

        </div>
    );
};

export default Bottle;