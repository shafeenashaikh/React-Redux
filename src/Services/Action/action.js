import {ADD_TO_CART} from '../constant'

export const addToCart=(data)=> {
    console.log("action", data)
    return {
    type: ADD_TO_CART,
    data: data
    }
} 

// export const removeoCart = (data)=> {
//     return {
//     type: REMOVE_TO_CART,
//     data: data
//     }
// } 