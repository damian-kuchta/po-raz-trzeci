
import React from "react";
import Navbar from "./Navbar/Navbar";

import { useAuth } from "../contexts/AuthContext";

function App() {
const auth = useAuth()

  return (
    <>
      <Navbar />
      <h1>HEJ</h1>
    </>
  );
}

export default App;
