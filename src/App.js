
import React from 'react';
import "../src/style.css";
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';
// const printStateMent = async () => {
//   var images = [];
//   let res = await fetch('https://dog.ceo/api/breeds/list/all');
//   let data = await res.json();

//   let keys = Object.keys(data.message);

//   let fetchPromises = keys.map((name) => {
//     return fetch(`https://dog.ceo/api/breed/${name}/images/random`).then((res) => res.json());
//   });

//   let imageResults = await Promise.all(fetchPromises);
//   console.log(imageResults);

//   imageResults.forEach((result) => {
//     images.push(result.message);
//   });
//   return images;
// };
function App() {
  //   const [images, setImages] = useState([]);

  //   useEffect(() => {
  //     const fetchImages = async () => {
  //       const result = await printStateMent();
  //       setImages(result);
  //     };
  //     fetchImages();
  //   }, []);

  return (
    // <div className="App">
    //   {images.map((image) => {
    //     return (
    //         <img src={image} />
    //     );
    //   })}
    // </div>
    <>
      <div className='dashboard'>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
