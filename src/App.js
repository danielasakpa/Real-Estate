import React from 'react'
import MainRouter from './MainRouter'
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <div className="max-w-2/3 mx-auto my-0">
      <BrowserRouter>
        <AnimatePresence>
          <MainRouter />
        </AnimatePresence>
      </BrowserRouter>
    </div>
  )
}

export default App