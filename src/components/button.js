import React from 'react';



function Button({ texto, HandleClick }) {
       // function HandleClick(e) {
       //        return
       //        setInput(e.target.textContent);
       // }
       return (
              <button
                     onClick={HandleClick}>
                     {texto}
              </button>
       )
}

export default Button;