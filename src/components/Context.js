import { apiKey } from '../api/Config'
import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

export const imgContext = React.createContext()

function AppContext({ children }) {
    const [input, setInput] = useState('');
    const [post, setPost] = useState([]);
    
    
    useEffect(() => {
        const baseURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&format=json&nojsoncallback=1`;
        if (input !== '') {

            axios
                .get(baseURL)
                .then((response) => {
                    setPost(response.data.photos.photo);
                }
                )
        }
    }
        , [input]);
    return (
        <imgContext.Provider value = { {input, setInput ,post , setPost } }>
            { children }
        </imgContext.Provider>
    )
}

export default AppContext


