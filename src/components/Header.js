import React from 'react';
import usePokemon from '../customHooks/usePokemon';
import Pokemons from './Pokemons';

const Header = () => {

    const url = `https://pokeapi.co/api/v2/pokemon/?limit=200`;
    
    const [pokemon, setPokemon] = usePokemon(url);
    
    // console.log(pokemon.name);
    return (
        <>
            <div className='flex justify-between px-20 py-2 '>
                <div>
                    <p className='text-4xl'>Pokemon</p>
                </div>
                <div>
                    <form>
                        <input type="text" name="search" placeholder='Search Here...' className='border-2 border-purple-500 rounded py-1 px-2' />
                        <input type="submit" value="Search" className='py-1 border-2 px-4 bg-purple-500 rounded' />
                    </form>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 items-center px-20 mt-10'>
                {
                    pokemon.map((poke, index) =>
                        <Pokemons
                            key={poke.name} 
                            index={index}
                            poke = {poke}>
                        </Pokemons>)
                }
            </div>
        </>

    );
};

export default Header;