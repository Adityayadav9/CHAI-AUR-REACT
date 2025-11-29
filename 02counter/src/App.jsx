import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let  [counter, setCounter]=useState(15)

  // let counter = 5

  const addValue = ()=>{
    // console.log("value added" , Math.random());
    
    // counter = counter+1
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // use state jitne bhi update bhejega ui me unko batch me bhejta hai  isi wajah se multiple use of setcounter give only one increment 
    // aur agar hume har ek update ko alag alag reflect karana hai to hum callback function ka use kar sakte hai
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    

    // console.log("clicked", counter);
  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button 
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
