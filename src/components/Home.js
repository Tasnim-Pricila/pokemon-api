import React from 'react';
import usePokemon from '../customHooks/usePokemon';
import Pokemons from './Pokemons';

const Home = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=200`;

    const [pokemon, setPokemon, text, setText] = usePokemon(url);
    
    const handleSubmit = () => {
        const matched = pokemon.filter(p => p.name.toLowerCase().includes(text));
        setPokemon(matched);
    }
    

    return (
        <>
            <div className='flex justify-between px-20 py-2 '>
                <div>
                    <p className='text-4xl'>Pokemon</p>
                </div>
                <div>
                    <input type="text" name="search" placeholder='Search Here...' className='border-2 border-purple-500 rounded py-1 px-2 outline-none' onBlur={(e) => setText(e.target.value.toLowerCase())} />
                    <button type="btn" className='py-1 border-2 px-4 bg-purple-500 rounded' onClick={handleSubmit} > Search </button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 items-center px-20 mt-10'>

                {
                    pokemon.length > 0 ?
                        pokemon.slice(0, 20).map((p, index) =>
                            <Pokemons
                                key={p.name}
                                index={index}
                                poke={p}>
                            </Pokemons>)
                        :
                        <div className='text-red-600 font-semibold text-2xl text-center col-span-4'>
                            <p>Sorry, No Results Found </p>
                        </div>

                }
            </div>
            {/* <button type="btn" className='py-1 border-2 px-4 bg-purple-500 rounded'> Read More </button> */}
        </>

    );
};

export default Home;