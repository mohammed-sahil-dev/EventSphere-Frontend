import { createSlice } from "@reduxjs/toolkit";

 const favoriteSlice =  createSlice({
    name : "favorite",
    initialState : "hello ji",
    reducers : {
        toggleFavorites(state, action){
            state.name = action.payload
           
            
        },
        removeFavorites(state){},
        clearFavorties(state){}
    }
 });

 export const { toggleFavorites ,removeFavorites, clearFavorties} = 
  favoriteSlice.actions;

 export default favoriteSlice.reducer    