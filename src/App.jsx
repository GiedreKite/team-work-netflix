import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Questions } from './components/question/Questions'
import { LoginSection } from './components/loginSection/LoginSection'
import {ReasonsToJoin} from './components/reason/ReasonToJoin'
import Footer from './components/footer/Footer.jsx'
import SectionTwoTrend from './components/sectionTwo/SectionTwoTrend.jsx'
import SectionTwoCard from './components/sectionTwo/SectionTwoCard.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
     
      <LoginSection />
      <SectionTwoTrend />
      <SectionTwoCard />
      <ReasonsToJoin />
      <Questions />
      <Footer />
    </>
  )
}

export default App
