const getStoredCart = () =>{
    const storeCartStirng = localStorage.getItem('cart');
    if(storeCartStirng){
        return JSON.parse(storeCartStirng)
    }
    return [] ;
}
const saveCartToLs = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}
const addToLS = id =>{
    const cart = getStoredCart()
    cart.push(id)
    saveCartToLs(cart)
}
const rmvLocal = id =>{
    const cart = getStoredCart();
    // removing every id
    const remainingCart = cart.filter(idx=> idx !== id)
    saveCartToLs(remainingCart)
}
export {addToLS,getStoredCart,rmvLocal}