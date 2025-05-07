import { useState } from 'react'
import Home from './containers/home/home'
import "./main.css"
import Header from './containers/header/header'
import Footer from './containers/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home></Home>
    <Footer />
    </>
  )
}

export default App
