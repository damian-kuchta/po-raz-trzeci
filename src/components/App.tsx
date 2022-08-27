
import React from "react";
import Navbar from "./Navbar/Navbar";
import { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
function App() {
const auth = useAuth()
console.log(auth)
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
