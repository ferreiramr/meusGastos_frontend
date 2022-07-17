import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TesteApi(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://api.adviceslip.com/advice")
        .then((response) => {
            setPosts(response.data.slip.advice);
        })
        .catch( () => {
            console.log("Não deu certo!");
        })
    }, []);

    return(
        <div>

        </div>
    )
}