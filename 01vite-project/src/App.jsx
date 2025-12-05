import { useState } from "react";
import "./index.css"
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";




function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState("olive")




  return (
  
     
     <div className="w-full  h-screen duration-200 "
     style={{backgroundColor: color}}
     ></div>
    
  )
}

export default App
