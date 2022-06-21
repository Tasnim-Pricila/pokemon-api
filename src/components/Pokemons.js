import React from 'react';
import useDetails from '../customHooks/useDetails';

const Pokemons = ({poke, index}) => {
    const id = index + 1;
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
    const [pokemonDetails, setPokemonDetails] = useDetails(poke.url);
    console.log(pokemonDetails);

    // console.log(poke)
    return (
        <div className='flex flex-col items-center overflow-hidden shadow-2xl border-t-purple-200 border'>
            <img src={img} alt="" className='mx-auto justify-self-center h-16 mt-2'/>
            <p className='mt-5 capitalize font-bold text-xl'>{poke.name}</p>
            <p className='text-xs'>Weight: {pokemonDetails.weight}</p>
            <button className='border-2 bg-purple-400 w-full mt-5 text-white py-1 font-semibold'>Read More</button>
        </div>
    );
};

export default Pokemons;