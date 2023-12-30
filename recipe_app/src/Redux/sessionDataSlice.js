import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login: "",
    userName:"",
    email:"",
    password:"",
    isAdmin: false,
}

export const sessionDataSlice = createSlice({
    name: "session",
    initialState,
    reducers:{
        setLogin:(state, action) =>{
            state.login=action.payload;
        },

        setUserName:(state, action) =>{
            state.userName=action.payload;
        },

        setEmail:(state, action)=>{
            state.email=action.payload;
        },

        setIsAdmin: (state,action)=>{
            state.isAdmin=action.payload;
        }
        }
    });

    export const {setLogin, setUserName, setEmail,setIsAdmin} = sessionDataSlice.actions;

    export default sessionDataSlice.reducer;