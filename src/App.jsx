import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutSection from './sections/AboutSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutSection />
    </>
  )
}

export default App
