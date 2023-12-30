import { configureStore } from "@reduxjs/toolkit";  
import { setupListeners } from "@reduxjs/toolkit/query";
import { recipeApi } from "./apiSlice";
import sessionDataSlice from "./sessionDataSlice";

export const store = configureStore({
    reducer:{
        session:sessionDataSlice,
        [recipeApi.reducerPath]: recipeApi.reducer,
    },

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(recipeApi.middleware)
    });

    setupListeners(store.dispatch);
