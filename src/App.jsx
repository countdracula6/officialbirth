import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Music from './pages/Music'
import About from './pages/About'
import Shows from './pages/Shows'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      {/* Main Layout Structure - theme class can be added later */}
      <div className="dark-theme">
        <Header />
        
        <Routes>
          {/* Current Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />

          {/* Future Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 Page */}
          <Route path="*" element={<h2>404 - Machine Not Found</h2>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App