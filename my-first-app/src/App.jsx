import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="card">
      is Active : {isActive ? 'Yes!' : 'No!!'}
      <button onClick={() => setIsActive(!isActive)}>Toggle Active</button>
      </div>
    </>
  )
}

export default App
