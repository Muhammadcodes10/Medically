import Intro from "./components/loginpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import homePage from "./components/homePage";
import TicketScanner from "./components/homePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homePage" element={<TicketScanner/>} />
        <Route path="/" element={<Intro/>} />

      </Routes>
    </Router>
  );
}

export default App;
