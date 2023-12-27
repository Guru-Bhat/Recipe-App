import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const recipeApi=createApi({
    reducerPath:'recipeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
    }),
    endpoints:(builder)=>({
        getRecipes: builder.query({
            query: ()=> `/recipesList`,
            providesTags: ['recipesList']  // Indicates that this will return a collection of entities
        }),

        getRecipesById: builder.query({
            query: (id)=> `/recipesList/${id}`,
            providesTags: ['recipesList']
        }),

        editRecipe: builder.query({
            query: ()=> ``,
            providesTags: ['recipesList'] 
        })
    })
})

export const {useGetRecipesQuery, useGetRecipesByIdQuery, useEditRecipeMutation}= recipeApi