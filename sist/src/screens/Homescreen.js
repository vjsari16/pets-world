import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllItems } from '../actions/getAllItems'
import Item from '../components/Item'
import './Homescreen.css'

export default function Homescreen() {

    const dispatch = useDispatch()
    const itemsstate = useSelector((state) => state.getAllItemsReducer);
    const { items, error, loading } = itemsstate;
    useEffect(() => {
        dispatch(getAllItems());
    }, [])




    return ( 
        <div style = {{ backgroundImage: `url("https://img.freepik.com/free-photo/wooden-board-empty-table-top-blurred-background_1253-1584.jpg?size=626&ext=jpg&ga=GA1.1.1677326305.1675962342&semt=ais")`,backgroundSize:`cover` }}  >
        <div className = "row justify-content-center"  > 
            {loading ? (<h1>Loading</h1>) : error ? (<h1>Something went wrong</h1>) :(

                items.map(item => {
                    return(
                        
                        <div className = 'col-md-3 m-4' key={item._id} style={{margintop: `20px`}}>
                            <div>
                                <Item item = { item }/>
                            </div>
                        </div>
                );
            })
        )}

        </div> 
        </div>
        
    )
}