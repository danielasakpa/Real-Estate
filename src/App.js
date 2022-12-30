import React from 'react'
import MainRouter from './MainRouter'
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <div className="max-w-2/3 mx-auto my-0">
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  )
}

export default App