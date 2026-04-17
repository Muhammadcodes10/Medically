import Compilation from "./components/clientCompilation";
import Register from "./components/Signup";
import GenerateTicket from "./components/ticketGeneration";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Compilation/>} />
        <Route path="/getTicket" element={<GenerateTicket/>} />
        <Route path="/signup" element={<Register/>} />
      </Routes>
    </Router>
    </>
  );
}
export default App;
