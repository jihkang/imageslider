import './App.css';
import { useState, useEffect } from "react"
function Image(images) {
  const [curIndex, setCurIndex] = useState(0);
  const onClick = (e) => {
    const { name, key } = e.target;
    if (name === "left-button") {
      curIndex !== 0 ? setCurIndex((index) => index - 1) : setCurIndex(images.length - 1);
    } else if (name === "right-button") {
      curIndex !== images.length - 1 ? setCurIndex((index) => index + 1) : setCurIndex(0);
    }
  }

  return (
    <ul>
      <button name="left-button" onClick={onClick}>left</button>
      {
        images.map((image, i) => {
          if (i === curIndex)
            return (<li key={i} onClick={onClick}> <img key={`img-${i}`} src={image} width="250px"></img></li>)
        })
      }
      <button name="right-button" onClick={onClick}>right</button>
    </ul>
  );
}

function App() {
  const [imageList, setImageList] = useState([]);
  useEffect(
    () => {
      document.getElementById("imageInput").value = "";
    }, [imageList]
  );
  const onChange = (e) => {
    setImageList(
      [
        ...imageList,
        URL.createObjectURL(e.target.files[0])
      ]
    );
  }
  return (
    <div className="imageContainer">
      {imageList && Image(imageList)}
      <input id="imageInput" type="file" onChange={onChange} accept="image/*" />
    </div>
  );
}

export default App;
