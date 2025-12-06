import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
 const [charAllowed, setcharAllowed] = useState(false);
 const [password, setpassword] = useState("");  

  

  return (
    <>
 <h1 className="min-h-screen flex justify-center bg-slate-900 text-4xl font-bold text-emerald-400">
      
       password generator
      
    </h1>
      
    </>
  )
} 

export default App
