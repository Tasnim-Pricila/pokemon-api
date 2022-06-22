import React, { useEffect, useState } from 'react';

const Pokemons = ({ url, setModal }) => {

    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPokemonDetails(data))
    }, [url])

    return (
        <>
            <div className='flex flex-col items-center overflow-hidden shadow-lg border-t-purple-200 border hover:shadow-2xl bg-purple-100'>
                <img src={pokemonDetails?.sprites?.versions?.['generation-v']?.['black-white'].animated?.front_default} alt="imagee" className='mx-auto justify-self-center h-16 my-4' />
                <p className='mt-5 capitalize font-bold text-xl'>{pokemonDetails.forms?.[0]?.name}</p>
                <label htmlFor="details-modal" className='border-2 bg-purple-400 w-full mt-5 text-white py-1 font-semibold cursor-pointer text-center hover:bg-purple-700 hover:duration-500 tracking-wider' onClick={() => setModal(pokemonDetails)}>Details</label>
            </div>
        </>


    );
};

export default Pokemons;