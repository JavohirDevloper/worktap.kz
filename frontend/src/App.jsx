import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Birja from "./component/Birja/Birja";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/birja" element={<Birja />} />
    </Routes>
  );
}

export default App;
