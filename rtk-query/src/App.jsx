import React, { useState } from 'react'
import { useCreatePokemonMutation, useGetPokemonByNameQuery } from './services/pokemon'

const App = () => {

  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      <AddPokemon />
    </div>
  )
}

export const AddPokemon = () => {
  const [name, setName] = useState('');
  const [addPokemon, { isLoading }] = useCreatePokemonMutation();
  console.log(name);
  

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          addPokemon({ name })
          setName('')
        }}
        disabled={isLoading}
      >
        Add Pokemon
      </button>
    </div>
  )
}


export default App