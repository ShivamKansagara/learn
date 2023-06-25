import logo from './logo.svg';
import './App.css';
import "./index.css"
import Shivam from "./Components/Shivam"
import React,{useState,useEffect } from "react";
function App() {
  const [Image, setImage] = useState([])
  const [term, setterm] = useState('')
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data=> {
      setImage(data.hits);
    })
    .catch(err => console.log(err));
  },[]);
  return (
    <>
    <br />
    <br />
    <br />
    <div className='flex justify-center m-2 p-2'>
    <div className=" mx-auto">
    <div className="grid grid-cols-3 gap-4">
      {Image.map(image => (
        <Shivam key = {image.id} image={image} />
      ))}
      </div>
    </div>
    </div>
    
    </>
  );
}

export default App;
