import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Home from "./Home";

export default function App() {
  return (
    <Router className="title">
      <nav>
        <Link to="/Home"> Home </Link>
      </nav>
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />​
        </Routes>
      </div>
    </Router>
  );
}
