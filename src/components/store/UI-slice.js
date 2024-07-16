import {createSlice} from "@reduxjs/toolkit"

const uiSlice=createSlice({
    name:"UI",
    initialState:{cartIsVisible:false},
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;                    
        }
    }
})  
export const uiActions=uiSlice.actions;
export default uiSlice;