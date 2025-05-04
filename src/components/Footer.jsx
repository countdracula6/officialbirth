export default function Footer() {
    return (
      <footer style={{
        borderTop: '1px solid #00ff00',
        padding: '20px 0',
        marginTop: '50px'
      }}>
        <div>
          <p>© {new Date().getFullYear()} BIRTHOFMACHINES</p>
          <div className="social-links">
            <a href="[Band's Instagram]">Instagram</a>
            <a href="[Band's Bandcamp]">Bandcamp</a>
          </div>
        </div>
      </footer>
    )
  }