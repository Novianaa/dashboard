import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          {/* <Route />
          <Route /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App