import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Header from './components/header'
import HeroSection from './components/heroSection'
import './css/index.css'

function App() {
  return (
    <>
    <Header />
    <div className='container'>
    <HeroSection></HeroSection>
    </div>
    </>
  )
}

export default App
