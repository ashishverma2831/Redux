// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
        createPokemon: builder.mutation({
            query: (newPokemon) => ({
                url: `pokemon`,
                method: 'POST',
                body: newPokemon,
            }),
        }),
        deletePokemon: builder.mutation({
            query: (id) => ({
                url: `pokemon/${id}`,
                method: 'DELETE',
            }),
        }),
        updatePokemon: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `pokemon/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useCreatePokemonMutation } = pokemonApi