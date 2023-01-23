import React from 'react'
import SelectForm from './components/SelectForm'
import { Outlet } from 'react-router-dom'
import './App.css'

const formData = ['r/javascript', 'r/node', 'r/programming', 'r/reactjs', 'r/webdev']

const App = () => (
  <div id="app">
    <header id="header">
      <img height="90px" width="90px"
          src="/reddit-logo-adjusted.svg"
          alt="reddit logo"
      />
      <SelectForm formData={formData} />
    </header>
    <Outlet />
  </div>
)

export default App