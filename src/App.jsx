import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [isNum, setNum]=useState(false)
  const [ischar, setChar]= useState(false)
  const [password, setpass]=useState("")
  const passwordRef=useRef("")

  const passwordGen= useCallback(()=>{
    let pass=""
    let s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNum) s+="1234567890"
    if(ischar) s+="!@#$%^&*()-_+={}[]"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()* s.length+1)
      pass +=s.charAt(char)


    }
    setpass(pass)
  },[length,isNum,ischar,setpass])

  const copyPass=useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])

  // useEffect(()=>{
  //   passwordGen()
  // },[length,isNum,ischar,passwordGen])

  return (
    <>
      <h1 className='text-4xl text-center text-white' >Password Generator</h1>

      <div className='w-full max-w-md-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>

        <h1 className='text-white text-center'>Password Generator</h1>

        <div className='className=" flex rounded-lg overflow-hidden mb-4"'>

        <input type="text" value={password} className= 'outline-none w-full py-1 px-3 rounded-lg mb-4' placeholder='password' readOnly ref={passwordRef} />

        <button className='mb-4 px-3 py-0.5 outline-none bg-blue-700 text-white mx-1 rounded-lg hover:bg-blue-600' 
        onClick={copyPass}>Copy </button>

       <button className='mb-4 px-4 py-0.5 outline-none bg-green-700 text-white mx-2 rounded-lg hover:bg-green-600' onClick={passwordGen}> Generate </button> 
      
      </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

            <input
            type='range'
            min={6}
            max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            /><label>Length: {length}</label>

          </div>
          <div className='flex itmems-center gap-x-1'>

            <input
            type="checkbox"
            defaultChecked={isNum}
            id="numberInput"
            onChange={()=>{
              setNum((prev)=>!prev);
            }}
           
            /><label htmlfor="numberInput">Numbers</label>
          </div>
          <div className='flex itmems-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={ischar}
            id="characterInput"
            onChange={()=>{
              setChar((prev)=>!prev)
            }}
           
            /><label htmlfor="CharacterInput">Special Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
