import React from "react";
import {useSelector , useDispatch } from 'react-redux';
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import { ToastContainer, toast } from 'react-toastify';

export default function Cartscreen() {

    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x , item)=> x+item.price ,0)
    const dispatch = useDispatch()
    return(
        <div style={{backgroundImage:`url('https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?size=626&ext=jpg&ga=GA1.1.1677326305.1675962342&semt=ais')`, backgroundSize:'cover'}}>
            <div className="row justify-content-center">

                <div className="col-md-6">
                    <h2 style={{fontSize:"40px", marginTop:"100px"}}>My Cart</h2>

                    {cartItems.map(item=>{
                        return <div className="flex-container">

                        <div className="text-left m-1 w-100">
                            <h1>{item.name} [{item.varient}]</h1>
                            <h1>Price : Quantity({item.quantity}) * {item.prices[0][item.varient]} </h1>
                            <h1>Price : {item.price}</h1>
                            <hr/>
                        </div>
                        <div className="m-1 w-100">
                            <img src={item.image} style={{height:"80px" , height:"80px"}}/>

                        </div>
                        <div className="m-1 w-100">
                        <i className="fa fa-trash" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}><br></br>delete</i>


                        </div>


                    </div>

                    })}


                    

                </div>
                <div className="col-md-4">
                    <h2 style={{fontSize:"35px", marginTop:"50px"}}>Subtotal : {subtotal} /-</h2>
                       
                    <button className="check-btn" style={{backgroundColor:'orangered'}}>Check Out</button>
                    
                    <ToastContainer style={{backgroundColor:'white'}}/>
                </div>

            </div>
            
            
        </div>
    )
}