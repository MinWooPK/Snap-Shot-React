import { useContext } from "react";
import { imgContext } from "./Context";

function Input() {

    const { setInput } = useContext(imgContext);
    function handleKeyPress(e) {
        let key = e.key;
        if (key === 'Enter') {

            setInput(e.target.value);
            e.currentTarget.value = "";
        }
    }
    return(
    <input placeholder='search...' className='container-imagen' onKeyDown={(e) => handleKeyPress(e)} />
    )
}
export default Input;