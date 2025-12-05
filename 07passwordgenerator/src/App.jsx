import { useState, useCallback } from 'react'

import './App.css'

function App() {
const [length , setlength] = useState(8)
const [numberAllowed, setnumberallowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false)
const [password, setpassword] = useState("")
const passwordgenerator = useCallback(()=>{

  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+= "0123456789"
  if(charAllowed) str+= "!@#$%^&*()_+-={}[]:;<>,.?/|~`"

  for(let i=0 ; i<=array.length; i++){
    let char = Math.floor(Math.random()* str.length+1)
 pass = str.charAt(char)


  }
 setpassword(pass)

} , [length, numberAllowed, charAllowed, setpassword])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'> password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
         type="text"
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='password'
         readOnly
         />
         <button className='outlne-none bg-blue-700 text-white px-3 py-0 shrink-0' > copy</button>
      </div>
     </div>
     
    </>
  )
}

export default App
