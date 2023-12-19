import React, { useState, useEffect } from "react";
import Search from "./Components/Search";
import Shivam from "./Components/Shivam";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");

  const searchtext = (text) => {
    setTerm(text);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cards", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ term }),
        });
        if (response.ok) {
          const data = await response.json(); // Await the response.json() method
          setImages(data.hits); // Assuming the response contains an array of "hits"
        } else {
          throw new Error("Failed to fetch images");
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (term) {
      fetchImages();
    }
  }, [term]);

  return (
    <>
      <br />
      <br />
      <Search searchText={searchtext} />
      <br />
      <div className="flex justify-center m-2 p-2">
        <div className="mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <Shivam key={image.id} image={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
