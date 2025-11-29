import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

 let  myObject = {
    username:"Adiya yadav",
    age:23
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400  text-black p-4 rounded-xl'>Tailwind test</h1>
      
    {/* <Card  channel="Adiya aur code"  otherObj ={newArr} />
    <Card /> */}
    <Card username="Aditya yadav" btnText="click me"/>
    <Card username="chai aur react" btnText="visit me"/>

    </>
  )
}

export default App
