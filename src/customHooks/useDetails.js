import { useEffect, useState } from 'react';

const useDetails = (url) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPokemon(data);
        })
    },[])

    return [pokemon, setPokemon];
};

export default useDetails;