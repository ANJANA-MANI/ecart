import { createSlice } from "@reduxjs/toolkit";

const wishlistslice=createSlice({
    name:'wishlistslice',
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            console.log('Reducer: addToWishlist called');
            console.log(action.payload);
            console.log(state);
      
            return [...state, action.payload];
        },
        removeFromWishlist:(state,action)=>{
            return state.filter(i=>i.id!=action.payload)
        }
    }
})
export const {addToWishlist,removeFromWishlist}=wishlistslice.actions
export default wishlistslice.reducer;