import { useEffect, useState } from 'react';

const usePokemon = (url) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPokemon(data.results);
        })
    },[])

    return [pokemon, setPokemon];

};

export default usePokemon;