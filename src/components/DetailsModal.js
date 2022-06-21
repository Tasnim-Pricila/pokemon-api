import React from 'react';
import useDetails from '../customHooks/useDetails';

const DetailsModal = ({ data }) => {

    const [pokemon] = useDetails(data);
    console.log(data);

    return (
        <div>
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                <label for="details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card card-compact shadow-x">
                        <figure><img src={pokemon?.sprites?.other?.['official-artwork'].front_default} alt="poke" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl capitalize text-purple-500 pb-5">{pokemon?.forms?.[0]?.name}</h2>
                            <p className='text-left'> <b>Weight: </b>{pokemon?.weight} hectograms </p>
                            <p className='text-left'> <b>Height: </b>{pokemon?.height} decimetres </p>
                            <p className='text-left'> <b>Types: </b>{pokemon?.types?.[0]?.type?.name}, {pokemon?.types?.[1]?.type?.name}  </p>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default DetailsModal;