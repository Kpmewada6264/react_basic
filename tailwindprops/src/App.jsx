import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from '../components/card'

function App() {
  const [count, setCount] = useState(0)
 
  const myobj={
    username:"kpmewada",
    channel:"React"
  }
let newarr=[1,2,3,4,5]

  return (
    <>
     <h1 className='bg-green-400 text-white p-4 rounded-lg mb-10' >TailwindCss Test</h1>
     <Card  username="kpmewada" btnText="Click Me"/>
     <Card username="Krishna" btnText="visit Me"/>
    </>

  )
}

export default App
