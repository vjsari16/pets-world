import React from "react";
import {useSelector , useDispatch } from 'react-redux';

export default function Cartscreen() {

    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems
    return(
        <div>
            <div className="row justify-content-center">

                <div className="col-md-6">
                    <h2 style={{fontSize:"40px", marginTop:"100px"}}>My Cart</h2>

                    {cartItems.map(item=>{
                        return <div className="flex-container">

                        <div style={{color:"black"}}>
                            <h1>{item.name}</h1>
                            <h1>Price : {item.quantity} = {item.varitent} = {item.price}</h1>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>


                    </div>

                    })}


                    

                </div>
                <div className="col-md-4">

                </div>

            </div>
            
            
        </div>
    )
}