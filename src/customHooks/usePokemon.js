import { useEffect, useState } from 'react';

const usePokemon = (url) => {
    const [pokemon, setPokemon] = useState([]);
    const [text, setText] = useState('');

    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {  
            setPokemon(data.results);  
        })
    },[text])
    
    return [pokemon, setPokemon, text, setText ];

};

export default usePokemon;