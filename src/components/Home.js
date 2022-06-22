import React, { useState } from 'react';
import usePokemon from '../customHooks/usePokemon';
import DetailsModal from './DetailsModal';
import Pokemons from './Pokemons';
import styles from './Home.module.css';

const Home = () => {

    const url = `https://pokeapi.co/api/v2/pokemon/?limit=200`;
    const [pokemon, setPokemon, text, setText,] = usePokemon(url);
    const [modal, setModal] = useState(null);

    const handleSubmit = () => {
        const matched = pokemon.filter(p => p.name.toLowerCase().includes(text));
        setPokemon(matched);
    }

    const loadMore = () => {
        setPokemon(pokemon.slice(12));
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            <div className='flex justify-between items-center md:px-20 px-4 py-4 md:flex-row flex-col'>
                <div>
                    <p className={`text-4xl font-semibold ${styles.logo}`}>Pokemon</p>
                </div>
                <div className='flex justify-center mt-5 md:mt-0'>
                    <input type="text" name="search" placeholder='Search Here...' className='border-2 border-purple-500 rounded py-1 px-2 outline-none' onBlur={(e) => setText(e.target.value.toLowerCase())} />
                    <button type="btn" className='py-1 border-2 px-4 border-purple-500 rounded hover:bg-purple-500 hover:text-white hover:duration-500 ml-1' onClick={handleSubmit} > Search </button>
                </div>
            </div>
            <div className='grid md:grid-cols-4 gap-4 items-center md:px-20 px-4 mt-4'
            data-aos="flip-down" data-aos-offset="300"data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="80"  data-aos-once='true'>
                {
                    pokemon.length > 0 ?
                        pokemon.slice(0, 12).map((p, index) =>
                            <Pokemons
                                key={p.name}
                                index={index}
                                url={p.url}
                                setModal={setModal}
                            >
                            </Pokemons>)
                        :
                        <div className='text-red-600 font-semibold text-2xl text-center col-span-4'>
                            <p>Sorry, No Results Found </p>
                        </div>
                }
            </div>
            {
                pokemon.length > 0 &&
                <button onClick={loadMore} type="btn" className='py-1 border-2 px-12 font-semibold border-purple-500 rounded mx-auto block hover:bg-purple-500 hover:text-white hover:duration-500 mb-6 mt-10'> Next </button>
            }
            {
                modal &&
                <DetailsModal
                    modal={modal}
                    >
                </DetailsModal>
            }

        </>

    );
};

export default Home;