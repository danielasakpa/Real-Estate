import React from 'react'
import MainRouter from './MainRouter'
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <div className="2xl:max-w-screen-2xl mx-auto my-0">
      <BrowserRouter>
        <AnimatePresence>
          <MainRouter />
        </AnimatePresence>
      </BrowserRouter>
    </div>
  )
}

export default App