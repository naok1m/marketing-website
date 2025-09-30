import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Header from './components/header'
import HeroSection from './components/heroSection'
import ProductsSection from './components/productsSection'
import Footer from './components/footer'
import './css/index.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className='container'>
          <HeroSection />
        </div>
        <ProductsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
