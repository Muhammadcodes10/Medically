import Intro from "./components/loginpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketScanner from "./components/homePage";
import GetStarted from "./components/signUp";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homePge" element={<TicketScanner/>} />
        <Route path="/" element={<Intro/>} />
        <Route path="/getStarted" element={<GetStarted/>} />
      </Routes>
    </Router>
  );
}

export default App;
