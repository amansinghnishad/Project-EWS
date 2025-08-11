import { useState } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
export default App;
