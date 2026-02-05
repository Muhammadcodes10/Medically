import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function Greeting(props: { name: string }) {
  return <h2>Hello {props.name}</h2>
}


const city: string = "Istanbul"

function Location(){
  return <h2> The city is {city}</h2>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>At Medically, we believe healthcare comes first. </h2>
       <Greeting name = "Muhammad"/>
       <Location/>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Muhammad made ${count},000 today. 
        </button>

       
      </div>
  
    </>
  )
}

export default App
