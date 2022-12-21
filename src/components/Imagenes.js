 export default function Imagenes({ post }) {
  let imagenes = post.map((e, id) => (
        <div key={id} className='imagen-indiv'>
            <img src={`https://live.staticflickr.com/${e.server}/${e.id}_${e.secret}.jpg`} alt="img"></img>
        </div>
    ))
    return(imagenes)
}


