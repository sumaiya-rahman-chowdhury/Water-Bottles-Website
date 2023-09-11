

const Cart = ({cart}) => {
    return (
        <div>
            <h1>{cart.length}</h1>
            {/* {
                cart.map(bottle=> <img src={bottle.img}></img>)
            } */}
        </div>
    );
};

export default Cart;