import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Pages } from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route 
          path='/'
          element={<Pages.Main />}
        />
        <Route 
          path='/blocks/'
          element={<Pages.Blocks />}
        />
        <Route 
          path='/floor/'
          element={<Pages.Floors />}
        />
        <Route 
          path='/apartments/'
          element={<Pages.Apartments />}
        />
        <Route 
          path='/apartment/'
          element={<Pages.Apartment />}
        />
      </Routes>
    </div>
  )
}

export default App