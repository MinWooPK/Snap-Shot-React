import { useEffect, useState } from 'react';
import axios from "axios";
import React from "react";
import { apiKey } from './api/config';
import './App.css'
// import buttom from './components/buttom';

export default function App() {

  const [input, setInput] = useState('');
  const [post, setPost] = useState([]);

  const baseURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&format=json&nojsoncallback=1`;

  useEffect(() => {
    a()
    function a() {

      axios
        .get(baseURL)
        .then((response) => {
          setPost(response.data.photos.photo);
          // console.log(response.data.photos.photo);

        });
    }
  }, [baseURL]);
// MIRARMELO
  const imagenes  = post.map(e => (<img src={`https://live.staticflickr.com/${e.server}/${e.id}_${e.secret}.jpg`} alt="img"></img>))

  function handleKeyPress(e) {
    let key = e.key;
    if (key === 'Enter') {
      // e.target.value 

      setInput(e.target.value);
      e.currentTarget.value = "";
    }
  }


  function HandleClick(e) {
    setInput(e.target.textContent)
    //  console.log(e.target.textContent)
  }

  return (
    <div className='mother-container'>
      <h1 className='h1'>Snap Shot</h1>
      <input placeholder='search...' className='container-imagen' onKeyDown={(e) => handleKeyPress(e)} />
      <div className='button-container'>
        <button onClick={HandleClick}>Mountain</button>
        <button onClick={HandleClick}>Beachs</button>
        <button onClick={HandleClick}>Birds</button>
        <button onClick={HandleClick}>Food</button>
      </div>
      <h2 className='h2'> {input} Picture</h2>
      <div className='imagenes'>
        { imagenes }
        {/* <img src={`https://live.staticflickr.com/${post.server}/${post.id}_${post.secret}.jpg`} alt="img"></img> */}
      </div>
    </div>
  );
}
