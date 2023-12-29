import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome to the Budget Planner</h1>
        <p>Plan your budgets and have all the money that you would ever need</p>
      </div>
    </>
  )
}

export default App
