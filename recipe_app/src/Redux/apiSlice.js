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

        addRecipe: builder.mutation({
            query: (recipe)=> ({
                url: `/recipesList/`,
                method: 'POST',
                body: recipe
            }),
            invalidatesTags: ['recipesList'] 
        }),

        editRecipe: builder.mutation({
            query: (recipe)=> ({
                url: `/recipesList/${recipe.id}`,
                method: 'PATCH',
                body: recipe
            }),
            invalidatesTags: ['recipesList'] 
        }),
        deleteRecipe: builder.mutation({
            query: ({id})=> ({
                url: `/recipesList/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['recipesList'] 
        }),
    })
})

export const {useGetRecipesQuery, useGetRecipesByIdQuery,useAddRecipeMutation, useEditRecipeMutation, useDeleteRecipeMutation}= recipeApi