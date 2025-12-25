import { useState } from 'react'
import './App.css'



function App() {

  const [counter, setCounter] = useState(15)

 
  const addValue=()=>{
  if (counter>=20){
    alert("counter value cannot exceed 20")
    return
  }
    setCounter(counter+1)
    
  }

  const removeValue=()=>{
    if(counter<=0){
      alert("counter value cannot be negative")
      return
    }

    setCounter(counter-1)
  }


  return (
    <>
      <h1>Kp mewada</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add  value :{counter}</button>
      <br />

      <button onClick={removeValue}>Remove value: {counter}</button>

    </>
  )
}

export default App
