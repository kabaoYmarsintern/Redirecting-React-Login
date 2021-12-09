import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
// import {} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/Login"> Login </Link>
      </nav>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />​
      </Routes>
    </Router>
  );
}
