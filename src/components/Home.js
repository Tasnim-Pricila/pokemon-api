import React from 'react';
import usePokemon from '../customHooks/usePokemon';
import Loading from './Loading';
import Pokemons from './Pokemons';

const Home = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=200`;

    const [pokemon, setPokemon, text, setText, loading] = usePokemon(url);
    
    const handleSubmit = () => {
        const matched = pokemon.filter(p => p.name.toLowerCase().includes(text));
        setPokemon(matched);
    }
    const loadMore = () => {
        setPokemon(pokemon.slice(12))
    }
    
    return loading ? <Loading/> : (
        <>
            <div className='flex justify-between items-center md:px-20 px-4 py-2 md:flex-row flex-col'>
                <div>
                    <p className='text-4xl font-semibold'>Pokemon</p>
                </div>..
                <div className='flex justify-center mt-5 md:mt-0'>
                    <input type="text" name="search" placeholder='Search Here...' className='border-2 border-purple-500 rounded py-1 px-2 outline-none' onBlur={(e) => setText(e.target.value.toLowerCase())} />
                    <button type="btn" className='py-1 border-2 px-4 bg-purple-500 rounded' onClick={handleSubmit} > Search </button>
                </div>
            </div>
            <div className='grid md:grid-cols-4 gap-4 items-center md:px-20 px-4 mt-10'>

                {
                    pokemon.length > 0 ?
                        pokemon.slice(0,12).map((p, index) =>
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
            <button onClick={loadMore} type="btn" className='py-1 border-2 px-4 border-purple-500 rounded mx-auto block hover:bg-purple-500 hover:text-white hover:duration-500 mb-12 mt-5'> Load More </button>
        </>

    );
};

export default Home;