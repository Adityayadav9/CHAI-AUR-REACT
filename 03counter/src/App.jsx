import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

function App(){
  // let counter = 5;
  let [counter, setcounter] = useState(15);
   
  const addValue = ()=> {
    console.log("value before add", counter);
    counter = counter + 1;
    setcounter(counter);
    // console.log("value after add", counter);
  }
  // const removeValue = ()=>{
  //   console.log("value before remove", counter);
  //   counter = counter-1;
  //   console.log("valuye after remove", counter);

  // }
  const removeValue =()=>{
    console.log("value before removed", counter);
    counter = counter-1;
    setcounter(counter);
  }


    return(
        <>
        <h1>chai aur code </h1>
        <h2>counter value</h2>
        <button
        onClick={addValue}
        >Add value {counter}</button>
        <br/>
        <br />
        <button
      onClick={removeValue}
        >remove Value{counter} </button>
        <p>footer: {counter}</p>
        </>
    )
}
export default App