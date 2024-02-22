import { configureStore } from "@reduxjs/toolkit";
import wishlistslice from "../Hooks/Slice/Whishlistslice";
import CartSlice from "../Hooks/Slice/CartSlice";
const store=configureStore({

    reducer:{
        wishlistslice: wishlistslice,
        cartReducer:CartSlice
    }
})
export default store