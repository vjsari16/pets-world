import Item from "../components/Item"

export const cartReducer=(state={cartItems : []} , action)=>{

    switch (action.type)
    {
        case 'ADD_TO_CART' : return{

            ...state , 
            cartItems:[...state.cartItems , action.payload]

        }
        case 'DELETE_FROM_CART' :return{

            ...state ,
            cartItems : state.cartItems.filter(Item => Item._id !==action.payload._id)
        }

        default : return state
    }
}