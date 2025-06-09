import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./Components/HomePage";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full  font-bold p-2 text-white z-50">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
