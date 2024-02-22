import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action )=>{
            state.push(action.payload)
        },
        removeFromCart:(state,action )=>{
            return state.filter(i=>i.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})
export const {addToCart,removeFromCart,emptyCart}=CartSlice.actions
export default CartSlice.reducer