export const addToCart=(item , quantity , varient)=>(dispatch,getState)=>{

    var cartItem = {
        name : item.name,
        _id : item._id,
        image : item.image,
        varient : varient,
        quantity : quantity,
        prices : item.prices,
        price : item.prices[0][varient]*quantity
    }

    dispatch({type: 'ADD_TO_CART' , payload : cartItem})

    const cartItems = getState().cartReducer.cartItems

    localStorage.setItem('cartItems' , JSON.stringify(cartItems))



}