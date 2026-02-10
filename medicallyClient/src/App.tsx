import { useState } from "react"

interface props{
  items: string[];
  heading: string;
}
let hospitals = ["Belam", "Medicaid", "Zankli", "Nisa Premier", "Nizamiye"]

function Treatments({items, heading}: props){

  let [name, setName] = useState(1)
  return (
  <>
        
        
        <h1> Notification: Muhammad, {name},000$ received today</h1>
        <button onClick={() => setName(name+1)}> Pay</button>
        <h1>{heading}</h1>
        {items.length > 1 && items.map((item) => <li>{item}</li>)}
        {/* {hospitals.map((hospital) => )} */}
        

  </>
  )
}

function App() {
  return <> <Treatments  items={hospitals} heading="Clinics"/> 
  </>;
}
export default App;
