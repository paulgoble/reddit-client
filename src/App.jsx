import React from 'react'
import SelectForm from './components/SelectForm'
import PostListWrapper from './components/PostListWrapper'
import './App.css'

const formData = ['r/javascript', 'r/node', 'r/programming', 'r/reactjs', 'r/webdev']

function App() {
  const [userInput, setUserInput] = React.useState(null)
  
  return (
    <div id="app">
      <header id="header">
        <img height="80px" width="80px"
            src="/reddit-logo-adjusted.svg"
            alt="reddit logo"
            />
        <SelectForm onSelect={setUserInput} formData={formData} />
      </header>
      {userInput ? <PostListWrapper userInput={userInput}/> : null}
    </div>
  )
}

export default App