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

        getRecipesByEmail: builder.query({
            query: (email) => `/recipesList?email=${email}`,
            providesTags:['recipesList']
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

        getUserDataByEmail: builder.query({
            query: (email)=> `/userData/${email}`,
            providesTags:['email']
        }),

        createUser: builder.mutation({
            query: ({userData})=> ({
                url: `/userData/`,
                method: 'POST',
                body: userData
            }),
            invalidatesTags: ['userData'] 
        }),
        
    })
})

export const {useGetRecipesQuery, useGetRecipesByIdQuery, useGetRecipesByEmailQuery, useAddRecipeMutation, useEditRecipeMutation, useDeleteRecipeMutation, useGetUserDataByEmailQuery, useCreateUserMutation}= recipeApi