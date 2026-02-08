function Treatments(){

  let hospitals = ["Belam", "Medicaid", "Zankli", "Nisa Premier", "Nizamiye"]

if (hospitals.includes("Belam")){
  return (
    <h1> You might get your treatment at my Father's clinic</h1>
  )
}

  return (
  <>
        <div id = "hobbies" className="hidden">
            <h2> Are you a girl who lives in sokoto and is interested in Basketball? or Violin?  </h2>
            <p> If yes, let's get in touch - Husna</p>
          <button id ="yesButton" >Yes</button>
        </div>
        
        {hospitals.map((hospital) => (<li>{hospital}</li>))}

  </>
  )
}

function App() {
  return <> <Treatments/> 
  </>;
}
export default App;
