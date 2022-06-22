import React from 'react';

const DetailsModal = ({ modal }) => {

    return (
        <div>
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card card-compact shadow-x px-4">
                        <div>
                            <h2 className="card-title text-2xl capitalize text-purple-500 border-b-2 border-b-purple-500 pb-4">{modal.forms?.[0]?.name}</h2>
                        </div>

                        <figure><img src={modal?.sprites?.other?.['official-artwork'].front_default} alt="poke" /></figure>
                        <div className="card-body">

                            <p className='text-left'> <b>Weight: </b>{modal?.weight} hectograms </p>
                            <p className='text-left'> <b>Height: </b>{modal?.height} decimetres </p>
                            <div className='text-left mt-2'>
                                <b>Types: </b>
                                <small className='bg-orange-500 px-4 text-base capitalize py-2 rounded-lg mx-4'>{modal?.types?.[0]?.type?.name}</small>
                                {
                                    modal?.types?.[1]?.type?.name &&
                                    <small className='bg-lime-300 px-4 text-base capitalize py-2 rounded-lg'>{modal?.types?.[1]?.type?.name} </small>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DetailsModal;