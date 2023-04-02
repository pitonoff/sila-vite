import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import './styles.css';
import './styles.module.css';
import MentalSupport from "./global/MentalSupport";
import PsychoSupport from "./pages/PsychoSupport";
import AboutPage from "./pages/AboutPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/psycho-support" element={<PsychoSupport />} />
          <Route path="/about" element={<AboutPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
