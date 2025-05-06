import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-glitch">
      <div className="header-container">
        {/* ... logo ... */}
        
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`cybernav ${menuOpen ? 'active' : ''}`}>
          {/* ... nav links ... */}
        </nav>
      </div>
    </header>
  )
}