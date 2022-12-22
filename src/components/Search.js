import { useContext } from "react";
import { imgContext } from "./Context";



function Search() { 

    const { input } = useContext(imgContext);

    return (
        <h2 className='h2'> { input  === '' ? 'Loading' : `${input}` } Picture</h2>
    )
}
export default Search