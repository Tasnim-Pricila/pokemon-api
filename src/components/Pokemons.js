import React, { useState } from 'react';
import DetailsModal from './DetailsModal';

const Pokemons = ({ poke, index }) => {

    const { name, url } = poke;
    const id = index + 1;
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;

    const [data, setData] = useState('');

    return (
        <>
            <div className='flex flex-col items-center overflow-hidden shadow-2xl border-t-purple-200 border'>
                <img src={img} alt="" className='mx-auto justify-self-center h-16 my-4' />
                <p className='mt-5 capitalize font-bold text-xl'>{name}</p>
                <label htmlFor="details-modal" className='border-2 bg-purple-400 w-full mt-5 text-white py-1 font-semibold cursor-pointer' onClick={() => setData(url)}>Details</label>

                {
                    data &&
                    <DetailsModal
                        data={data}>
                    </DetailsModal>
                }

            </div>

        </>


    );
};

export default Pokemons;