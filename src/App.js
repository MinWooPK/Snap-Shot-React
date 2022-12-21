import { useEffect, useState } from 'react';
import axios from "axios";
import React from "react";
import { apiKey } from './api/config';
import './App.css';
import Button from './components/Button.js';
import Imagenes from './components/Imagenes';
// const Context = React.createContext)

export default function App() {

  const [input, setInput] = useState('');
  const [post, setPost] = useState([]);

  const baseURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&format=json&nojsoncallback=1`;

  useEffect(() => {
    if (input !== '') {

      axios
        .get(baseURL)
        .then((response) => {
          setPost(response.data.photos.photo);
          // console.log(response.data.photos.photo);
        }
        )
        .catch(err => {
          ;
        });
    }
  }
    , [input, baseURL]);


  // MIRARMELO
  // const Imagenes = post.map((e, id) => (
  //   <div key={id} className='imagen-indiv'>
  //     <img src={`https://live.staticflickr.com/${e.server}/${e.id}_${e.secret}.jpg`} alt="img"></img>
  //   </div>
  // ))

  function handleKeyPress(e) {
    let key = e.key;
    if (key === 'Enter') {
      // e.target.value 

      setInput(e.target.value);
      e.currentTarget.value = "";
    }
  }


  return (
    <div className='mother-container'>
      <h1 className='h1'>Snap Shot</h1>
      <input placeholder='search...' className='container-imagen' onKeyDown={(e) => handleKeyPress(e)} />
      <Button setInput={setInput} />
      <h2 className='h2'> {input} Picture</h2>
      <div className='imagenes'>
        <Imagenes  post = {post} />
      </div>
    </div>

  );
}


