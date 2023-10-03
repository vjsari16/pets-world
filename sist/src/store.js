import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllItemsReducer } from './reducers/itemReducers';
import { cartReducer } from './reducers/cartReducers';

// Combine your reducers into a rootReducer
const rootReducer = combineReducers({
    getAllItemsReducer: getAllItemsReducer,
    cartReducer: cartReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    
        cartReducer:{cartItems: cartItems}
    

}


const composeEnhancers = composeWithDevTools({});
const middleware = [thunk];

const store = configureStore({
    preloadedState:initialState,
    reducer: rootReducer, // Pass the rootReducer
    middleware: [...middleware],
    devTools: composeEnhancers
});

export default store;





