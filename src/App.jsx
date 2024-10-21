import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name,changeName]=useState("Ruturaj")
function handleForm(e){
  e.preventDefault();
}



function onshow(){
  alert(name)
}

  return (
    <div className="App" >
     <form action="" onSubmit={(e)=>handleForm(e)}>
      <input type="text" value={name} onChange={(e)=>changeName(e.target.value)} />
      <button onClick={onshow}>CLick Me!!!</button>
      <p>Hello {name}</p>
     </form>
    </div>
  )
}

export default App
