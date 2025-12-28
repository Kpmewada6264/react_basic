import { useState,useCallback,useEffect, use} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberallowed] = useState(false)
  const [charallowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberallowed){
      str+="0123456789"
    if(charallowed){
      str+="!@#$%^&*()_+"
    }
    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      
    }
    setPassword(pass)
  }}
  ,[length,numberallowed,charallowed,setPassword])
  useEffect(()=>{passwordGenerator()},[length,numberallowed,charallowed,passwordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 bg-gray-800 text-black mt-6'>
    <h1 className='text-white text-center my-4'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" className='outline-none w-full py-1 px-3 bg-white' value={password} placeholder='Password' readOnly />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
     </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input type="range" min={8} max={20} value={length} className='cursor-pointer'onChange={(e)=>{setLength(e.target.value)}} />
          <label className='text-white'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberallowed} id="number" onChange={()=>{setNumberallowed((pre)=>!pre);}} />
          <label className='text-white' htmlFor="number">Numbers</label>
        </div>
         <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charallowed} id="char" onChange={()=>{setCharallowed((pre)=>!pre);}} />
          <label className='text-white' htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}
export default App
