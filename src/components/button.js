

function Button( { setInput } ) {
       
       function HandleClick(e) {
              setInput(e.target.textContent)
              //  console.log(e.target.textContent)
            }
       return (
              <div className='button-container'>
              <button onClick={HandleClick}> Mountain </button>
              <button onClick={HandleClick}> Beachs </button>
              <button onClick={HandleClick}> Birds </button>
              <button onClick={HandleClick}> Food </button>
              </div>
       )
}

export default Button;