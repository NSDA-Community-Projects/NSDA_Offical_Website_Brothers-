import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutSection from './sections/AboutSection'
import BuiltSection from './sections/BuiltSections'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutSection />
      <BuiltSection />
    </>
  )
}

export default App
