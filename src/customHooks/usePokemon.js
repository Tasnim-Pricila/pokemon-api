import { useEffect, useState } from 'react';

const usePokemon = (url) => {
    const [pokemon, setPokemon] = useState([]);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {  
            setPokemon(data.results); 
            setLoading(!loading);   
        })
    },[text])
    
    return [pokemon, setPokemon, text, setText, loading ];

};

export default usePokemon;