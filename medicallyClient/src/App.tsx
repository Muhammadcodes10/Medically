import Compilation from "./components/clientCompilation";
import Register from "./components/signup";
import CheckEmail from "./components/checkEmail";
import Login from "./components/login";
import BasePage from "./components/UI/base";
import GenerateTicket from "./components/ticketGeneration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Compilation />} />
          <Route path="/getTicket" element={<GenerateTicket fullname="" />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/checkEmail" element={<CheckEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/base" element={<BasePage/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
