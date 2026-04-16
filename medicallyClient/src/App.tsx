import Compilation from "./components/clientCompilation";
import GenerateTicket from "./components/ticketGeneration";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Compilation/>} />
        <Route path="/getTicket" element={<GenerateTicket/>} />
      </Routes>
    </Router>
    </>
  );
}
export default App;
