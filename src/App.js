import React from "react";
import Log from "./components/login";
import Forgot from "./components/forgotpass";
import Verify from "./components/verifyOtp";
import ResetPass from "./components/resetPass";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Log />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/reset" element={<ResetPass />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
  );
}

export default App;
