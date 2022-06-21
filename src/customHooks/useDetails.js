import { useEffect, useState } from 'react';

const useDetails = (url) => {
    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPokemonDetails(data);
        })
    },[])

    return [pokemonDetails, setPokemonDetails];
};

export default useDetails;