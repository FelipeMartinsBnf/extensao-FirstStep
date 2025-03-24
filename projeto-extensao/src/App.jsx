import { useState } from 'react'
import Home from './containers/home/home'
import "./main.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    </>
  )
}

export default App
