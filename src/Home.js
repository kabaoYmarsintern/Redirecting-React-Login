import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/Login");
        }}
      >
        Log in
      </button>
    </div>
  );
}
export default Home;
