import { useEffect, useState } from 'react';

const useDetails = (url) => {
    const [pokemon, setPokemon] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPokemon(data);
            // setLoading(!loading);   
        })
    },[url])

    return [pokemon, setPokemon];
};

export default useDetails;