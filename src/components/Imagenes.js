import { useContext } from "react";
import { imgContext } from "./Context";

 

 
 export default function Imagenes() {
const { post } =  useContext( imgContext );

  let imagenes = post.map((e, id) => (
        <div key={id} className='imagen-indiv'>
            <img src={`https://live.staticflickr.com/${e.server}/${e.id}_${e.secret}.jpg`} alt="img"></img>
        </div>
    ))
    return(imagenes)
}


