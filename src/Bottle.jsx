/* eslint-disable react/prop-types */

import  './Bottle.css'
const Bottle = ({bottle,addToCart}) => {
    // console.log(bottle)
    return (
        <div className='card'>
           <h5>{bottle.name}</h5>
            <img src={bottle.img} alt="" />
           
            <h6>Seller : {bottle.seller}</h6>
            <p>Price : {bottle.price} $</p>
           <button onClick={()=>addToCart(bottle)}>Add To Cart</button>

        </div>
    );
};

export default Bottle;