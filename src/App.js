import { useEffect, useState } from 'react';
import axios from "axios";
import React from "react";
import { apiKey } from './api/config';
import './App.css'
import Button from './components/button'
// import Imagenes from'./components/image.js'
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
  const Imagenes = post.map((e, id) => (
    <div key={id} className='imagen-indiv'>
      <img src={`https://live.staticflickr.com/${e.server}/${e.id}_${e.secret}.jpg`} alt="img"></img>
    </div>
  ))

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
     console.log(e.target.textContent)
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
         <Button 
        texto = 'Gool'
        handleClick={HandleClick}
        /> 
{/* <Button handleClick={HandleClick}>Gool</Button>  */}
      </div>
      <h2 className='h2'> {input} Picture</h2>
      <div className='imagenes'>
        {Imagenes}
      </div>
    </div>        

  );
}
