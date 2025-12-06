import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
const [length , setlength] = useState(8)
const [numberAllowed, setnumberallowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false)
const [password, setpassword] = useState("")
// ///UseRef hook
const passwordRef = useRef(null);
const passwordgenerator = useCallback(()=>{

  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+= "0123456789"
  if(charAllowed) str+= "!@#$%^&*()_+-={}[]:;<>,.?/|~`"

  for(let i=0 ; i<=length; i++){
    let char = Math.floor(Math.random()* str.length+1)
 pass += str.charAt(char)


  }
 setpassword(pass)

} , [length, numberAllowed, charAllowed, setpassword])
 
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 990);
  window.navigator.clipboard.writeText(password);
}, [password])

useEffect(()=> {
  passwordgenerator() 
}, [length, numberAllowed, charAllowed, passwordgenerator])
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
         ref={passwordRef}
         />
         <button
         onClick={copyPasswordToClipboard} className='outlne-none bg-blue-700 text-white px-3 py-0 shrink-0' > copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div flex items-center gap-x-1>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) =>{setlength(e.target.value)} }

          />
          <label htmlFor="">Length:{length} </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setnumberallowed((prev) => !prev);
          }}

          />
          <label htmlFor="numberInput"> Numbers</label>
        </div>
         <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={()=>{
            setCharAllowed((prev)=> !prev);
          }}

          />
          <label htmlFor="characterInput"> Characters</label>
         </div>
      </div>
     </div>
     
    </>
  )
}

export default App
