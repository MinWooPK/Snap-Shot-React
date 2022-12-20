

// const [input, setInput] = useState('')
// function inputValue(e) {
//     const valueInput = e.target.value
//     setInput(valueInput)
//     // console.log(valueInput)
// }
// const baseURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1207d31d9e289e9d675e5231cb07898f&tags=${input}&format=json&nojsoncallback=1`;

// const [post, setPost] = useState([]);

// useEffect(() => {
//     // a()
//     async function apiClient() {

//         await axios
//             .get(baseURL)
//             .then((response) => {
//                 setPost(response.data.photos.photo[0]);
//                 console.log(response.data.photos.photo[0]);
//             });
//     }
// }, [baseURL]);

// return (
//     <div>
//         <h1>Snap Shot</h1>
//         <input onChange={inputValue}></input>
//         <img src={`https://live.staticflickr.com/${post.server}/${post.id}_${post.secret}.jpg`} alt="img"></img>
//     </div>
// );

// export default apiClient